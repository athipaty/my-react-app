// Your recipe data
const recipes = [
  {
    name: "Yuzu Kosho",
    image: "/images/yuzu-kosho.jpg",
    ingredients: [
      {
        item: "Seasoned Salt",
        quantity: 240,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Miwon",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Black Pepper Powder",
        quantity: 30,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "Yuju Cheong",
        quantity: 2600,
        unit: "g",
        image: "/images/ingredients/yuju-cheong.jpg",
      },
      {
        item: "Green Chili",
        quantity: 4000,
        unit: "g",
        image: "/images/ingredients/green-chili.png",
      },
      {
        item: "Green Chili Padi",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/green-chili-padi.webp",
      },
    ],
    method:
      "Chop the Yuzu Cheong and chili in a food processor (do not blend). Place all the ingredients in a bowl, add the seasonings, and mix everything together by hand or with a spatula.",
  },
  {
    name: "Sriracha Mayo",
    image: "/images/sriracha-mayo.jpg",
    ingredients: [
      {
        item: "Sichimi",
        quantity: 420,
        unit: "g",
        image: "/images/ingredients/sichimi.jpg",
      },
      {
        item: "White Sugar",
        quantity: 1050,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 420,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Sriracha Sauce",
        quantity: 1575,
        unit: "g",
        image: "/images/ingredients/sriracha-sauce.jpeg",
      },
      {
        item: "Mayonnaise",
        quantity: 7770,
        unit: "g",
        image: "/images/ingredients/mayonnaise.webp",
      },
    ],
    method: "Make sure all the ingredients are mixed evenly.",
  },
  {
    name: "Garlic Sauce",
    image: "/images/garlic-sauce.jpg",
    ingredients: [
      {
        item: "Minced Garlic",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "White Sugar",
        quantity: 300,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Miwon",
        quantity: 150,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Black Pepper Powder",
        quantity: 30,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "Seasoned Salt",
        quantity: 300,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "White Onion",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/white-onion.jpg",
      },
      {
        item: "Plum Extract",
        quantity: 420,
        unit: "g",
        image: "/images/ingredients/plum-extract.jpg",
      },
      {
        item: "Corn Oil",
        quantity: 900,
        unit: "g",
        image: "/images/ingredients/corn-oil.webp",
      },
      {
        item: "Sesame Oil",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/sesame-oil.jpg",
      },
    ],
    method:
      "Chop the garlic and onion in a food processor (do not blend). Place them in a bowl, add the seasoning, and mix everything by hand or with a spatula.",
  },
  {
    name: "Radish Kimchi",
    image: "/images/radish-kimchi.jpg",
    ingredients: [
      {
        item: "Radish",
        quantity: 20,
        unit: "Kg",
        image: "/images/ingredients/radish.webp",
      },
      {
        item: "Spring Onion",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/spring-onion.webp",
      },
      {
        item: "Kimchi Paste",
        quantity: 2.4,
        unit: "Kg",
        image: "/images/ingredients/kimchi-paste.jpg",
      },
      {
        item: "Coarse Sea Salt",
        quantity: 400,
        unit: "g",
        image: "/images/ingredients/coarse-sea-salt.jpg",
      },
      {
        item: "New sugar",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/new-sugar.webp",
      },
    ],
    method:
      "Peel the radish and cut it into 2 cm × 2 cm cubes. Mix with salt and sugar, then leave for 1 hour, stirring occasionally. After that, drain the water. Cut the spring onion into 2–3 cm pieces, and if the white part is too thick, cut it in half first. Mix the radish and spring onion with kimchi paste. Leave it outside for 2 days (stir after 1 day), then transfer to a smaller container and keep in the chiller. It will be ready to serve after 3 days.",
  },
  {
    name: "Sancho Soy Sauce",
    image: "/images/sancho-soy-sauce.jpg",
    ingredients: [
      {
        item: "White Sugar",
        quantity: 3600,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Seasoned Salt",
        quantity: 80,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Vietnamese Dried Chili",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/vietnamese-dried-chili.webp",
      },
      {
        item: "Sancho Powder",
        quantity: 80,
        unit: "g",
        image: "/images/ingredients/sancho-powder.webp",
      },
      {
        item: "Black Pepper Power",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "Rice Wine",
        quantity: 480,
        unit: "g",
        image: "/images/ingredients/rice-wine.webp",
      },
      {
        item: "Kikoman Soy Sauce",
        quantity: 4000,
        unit: "g",
        image: "/images/ingredients/kikoman-soy-sauce.webp",
      },
      {
        item: "Plum Extract",
        quantity: 1200,
        unit: "g",
        image: "/images/ingredients/plum-extract.jpg",
      },
      {
        item: "Water",
        quantity: 12000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Potato Starch",
        quantity: 440,
        unit: "g",
        image: "/images/ingredients/potato-starch.jpg",
      },
      {
        item: "Water for Potato Starch",
        quantity: 440,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
    ],
    method:
      "Put all the ingredients into a pot, bring to a boil, and stir. In a separate bowl, mix potato starch with water. When the pot starts boiling, turn off the heat and slowly add the starch mixture while stirring continuously (to prevent lumps). Once it is well mixed, turn the heat back on and bring it to a boil again. Then turn off the heat and let it cool down.",
  },
  {
    name: "Dipping Sauce",
    image: "/images//dipping-sauce.jpg",
    ingredients: [
      {
        item: "Minced Garlic",
        quantity: 2100,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Leek",
        quantity: 2100,
        unit: "g",
        image: "/images/ingredients/leek.webp",
      },
      {
        item: "White Sugar",
        quantity: 1750,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Soy Sauce",
        quantity: 6300,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
      {
        item: "Vinegar",
        quantity: 1750,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
      {
        item: "Fine Chili Powder",
        quantity: 700,
        unit: "g",
        image: "/images/ingredients/fine-chili-powder.webp",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 1750,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Sesame Seeds",
        quantity: 700,
        unit: "g",
        image: "/images/ingredients/sesame-seeds.jpg",
      },
    ],
    method:
      "Do not use old garlic or leek, as the sauce may taste sour. Finely chop the white part of the leek and the garlic. Place everything in a bowl and mix well. Add the sesame seeds at the end.",
  },
  {
    name: "Rice Ball",
    image: "/images//rice-ball.jpg",
    ingredients: [
      {
        item: "Cooked Rice",
        quantity: 4000,
        unit: "g",
        image: "/images/ingredients/cooked-rice.webp",
      },
      {
        item: "Seaweed Flake",
        quantity: 200,
        unit: "g",
        image: "/images/ingredients/seaweed-flake.jpeg",
      },
      {
        item: "Tenkasu",
        quantity: 240,
        unit: "g",
        image: "/images/ingredients/tenkasu.jpg",
      },
      {
        item: "Seasoned Salt",
        quantity: 13,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Sesame Oil",
        quantity: "40",
        unit: "g",
        image: "/images/ingredients/sesame-oil.jpg",
      },
    ],
  },
  {
    name: "Kimchi Paste",
    image: "/images/kimchi-paste.jpg",
    ingredients: [
      {
        item: "Coarse Chilli Powder",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/coarse-chilli-powder.webp",
      },
      {
        item: "Minced Garlic",
        quantity: 650,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "White Onion",
        quantity: 1300,
        unit: "g",
        image: "/images/ingredients/white-onion.jpg",
      },
      {
        item: "Salted Prawn",
        quantity: 750,
        unit: "g",
        image: "/images/ingredients/salted-prawn.jpg",
      },
      {
        item: "Brown Pear",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/brown-pear.webp",
      },
      {
        item: "White Sugar",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Kanari Fish Sauce",
        quantity: 4000,
        unit: "g",
        image: "/images/ingredients/kanari-fish-sauce.webp",
      },
      {
        item: "Miwon",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Glutinous Rice Flour",
        quantity: 120,
        unit: "g",
        image: "/images/ingredients/glutinous-rice-flour.webp",
      },
      {
        item: "Water",
        quantity: 1200,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
    ],
    method:
      "Mix water and glutinous rice flour, then boil until it becomes a thick, glue-like texture. Let it cool. Blend the garlic, onion, salted prawn, and pear. In a large bowl, combine the blended mixture with the rice paste and all the sauces. Store in the chiller.",
  },
  {
    name: "Egg Roll Mix",
    image: "/images/egg-roll.jpg",
    ingredients: [
      {
        item: "Egg",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/egg.webp",
      },
      {
        item: "Water",
        quantity: 250,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Seasoned Salt",
        quantity: 12.5,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
    ],
    method:
      "Prepare big bowl, crack eggs. Whisk it until watery. Mix with water, mirin and seasoned salt. Strain through a sieve. Keep it in the chiller. Finely Carrot and Spring onion. Before cooking, mix egg water with veggies. Heat the pan, make the egg-roll carefully one layer by one layer until it 2.5*5 cm round size. When we roll it, put laver on the egg mix anf roll together. Slice it 1 cm thick and serve.",
  },
  {
    name: "Stir-fried Garlic Rice Sauce",
    image: "/images/stir-fried-garlic-rice-sauce.jpg",
    ingredients: [
      {
        item: "Non Alcohol Mirin",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Oyster Sauce",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/oyster-sauce.jpg",
      },
      {
        item: "Dark Soy Sauce",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/dark-soy-sauce.jpg",
      },
    ],
    method: "Make sure all the ingredients are mixed evenly.",
  },
  {
    name: "Bibim Noodle Sauce",
    image: "/images//bibim-noodle-sauce.jpg",
    ingredients: [
      {
        item: "Seasoned Salt",
        quantity: 240,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Whtie Sugar",
        quantity: 2250,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Miwon",
        quantity: 80,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Red Cheongyang Chilli Powder",
        quantity: 750,
        unit: "g",
        image: "/images/ingredients/fine-chili-powder.webp",
      },
      {
        item: "Minced Garlic",
        quantity: 750,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Corn Syrup",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/corn-syrup.png",
      },
      {
        item: "Thai Fish Sauce",
        quantity: 450,
        unit: "g",
        image: "/images/ingredients/thai-fish-sauce.webp",
      },
      {
        item: "Kikoman Soy Sauce",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/kikoman-soy-sauce.webp",
      },
      {
        item: "Sprite",
        quantity: 2250,
        unit: "g",
        image: "/images/ingredients/sprite.webp",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Vineger (Hwan Man)",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
    ],
    method:
      "Put all the ingredients in a large pot and bring to a boil. Do not boil for too long — just until the sugar has dissolved. Stir continuously while boiling. Turn off the heat and let it cool down.",
  },
  {
    name: "Cabbage Pickle",
    image: "/images//cabbage-pickle.jpg",
    ingredients: [
      {
        item: "Minced Garlic",
        quantity: 200,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Seasoned Salt",
        quantity: 200,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "White Sugar",
        quantity: 2800,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Yuju Cheong",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/yuju-cheong.jpg",
      },
      {
        item: "Vinegar (Hwan Man)",
        quantity: 3500,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
      {
        item: "Water",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Napa Cabbage",
        quantity: 20,
        unit: "kg",
        image: "/images/ingredients/napa-cabbage.png",
      },
      {
        item: "Coarse Sea Salt",
        quantity: 400,
        unit: "g",
        image: "/images/ingredients/coarse-sea-salt.jpg",
      },
    ],
    method:
      "Use mainly the yellow parts of the cabbage, not the green ones. Cut the cabbage leaves in half and then into 5 cm cubes. Wash once and place in a large bowl. Sprinkle sea salt evenly and mix by hand. Let it sit for about an hour until the texture becomes slightly bendy, mixing occasionally. After an hour, rinse the cabbage under running water 2–3 times and gently squeeze out the excess water, but not too strongly. For the pickle water, boil all the seasonings in a pot except the garlic and vinegar. Once it boils, turn off the heat and add the chopped garlic. Let it cool to room temperature, then add the vinegar and mix well. Pour the pickle water over the cabbage, mix by hand, and store in the chiller. It will be ready to serve after one day.",
  },
  {
    name: "Celery Pickle",
    image: "/images/celery-pickle.jpg",
    ingredients: [
      {
        item: "Celery",
        quantity: 30,
        unit: "kg",
        image: "/images/ingredients/celery.jpg",
      },
      {
        item: "Jin Soy Sauce",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
      {
        item: "Vinegar (Hwan man)",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
      {
        item: "White Sugar",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Water",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Red Chili",
        quantity: 15,
        unit: "Pcs",
        image: "/images/ingredients/red-chili.jpg",
      },
      {
        item: "White Onion",
        quantity: 2,
        unit: "Pcs",
        image: "/images/ingredients/white-onion.jpg",
      },
    ],
  },
  {
    name: "Chye Sim Pickle",
    image: "/images/chye-sim-pickle.jpg",
    ingredients: [
      {
        item: "Chye Sim",
        quantity: 30,
        unit: "kg",
        image: "/images/ingredients/celery.jpg",
      },
      {
        item: "Jin Soy Sauce",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
      {
        item: "Vinegar (Hwan man)",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
      {
        item: "White Sugar",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Water",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 6000,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.Webp",
      },
      {
        item: "Red Chili",
        quantity: 15,
        unit: "Pcs",
        image: "/images/ingredients/red-chili.jpg",
      },
      {
        item: "White Onion",
        quantity: 2,
        unit: "Pcs",
        image: "/images/ingredients/white-onion.jpg",
      },
    ],
  },
  {
    name: "Chili Pickle",
    image: "/images/chili-pickle.jpg",
    ingredients: [
      {
        item: "White Sugar",
        quantity: 2500,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Kikoman Soy Sauce",
        quantity: 2500,
        unit: "g",
        image: "/images/ingredients/kikoman-soy-sauce.webp",
      },
      {
        item: "Vinegar (Hwan Man)",
        quantity: 1300,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
      {
        item: "Water",
        quantity: 4500,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Minced Garlic",
        quantity: 300,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Vietnamese Dried Chili",
        quantity: "700",
        unit: "g",
        image: "/images/ingredients/vietnamese-dried-chili.webp",
      },
      {
        item: "Green Chili",
        quantity: 4500,
        unit: "g",
        image: "/images/ingredients/green-chili.png",
      },
      {
        item: "Green Chili Padi",
        quantity: 2500,
        unit: "g",
        image: "/images/ingredients/green-chili-padi.webp",
      },
    ],
    method:
      "Slice the chili into thin pieces (1–2 mm). Chop the garlic. In a pot, boil water, sugar, and soy sauce — but do not add the garlic, vinegar, or chili flakes yet. Once the pickling sauce comes to a boil, turn off the heat and add the garlic and chili flakes. Let the sauce cool down to room temperature, then stir in the vinegar. Store it in the chiller.",
  },
  {
    name: "Miso Sauce",
    image: "/images/miso-sauce.jpg",
    ingredients: [
      {
        item: "White Sugar",
        quantity: 160,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Miwon",
        quantity: 80,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Awase Miso",
        quantity: 1600,
        unit: "g",
        image: "/images/ingredients/awase-miso.webp",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 480,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Corn Syrup",
        quantity: 480,
        unit: "g",
        image: "/images/ingredients/corn-syrup.png",
      },
    ],
    method:
      "Mix all the sauces together. The sauce can be kept for a long time, but once mixed with fish roe it should be used quickly as it does not keep well. To serve, mix the fish roe with the sauce and shape into rice balls.",
  },
  {
    name: "Garlic Rice Prep",
    image: "/images/garlic-rice-prep.jpg",
    ingredients: [
      {
        item: "Cooked Rice",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/cooked-rice.webp",
      },
      {
        item: "Minced Garlic",
        quantity: 220,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Unsalted Butter",
        quantity: 160,
        unit: "g",
        image: "/images/ingredients/unsalted-butter.webp",
      },
      {
        item: "Seasoned Salt",
        quantity: 15,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
    ],
    method:
      "Wash the rice, drain the water and cook with same amount of water. Prepare the bowl, put cooked rice in and seasoning. Once order come, measure it 150g and stir-fry.",
  },
  {
    name: "Bibim Noodle Chicken",
    image: "/images/bibim-noodle-chicken.jpg",
    ingredients: [
      {
        item: "Minced Chiken Tender",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/minced-chiken-tender.jpg",
      },
      {
        item: "Non Alcohol - Sancho Soy Sauce",
        quantity: 320,
        unit: "g",
        image: "/images/ingredients/non-alcohol-sancho-soy-sauce.webp",
      },
      {
        item: "Dark Soy Sauce",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/dark-soy-sauce.jpg",
      },
      {
        item: "Cooking Oil",
        quantity: "",
        unit: "g",
        image: "/images/ingredients/cooking-oil.jpg",
      },
    ],
    method:
      "Defrost the chicken. Stir-fry the chicken in a pan with a little oil. Add the seasoning and continue stir-frying until the sauce is fully absorbed and the chicken is dry. Let it cool, then transfer to a container and store in the refrigerator. Serve cold.",
  },
  {
    name: "Minari Water Snail Sauce",
    image: "/images/minari-water-snail-sauce.jpg",
    ingredients: [
      {
        item: "Minced Garlic",
        quantity: 667,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "White Sugar",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Jin Soy Sauce",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
      {
        item: "Black Pepper Powder",
        quantity: 12,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "Dark Soy Sauce",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/dark-soy-sauce.jpg",
      },
      {
        item: "Hwanman Vinegar",
        quantity: 4660,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
      {
        item: "Coarse Chili Powder",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/coarse-chilli-powder.webp",
      },
      {
        item: "Corn Syrup",
        quantity: 3330,
        unit: "g",
        image: "/images/ingredients/corn-syrup.png",
      },
      {
        item: "Gochujan",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/gochujang.webp",
      },
      {
        item: "Sesame Seeds",
        quantity: "",
        unit: "g",
        image: "/images/ingredients/sesame-seeds.jpg",
      },
    ],
  },
  {
    name: "Cold Soft Tofu Sauce",
    image: "/images/cold-soft-tofu-sauce.jpg",
    ingredients: [
      {
        item: "Soy Sauce",
        quantity: 1200,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
      {
        item: "Coarse Chili Powder",
        quantity: 120,
        unit: "g",
        image: "/images/ingredients/chili-powder-coarse.webp",
      },
      {
        item: "Minced Garlic",
        quantity: 200,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Corn Syrup",
        quantity: 280,
        unit: "g",
        image: "/images/ingredients/corn-syrup.png",
      },
      {
        item: "Sesame Oil",
        quantity: 800,
        unit: "g",
        image: "/images/ingredients/sesame-oil.jpg",
      },
      {
        item: "Sesame Seeds",
        quantity: 320,
        unit: "g",
        image: "/images/ingredients/sesame-seeds.jpg",
      },
      {
        item: "Spring Onion",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/spring-onion.webp",
      },
      {
        item: "Green Chili",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/green-chili.png",
      },
      {
        item: "Red Chili",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/red-chili.jpg",
      },
    ],
    method:
      "Remove the thick white part of the spring onion (about 5 cm) and slice it thinly (about 0.2 cm). Chop the green and red chilies. Mix the sauces, then add the spring onion and chilies at the last minute. Let it rest for 10 minutes before using. Cut the soft tofu into 6 pieces (about 2.5 × 2.5 cm cubes). When serving, place the tofu on a plate and add 1 teaspoon of sauce on top. Serve immediately.",
  },
  {
    name: "SGO Doenjang Base",
    image: "/images/sgo-doenjang-base.jpg",
    ingredients: [
      {
        item: "Kikoman Soy Sauce",
        quantity: 180,
        unit: "g",
        image: "/images/ingredients/kikoman-soy-sauce.webp",
      },
      {
        item: "Dark Soy Sauce",
        quantity: 180,
        unit: "g",
        image: "/images/ingredients/dark-soy-sauce.jpg",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Miwon",
        quantity: 180,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Anchovy Powder",
        quantity: 150,
        unit: "g",
        image: "/images/ingredients/anchovy powder.png",
      },
      {
        item: "Red Cheongyang Chilli Powder",
        quantity: 240,
        unit: "g",
        image: "/images/ingredients/chili-powder-fine.avif",
      },
      {
        item: "Soybean Paste",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/soybean-paste.png",
      },
      {
        item: "Cheonggukjang",
        quantity: 2700,
        unit: "g",
        image: "/images/ingredients/cheonggukjang.jpg",
      },
      {
        item: "White Radish",
        quantity: 3600,
        unit: "g",
        image: "/images/ingredients/radish.webp",
      },
      {
        item: "Leek (Green Part)",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/leek.webp",
      },
      {
        item: "White Onion",
        quantity: 2400,
        unit: "g",
        image: "/images/ingredients/white-onion.jpg",
      },
      {
        item: "Water",
        quantity: 12000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
    ],
    method:
      "Peel the radish and slice it into thin strips (julienne). Cut the green part of the leek into 4 cm pieces and halve them. Cut the onion into 2 × 2 cm cubes. Place all the vegetables in a large pot with water and bring to a boil. Add all the sauces; if using Cheong Guk Jang, crush it roughly by hand before adding. Boil on high heat until it comes to a strong boil, then reduce to medium heat and continue boiling for 15–20 minutes. After that, turn off the heat.",
  },
  {
    name: "Hangover Chili Paste",
    image: "/images/hangover-chili-paste.jpg",
    ingredients: [
      {
        item: "Chili Powder Coarse",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/chili-powder-coarse.webp",
      },
      {
        item: "Chili Powder Fine",
        quantity: 60,
        unit: "g",
        image: "/images/ingredients/chili-powder-fine.avif",
      },
      {
        item: "Green Chili Powder",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/green-chili-powder.webp",
      },
      {
        item: "Beef Dasida",
        quantity: 60,
        unit: "g",
        image: "/images/ingredients/beef-dasida.jpg",
      },
      {
        item: "Miwon",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Seasoned Salt",
        quantity: 30,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Chili Oil",
        quantity: 70,
        unit: "g",
        image: "/images/ingredients/chili-oil.webp",
      },
      {
        item: "Water",
        quantity: 300,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
    ],
    method:
      "Mix coarse chili powder, fine chili powder, and green chili powder together in a bowl (A). Heat the oil in a pot until hot and ready to pour into bowl (A). While waiting for the oil to heat, blend the remaining ingredients into a paste and place it in bowl (A). Once the paste and powder are ready, slowly pour the hot oil over them while stirring to combine everything into a smooth paste. After mixing well, add the water. Once fully incorporated, store the paste in a container or vacuum pack and keep it in the chiller until ready to use.",
  },
  {
    name: "Truffle Powder Mix",
    image: "/images/truffle-powder.jpg",
    ingredients: [
      {
        item: "Glutinous Rice Flour",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/glutinous-rice-flour.webp",
      },
      {
        item: "Soy Bean Powder",
        quantity: 800,
        unit: "g",
        image: "/images/ingredients/soy-bean-powder.webp",
      },
    ],
    method: "Make sure all the ingredients are mixed evenly.",
  },
  {
    name: "Perilla Powder Mix",
    image: "/images/perilla-powder.jpg",
    ingredients: [
      {
        item: "Glutinous Rice Flour",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/glutinous-rice-flour.webp",
      },
      {
        item: "Soy Bean Powder",
        quantity: 800,
        unit: "g",
        image: "/images/ingredients/soy-bean-powder.webp",
      },
      {
        item: "Perilla Powder",
        quantity: 4000,
        unit: "g",
        image: "/images/ingredients/perilla-powder.webp",
      },
    ],
    method: "Make sure all the ingredients are mixed evenly.",
  },
  {
    name: "Collegen Flavour",
    image: "/images/perilla-powder.webp",
    ingredients: [
      {
        item: "Chicken Broth",
        quantity: 8000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Collegen Paitan",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/collegen-paitan.webp",
      },
      {
        item: "Flower Salt",
        quantity: 50,
        unit: "g",
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: "Miwon",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
    ],
  },
  {
    name: "Perilla Flavour",
    image: "/images/perilla-flavour.webp",
    ingredients: [
      {
        item: "Checken Broth",
        quantity: 8000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Perilla Powder Mix",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/perilla-powder-mix.webp",
      },
      {
        item: "Flower Salt",
        quantity: 50,
        unit: "g",
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: "Miwon",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
    ],
  },
  {
    name: "Hangover Flavour",
    image: "/images/hangover-flavour.webp",
    ingredients: [
      {
        item: "Checken Broth",
        quantity: 8000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Hangover Paste",
        quantity: 800,
        unit: "g",
        image: "/images/ingredients/hangover-paste.webp",
      },
      {
        item: "Flower Salt",
        quantity: 25,
        unit: "g",
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: "Miwon",
        quantity: 50,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
    ],
  },
  {
    name: "Truffle Flavour",
    image: "/images/truffle-flavour.webp",
    ingredients: [
      {
        item: "Checken Broth",
        quantity: 8000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Truffle Powder Mix",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/hangover-paste.webp",
      },
      {
        item: 'Blended Mushroom',
        quantity: 500,
        unit: 'g',
        image: "/images/ingredients/blended-mushroom.webp",
      },
      {
        item: 'Truffle Paste',
        quantity: 500,
        unit: 'g',
        image: "/images/ingredients/truffle-paste.webp",
      },
      {
        item: "Flower Salt",
        quantity: 50,
        unit: "g",
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: "Miwon",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
    ],
  },
  {
    name: 'Collegen Kalguksu (Noodle)',
    image: "/images/collegen-kalguksu-noodle.jpg",
    ingredients: [
      {
        item:'Chicken Broth',
        quantity: 4000,
        unit: 'g',
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: 'Water',
        quantity: 4000,
        unit: 'g',
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: 'Flower Salt',
        quantity: 60,
        unit: 'g',
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: 'Black Pepper Powder',
        quantity: 12,
        unit: 'g',
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: 'Miwon',
        quantity: 16,
        unit: 'g',
        image: "/images/ingredients/miwon.png",
      },
      {
        item: 'Liquid Chicken MSG',
        quantity: 80,
        unit: 'g',
        image: "/images/ingredients/liquid-chicken-msg.avif",
      },{
        item: 'Collegen Paitan',
        quantity: 80,
        unit: 'g',
        image: "/images/ingredients/collegen=paitan.png",
      }
    ]

  }
];

export default recipes;
