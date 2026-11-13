
const STORAGE_KEY = "studyspace_classes";

const defaultClasses = [
  { id: 1, name: "Mathematics", topics: [] },
  { id: 2, name: "English", topics: [] },
  { id: 3, name: "Biology", topics: [] },
  { id: 4, name: "Chemistry", topics: [] },
  { id: 5, name: "Physics", topics: [] },
  { id: 6, name: "History", topics: [] },
  { id: 7, name: "Class 7", topics: [] }
];

function loadClasses() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.every(c => c && c.id != null && typeof c.name === "string" && Array.isArray(c.topics))) return parsed;
    }
  } catch (error) {
    console.error("Could not load saved classes:", error);
  }

  return defaultClasses;
}

let classes = loadClasses();
// Convert the original topic names without losing existing classes or topics.
const uid = () => globalThis.crypto?.randomUUID?.() || `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
classes.forEach(c => { c.topics = c.topics.map(t => typeof t === "string" ? {id: uid(), name: t, source: "", notes: "", cards: []} : {...t, cards: Array.isArray(t.cards) ? t.cards : []}); });
let selectedClassId = null;

const classGrid = document.getElementById("classGrid");
const topicList = document.getElementById("topicList");
const topicSection = document.getElementById("topicSection");

function save() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(classes)
    );
    document.getElementById("saveStatus").textContent = "Saved on this browser only.";
  } catch (error) {
    document.getElementById("saveStatus").textContent = "Changes could not be saved. Keep this page open and copy your notes.";
    alert("Your browser could not save the changes.");
    console.error(error);
  }
}

function createButton(label, className, action) {
  const button = document.createElement("button");
  button.textContent = label;
  button.className = className;
  button.addEventListener("click", action);
  return button;
}

function renderClasses() {
  classGrid.replaceChildren();

  document.getElementById("classCount").textContent =
    classes.length;

  document.getElementById("topicCount").textContent =
    classes.reduce(
      (total, item) => total + item.topics.length,
      0
    );

  renderClassOptions();
  classes.forEach((item) => {
    const card = document.createElement("div");
    card.className = "class-card";

    const icon = document.createElement("div");
    icon.className = "class-icon";
    icon.textContent = "📚";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent =
      `${item.topics.length} topics`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    actions.append(
      createButton("Open", "open-btn", () => {
        selectedClassId = item.id;
        renderTopics();
        topicSection.scrollIntoView({
          behavior: "smooth"
        });
      }),

      createButton("✎", "", () => {
        const name = prompt("Rename class:", item.name);

        if (!name || !name.trim()) return;

        item.name = name.trim();
        save();
        renderClasses();
        renderTopics();
        renderTasks();
      }),

      createButton("×", "", () => {
        if (!confirm(`Delete "${item.name}"?`)) return;

        classes = classes.filter(
          (entry) => entry.id !== item.id
        );

        if (selectedClassId === item.id) {
          selectedClassId = null;
        }

        save();
        renderClasses();
        renderTopics();
        renderTasks();
      })
    );

    card.append(icon, title, description, actions);
    classGrid.append(card);
  });
}

function renderTopics() {
  const current = classes.find(
    (item) => item.id === selectedClassId
  );

  if (!current) {
    topicSection.classList.add("hidden");
    return;
  }

  topicSection.classList.remove("hidden");

  document.getElementById(
    "selectedClassTitle"
  ).textContent = `${current.name} — Topics`;

  topicList.replaceChildren();

  if (current.topics.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-message";
    empty.textContent =
      "No topics yet. Click Add Topic to get started.";
    topicList.append(empty);
    return;
  }

  current.topics.forEach((topic, index) => {
    const row = document.createElement("div");
    row.className = "topic-editor panel";

    const name = document.createElement("span");
    name.textContent = `📖 ${topic.name}`;

    const remove = createButton("Delete", "", () => {
      if (!confirm(`Delete topic "${topic.name}" and its notes and flashcards?`)) return;

      current.topics.splice(index, 1);
      save();
      renderClasses();
      renderTopics();
    });

    const head = document.createElement("div"); head.className = "section-heading"; head.append(name, remove);
    const source = document.createElement("input"); source.value = topic.source || ""; source.placeholder = "e.g. Micro26_04_Technology.pdf, slides 5–12";
    const sourceLabel = document.createElement("label"); sourceLabel.textContent = "PowerPoint / source and slides"; sourceLabel.append(source);
    source.addEventListener("input", () => { topic.source = source.value; save(); });
    const notes = document.createElement("textarea"); notes.rows = 9; notes.value = topic.notes || ""; notes.placeholder = "Paste text from your slides or write your own notes here. These notes use only what you enter.";
    const notesLabel = document.createElement("label"); notesLabel.textContent = "Your notes · saved as you type"; notesLabel.append(notes);
    notes.addEventListener("input", () => { topic.notes = notes.value; save(); });
    const details = document.createElement("details"); const summary = document.createElement("summary"); summary.textContent = `Flashcards (${topic.cards.length})`; details.append(summary);
    const deck = document.createElement("div"); deck.className = "deck";
    let position = 0, revealed = false;
    function showCard() {
      deck.replaceChildren();
      if (!topic.cards.length) { const empty = document.createElement("p"); empty.textContent = "Add a question and answer from your study material below."; deck.append(empty); return; }
      position = Math.min(position, topic.cards.length - 1);
      const card = topic.cards[position];
      const counter = document.createElement("p"); counter.textContent = `Card ${position + 1} of ${topic.cards.length} · ${revealed ? "Answer" : "Question"}`;
      const face = document.createElement("p"); face.className = "flashcard"; face.textContent = revealed ? card.answer : card.question;
      const controls = document.createElement("div"); controls.className = "card-actions";
      controls.append(createButton("Previous", "", () => { position = (position - 1 + topic.cards.length) % topic.cards.length; revealed = false; showCard(); }), createButton(revealed ? "Show question" : "Show answer", "", () => { revealed = !revealed; showCard(); }), createButton("Next", "", () => { position = (position + 1) % topic.cards.length; revealed = false; showCard(); }), createButton("Delete card", "", () => { if (!confirm("Delete this flashcard?")) return; topic.cards.splice(position, 1); revealed = false; save(); summary.textContent = `Flashcards (${topic.cards.length})`; showCard(); }));
      deck.append(counter, face, controls);
    }
    const form = document.createElement("form"); form.className = "form-grid";
    const question = document.createElement("textarea"), answer = document.createElement("textarea");
    const qLabel = document.createElement("label"), aLabel = document.createElement("label"); qLabel.textContent = "Question"; aLabel.textContent = "Answer from your material";
    question.required = answer.required = true; question.rows = answer.rows = 3; qLabel.append(question); aLabel.append(answer);
    const add = document.createElement("button"); add.className = "primary-btn"; add.textContent = "Add flashcard"; form.append(qLabel, aLabel, add);
    form.addEventListener("submit", e => { e.preventDefault(); if (!question.value.trim() || !answer.value.trim()) return; topic.cards.push({question: question.value.trim(), answer: answer.value.trim()}); position = topic.cards.length - 1; revealed = false; save(); form.reset(); summary.textContent = `Flashcards (${topic.cards.length})`; showCard(); });
    showCard(); details.append(deck, form); row.append(head, sourceLabel, notesLabel, details);
    topicList.append(row);
  });
}

document.getElementById("addClassBtn")
  .addEventListener("click", () => {
    const name = prompt("Enter your class name:");

    if (!name || !name.trim()) return;

    classes.push({
      id: uid(),
      name: name.trim(),
      topics: []
    });

    save();
    renderClasses();
  });

document.getElementById("addTopicBtn")
  .addEventListener("click", () => {
    const current = classes.find(
      (item) => item.id === selectedClassId
    );

    if (!current) return;

    const topic = prompt("Enter your topic name:");

    if (!topic || !topic.trim()) return;

    current.topics.push({id: uid(), name: topic.trim(), source: "", notes: "", cards: []});

    save();
    renderClasses();
    renderTopics();
  });

renderClasses();
renderTopics();

// Planner data stays separate so the original class storage key still works.
function loadTasks() {
  try { const saved = JSON.parse(localStorage.getItem("studyspace_tasks") || "[]"); return Array.isArray(saved) ? saved.filter(t => t && typeof t.name === "string" && /^\d{4}-\d{2}-\d{2}$/.test(t.date)) : []; }
  catch { return []; }
}
function renderClassOptions() {
  const select = document.getElementById("taskClass"), value = select.value;
  select.replaceChildren(new Option("General study", ""));
  classes.forEach(c => select.add(new Option(c.name, String(c.id)))); select.value = value;
  if (select.selectedIndex < 0) select.value = "";
}
function saveTasks() {
  try { localStorage.setItem("studyspace_tasks", JSON.stringify(tasks)); document.getElementById("saveStatus").textContent = "Saved on this browser only."; }
  catch { document.getElementById("saveStatus").textContent = "Could not save planner changes. Browser storage may be full or blocked."; }
}
function renderTasks() {
  const list = document.getElementById("taskList"); list.replaceChildren();
  document.getElementById("taskSummary").textContent = tasks.length ? `${tasks.filter(t => t.done).length} of ${tasks.length} tasks completed` : "No study tasks yet. Plan your next session above.";
  const today = new Date(); const localDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
  [...tasks].sort((a,b) => Number(a.done)-Number(b.done) || a.date.localeCompare(b.date)).forEach(task => {
    const row = document.createElement("div"); row.className = "topic-item";
    const label = document.createElement("label"); label.className = "task-label";
    const check = document.createElement("input"); check.type = "checkbox"; check.checked = Boolean(task.done);
    const text = document.createElement("span"); text.textContent = task.name; if (task.done) text.className = "completed";
    check.addEventListener("change", () => { task.done = check.checked; saveTasks(); renderTasks(); }); label.append(check,text);
    const date = document.createElement("small");
    const course = classes.find(c => String(c.id) === task.classId);
    date.textContent = `${task.date} · ${course?.name || "General study"}${!task.done && task.date < localDate ? " · Overdue" : ""}`;
    row.append(label, date, createButton("Delete", "", () => { if (!confirm("Delete this study task?")) return; tasks = tasks.filter(t => t.id !== task.id); saveTasks(); renderTasks(); })); list.append(row);
  });
}
let tasks = loadTasks();
document.getElementById("taskForm").addEventListener("submit", e => {
  e.preventDefault(); const name = document.getElementById("taskName"); if (!name.value.trim()) return;
  tasks.push({id: uid(), name: name.value.trim(), classId: document.getElementById("taskClass").value, date: document.getElementById("taskDate").value, done: false}); saveTasks(); name.value = ""; renderTasks();
});
renderTasks();
