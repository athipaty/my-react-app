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
        quantity: 20000,
        unit: "g",
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
        quantity: 2400,
        unit: "g",
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
        item: "Black Pepper Powder",
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
      {
        item: "Fish Roe Mix",
        quantity: 200,
        unit: "g",
        image: "/images/ingredients/fish-roe-mix.jpg",
      },
    ],
    method:
      "Mix rice, tenkasu, seaweed flakes, sesame oil, and seasoned salt thoroughly. Place mixture into a rice ball mold. Make a hole in the center and add about 1 teaspoon of fish roe. Cover with more rice and press firmly so the mold is filled evenly.",
  },
  {
    name: "Fish Roe Mix",
    image: "/images/fish-roe-mix.jpg",
    ingredients: [
      {
        item: "Fish Roe",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/fish-roe.jpg",
      },
      {
        item: "Miso Sauce",
        quantity: 230,
        unit: "g",
        image: "/images/ingredients/miso-sauce.jpg",
      },
    ],
    method: "Make sure all the ingredients are mixed evenly.",
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
    image: "/images/egg-roll-mix.jpg",
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
        item: "Minced Chiken",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/minced-chiken-tender.jpg",
      },
      {
        item: "Sancho Soy Sauce",
        quantity: 320,
        unit: "g",
        image: "/images/ingredients/sancho-soy-sauce.jpg",
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
      "Peel the radish and slice it into thin strips (julienne). Cut the green part of the leek into 4 Cm pieces and halve them. Cut the onion into 2 × 2 cm cubes. Place all the vegetables in a large pot with water and bring to a boil. Add all the sauces; if using Cheong Guk Jang, crush it roughly by hand before adding. Boil on high heat until it comes to a strong boil, then reduce to medium heat and continue boiling for 15–20 minutes. After that, turn off the heat.",
  },
  {
    name: "Hangover Paste",
    image: "/images/hangover-paste.jpg",
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
    image: "/images/truffle-powder-mix.jpg",
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
    image: "/images/perilla-powder-mix.jpg",
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
    image: "/images/collegen-flavour.jpg",
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
        image: "/images/ingredients/collegen-paitan.png",
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
    image: "/images/perilla-flavour.jpg",
    ingredients: [
      {
        item: "Chicken Broth",
        quantity: 8000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Perilla Powder Mix",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/perilla-powder-mix.jpg",
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
    image: "/images/hangover-flavour.jpg",
    ingredients: [
      {
        item: "Chicken Broth",
        quantity: 8000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Hangover Paste",
        quantity: 800,
        unit: "g",
        image: "/images/ingredients/hangover-paste.jpg",
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
    image: "/images/truffle-flavour.jpg",
    ingredients: [
      {
        item: "Chicken Broth",
        quantity: 8000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Truffle Powder Mix",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/truffle-powder-mix.jpg",
      },
      {
        item: "Blended Mushroom",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/blended-mushroom.jpg",
      },
      {
        item: "Truffle Paste",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/truffle-paste.jpg",
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
    name: "Collegen Kalguksu (Noodle)",
    image: "/images/collegen-kalguksu-noodle.jpg",
    ingredients: [
      {
        item: "Chicken Broth",
        quantity: 4000,
        unit: "g",
        image: "/images/ingredients/chicken-broth.jpg",
      },
      {
        item: "Water",
        quantity: 4000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Flower Salt",
        quantity: 60,
        unit: "g",
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: "Black Pepper Powder",
        quantity: 12,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "Miwon",
        quantity: 16,
        unit: "g",
        image: "/images/ingredients/miwon.png",
      },
      {
        item: "Liquid Chicken MSG",
        quantity: 80,
        unit: "g",
        image: "/images/ingredients/liquid-chicken-msg.avif",
      },
      {
        item: "Collegen Paitan",
        quantity: 80,
        unit: "g",
        image: "/images/ingredients/collegen-paitan.png",
      },
    ],
  },
  {
    name: "Marinated Sauce",
    image: "/images/marinated-sauce.jpg",
    ingredients: [
      {
        item: "White Sugar",
        quantity: 1700,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
      {
        item: "Seasoned Salt",
        quantity: 130,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Miwon",
        quantity: 130,
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
        item: "Chicken Powder",
        quantity: 90,
        unit: "g",
        image: "/images/ingredients/chicken-powder.webp",
      },
      {
        item: "Korean Spicy Chilli Powder",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/chili-powder-fine.avif",
      },
      {
        item: "Minced Garlic",
        quantity: 750,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Korean Chili Paste",
        quantity: 550,
        unit: "g",
        image: "/images/ingredients/gochujang.webp",
      },
      {
        item: "Plum Extract",
        quantity: 300,
        unit: "g",
        image: "/images/ingredients/plum-extract.jpg",
      },
      {
        item: "Corn Syrup",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/corn-syrup.png",
      },
      {
        item: "Honey Ginger Cheong",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/honey-ginger-cheong.webp",
      },
      {
        item: "Kikoman Soy Sauce",
        quantity: 1600,
        unit: "g",
        image: "/images/ingredients/kikoman-soy-sauce.webp",
      },
      {
        item: "Water",
        quantity: 1900,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
    ],
  },
  {
    name: "Kalguksu Chicken Prep",
    image: "/images/kalguksu-chicken-prep.jpg",
    ingredients: [
      {
        item: "Chicken",
        quantity: 10000,
        unit: "g",
        image: "/images/ingredients/chicken.webp",
      },
      {
        item: "Cooking Oil",
        quantity: 300,
        unit: "g",
        image: "/images/ingredients/cooking-oil.jpg",
      },
      {
        item: "Flower Salt",
        quantity: 60,
        unit: "g",
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: "Black Pepper Powder",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
    ]
  },
  {
    name: "Marinated Chicken Prep",
    image: "/images/marinated-chicken-prep.jpg",
    ingredients: [
      {
        item: "Chicken Thigh",
        quantity: 10000,
        unit: "g",
        image: "/images/ingredients/chicken-thigh.webp",
      },
      {
        item: "Marinated Sauce",
        quantity: 2500,
        unit: "g",
        image: "/images/ingredients/marinated-sauce.jpg",
      },
      {
        item: "Seasoned Salt",
        quantity: 60,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Black Pepper Powder",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
    ],
  },
  {
    name: "Tempura Dipping Sauce",
    image: "/images/ingredients/tempura-dipping-sauce.jpg",
    ingredients: [
      {
        item: "Soy Sauce",
        quantity: 50,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
      {
        item: "Non-Alcohol Mirin",
        quantity: 15,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Vineger",
        quantity: 12,
        unit: "g",
        image: "/images/ingredients/vinegar-hwan-man.webp",
      },
      {
        item: "Chili Powder Coarse",
        quantity: 4,
        unit: "g",
        image: "/images/ingredients/chili-powder-coarse.webp",
      },
      {
        item: "Sesame B/W",
        quantity: 5,
        unit: "g",
        image: "/images/ingredients/sesame-bw.jpg",
      },
      {
        item: "Honey",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/honey.jpg",
      },
      {
        item: "White Sugar",
        quantity: 4,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
    ],
    method:
      "Add all the ingredients together and heat until everything is well combined, then let it cool down. The sauce can be kept in the chiller for up to one week.",
  },
  {
    name: "Grill Rice Ball",
    image: "/images/grill-rice-ball.jpg",
    ingredients: [
      {
        item: "Rice Ball",
        quantity: 2,
        unit: "ea",
        image: "/images/ingredients/rice-ball.jpg",
      },
      {
        item: "Sancho Soy Sauce",
        quantity: 0,
        unit: "g",
        image: "/images/ingredients/sancho-soy-sauce.jpg",
      },
      {
        item: "Cooking Oil",
        quantity: 0,
        unit: "g",
        image: "/images/ingredients/cooking-oil.jpg",
      },
      {
        item: "Yellow Radish",
        quantity: 3,
        unit: "ea",
        image: "/images/ingredients/yellow-radish.jpg",
      },
    ],
    method:
      "Heat a little cooking oil in a pan and place the rice ball inside. Brush both sides with Sancho soy sauce and grill until golden yellow. Before serving, add three pieces of yellow radish (cut into semi-circles) as a side dish.",
  },
  {
    name: "Cooked Rice",
    image: "/images/cooked-rice.webp",
    ingredients: [
      {
        item: "Rice",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/rice.jpg",
      },
      {
        item: "Water",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
    ],
    method:
      "No need to wash the rice. Cook either in the rice cooker or in the oven. For oven cooking, set temperature to 100°C and bake for 35 minutes. Cover the container properly to prevent the rice surface from drying out.",
  },
  {
    name: "Fried Mushrooms",
    image: "/images/tempura-mushrooms.jpg",
    ingredients: [
      {
        item: "Enoki",
        quantity: 2,
        unit: "ea",
        image: "/images/ingredients/enoki.jpg",
      },
      {
        item: "King Oyster Mushroom",
        quantity: 2,
        unit: "ea",
        image: "/images/ingredients/king-oyster-mushroom.jpg",
      },
      {
        item: "Spring Onion (White Part)",
        quantity: 2,
        unit: "ea",
        image: "/images/ingredients/spring-onion-white-part.jpg",
      },
      {
        item: "Shitake",
        quantity: 1,
        unit: "ea",
        image: "/images/ingredients/shitake.jpg",
      },
      {
        item: "Shimeji",
        quantity: 2,
        unit: "ea",
        image: "/images/ingredients/shimeji.jpg",
      },
      {
        item: "Zucchini",
        quantity: 2,
        unit: "ea",
        image: "/images/ingredients/zucchini.jpg",
      },
      {
        item: "Frying Powder",
        quantity: 10,
        unit: "g",
        image: "/images/ingredients/frying-powder.jpg",
      },
      {
        item: "Frying Powder Mix",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/frying-powder-mix.jpg",
      },
    ],
    method:
      "Coat each mushroom with the frying flour first, then finish with the frying powder mixture and deep-fry for 1–2 minutes, depending on the type of mushroom. You can tell it’s ready when the surface turns a golden-yellow color. Once all the mushrooms are fried, place them on a serving dish and serve with tempura sauce.",
  },
  {
    name: "Tempura Mushroom",
    image: "/images/tempura-mushroom.jpg",
    ingredients: [
      {
        item: "Fried Mushrooms",
        quantity: 1,
        unit: "set",
        image: "/images/ingredients/tempura-mushrooms.jpg",
      },
      {
        item: "Tempura Dipping Sauce",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/tempura-dipping-sauce.jpg",
      },
    ],
    method:
      "Once the mushrooms are fried, serve them together with tempura sauce.",
  },
  {
    name: "Spicy Boneless Chicken Feet",
    image: "/images/splicy-boneless-chicken-feet.jpg",
    ingredients: [
      {
        item: "Marinated Boneless Chicken Feet",
        quantity: 250,
        unit: "g",
        image: "/images/ingredients/marinated-boneless-chicken-feet.jpg",
      },
      {
        item: "Spring Onion",
        quantity: 1,
        unit: "g",
        image: "/images/ingredients/spring-onion.webp",
      },
      {
        item: "White Sesame Seed",
        quantity: 1,
        unit: "g",
        image: "/images/ingredients/sesame-seeds.jpg",
      },
      {
        item: "Marinated Sauce",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/marinated-sauce.jpg",
      },
    ],
    method:
      "Place 250 g of marinated chicken feet into a square container. Before serving, pour 40 g of the marinated sauce on top and heat until fully cooked. Mix everything well, then garnish with chopped spring onions and a sprinkle of white sesame seeds on the surface.",
  },
  {
    name: "Marinated Boneless Chicken Feet",
    image: "/images/marinated-boneless-chicken-feet.jpg",
    ingredients: [
      {
        item: "Boneless Chicken Feet",
        quantity: 1000,
        unit: "g",
        image: "/images/ingredients/boneless-chicken-feet.jpg",
      },
      {
        item: "Marinated Sauce",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/marinated-sauce.jpg",
      },
    ],
    method:
      "Boil the boneless chicken feet first, then let them cool down to room temperature. Pour the marinade sauce over them and mix well. Let the chicken feet marinate for at least one day before serving.",
  },
  {
    name: "Eggplant Sauce",
    image: "/images/eggplant-sauce.jpg",
    ingredients: [
      {
        item: "Honey",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/honey.jpg",
      },
      {
        item: "Red Chilli",
        quantity: 50,
        unit: "pcs",
        image: "/images/ingredients/red-chili.jpg",
      },
      {
        item: "Non-Alcohol-Mirin",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Corn Syrup",
        quantity: 3000,
        unit: "g",
        image: "/images/ingredients/corn-syrup.png",
      },
      {
        item: "Minced Garlic",
        quantity: 150,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Leek",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/leek.webp",
      },
      {
        item: "Jin Soy Sauce",
        quantity: 1500,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
    ],
    method:
      "Add all the ingredients together and heat until everything is well combined, then let it cool down. The sauce can be kept in the chiller for up to one week.",
  },
  {
    name: "Chicken Popcorn",
    image: "/images/chicken-popcorn.jpg",
    ingredients: [
      {
        item: "Fried Gizzard",
        quantity: "150",
        unit: "g",
        image: "/images/ingredients/fried-gizzard.jpg",
      },
      {
        item: "Leek (slice)",
        quantity: 5,
        unit: "g",
        image: "/images/ingredients/leek.webp",
      },
      {
        item: "Sichimi",
        quantity: 5,
        unit: "g",
        image: "/images/ingredients/sichimi.jpg",
      },
      {
        item: "Tempura Dipping Sauce",
        quantity: 20,
        unit: "g",
        image: "/images/ingredients/tempura-dipping-sauce.jpg",
      },
    ],
    method:
      "After frying, place it in a serving bowl with the tempura sauce on the side, and don’t forget to finish with sliced leeks and shichimi.",
  },
  {
    name: "Fried Gizzard",
    image: "/images/fried-gizzard.jpg",
    ingredients: [
      {
        item: "Gizzard (Cut)",
        quantity: 150,
        unit: "g",
        image: "/images/ingredients/gizzard-cut.jpg",
      },
      {
        item: "Frying Powder Mix",
        quantity: 40,
        unit: "g",
        image: "/images/ingredients/frying-powder-mix.jpg",
      },
      {
        item: "Black Pepper Powder",
        quantity: 2,
        unit: "pinch",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "Seasoned Salt",
        quantity: 2,
        unit: "pinch",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Cooking Oil",
        quantity: "",
        unit: "g",
        image: "/images/ingredients/cooking-oil.jpg",
      },
      {
        item: "Frying Powder",
        quantity: 10,
        unit: "g",
        image: "/images/ingredients/frying-powder.jpg",
      },
    ],
    method:
      "Prepare the gizzard and mix it with seasoning salt and black pepper powder, then coat it with frying flour and mix well. Dip the gizzard into the final frying flour mixture and deep-fry in hot oil for about 1–2 minutes. Drain off the excess oil, and it’s ready to serve.",
  },
  {
    name: "Frying Powder Mix",
    image: "/images/frying-powder-mix.jpg",
    ingredients: [
      {
        item: "Frying Powder",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/frying-powder.jpg",
      },
      {
        item: "Water",
        quantity: 180,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
    ],
    method: "make sure all the ingredients are mixed evenly..",
  },
  {
    name: "Blended Mushroom",
    image: "/images/blended-mushroom.jpg",
    ingredients: [
      {
        item: "Shitake",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/shitake.jpg",
      },
      {
        item: "Enoki",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/enoki.jpg",
      },
      {
        item: "King Oyster Mushroom",
        quantity: 2000,
        unit: "g",
        image: "/images/ingredients/king-oyster-mushroom.jpg",
      },
    ],
  },
  {
    name: "Charcoal Fried Eggplant",
    image: "/images/charcoal-fried-eggplant.jpg",
    ingredients: [
      {
        item: "Eggplant",
        quantity: 1,
        unit: "ea",
        image: "/images/ingredients/eggplant.jpg",
      },
      {
        item: "Frying Charcoal Powder Mix",
        quantity: 0,
        unit: "g",
        image: "/images/ingredients/frying-charcoal-powder-mix.jpg",
      },
      {
        item: "Cooking Oil",
        quantity: "",
        unit: "g",
        image: "/images/ingredients/cooking-oil.jpg",
      },
      {
        item: "Eggplant Sauce",
        quantity: 1,
        unit: "g",
        image: "/images/eggplant-sauce.jpg",
      },
      {
        item: "Spring Onions (Sliced)",
        quantity: 1,
        unit: "g",
        image: "/images/ingredients/spring-onion.webp",
      },
      {
        item: "Crushed Peanuts",
        quantity: "1",
        unit: "g",
        image: "/images/ingredients/crushed-peanuts.webp",
      },
    ],
    method:
      "Cut the eggplant into slices about 3 cm thick, then cut each slice in half to make half-circles. Coat the pieces with charcoal powder mix and fry them for about 1–2 minutes. After frying, let the oil drain for a while. Then dip the eggplant in the eggplant sauce and top with sliced spring onions and crushed peanuts before serving.",
  },
  {
    name: "Frying Charcoal Powder Mix",
    image: "/images/frying-charcoal-powder-mix.jpg",
    ingredients: [
      {
        item: "Frying Powder",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/frying-powder.jpg",
      },
      {
        item: "Seasoned Salt",
        quantity: 1,
        unit: "g",
        image: "/images/ingredients/seasoned-salt.jpg",
      },
      {
        item: "Charcoal Powder",
        quantity: 5,
        unit: "g",
        image: "/images/ingredients/charcoal-powder.jpg",
      },
      {
        item: "Soda",
        quantity: 120,
        unit: "g",
        image: "/images/ingredients/soda.jpg",
      },
    ],
    method:
      "Use cold soda water and mix well so all the ingredients are evenly combined.",
  },
  {
    name: "Chicken Broth",
    image: "/images/chicken-broth.jpg",
    ingredients: [
      {
        item: "Baked Chicken Bone and Feet",
        quantity: 15,
        unit: "kg",
        image: "/images/ingredients/baked-chicken-bone-and-feet.jpg",
      },
      {
        item: "Leek",
        quantity: 1,
        unit: "kg",
        image: "/images/ingredients/leek.webp",
      },
      {
        item: "White Onion",
        quantity: 1,
        unit: "kg",
        image: "/images/ingredients/white-onion.jpg",
      },
      {
        item: "Ginseng",
        quantity: 0.6,
        unit: "kg",
        image: "/images/ingredients/ginseng.jpg",
      },
      {
        item: "Red Date",
        quantity: 0.5,
        unit: "kg",
        image: "/images/ingredients/red-date.jpg",
      },
      {
        item: "Samgyetang Herbal",
        quantity: 5,
        unit: "pack",
        image: "/images/ingredients/samgyetang-herbal.webp",
      },
      {
        item: "Water",
        quantity: 80,
        unit: "litres",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Garlic",
        quantity: 1,
        unit: "kg",
        image: "/images/ingredients/garlic.avif",
      },
    ],
    method:
      "Place all the ingredients in a pot and simmer for a minimum of 6 hours. Add more water whenever the level gets low. Once finished, allow it to cool, then strain the mixture and keep only the broth.",
  },
  {
    name: "Pad Krapow",
    image: "/images/pad-krapow.webp",
    ingredients: [
      {
        item: "Minced Chicken",
        quantity: 150,
        unit: "g",
        image: "/images/ingredients/minced-chiken-tender.jpg",
      },
      {
        item: "Minced Garlic",
        quantity: 10,
        unit: "g",
        image: "/images/ingredients/minced-garlic.jpg",
      },
      {
        item: "Red Chili Padi",
        quantity: 10,
        unit: "g",
        image: "/images/ingredients/red-chilli-padi.webp",
      },
      {
        item: "Thai Holy Basil",
        quantity: "10",
        unit: "g",
        image: "/images/ingredients/thai-holy-basil.jpg",
      },
      {
        item: "Cooking Oil",
        quantity: "0",
        unit: "g",
        image: "/images/ingredients/cooking-oil.jpg",
      },
      {
        item: "Fish Sauce",
        quantity: 10,
        unit: "g",
        image: "/images/ingredients/fish-sauce.webp",
      },
      {
        item: "Oyster Sauce",
        quantity: 10,
        unit: "g",
        image: "/images/ingredients/oyster-sauce.jpg",
      },
      {
        item: "Soy Sauce",
        quantity: 10,
        unit: "g",
        image: "/images/ingredients/soy-sauce.png",
      },
      {
        item: "White Sugar",
        quantity: 4,
        unit: "g",
        image: "/images/ingredients/white-sugar.jpg",
      },
    ],
  },
  {
    name: "Udon Broth",
    image: "/images/udon-broth.webp",
    ingredients: [
      {
        item: "Soaked Kelp",
        quantity: 18000,
        unit: "g",
        image: "/images/ingredients/soaked-kelp.jpg",
      },
      {
        item: "Garlic",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/garlic.avif",
      },
      {
        item: "Radish",
        quantity: 600,
        unit: "g",
        image: "/images/ingredients/radish.webp",
      },
      {
        item: "Black Pepper Corn",
        quantity: 90,
        unit: "g",
        image: "/images/ingredients/black-pepper-corn.webp",
      },
      {
        item: "Dried Chili",
        quantity: 60,
        unit: "g",
        image: "/images/ingredients/vietnamese-dried-chili.webp",
      },
      {
        item: "Katsuobushi",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/katsuobushi.jpg",
      },
      {
        item: "Dark Soy Sauce",
        quantity: 140,
        unit: "g",
        image: "/images/ingredients/dark-soy-sauce.jpg",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 1140,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Hondashi",
        quantity: 150,
        unit: "g",
        image: "/images/ingredients/hondashi.webp",
      },
      {
        item: "Higashimaru Shoyu",
        quantity: 1040,
        unit: "g",
        image: "/images/ingredients/higashimaru-shoyu.webp",
      },
    ],
    method:
      "Remove the kelp, then put the sliced radish, whole garlic, peppercorns, and blended dried chili into a pouch. Boil the pouch in the water over high heat until it boils well, then lower the heat and simmer for about 30 minutes. Turn off the heat, add the katsuobushi, and let it sit for 15 minutes before removing all the ingredients. Squeeze out the broth and measure it; if it is less than 18 liters, add water to bring it back to 18 liters so it doesn’t become too salty. While the broth is still hot, add the seasonings and mix well.",
  },
  {
    name: "Soaked Kelp",
    image: "/images/ingredients/soaked-kelp.jpg",
    ingredients: [
      {
        item: "Water",
        quantity: 18000,
        unit: "g",
        image: "/images/ingredients/water.jpeg",
      },
      {
        item: "Non Alcohol Mirin",
        quantity: 500,
        unit: "g",
        image: "/images/ingredients/non-alcohol-mirin.webp",
      },
      {
        item: "Kelp",
        quantity: 120,
        unit: "g",
        image: "/images/ingredients/kelp.jpg",
      },
    ],
    method:
      "Combine the water and non-alcoholic mirin in a large pot, then soak the kelp for 6–8 hours..",
  },
  {
    name: "Jidori Udon",
    image: "/images/jidori-udon.jpg",
    ingredients: [
      {
        item: "Udon Broth",
        quantity: 300,
        unit: "g",
        image: "/images/ingredients/....jpg",
      },
      {
        item: "Udon Noodle",
        quantity: 150,
        unit: "g",
        image: "/images/ingredients/udon-noodle.jpg",
      },
      {
        item: "Chicken",
        quantity: 6,
        unit: "pcs",
        image: "/images/ingredients/chicken-thigh.webp",
      },
      {
        item: "Leek (Green Part)",
        quantity: 5,
        unit: "g",
        image: "/images/ingredients/leek.webp",
      },
      {
        item: "Cooking Oil",
        quantity: "2",
        unit: "g",
        image: "/images/ingredients/cooking-oil.jpg",
      },
      {
        item: "Black Pepper Powder",
        quantity: 1,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "Sichimi",
        quantity: 1,
        unit: "g",
        image: "/images/ingredients/sichimi.jpg",
      },
    ],
    method:
      "Boil the udon broth and cook the udon noodles, then fry the chicken thighs and leeks until fully cooked. Pour the noodles into the broth, place the chicken and leeks on top, and finish with black pepper powder and shichimi.",
  },
  {
    name: 'Black Peper Salt',
    image: "/images/sichimi.jpg",
    ingredients: [
      {
        item: "Flower Salt",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/flower-salt.jpg",
      },
      {
        item: "Black Pepper Powder",
        quantity: 100,
        unit: "g",
        image: "/images/ingredients/black-pepper-powder.webp",
      },
      {
        item: "White Sesame Seed",
        quantity: 25,
        unit: "g",
        image: "/images/ingredients/sesame-seeds.jpg",
      },
      {
        item: "Black Sesame Seed",
        quantity: 25,
        unit: "g",
        image: "/images/ingredients/black-sesame-seeds.jpg",
      },

    ]

  }
];
export default recipes;
