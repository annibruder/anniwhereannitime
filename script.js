"use strict";
// Shared course content: these modules are included for every visitor.
const MICRO_MODULES = [
  {
    "id": "introduction",
    "title": "Economics, GDP & models",
    "lecture": "01 · Introduction",
    "slides": "2–14",
    "intro": "Economics explains choices and interactions when people cannot have everything they want. GDP measures economic output, but cannot tell us everything about wellbeing.",
    "sections": [
      {
        "title": "Scarcity and decisions",
        "text": "Resources such as time, money and land are limited. Choosing one use means giving up another: this is a trade-off. Thinking at the margin means comparing the extra benefit and extra cost of a small change. Incentives alter the benefits or costs of actions and can change behaviour."
      },
      {
        "title": "Micro, macro and allocation",
        "text": "Microeconomics studies individual people, firms and their interactions, both inside and outside markets. Macroeconomics studies economy-wide outcomes. International economics studies trade across countries. An allocation mechanism is a set of rules for distributing resources, rights or duties. Markets coordinate independent participants through prices and exchange."
      },
      {
        "title": "What GDP measures",
        "text": "GDP is the market value of final goods and services produced within an economy during a period. Count a final good once rather than adding every intermediate input again. The value of flour is already included in the price of bread. GDP per capita divides GDP by population; it is an average, not each person’s actual income."
      },
      {
        "title": "Income is not wellbeing",
        "text": "Disposable income is income after subtracting taxes and adding government transfers. GDP per capita and disposable income are different concepts. An unchanged average can hide a much more unequal distribution. GDP also does not fully capture leisure, environmental quality or other aspects of wellbeing."
      },
      {
        "title": "How to use an economic model",
        "text": "Start with a question, simplify the setting and state assumptions. Specify people’s choices and how they affect one another, then derive an outcome. An equilibrium has no internal tendency to change. Change one assumption or parameter and trace its consequences. A model is useful because it isolates a mechanism, not because it reproduces every detail."
      }
    ],
    "terms": [
      {
        "term": "Scarcity",
        "definition": "Resources are limited relative to possible uses."
      },
      {
        "term": "Trade-off",
        "definition": "Getting more of one thing requires giving up something else."
      },
      {
        "term": "Marginal analysis",
        "definition": "Comparing the extra benefit and extra cost of a small change."
      },
      {
        "term": "Allocation mechanism",
        "definition": "Rules that distribute resources, rights or duties."
      },
      {
        "term": "GDP",
        "definition": "Market value of final goods and services produced in an economy in a period."
      },
      {
        "term": "GDP per capita",
        "definition": "GDP divided by the population."
      },
      {
        "term": "Disposable income",
        "definition": "Income minus taxes plus government transfers."
      },
      {
        "term": "Equilibrium",
        "definition": "A state with no tendency to change unless relevant conditions change."
      }
    ],
    "cards": [
      {
        "question": "What makes a question microeconomic?",
        "answer": "It concerns the choices or interactions of individual people or firms."
      },
      {
        "question": "Why exclude intermediate goods from a separate GDP count?",
        "answer": "Their value is already embodied in final output; adding them again would double count."
      },
      {
        "question": "How do you calculate GDP per capita?",
        "answer": "Divide GDP by population."
      },
      {
        "question": "Does GDP per capita equal everyone’s income?",
        "answer": "No. It is an average and says nothing by itself about the distribution."
      },
      {
        "question": "How do taxes and transfers affect disposable income?",
        "answer": "Subtract taxes and add government transfers to income."
      },
      {
        "question": "Why simplify a model?",
        "answer": "To isolate the mechanism relevant to a specific question."
      },
      {
        "question": "What does “at the margin” mean?",
        "answer": "Consider the effect of a small additional amount, such as one more hour of work."
      }
    ],
    "questions": [
      {
        "type": "numeric",
        "prompt": "An economy has GDP of €96 million and 4,000 residents. Calculate GDP per capita.",
        "answer": 24000,
        "unit": "€ per person",
        "steps": [
          "GDP per capita = GDP / population.",
          "96,000,000 / 4,000 = €24,000 per person."
        ],
        "hint": "Divide total output value by the number of residents.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Monthly income is €2,600, taxes are €450 and government transfers are €150. Find disposable income.",
        "answer": 2300,
        "unit": "€",
        "steps": [
          "Disposable income = income − taxes + transfers.",
          "2,600 − 450 + 150 = €2,300."
        ],
        "hint": "Taxes reduce the amount available; transfers increase it.",
        "level": "Calculation"
      },
      {
        "type": "mc",
        "prompt": "A mill sells flour for €40 to a bakery. The bakery sells final bread for €100. With no other production, what is the final-output contribution to GDP?",
        "choices": [
          "€40",
          "€100",
          "€140",
          "€60"
        ],
        "correct": 1,
        "steps": [
          "Count final bread worth €100.",
          "The intermediate flour is already included. Equivalently, value added is €40 at the mill and €60 at the bakery."
        ],
        "hint": "Do not count the same input twice.",
        "level": "Foundation"
      },
      {
        "type": "mc",
        "prompt": "Which is primarily a microeconomic question?",
        "choices": [
          "What determines a country’s overall inflation rate?",
          "How does a firm choose its production technology?",
          "Why does national GDP fluctuate?",
          "What determines the national unemployment rate?"
        ],
        "correct": 1,
        "steps": [
          "The firm’s technology decision is an individual producer’s choice.",
          "The other options are economy-wide questions."
        ],
        "hint": "Look for an individual decision-maker.",
        "level": "Foundation"
      },
      {
        "type": "written",
        "prompt": "Two people each earn €5,000. In a second situation, one earns €9,000 and the other €1,000. Explain what the unchanged average hides.",
        "steps": [
          "Initial average = (5,000 + 5,000) / 2 = €5,000.",
          "New average = (9,000 + 1,000) / 2 = €5,000.",
          "Total and average income are unchanged, but inequality has increased. The average alone cannot establish how wellbeing changed."
        ],
        "hint": "Calculate both averages, then compare the distribution.",
        "level": "Explain"
      }
    ],
    "formula": "GDP per capita = GDP / population\nDisposable income = income − taxes + transfers",
    "note": ""
  },
  {
    "id": "growth",
    "title": "Growth, Malthus & institutions",
    "lecture": "02 · Explaining the Hockey Stick",
    "slides": "3–22",
    "intro": "The Malthusian model explains how higher productivity could increase population without permanently raising average living standards. Sustained productivity growth and institutions help explain the later upward turn.",
    "sections": [
      {
        "title": "Read the hockey stick carefully",
        "text": "The long flat section represents little sustained growth in average material living standards; the rising section represents sustained growth. Timing differs across countries. Higher nominal prices alone do not mean people can consume more goods: separate price changes from changes in real output."
      },
      {
        "title": "The Malthusian mechanism",
        "text": "In this model, food uses labour and a fixed amount of land. More workers can raise total food production while lowering output per worker. Higher output per worker improves living standards and encourages population growth. Population growth then pushes average output down. Below subsistence, population declines instead."
      },
      {
        "title": "Equilibrium and a one-off improvement",
        "text": "At subsistence income the population is stable. A one-off improvement shifts production upwards, initially raising average output. Population then rises, and diminishing average product lowers output per person again. The new equilibrium can have a larger population with average income back at subsistence. Continued productivity growth can outpace this pressure."
      },
      {
        "title": "Institutions and capitalism",
        "text": "Institutions are formal laws and informal rules governing interactions. Capitalism combines private property, markets and firms. Private property and markets can exist without the full capitalist system. Technology and specialisation are channels through which productivity may rise; the presence of these institutions is not an automatic guarantee of prosperity."
      },
      {
        "title": "Causality and varieties of capitalism",
        "text": "A natural experiment uses an external change to compare affected and unaffected groups. A counterfactual is what would have happened without that change. Institutional divergence between East and West Germany offers evidence about that setting, not proof that every capitalist economy always outperforms every alternative. Secure property, competition, legal systems and public services influence outcomes. Extractive institutions can undermine development."
      }
    ],
    "terms": [
      {
        "term": "Production function",
        "definition": "Relationship between quantities of inputs and output."
      },
      {
        "term": "Average product of labour",
        "definition": "Total output divided by the number of workers."
      },
      {
        "term": "Diminishing average product",
        "definition": "Output per worker falls as more labour is added under the model’s conditions."
      },
      {
        "term": "Subsistence income",
        "definition": "In the Malthusian model, the income level at which population is stable."
      },
      {
        "term": "Malthusian trap",
        "definition": "Productivity gains lead to population growth that erodes sustained gains in income per person."
      },
      {
        "term": "Institution",
        "definition": "A formal or informal rule shaping interactions."
      },
      {
        "term": "Capitalism",
        "definition": "An economic system combining private property, markets and firms."
      },
      {
        "term": "Natural experiment",
        "definition": "An external change used to study differences in outcomes."
      },
      {
        "term": "Counterfactual",
        "definition": "The outcome that would have occurred without the change being studied."
      }
    ],
    "cards": [
      {
        "question": "Can total output rise while average output falls?",
        "answer": "Yes. Output can grow more slowly than the number of workers."
      },
      {
        "question": "What is fixed in the basic Malthusian model?",
        "answer": "The quantity of land."
      },
      {
        "question": "What happens when income is above subsistence?",
        "answer": "Population grows, reducing average output per worker as labour increases on fixed land."
      },
      {
        "question": "What is the long-run effect of a one-off productivity gain in the basic model?",
        "answer": "A larger population, with average income returning to subsistence."
      },
      {
        "question": "Which three institutions define capitalism here?",
        "answer": "Private property, markets and firms."
      },
      {
        "question": "What is a counterfactual?",
        "answer": "What would have happened without the event or institutional change."
      },
      {
        "question": "Does a natural experiment establish every claim about all countries?",
        "answer": "No. Interpretation depends on the setting, comparison and assumptions."
      }
    ],
    "questions": [
      {
        "type": "numeric",
        "prompt": "A fixed-land economy produces 600,000 kg of grain with 1,000 farmers. Find average product of labour.",
        "answer": 600,
        "unit": "kg per farmer",
        "steps": [
          "Average product = total output / labour.",
          "600,000 / 1,000 = 600 kg per farmer."
        ],
        "hint": "Use output divided by workers.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Output rises from 600,000 kg with 1,000 farmers to 780,000 kg with 1,500 farmers. What is the new average product?",
        "answer": 520,
        "unit": "kg per farmer",
        "steps": [
          "780,000 / 1,500 = 520 kg per farmer.",
          "Total output rose by 30%, but labour rose by 50%, so output per farmer fell from 600 to 520."
        ],
        "hint": "Calculate the new ratio; do not confuse total and average output.",
        "level": "Calculation"
      },
      {
        "type": "mc",
        "prompt": "In the basic Malthusian model, a one-off technological improvement eventually produces:",
        "choices": [
          "Permanently higher income per person with no population change",
          "A larger population with income per person back at subsistence",
          "A permanent fall in population",
          "No initial change in income per person"
        ],
        "correct": 1,
        "steps": [
          "The improvement initially raises output per person.",
          "Population grows. With land fixed, average output falls until subsistence is restored."
        ],
        "hint": "Separate the immediate effect from the long-run adjustment.",
        "level": "Foundation"
      },
      {
        "type": "written",
        "prompt": "Explain why diminishing average output does not require total output to fall.",
        "steps": [
          "Average output is Y/N.",
          "If Y rises by a smaller percentage than N, Y/N falls.",
          "For example, 600,000/1,000 = 600 while 780,000/1,500 = 520; total output still increased."
        ],
        "hint": "Compare a total with a ratio.",
        "level": "Explain"
      },
      {
        "type": "written",
        "prompt": "Why should the East–West Germany comparison not be treated as proof that capitalism always causes rapid growth?",
        "steps": [
          "It compares a specific historical institutional divergence.",
          "A causal interpretation depends on the counterfactual and whether other relevant differences are accounted for.",
          "It supports a narrower conclusion about institutions and living standards in that setting; it does not justify an unconditional claim about every country."
        ],
        "hint": "Distinguish a finding in one setting from a universal claim.",
        "level": "Explain"
      }
    ],
    "formula": "Average product of labour (APL) = Y / N",
    "note": ""
  },
  {
    "id": "specialisation",
    "title": "Choice, opportunity cost & trade",
    "lecture": "03 · Specialization",
    "slides": "5–20",
    "intro": "Choose between alternatives using comparable net benefits. Trade can help both sides even when one person is more productive at making everything.",
    "sections": [
      {
        "title": "Compare net benefits consistently",
        "text": "A net payoff is benefit minus the costs of that option. For the lecture concert: enjoyment €55 minus ticket €25 gives €30. Babysitting gives payment €40 minus effort valued at €18, or €22. With mutually exclusive options and the same valuation basis, the concert gives the larger net payoff."
      },
      {
        "title": "Opportunity cost, economic cost and rent",
        "text": "The reservation option is the next-best available alternative. When non-monetary costs matter, compare net benefits: foregoing babysitting means foregoing its €22 net payoff, not adding its €40 payment while ignoring the avoided effort. Economic cost adds direct cost and opportunity cost; the concert’s economic cost is €25 + €22 = €47. Economic rent is the advantage over the reservation option: €55 − €47 = €8, equivalently €30 − €22."
      },
      {
        "title": "Absolute versus comparative advantage",
        "text": "Absolute advantage means producing more using the same resources. Comparative advantage means a lower opportunity cost. Greta can make 1,250 apples or 50 tonnes of wheat; Carlos can make 1,000 apples or 20 tonnes. Greta has absolute advantage in both goods, but Carlos has comparative advantage in apples because he gives up less wheat per apple."
      },
      {
        "title": "Calculate opportunity costs",
        "text": "Greta gives up 50/1,250 = 0.04 tonnes of wheat for one apple, and 1,250/50 = 25 apples for one tonne of wheat. Carlos gives up 20/1,000 = 0.02 tonnes per apple, and 1,000/20 = 50 apples per tonne. Greta should specialise in wheat, Carlos in apples. These calculations assume a constant trade-off along a linear production frontier."
      },
      {
        "title": "Specialisation and mutually beneficial trade",
        "text": "The slides compare self-sufficiency totals of 800 apples and 44 tonnes of wheat with complete specialisation totals of 1,000 apples and 50 tonnes. Trading 600 apples for 15 tonnes leaves Greta with 600 apples and 35 tonnes, and Carlos with 400 apples and 15 tonnes: each has more of both goods than before. The trade price is 40 apples per tonne, between their opportunity costs of 25 and 50. Prices strictly between those costs can create gains for both."
      }
    ],
    "terms": [
      {
        "term": "Net payoff",
        "definition": "An option’s benefits minus its own costs, valued consistently."
      },
      {
        "term": "Reservation option",
        "definition": "The next-best alternative available to a decision-maker."
      },
      {
        "term": "Opportunity cost",
        "definition": "The value of the next-best alternative forgone."
      },
      {
        "term": "Economic cost",
        "definition": "Direct costs plus opportunity costs, avoiding double counting."
      },
      {
        "term": "Economic rent",
        "definition": "The net advantage of a chosen option over the next-best alternative."
      },
      {
        "term": "Relative price",
        "definition": "The price of one option divided by the price of another."
      },
      {
        "term": "Absolute advantage",
        "definition": "Ability to produce more with the same resources."
      },
      {
        "term": "Comparative advantage",
        "definition": "Ability to produce a good at a lower opportunity cost."
      },
      {
        "term": "Specialisation",
        "definition": "Concentrating resources on a narrower set of products or tasks."
      }
    ],
    "cards": [
      {
        "question": "Which alternative determines opportunity cost?",
        "answer": "The next-best feasible alternative, not the sum of all alternatives."
      },
      {
        "question": "What is the concert’s net payoff in the lecture example?",
        "answer": "€55 − €25 = €30."
      },
      {
        "question": "What is the concert’s economic rent when babysitting yields €22 net?",
        "answer": "€30 − €22 = €8."
      },
      {
        "question": "Who has absolute advantage in both apples and wheat?",
        "answer": "Greta: 1,250 versus 1,000 apples and 50 versus 20 tonnes of wheat."
      },
      {
        "question": "Who has comparative advantage in apples?",
        "answer": "Carlos, because his opportunity cost is 0.02 rather than 0.04 tonnes of wheat per apple."
      },
      {
        "question": "Who has comparative advantage in wheat?",
        "answer": "Greta, because she sacrifices 25 rather than 50 apples per tonne."
      },
      {
        "question": "Can someone with absolute advantage in both goods still gain from trade?",
        "answer": "Yes. Comparative advantage and a suitable trade price create gains."
      },
      {
        "question": "Why is 40 apples per tonne a mutually beneficial price?",
        "answer": "It lies above Greta’s cost of 25 and below Carlos’s cost of 50 apples per tonne."
      }
    ],
    "questions": [
      {
        "type": "numeric",
        "prompt": "A concert is worth €70 to you and costs €28. Your next-best alternative pays €35 but requires effort you value at €10. Calculate the economic rent from choosing the concert.",
        "answer": 17,
        "unit": "€",
        "steps": [
          "Concert net payoff = 70 − 28 = €42.",
          "Alternative net payoff = 35 − 10 = €25.",
          "Economic rent = 42 − 25 = €17."
        ],
        "hint": "Compare the two net payoffs, including effort costs.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Greta can produce either 1,250 apples or 50 tonnes of wheat. What is the opportunity cost of one tonne of wheat?",
        "answer": 25,
        "unit": "apples per tonne",
        "steps": [
          "Producing 50 tonnes requires giving up 1,250 apples.",
          "1,250 / 50 = 25 apples per tonne."
        ],
        "hint": "Divide apples forgone by tonnes obtained.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Carlos can produce either 1,000 apples or 20 tonnes of wheat. What is the opportunity cost of one apple?",
        "answer": 0.02,
        "unit": "tonnes per apple",
        "steps": [
          "Producing 1,000 apples requires giving up 20 tonnes.",
          "20 / 1,000 = 0.02 tonnes per apple."
        ],
        "hint": "The unit requested is tonnes per apple.",
        "level": "Calculation"
      },
      {
        "type": "mc",
        "prompt": "Which exchange rate gives both Greta and Carlos strict gains per unit traded under the lecture assumptions?",
        "choices": [
          "20 apples per tonne",
          "25 apples per tonne",
          "40 apples per tonne",
          "60 apples per tonne"
        ],
        "correct": 2,
        "steps": [
          "Greta’s opportunity cost is 25 apples per tonne; Carlos’s is 50.",
          "A price strictly between 25 and 50 makes wheat exports attractive to Greta and wheat imports attractive to Carlos."
        ],
        "hint": "Find a number strictly between both opportunity costs.",
        "level": "Foundation"
      },
      {
        "type": "numeric",
        "prompt": "After specialisation, Greta has 50 tonnes of wheat and Carlos has 1,000 apples. Greta trades 15 tonnes for 600 apples. How many tonnes of wheat does Greta retain?",
        "answer": 35,
        "unit": "tonnes",
        "steps": [
          "Greta produces 50 tonnes and sells 15.",
          "50 − 15 = 35 tonnes, plus the 600 apples she buys."
        ],
        "hint": "Subtract wheat sold from wheat produced.",
        "level": "Calculation"
      },
      {
        "type": "written",
        "prompt": "Explain why adding every rejected option’s payoff would overstate opportunity cost.",
        "steps": [
          "The rejected options are mutually exclusive; you could not take them all.",
          "The relevant benchmark is the best option you would actually choose if the current choice were unavailable.",
          "Subtracting its payoff once measures the gain from your chosen action."
        ],
        "hint": "What could you actually do instead?",
        "level": "Explain"
      }
    ],
    "formula": "Net payoff = benefit − own costs\nEconomic rent = chosen net payoff − next-best net payoff\nOpportunity cost of 1 X = maximum Y / maximum X",
    "note": ""
  },
  {
    "id": "technology",
    "title": "Technology, production & costs",
    "lecture": "04 · Technology",
    "slides": "3–18",
    "intro": "Firms compare ways to produce the same output. Technology determines input requirements; input prices determine which feasible method is cheaper.",
    "sections": [
      {
        "title": "A function is a rule, not an instruction to add",
        "text": "Y = f(M, N, E) means output Y depends on machines M, workers N and energy E through a particular technology f. The notation alone gives no formula. You cannot assume that output is the sum or product of inputs unless the technology explicitly says so."
      },
      {
        "title": "Two different properties",
        "text": "Fixed proportions means inputs must be combined in a given recipe; adding more of a non-binding input does not increase output. Constant returns to scale means multiplying all inputs by k multiplies output by k. These are different claims: one concerns input proportions, the other proportional scaling. A fixed-proportions example is Y = 50 min(M/3, N, E/80)."
      },
      {
        "title": "Read production combinations",
        "text": "In the lecture’s technology A, (M,N,E) = (3,1,80) produces 50 litres; (6,2,160) produces 100. The listed proportional combinations are consistent with constant returns along that input recipe. To claim constant returns for every possible input bundle requires a technology assumption, not just a few observations."
      },
      {
        "title": "Isocost lines and their slope",
        "text": "With labour N on the horizontal axis and energy E on the vertical axis, total variable cost is C = wN + pE. Rearranging gives E = C/p − (w/p)N. An isocost line holds the cost level C and prices fixed. Moving right along it requires less energy. If both N and E increase while prices stay positive and fixed, total cost rises; that movement cannot remain on the same isocost line."
      },
      {
        "title": "Why firms switch technologies",
        "text": "Compare technologies at the same output and include all relevant costs. If wages rise relative to energy prices, a labour-saving, energy-intensive method can become cheaper. For fixed C and p, a higher w makes the isocost steeper and reduces its labour intercept. In the lecture’s historical account, high British wages and cheap coal encouraged labour-saving innovation. Profit equals revenue minus cost; cost savings at equal revenue raise profit."
      }
    ],
    "terms": [
      {
        "term": "Production technology",
        "definition": "A method that converts inputs into outputs."
      },
      {
        "term": "Factors of production",
        "definition": "Inputs such as labour, machinery, materials and energy."
      },
      {
        "term": "Fixed proportions",
        "definition": "A technology requiring inputs in a specified recipe."
      },
      {
        "term": "Constant returns to scale",
        "definition": "Scaling every input by k scales output by k."
      },
      {
        "term": "Isocost line",
        "definition": "Combinations of inputs with the same total cost at given input prices."
      },
      {
        "term": "Relative input price",
        "definition": "The price of one input divided by the price of another."
      },
      {
        "term": "Labour-saving technology",
        "definition": "A method using less labour for a given output, often using more of another input."
      },
      {
        "term": "Profit",
        "definition": "Revenue minus costs."
      }
    ],
    "cards": [
      {
        "question": "Does Y = f(M,N,E) mean M + N + E?",
        "answer": "No. f denotes a specified technological rule, which must be known."
      },
      {
        "question": "Can doubling only labour prove constant returns to scale?",
        "answer": "No. Returns to scale considers a proportional change in all inputs."
      },
      {
        "question": "What limits output in a fixed-proportions recipe?",
        "answer": "The input available in the smallest quantity relative to its required amount."
      },
      {
        "question": "What is the isocost slope with N horizontal and E vertical?",
        "answer": "−w/p, the negative ratio of the labour price to the energy price."
      },
      {
        "question": "Can both positive-price inputs increase on one fixed isocost line?",
        "answer": "No. At unchanged prices, more of both costs more."
      },
      {
        "question": "Why might higher wages encourage automation?",
        "answer": "A labour-saving method may become cheaper relative to a labour-intensive method."
      },
      {
        "question": "Why compare methods at equal output?",
        "answer": "Otherwise a lower total cost may merely reflect producing less."
      }
    ],
    "questions": [
      {
        "type": "numeric",
        "prompt": "Technology A uses 3 workers and 8 energy units. At w = €20 and p = €5, find total cost, ignoring other inputs.",
        "answer": 100,
        "unit": "€",
        "steps": [
          "C = wN + pE.",
          "C = 20 × 3 + 5 × 8 = 60 + 40 = €100."
        ],
        "hint": "Multiply each input by its own price, then add.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Labour is horizontal, energy vertical. With wage w = €30 and energy price p = €5, find the signed isocost slope.",
        "answer": -6,
        "unit": "energy units per worker",
        "steps": [
          "E = C/p − (w/p)N.",
          "Slope = −w/p = −30/5 = −6."
        ],
        "hint": "Include the negative sign.",
        "level": "Calculation"
      },
      {
        "type": "mc",
        "prompt": "Two methods produce identical output. A uses 4 workers and 2 energy units; B uses 2 workers and 8 energy units. At w = €10 and p = €5, which is cheaper?",
        "choices": [
          "A: €50 versus B: €60",
          "B: €50 versus A: €60",
          "Both cost €50",
          "Cannot compare at equal output"
        ],
        "correct": 0,
        "steps": [
          "A costs 4×10 + 2×5 = €50.",
          "B costs 2×10 + 8×5 = €60.",
          "A is cheaper by €10."
        ],
        "hint": "Calculate both wage bills and both energy bills.",
        "level": "Foundation"
      },
      {
        "type": "numeric",
        "prompt": "For the same methods A=(4 workers,2 energy) and B=(2 workers,8 energy), wages rise to €30 while energy stays €5. How much does switching from A to B save?",
        "answer": 30,
        "unit": "€",
        "steps": [
          "A costs 4×30 + 2×5 = €130.",
          "B costs 2×30 + 8×5 = €100.",
          "Savings = 130 − 100 = €30 for equal output."
        ],
        "hint": "Recalculate both costs using the new wage.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Using Y = 50 min(M/3, N, E/80), find output when M=6, N=3 and E=160.",
        "answer": 100,
        "unit": "litres",
        "steps": [
          "M/3 = 2, N = 3, E/80 = 2.",
          "The minimum is 2 complete input bundles.",
          "Y = 50 × 2 = 100 litres. Extra labour alone cannot raise this output."
        ],
        "hint": "Calculate the number of complete bundles each input can support.",
        "level": "Calculation"
      },
      {
        "type": "written",
        "prompt": "Explain why fixed proportions and constant returns to scale are not the same property.",
        "steps": [
          "Fixed proportions concerns the mix: a bottleneck prevents extra non-binding inputs from raising output.",
          "Constant returns concerns scale: multiply every input by k and output also multiplies by k.",
          "For example, min(M,N) has both properties, while other production rules can have constant returns without fixed proportions."
        ],
        "hint": "One statement concerns the recipe; the other concerns scaling everything.",
        "level": "Explain"
      }
    ],
    "formula": "C = wN + pE\nE = C/p − (w/p)N\nIsocost slope = −w/p\nProfit = revenue − cost",
    "note": ""
  },
  {
    "id": "preferences",
    "title": "Preferences, utility & derivatives",
    "lecture": "05 · Optimization I: Preferences",
    "slides": "5–26",
    "intro": "Preferences describe what a person wants; constraints describe what is feasible. Indifference curves and marginal utility describe the trade-off a person is willing to make.",
    "sections": [
      {
        "title": "Consumption versus free time",
        "text": "Working generates earnings but uses time. The lecture models a person who values both consumption c and free time t, cannot borrow and does not save. Preferences rank bundles; they do not tell us which bundles are affordable. The missing lecture 6 may develop optimisation further, so this pack does not present an invented lecture 6."
      },
      {
        "title": "Indifference curves",
        "text": "Every point on one indifference curve gives equal utility. Under the usual “more is better” assumptions, curves farther northeast represent higher utility. Smooth curves slope down because an increase in one desirable good must be offset by less of the other. Curves do not cross if they represent consistent preferences. Convex curves become flatter as you move right. Perfect substitutes instead have straight-line curves; perfect complements have kinked curves."
      },
      {
        "title": "Marginal utility as a partial derivative",
        "text": "MU_t = ∂u/∂t measures the local change in utility from more free time, keeping consumption fixed. MU_c = ∂u/∂c holds time fixed instead. Use the power rule and treat the other variable as a constant factor. A derivative gives a local rate, so using it for a whole extra unit is an approximation, not an exact finite change."
      },
      {
        "title": "The MRS and its sign",
        "text": "With t horizontal and c vertical, define the positive MRS_tc as units of consumption the person would give up for one extra unit of free time, holding utility fixed. Then MRS_tc = MU_t/MU_c, while the signed curve slope dc/dt = −MU_t/MU_c. Do not invert the marginal utilities or forget the distinction between positive willingness to trade and negative slope."
      },
      {
        "title": "Worked utility examples",
        "text": "For u(t,c)=√(tc): MU_t=½√(c/t), MU_c=½√(t/c), MRS_tc=c/t for t,c>0. At t=4,c=16, utility is 8, MU_t=1, MU_c=0.25 and MRS=4. For u=2t+3c, MRS=2/3 and curves are straight. For u=tc, MRS=c/t. For u=t^0.3 c^0.7, MU_t=0.3t^−0.7 c^0.7, MU_c=0.7t^0.3 c^−0.3 and MRS=3c/(7t)."
      }
    ],
    "terms": [
      {
        "term": "Preferences",
        "definition": "A ranking of alternative bundles or outcomes."
      },
      {
        "term": "Utility",
        "definition": "A numerical representation of preference rankings; not necessarily money."
      },
      {
        "term": "Indifference curve",
        "definition": "Bundles giving the same utility."
      },
      {
        "term": "Perfect substitutes",
        "definition": "Goods exchanged at a constant willingness-to-trade rate."
      },
      {
        "term": "Perfect complements",
        "definition": "Goods valued together in a fixed combination."
      },
      {
        "term": "Partial derivative",
        "definition": "A derivative with respect to one variable while holding other variables fixed."
      },
      {
        "term": "Marginal utility",
        "definition": "The local rate at which utility changes with a particular good."
      },
      {
        "term": "Marginal rate of substitution",
        "definition": "The amount of the vertical-axis good given up for an extra unit of the horizontal-axis good at constant utility."
      },
      {
        "term": "Ceteris paribus",
        "definition": "Holding other relevant things constant."
      }
    ],
    "cards": [
      {
        "question": "What stays the same along an indifference curve?",
        "answer": "Utility, not spending and not the quantity of each good."
      },
      {
        "question": "What is held fixed when taking ∂u/∂t?",
        "answer": "Consumption c and all other variables."
      },
      {
        "question": "For u=√(tc), what is MU_t?",
        "answer": "½√(c/t), for positive t and c."
      },
      {
        "question": "For u=√(tc), what is MRS_tc?",
        "answer": "c/t, with t horizontal and c vertical."
      },
      {
        "question": "What is the signed indifference-curve slope?",
        "answer": "dc/dt = −MU_t/MU_c. The positive MRS is the magnitude of this slope."
      },
      {
        "question": "Why does the curve flatten in the square-root example?",
        "answer": "Along a curve, t rises and c falls, so c/t falls."
      },
      {
        "question": "Which preferences give straight-line indifference curves?",
        "answer": "Perfect substitutes, such as u=2t+3c."
      },
      {
        "question": "Is marginal utility times one unit an exact change in utility?",
        "answer": "Generally no: it approximates a finite change using a local derivative."
      }
    ],
    "questions": [
      {
        "type": "numeric",
        "prompt": "For u(t,c)=√(tc), calculate utility at t=9 and c=36.",
        "answer": 18,
        "unit": "utility units",
        "steps": [
          "u = √(9×36) = √324.",
          "u = 18."
        ],
        "hint": "Multiply first, then take the square root.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "For u(t,c)=√(tc), calculate MU_t at t=9 and c=36.",
        "answer": 1,
        "unit": "utility per hour",
        "steps": [
          "Hold c constant: MU_t = ½√(c/t).",
          "½√(36/9) = ½×2 = 1."
        ],
        "hint": "Differentiate with respect to t only.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "For u(t,c)=√(tc), calculate positive MRS_tc at t=9 and c=36.",
        "answer": 4,
        "unit": "consumption units per hour",
        "steps": [
          "MRS_tc = MU_t/MU_c = c/t.",
          "36/9 = 4. The signed slope is −4."
        ],
        "hint": "Use the ratio for consumption given up per extra hour.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "For u(t,c)=2t+3c, calculate positive MRS_tc. You may enter a fraction.",
        "answer": 0.6666666666666666,
        "unit": "consumption units per hour",
        "steps": [
          "MU_t = 2 and MU_c = 3.",
          "MRS_tc = 2/3 ≈ 0.6667.",
          "Because this is constant, indifference curves are straight lines."
        ],
        "hint": "Differentiate each linear term with respect to its variable.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "For u=t^0.3 c^0.7, calculate MRS_tc at t=6,c=28.",
        "answer": 2,
        "unit": "consumption units per hour",
        "steps": [
          "MU_t=0.3t^−0.7c^0.7 and MU_c=0.7t^0.3c^−0.3.",
          "Dividing cancels powers to give (3/7)(c/t).",
          "3×28/(7×6)=84/42=2."
        ],
        "hint": "Simplify the ratio of derivatives before substituting.",
        "level": "Calculation"
      },
      {
        "type": "written",
        "prompt": "For u(t,c)=tc, derive both marginal utilities and interpret the MRS at t=5,c=20.",
        "steps": [
          "Holding c fixed gives MU_t=c=20.",
          "Holding t fixed gives MU_c=t=5.",
          "Positive MRS_tc=20/5=4. Locally the person is willing to sacrifice about 4 consumption units for an extra hour while preserving utility.",
          "The curve’s signed slope is −4."
        ],
        "hint": "Treat the other variable as a constant multiplier.",
        "level": "Explain"
      },
      {
        "type": "mc",
        "prompt": "Which is true for ordinary smooth indifference curves when both goods are desirable?",
        "choices": [
          "Utility rises as you move along a single curve",
          "The curves slope upward",
          "An increase in one good must be offset by less of the other on the same curve",
          "Any two indifference curves must cross"
        ],
        "correct": 2,
        "steps": [
          "A single curve represents a fixed utility level.",
          "More of one desirable good requires less of the other to keep utility fixed."
        ],
        "hint": "Separate movement along a curve from movement to a higher curve.",
        "level": "Foundation"
      }
    ],
    "formula": "MU_t = ∂u/∂t; MU_c = ∂u/∂c\nPositive MRS_tc = MU_t / MU_c\nSigned slope dc/dt = −MRS_tc",
    "note": "Source clarification: slide 16 prints MU_y/MU_x, but its stated “give up y for extra x” definition requires MU_x/MU_y. Slide 24 uses the consistent ratio MU_t/MU_c. Slide 26(c) also prints c^−0.7 in MU_t; differentiating t^0.3 c^0.7 with respect to t leaves c^0.7. The formulas here follow the differentiation and slide 24’s convention."
  },
  {
    "id": "strategic",
    "title": "Strategic interaction & Nash equilibrium",
    "lecture": "07 · Strategic Interactions",
    "slides": "3–20",
    "intro": "Your best decision may depend on what someone else does. Game theory separates predictions about behaviour from judgments about whether outcomes are socially desirable.",
    "sections": [
      {
        "title": "What makes an interaction strategic?",
        "text": "An outcome depends on your action and other people’s actions, and the participants recognise this interdependence. A game specifies players, available strategies, timing, information and payoffs. Read the payoff order before comparing numbers: this pack writes (row player, column player)."
      },
      {
        "title": "Best responses and Nash equilibrium",
        "text": "A best response maximises your payoff for a given strategy of the other player. To find pure-strategy Nash equilibria, identify the row player’s best response in each column and the column player’s best response in each row. A cell is a Nash equilibrium when both best responses coincide. Neither player can improve by changing alone while the other action stays fixed."
      },
      {
        "title": "Palanpur: coordination can fail",
        "text": "For two farmers choosing Early or Late, payoffs are Early/Early=(4,4), Early/Late=(1,3), Late/Early=(3,1), Late/Late=(2,2). If the other plants early, early is best; if the other plants late, late is best. Thus there are two pure Nash equilibria: both early and both late. Both early gives each a higher payoff, yet neither wants to plant early alone."
      },
      {
        "title": "Beliefs and expected payoffs",
        "text": "Let p be your belief that the other farmer plants early. Your expected payoff from Early is 4p+1(1−p)=1+3p. From Late it is 3p+2(1−p)=2+p. Early is better if 1+3p>2+p, or p>0.5. At p=0.5 you are indifferent. Coordination can improve by changing credible expectations or by changing incentives."
      },
      {
        "title": "Pest control and the Pareto criterion",
        "text": "For IPC/Toxic Tide, the matrix is IPC/IPC=(3,3), IPC/Toxic=(1,4), Toxic/IPC=(4,1), Toxic/Toxic=(2,2). Toxic is each player’s strictly dominant strategy, so both Toxic is the unique Nash equilibrium. Both IPC Pareto dominates it because both gain. A Pareto improvement helps at least one person without hurting anyone. Pareto efficiency means no such feasible improvement exists; it does not imply fairness or a Nash equilibrium."
      }
    ],
    "terms": [
      {
        "term": "Strategic interaction",
        "definition": "A setting where outcomes depend on mutually recognised interdependent choices."
      },
      {
        "term": "Strategy",
        "definition": "An action or action plan available to a player."
      },
      {
        "term": "Payoff",
        "definition": "The value a player assigns to an outcome."
      },
      {
        "term": "Best response",
        "definition": "A payoff-maximising strategy given the other players’ strategies."
      },
      {
        "term": "Nash equilibrium",
        "definition": "A strategy profile in which each player chooses a best response to the others."
      },
      {
        "term": "Dominant strategy",
        "definition": "A strategy that is best regardless of what the other player does; strict dominance means strictly better in every case."
      },
      {
        "term": "Coordination failure",
        "definition": "Failure to achieve a better joint outcome because actions are not adequately coordinated."
      },
      {
        "term": "Pareto improvement",
        "definition": "A change making at least one person better off and no one worse off."
      },
      {
        "term": "Pareto efficient",
        "definition": "An allocation with no feasible Pareto improvement."
      }
    ],
    "cards": [
      {
        "question": "What five elements define a game in the slides?",
        "answer": "Players, feasible strategies, order of play, information and payoffs."
      },
      {
        "question": "What is held fixed in a best-response comparison?",
        "answer": "The other players’ strategies."
      },
      {
        "question": "What makes a cell a Nash equilibrium?",
        "answer": "Every player’s chosen strategy is a best response to the other choices."
      },
      {
        "question": "What are the two pure Nash equilibria in the planting game?",
        "answer": "Both plant Early and both plant Late."
      },
      {
        "question": "When is Early strictly better in the planting game?",
        "answer": "When the believed probability the other plants Early is greater than 0.5."
      },
      {
        "question": "What is the dominant strategy in the pest-control game?",
        "answer": "Toxic Tide: it pays 4 rather than 3 against IPC, and 2 rather than 1 against Toxic Tide."
      },
      {
        "question": "Can a Nash equilibrium be Pareto inefficient?",
        "answer": "Yes. Both Toxic gives (2,2), while both IPC gives (3,3)."
      },
      {
        "question": "Does Pareto efficiency mean equal payoffs?",
        "answer": "No. It rules out a particular kind of improvement; it does not require equality."
      }
    ],
    "questions": [
      {
        "type": "numeric",
        "prompt": "In the planting game, p=0.7. Early pays 4 if the other is early and 1 otherwise. Calculate the expected payoff from Early.",
        "answer": 3.1,
        "unit": "payoff units",
        "steps": [
          "Expected payoff = 0.7×4 + 0.3×1.",
          "2.8 + 0.3 = 3.1."
        ],
        "hint": "Weight each outcome by its probability.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Using Early=1+3p and Late=2+p, find the probability p at which a farmer is indifferent.",
        "answer": 0.5,
        "unit": "probability (0–1)",
        "steps": [
          "Set 1+3p = 2+p.",
          "2p = 1, so p = 0.5.",
          "Above this threshold Early is better; below it Late is better."
        ],
        "hint": "Set the two expected payoffs equal.",
        "level": "Calculation"
      },
      {
        "type": "mc",
        "prompt": "In the planting game, the other farmer chooses Late. Which is your best response?",
        "choices": [
          "Early, because 4 is the highest number anywhere",
          "Late, because 2 is better than 1 in that column",
          "Either, because both earn 2",
          "Early, because both early is efficient"
        ],
        "correct": 1,
        "steps": [
          "Hold the other farmer’s Late strategy fixed.",
          "Your payoff is 1 from Early and 2 from Late. Choose Late."
        ],
        "hint": "Compare only the column corresponding to the other player’s action.",
        "level": "Foundation"
      },
      {
        "type": "mc",
        "prompt": "What happens at a Nash equilibrium?",
        "choices": [
          "The total payoff is always maximised",
          "Every player earns the same payoff",
          "No player can improve by changing strategy alone, given the others’ strategies",
          "No group could ever improve by changing together"
        ],
        "correct": 2,
        "steps": [
          "Nash equilibrium concerns unilateral deviations.",
          "It neither guarantees equality nor rules out a joint improvement."
        ],
        "hint": "Focus on a change by one player alone.",
        "level": "Foundation"
      },
      {
        "type": "written",
        "prompt": "Show why both Toxic is a Nash equilibrium but is Pareto dominated in the pest-control game.",
        "steps": [
          "Against Toxic, Toxic earns 2 while IPC earns 1; neither wants to switch alone.",
          "Both Toxic therefore is a mutual best response.",
          "Both IPC earns (3,3), compared with (2,2). Both players would gain from switching together, so (3,3) Pareto dominates (2,2)."
        ],
        "hint": "Use one comparison for incentives and another for welfare.",
        "level": "Explain"
      },
      {
        "type": "mc",
        "prompt": "Which change is a Pareto improvement?",
        "choices": [
          "(2,2) → (4,1)",
          "(2,2) → (3,3)",
          "(3,3) → (4,2)",
          "(4,1) → (3,3)"
        ],
        "correct": 1,
        "steps": [
          "Both people gain when (2,2) becomes (3,3).",
          "Every other listed change hurts one person."
        ],
        "hint": "Nobody may become worse off.",
        "level": "Foundation"
      }
    ],
    "formula": "Early: E[payoff] = 1 + 3p\nLate: E[payoff] = 2 + p\nChoose Early if p > 0.5",
    "note": ""
  },
  {
    "id": "games",
    "title": "Public goods, social preferences & norms",
    "lecture": "08 · Games",
    "slides": "3–18",
    "intro": "Private incentives and collective benefits can point in different directions. Preferences, repeated interaction and the rules of a game can influence cooperation.",
    "sections": [
      {
        "title": "Different games, different problems",
        "text": "The lecture contrasts invisible-hand games, coordination games, coordination with conflicting preferred equilibria, and social dilemmas. In the illustrated invisible-hand type, self-interest leads to an efficient outcome. Coordination games may have multiple equilibria. With conflicting preferences, people agree that coordinating matters but disagree about which equilibrium. In the illustrated social dilemma, private incentives favour free riding even though cooperation would improve the group outcome. These are the lecture’s examples, not universal theorems about all possible games."
      },
      {
        "title": "The four-person contribution game",
        "text": "Each player starts a round with 20 tokens. A contribution g_i goes to a common pool multiplied by 1.6 and divided equally among four players. Each person receives 0.4 times total contributions. Your round payoff is 20−g_i+0.4Σg_j. A token you contribute costs you 1 and returns 0.4 to you, a net private loss of 0.6. But it returns 1.6 across the group, a net group gain of 0.6."
      },
      {
        "title": "Free riding and group outcomes",
        "text": "With self-interested players in a one-shot contribution game, keeping every token is individually optimal whatever others contribute. If no one contributes, each earns 20. If all four contribute 20, the pool is 80, multiplied to 128, and each receives 32. Cooperation would improve everyone’s payoff, but each has an incentive to keep their contribution while benefiting from others. Do not confuse the one-shot benchmark with a claim that actual people never cooperate."
      },
      {
        "title": "Social preferences",
        "text": "Utility may depend on others’ outcomes. Altruism assigns positive value to others’ wellbeing. Inequality aversion values more equal outcomes. Spite or envy can make another person’s gain reduce utility. Social preferences can change best responses even if monetary outcomes stay unchanged, and thus may change which outcomes are equilibria."
      },
      {
        "title": "Repeated interaction, reciprocity and punishment",
        "text": "The lecture discusses experiments with ten rounds. Contributions may decline when initially generous contributors respond to others’ low contributions. A social norm is a shared expectation of how people should behave; reciprocity can support or undermine cooperation. In the punishment example, imposing a €3-equivalent fine costs the punisher €1. Such rules change incentives but are costly; cooperation is not guaranteed simply because interaction repeats."
      },
      {
        "title": "Externalities and institutions",
        "text": "An externality is an effect of an action on others that the actor does not fully take into account. Contributions generate benefits to others; pollution generates costs. Social preferences, credible agreements, peer punishment and policies such as taxes can help internalise such effects. Their effect depends on the setting and incentives, rather than following automatically from a label."
      }
    ],
    "terms": [
      {
        "term": "Social dilemma",
        "definition": "A conflict between private incentives and a collectively better outcome."
      },
      {
        "term": "Free riding",
        "definition": "Benefiting from others’ contributions while avoiding one’s own contribution."
      },
      {
        "term": "Social preferences",
        "definition": "Preferences in which utility also depends on other people’s outcomes."
      },
      {
        "term": "Altruism",
        "definition": "Valuing benefits to other people positively."
      },
      {
        "term": "Inequality aversion",
        "definition": "A preference against unequal outcomes."
      },
      {
        "term": "Reciprocity",
        "definition": "Responding to others’ behaviour with corresponding cooperation or non-cooperation."
      },
      {
        "term": "Social norm",
        "definition": "A shared understanding of appropriate behaviour in a community."
      },
      {
        "term": "Externality",
        "definition": "An effect on other people that the decision-maker does not fully take into account."
      },
      {
        "term": "Peer punishment",
        "definition": "A rule allowing participants to impose a cost on others, often at a cost to themselves."
      }
    ],
    "cards": [
      {
        "question": "In the token game, what share of a contributed token returns to its contributor?",
        "answer": "0.4 tokens: the multiplier 1.6 divided by 4 players."
      },
      {
        "question": "What is the private marginal net return from contributing a token?",
        "answer": "−1 + 0.4 = −0.6 tokens."
      },
      {
        "question": "What is the group marginal net return?",
        "answer": "1.6 − 1 = +0.6 tokens."
      },
      {
        "question": "How much does everyone earn if all four contribute their full 20 tokens?",
        "answer": "32 tokens each: 80×1.6/4."
      },
      {
        "question": "What is free riding?",
        "answer": "Receiving benefits from others’ contributions without contributing yourself."
      },
      {
        "question": "Does self-interested monetary optimisation describe all actual behaviour?",
        "answer": "No. Social preferences, norms and other incentives may affect decisions."
      },
      {
        "question": "What changes when altruism is introduced?",
        "answer": "The player values others’ wellbeing in addition to their own, so monetary payoff alone no longer describes utility."
      },
      {
        "question": "Why can punishment encourage cooperation?",
        "answer": "Anticipated sanctions can make free riding less attractive, although punishment also has costs."
      }
    ],
    "questions": [
      {
        "type": "numeric",
        "prompt": "Four players contribute 5, 10, 0 and 15 tokens. The pool is multiplied by 1.6 and divided equally. How much does each receive from the pool?",
        "answer": 12,
        "unit": "tokens",
        "steps": [
          "Total contribution = 5+10+0+15 = 30.",
          "Multiplied pool = 30×1.6 = 48.",
          "Equal share = 48/4 = 12 tokens."
        ],
        "hint": "Find the pool share, not the final payoff including retained tokens.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "In that round, you contributed 5 from your 20 tokens and receive 12 from the pool. What is your final payoff?",
        "answer": 27,
        "unit": "tokens",
        "steps": [
          "Retained tokens = 20−5 = 15.",
          "Add the pool share: 15+12 = 27."
        ],
        "hint": "Keep track of both retained tokens and the common return.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "Holding everyone else’s contributions fixed, how much does your own monetary payoff change if you contribute one additional token?",
        "answer": -0.6,
        "unit": "tokens",
        "steps": [
          "You give up one retained token: −1.",
          "Your own share of the extra pool return is +0.4.",
          "Net change = −1+0.4 = −0.6."
        ],
        "hint": "Include the part of the pool return you receive yourself.",
        "level": "Calculation"
      },
      {
        "type": "numeric",
        "prompt": "In the irrigation example, contributing costs $10 and increases each of four farms’ crop yield value by $8. What is the net benefit to the group from one contribution?",
        "answer": 22,
        "unit": "$",
        "steps": [
          "Total crop benefit = 4×8 = $32.",
          "Subtract the contributor’s cost: 32−10 = $22.",
          "The contributor’s own net benefit is only 8−10 = −$2."
        ],
        "hint": "Distinguish one farmer’s benefit from all four farmers’ benefits.",
        "level": "Calculation"
      },
      {
        "type": "mc",
        "prompt": "Which most directly describes inequality aversion?",
        "choices": [
          "Only caring about your own money",
          "Valuing more equal outcomes",
          "Always wanting others to earn less",
          "Always choosing the highest total monetary payoff"
        ],
        "correct": 1,
        "steps": [
          "Inequality aversion places value on equality of outcomes.",
          "It differs from pure self-interest, spite and total-payoff maximisation."
        ],
        "hint": "Which preference concerns the distribution?",
        "level": "Foundation"
      },
      {
        "type": "written",
        "prompt": "Why can high contributions in early rounds later decline?",
        "steps": [
          "Some participants initially cooperate in accordance with a norm of reciprocity or fairness.",
          "They observe others contributing less than expected.",
          "Conditional cooperators may then reduce their own contributions. This is one interpretation discussed in the lecture, not a claim about every participant."
        ],
        "hint": "Connect observations of others to conditional cooperation.",
        "level": "Explain"
      }
    ],
    "formula": "π_i = 20 − g_i + 0.4 × Σg_j\nPrivate marginal payoff = −1 + 0.4 = −0.6\nGroup marginal payoff = −1 + 1.6 = +0.6",
    "note": ""
  }
];

const COURSES = [
  {id:'accounting',name:'Accounting',icon:'≡'},
  {id:'algebra',name:'Algebra',icon:'x²'},
  {id:'micro',name:'Microeconomics',icon:'↗'},
  {id:'financial-maths',name:'Financial Maths',icon:'%'},
  {id:'digital-business',name:'Digital Business Management',icon:'⌘'},
  {id:'contract-law',name:'Contract Law',icon:'§'},
  {id:'business-functions',name:'Business Management Function',icon:'▦'}
];
const SOURCES = {
  introduction:'Micro26_01_Introduction',growth:'Micro26_02_Explaining the Hockey Stick',
  specialisation:'Micro26_03_Specialization',technology:'Micro26_04_Technology',
  preferences:'Micro26_05_Preferences',strategic:'Micro26_07_Strategic Interactions',games:'Micro26_08_Games'
};
const PERSONAL_KEY='studyspace_revision_v1';
const $=id=>document.getElementById(id);
const uid=()=>globalThis.crypto?.randomUUID?.() || `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
let storageProblem=false;
function readJSON(key,fallback){try{const text=localStorage.getItem(key);return text===null?fallback:JSON.parse(text);}catch{storageProblem=true;return fallback;}}
const loaded=readJSON(PERSONAL_KEY,{});
let personal={notes:{},known:{},solved:{},complete:{}};
for(const key of Object.keys(personal)) if(loaded && typeof loaded[key]==='object' && loaded[key]!==null && !Array.isArray(loaded[key])) personal[key]=loaded[key];
let tasks=readJSON('studyspace_tasks',[]);
if(!Array.isArray(tasks)) tasks=[];
tasks=tasks.filter(t=>t && typeof t.name==='string' && /^\d{4}-\d{2}-\d{2}$/.test(t.date));
// Keep previous local data in its original storage key. Copy matching Microeconomics notes once.
const old=readJSON('studyspace_classes',[]);
if(Array.isArray(old)) old.filter(c=>c && /micro/i.test(c.name) && Array.isArray(c.topics)).forEach(c=>c.topics.forEach(t=>{
  if(!t || typeof t!=='object') return;
  const m=MICRO_MODULES.find(m=>m.title.toLowerCase()===String(t.name).toLowerCase() || m.id===String(t.name).toLowerCase());
  if(m && !personal.notes[m.id] && (t.notes||t.source)) personal.notes[m.id]={text:String(t.notes||''),source:String(t.source||'')};
}));
function el(tag,className,text){const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;}
function button(text,action,kind='secondary-btn'){const b=el('button',kind,text);b.type='button';b.addEventListener('click',action);return b;}
function link(text,href,className=''){const a=el('a',className,text);a.href=href;return a;}
function notify(message){$('notice').textContent=message;$('notice').classList.remove('hidden');}
function persist(){try{localStorage.setItem(PERSONAL_KEY,JSON.stringify(personal));return true;}catch{notify('Your browser could not save this change. Keep this page open and copy any notes you need.');return false;}}
function persistTasks(){try{localStorage.setItem('studyspace_tasks',JSON.stringify(tasks));return true;}catch{notify('Your browser could not save your planner changes. Keep this page open.');return false;}}
function localDate(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function total(key){return MICRO_MODULES.reduce((s,m)=>s+m[key].length,0);}
function validKnownCount(){return MICRO_MODULES.reduce((s,m)=>s+m.cards.filter((_,i)=>personal.known[`${m.id}-${i}`]).length,0);}
function renderNavigation(courseId,view){
  $('classNav').replaceChildren(...COURSES.map(c=>{const a=link(c.name,`#course/${c.id}`);if(c.id===courseId){a.classList.add('active');a.setAttribute('aria-current','page');}return a;}));
  document.querySelectorAll('[data-view]').forEach(a=>{const active=a.dataset.view===view;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
}
function renderHome(){
  const stats=[['7','Classes'],[String(total('cards')),'Flashcards'],[String(total('questions')),'Practice questions'],[`${MICRO_MODULES.filter(m=>personal.complete[m.id]).length}/7`,'Topics marked revised']];
  $('stats').replaceChildren(...stats.map(([n,t])=>{const c=el('div','stat-card');c.append(el('strong','',n),el('span','',t));return c;}));
  $('classGrid').replaceChildren(...COURSES.map(c=>{const a=link('',`#course/${c.id}`,'class-card'+(c.id==='micro'?' ready':''));a.append(el('span','course-icon',c.icon),el('h3','',c.name),el('p','',c.id==='micro'?'Seven lecture topics, ready to explore.':'Your course space is ready for its lecture material.'),el('span','course-status'+(c.id==='micro'?' ready':''),c.id==='micro'?'Start learning ↗':'Content not added yet →'));return a;}));
}
function renderCourse(c){
  const head=$('courseHeader');head.replaceChildren(el('p','eyebrow','YOUR COURSE'),el('h2','topic-title',c.name));
  const grid=$('moduleGrid');grid.replaceChildren();
  if(c.id!=='micro'){
    const empty=el('div','panel empty-state');empty.append(el('div','course-icon',c.icon),el('h3','','Your next chapter is on its way.'),el('p','muted','Study content has not been added for this class. Upload the lecture material in our chat to build this course.'),link('Revise Microeconomics instead','#course/micro','primary-btn'));grid.append(empty);return;
  }
  head.append(el('p','lede','Revision built from your seven uploaded lecture PDFs. Choose a topic, understand the core ideas, then practise applying them.'));
  const n=el('div','notice','Coverage: lectures 01–05, 07 and 08. Lecture 06 was not supplied and is not included. Questions combine course examples and original practice; they are not official exam questions.');head.append(n);
  MICRO_MODULES.forEach(m=>{
    const a=link('',`#topic/${m.id}/summary`,'module-card');
    const bottom=el('div','module-bottom');bottom.append(el('span','',`${m.cards.length} cards · ${m.questions.length} questions`),el('span','',personal.complete[m.id]?'✓ Revised':'Explore →'));
    a.append(el('p','eyebrow',m.lecture),el('h3','',m.title),el('p','',m.intro),bottom);grid.append(a);
  });
}
const MODES=[['summary','Summary'],['cards','Flashcards'],['terms','Word bank'],['practice','Practice'],['notes','My notes']];
function renderTopic(m,mode){
  const head=$('topicHeader');head.replaceChildren(el('p','eyebrow',m.lecture),el('h2','topic-title',m.title),el('p','lede',m.intro));
  const toolbar=el('div','topic-toolbar');
  toolbar.append(el('span','source',`Source: ${SOURCES[m.id]} · slides ${m.slides}`));
  const mark=button(personal.complete[m.id]?'✓ Marked revised':'Mark as revised',()=>{personal.complete[m.id]=!personal.complete[m.id];persist();renderTopic(m,mode);});mark.setAttribute('aria-pressed',String(Boolean(personal.complete[m.id])));toolbar.append(mark);head.append(toolbar);
  $('topicTabs').replaceChildren(...MODES.map(([key,title])=>{const b=button(title,()=>{location.hash=`topic/${m.id}/${key}`;},'tab');b.id=`tab-${key}`;b.setAttribute('role','tab');b.setAttribute('aria-selected',String(key===mode));b.setAttribute('aria-controls','topicPanel');b.tabIndex=key===mode?0:-1;b.addEventListener('keydown',e=>{let index=MODES.findIndex(x=>x[0]===key);if(e.key==='ArrowRight')index=(index+1)%MODES.length;else if(e.key==='ArrowLeft')index=(index+MODES.length-1)%MODES.length;else if(e.key==='Home')index=0;else if(e.key==='End')index=MODES.length-1;else return;e.preventDefault();focusTabAfterRoute=true;location.hash=`topic/${m.id}/${MODES[index][0]}`;});return b;}));
  const panel=$('topicPanel');panel.replaceChildren();panel.setAttribute('aria-labelledby',`tab-${mode}`);
  if(mode==='summary')renderSummary(m,panel);
  if(mode==='cards')renderCards(m,panel);
  if(mode==='terms')renderTerms(m.terms.map(t=>({...t,module:m})),panel);
  if(mode==='practice')renderPractice(m,panel);
  if(mode==='notes')renderNotes(m,panel);
}
function renderSummary(m,panel){
  const reading=el('div','reading');
  if(m.formula)reading.append(el('pre','formula',m.formula));
  if(m.note)reading.append(el('div','source-note',m.note));
  m.sections.forEach(s=>{const section=el('section');section.append(el('h3','',s.title),el('p','',s.text));reading.append(section);});
  if(m.id==='technology')reading.append(makeChart('isocost'));
  if(m.id==='preferences')reading.append(makeChart('utility'));
  if(m.id==='strategic'){
    reading.append(payoffTable('Planting game',['Early','Late'],[[[4,4],[1,3]],[[3,1],[2,2]]]),payoffTable('Pest-control game',['IPC','Toxic'],[[[3,3],[1,4]],[[4,1],[2,2]]]));
  }
  const index=MICRO_MODULES.indexOf(m);const nav=el('div','actions');nav.append(link('Practise this topic',`#topic/${m.id}/practice`,'primary-btn'));if(index<MICRO_MODULES.length-1)nav.append(link('Next topic →',`#topic/${MICRO_MODULES[index+1].id}/summary`,'secondary-btn'));reading.append(nav);panel.append(reading);
}
function payoffTable(title,strategies,values){
  const box=el('section','panel');box.append(el('h3','',title),el('p','muted','Payoff order: (row player, column player). Hold the other player’s action fixed when comparing your options.'));
  const table=el('table','payoff-table');const cap=el('caption','',title+' payoffs');table.append(cap);const head=el('tr');head.append(el('th','','Row / Column'));strategies.forEach(s=>head.append(el('th','',s)));table.append(head);
  strategies.forEach((s,i)=>{const row=el('tr');row.append(el('th','',s));values[i].forEach(v=>row.append(el('td','',`(${v[0]}, ${v[1]})`)));table.append(row);});box.append(table);return box;
}
function makeChart(kind){
  const fig=el('figure','svg-chart');const ns='http://www.w3.org/2000/svg';const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 500 300');svg.setAttribute('role','img');
  const title=document.createElementNS(ns,'title');title.textContent=kind==='isocost'?'Isocost lines for C=120, p=10 and wages of 20 and 40':'Indifference curve c=64/t, holding utility √(tc)=8';svg.append(title);
  function shape(tag,attrs,text){const n=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,String(v)));if(text!==undefined)n.textContent=text;svg.append(n);}
  shape('path',{d:'M55 20 V245 H465',fill:'none',stroke:'#8390ac','stroke-width':1.5});
  if(kind==='isocost'){
    // N range 0–6; E range 0–12. C=120, p=10; slopes −2 and −4.
    shape('path',{d:'M55 35 L445 245',stroke:'#bbadff','stroke-width':3,fill:'none'});shape('path',{d:'M55 35 L250 245',stroke:'#a1dfc3','stroke-width':3,fill:'none'});
    [[55,262,'0'],[250,262,'3'],[445,262,'6'],[26,40,'12'],[300,45,'C = 120; p = 10'],[300,70,'Purple: w = 20'],[300,95,'Green: w = 40']].forEach(([x,y,t])=>shape('text',{x,y,fill:'#c4cde0','font-size':12},t));
  }else{
    let d='';for(let t=4;t<=24;t+=.25){const c=64/t;d+=(d?' L':'M')+(55+t/24*390).toFixed(2)+' '+(245-c/18*210).toFixed(2);}shape('path',{d,stroke:'#bbadff','stroke-width':3,fill:'none'});
    [[55,262,'0'],[120,262,'4'],[445,262,'24'],[23,60,'16'],[275,65,'u(t,c) = √(tc) = 8'],[275,89,'c = 64 / t']].forEach(([x,y,t])=>shape('text',{x,y,fill:'#c4cde0','font-size':12},t));
  }
  shape('text',{x:225,y:292,fill:'#c4cde0','font-size':12},kind==='isocost'?'Workers N':'Free time t');shape('text',{x:14,y:16,fill:'#c4cde0','font-size':12},kind==='isocost'?'Energy E':'Consumption c');
  fig.append(svg,el('figcaption','chart-caption',kind==='isocost'?'Illustrative calculation: doubling wages steepens the isocost while the fixed-cost energy intercept stays at 12. Moving northeast raises cost at fixed prices.':'Illustrative curve for positive time and consumption. More free time means giving up consumption to hold utility at 8; the positive MRS is c/t.'));return fig;
}
function renderCards(m,panel){
  let order=m.cards.map((_,i)=>i),position=0,revealed=false;
  const header=el('div','mode-header');const counter=el('p','muted');
  const shuffle=button('Shuffle',()=>{for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}position=0;revealed=false;draw();});header.append(counter,shuffle);
  const face=button('',()=>{revealed=!revealed;draw();},'flashcard');face.setAttribute('aria-label','Reveal flashcard answer');
  const controls=el('div','actions');
  const prev=button('← Previous',()=>{position=(position+order.length-1)%order.length;revealed=false;draw();});
  const next=button('Next →',()=>{position=(position+1)%order.length;revealed=false;draw();});
  const known=button('I know this',()=>{const key=`${m.id}-${order[position]}`;personal.known[key]=!personal.known[key];persist();draw();},'primary-btn');controls.append(prev,next,el('span','spacer'),known);
  const progress=el('p','muted');const bar=el('div','mini-progress');const fill=el('span');bar.append(fill);
  function draw(){const index=order[position],card=m.cards[index];counter.textContent=`Card ${position+1} of ${order.length} · ${m.title}`;face.replaceChildren(el('span','eyebrow',revealed?'ANSWER':'QUESTION'),el('span','face',revealed?card.answer:card.question),el('span','muted',revealed?'Click to return to the question':'Think first, then click to reveal'));face.setAttribute('aria-label',revealed?'Show question':'Reveal answer');known.textContent=personal.known[`${m.id}-${index}`]?'✓ Known · mark to revisit':'I know this';known.setAttribute('aria-pressed',String(Boolean(personal.known[`${m.id}-${index}`])));const n=m.cards.filter((_,i)=>personal.known[`${m.id}-${i}`]).length;progress.textContent=`${n} of ${order.length} cards marked known · Progress is saved on this browser.`;fill.style.width=`${100*n/order.length}%`;}
  draw();panel.append(header,face,controls,bar,progress);
}
function renderTerms(terms,panel){
  const grid=el('div','glossary-grid');terms.forEach(t=>{const c=el('article','term-card');c.append(el('h3','',t.term),el('p','',t.definition));if(t.module)c.append(link(t.module.title,`#topic/${t.module.id}/terms`));grid.append(c);});panel.append(grid);
}
function parseNumber(raw){const s=raw.trim().replace(/−/g,'-').replace(',','.');if(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)\s*\/\s*[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)){const [a,b]=s.split('/').map(Number);return b===0?NaN:a/b;}return s!==''&&/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)?Number(s):NaN;}
function correctNumber(value,answer){return Number.isFinite(value)&&Math.abs(value-answer)<=Math.max(.0001,Math.abs(answer)*.001);}
function renderPractice(m,panel){
  const info=el('p','muted','Work on paper first. Numeric answers accept decimals or simple fractions (e.g. 2/3), with 0.1% rounding tolerance. Include a minus sign where requested. Written responses are self-marked against the solution.');panel.append(info);
  const stack=el('div','stack');
  m.questions.forEach((q,index)=>{
    const key=`${m.id}-${index}`;const card=el('article','panel question-card');const meta=el('div','question-meta');meta.append(el('span','',`QUESTION ${String(index+1).padStart(2,'0')} · ${q.level.toUpperCase()}`),el('span','',personal.solved[key]?'✓ COMPLETED':''));card.append(meta,el('h3','',q.prompt));
    let numeric,radios=[],written;
    if(q.type==='numeric'){const label=el('label','','Your answer');const row=el('div','numeric-answer');numeric=el('input');numeric.type='text';numeric.autocomplete='off';numeric.placeholder='Type a number or fraction';row.append(numeric,el('span','muted',q.unit));label.append(row);card.append(label);}
    if(q.type==='mc'){const options=el('fieldset','answer-options');options.append(el('legend','muted','Choose one answer'));q.choices.forEach((c,i)=>{const l=el('label','answer-option');const r=el('input');r.type='radio';r.name=`answer-${key}`;r.value=String(i);radios.push(r);l.append(r,el('span','',c));options.append(l);});card.append(options);}
    if(q.type==='written'){const l=el('label','','Your reasoning (optional; kept while this page is open)');written=el('textarea');written.rows=4;l.append(written);card.append(l);}
    const feedback=el('p','feedback');feedback.setAttribute('role','status');
    const hint=el('p','hint hidden',q.hint);
    const solution=el('div','solution hidden');solution.append(el('strong','','Step-by-step solution'));const steps=el('ol');q.steps.forEach(s=>steps.append(el('li','',s)));solution.append(steps);
    const actions=el('div','actions');
    if(q.type!=='written')actions.append(button('Check answer',()=>{let valid=true,correct=false;if(q.type==='numeric'){const v=parseNumber(numeric.value);valid=Number.isFinite(v);correct=correctNumber(v,q.answer);}else{const selected=radios.findIndex(r=>r.checked);valid=selected>=0;correct=selected===q.correct;}feedback.className='feedback '+(correct?'correct':'incorrect');feedback.textContent=!valid?'Enter an answer first.':correct?'Correct — well done. Read the solution to check your method.':'Not quite. Try the hint, or reveal the worked solution.';if(correct){personal.solved[key]=true;persist();meta.lastChild.textContent='✓ COMPLETED';}} ,'primary-btn'));
    actions.append(button('Hint',()=>hint.classList.toggle('hidden')));
    const show=button('Show solution',()=>{const hidden=solution.classList.toggle('hidden');show.textContent=hidden?'Show solution':'Hide solution';});actions.append(show);
    if(q.type==='written'){const review=button(personal.solved[key]?'✓ Self-marked':'Mark as reviewed',()=>{personal.solved[key]=!personal.solved[key];persist();meta.lastChild.textContent=personal.solved[key]?'✓ COMPLETED':'';review.textContent=personal.solved[key]?'✓ Self-marked':'Mark as reviewed';});actions.append(review);}
    card.append(actions,feedback,hint,solution);stack.append(card);
  });panel.append(stack);
}
function renderNotes(m,panel){
  panel.append(el('p','lede','The summary, flashcards and questions above are shared course content. Use this space for your own additions; your notes remain on this browser.'));
  const n=personal.notes[m.id]||{text:'',source:''};const label=el('label','notes-source','Your slide references / reminders');const source=el('input');source.value=typeof n.source==='string'?n.source:'';source.placeholder='e.g. Questions to ask about slide 10';label.append(source);
  const notesLabel=el('label','','My personal notes');const notes=el('textarea');notes.rows=15;notes.placeholder='Write your own explanation, worked calculations, or revision reminders…';notes.value=typeof n.text==='string'?n.text:'';notesLabel.append(notes);const status=el('p','muted');status.setAttribute('role','status');
  const update=()=>{personal.notes[m.id]={text:notes.value,source:source.value};status.textContent=persist()?'Saved on this browser.':'Not saved. Copy your notes before closing.';};source.addEventListener('input',update);notes.addEventListener('input',update);panel.append(label,notesLabel,status);
}
function renderGlossary(){
  const query=$('termSearch').value.trim().toLowerCase();
  const terms=MICRO_MODULES.flatMap(m=>m.terms.map(t=>({...t,module:m}))).filter(t=>(t.term+' '+t.definition+' '+t.module.title).toLowerCase().includes(query));
  $('termCount').textContent=`${terms.length} matching entries · Terms may appear in more than one lecture.`;
  const out=$('glossaryList');out.replaceChildren();
  if(!terms.length){out.append(el('p','muted','No terms match. Try a shorter search.'));return;}
  const holder=el('div');renderTerms(terms,holder);out.append(...holder.firstChild.children);
}
function courseForTask(task){const c=COURSES.find(c=>c.id===task.classId || c.name.toLowerCase()===String(task.classId).toLowerCase());return c?.name||'General study';}
function renderTasks(){const list=$('taskList');list.replaceChildren();$('taskSummary').textContent=tasks.length?`${tasks.filter(t=>t.done).length} of ${tasks.length} tasks completed`:'No study tasks yet. Add your next session above.';[...tasks].sort((a,b)=>Number(Boolean(a.done))-Number(Boolean(b.done))||a.date.localeCompare(b.date)).forEach(task=>{const row=el('div','task-row');const l=el('label');const check=el('input');check.type='checkbox';check.checked=Boolean(task.done);l.append(check,el('span',task.done?'completed':'',task.name));check.addEventListener('change',()=>{task.done=check.checked;persistTasks();renderTasks();});const date=el('span','task-info',`${task.date} · ${courseForTask(task)}${!task.done&&task.date<localDate()?' · Overdue':''}`);row.append(l,date,button('Delete',()=>{if(!confirm(`Delete task “${task.name}”?`))return;tasks=tasks.filter(t=>t!==task);persistTasks();renderTasks();},'secondary-btn danger'));list.append(row);});}
let focusTabAfterRoute=false;
function route(){
  const [view='',id='',mode='summary']=location.hash.slice(1).split('/');
  ['home','course','topic','glossary','planner'].forEach(v=>$(v+'View').classList.add('hidden'));
  let title='A little progress, every day.',show='home',courseId='';
  if(view==='course') {const c=COURSES.find(c=>c.id===id);if(c){show='course';courseId=c.id;title=c.name;renderCourse(c);}else renderHome();}
  else if(view==='topic'){const m=MICRO_MODULES.find(m=>m.id===id);if(m){show='topic';courseId='micro';title='Microeconomics';renderTopic(m,MODES.some(x=>x[0]===mode)?mode:'summary');}else renderHome();}
  else if(view==='glossary'){show='glossary';title='A word for every idea.';renderGlossary();}
  else if(view==='planner'){show='planner';title='Make room for learning.';renderTasks();}
  else renderHome();
  $(show+'View').classList.remove('hidden');$('pageTitle').textContent=title;document.title=`${title} · StudySpace`;renderNavigation(courseId,show);
  if(focusTabAfterRoute){$(`tab-${mode}`)?.focus();focusTabAfterRoute=false;}
}
$('termSearch').addEventListener('input',renderGlossary);
$('taskClass').append(new Option('General study',''),...COURSES.map(c=>new Option(c.name,c.id)));
$('taskDate').value=localDate();
$('taskForm').addEventListener('submit',e=>{e.preventDefault();const name=$('taskName').value.trim(),date=$('taskDate').value;if(!name||!/^\d{4}-\d{2}-\d{2}$/.test(date))return;tasks.push({id:uid(),name,classId:$('taskClass').value,date,done:false});persistTasks();$('taskName').value='';renderTasks();});
window.addEventListener('hashchange',route);
route();
if(storageProblem)notify('Some saved data could not be loaded. Shared course content is still available; check that browser storage is enabled before relying on saved progress.');
