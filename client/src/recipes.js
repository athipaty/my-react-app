// Your recipe data
const recipes = [
  {
    name: 'Yuzu Kosho',
    image: '/images/yuzu-kosho.jpg',
    ingredients: [
      {
        item: 'Seasoned Salt',
        quantity: 240,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'Miwon',
        quantity: 40,
        unit: 'g',
        image: '/images/ingredients/miwon.png',
      },
      {
        item: 'Black Pepper Powder',
        quantity: 30,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.webp',
      },
      {
        item: 'Yuju Cheong',
        quantity: 2600,
        unit: 'g',
        image: '/images/ingredients/yuju-cheong.jpg',
      },
      {
        item: 'Green Chili',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/green-chili.png',
      },
      {
        item: 'Green Chili Padi',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/green-chili-padi.webp',
      }
    ],
    method: 'Chop the Yuzu Cheong and chili in a food processor (do not blend). Place all the ingredients in a bowl, add the seasonings, and mix everything together by hand or with a spatula.'
  },
  {
    name: 'Sriracha Mayo',
    iamge: '/images/sriracha-mayo.jpg',
    ingredients: [
      {
        item: 'Sichimi',
        quantity: 420,
        unit: 'g',
        image: '/images/ingredients/sichimi.jpg',
      },
      {
        item: 'White Sugar',
        quantity: 1050,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Mirin',
        quantity: 420,
        unit: 'g',
        image: '/images/ingredients/mirin.jpg',
      },
      {
        item: 'Sriracha Sauce',
        quantity: 1575,
        unit: 'g',
        image: '/images/ingredients/sriracha-sauce.jpeg',
      },
      {
        item: 'Mayonnaise',
        quantity: 7770,
        unit: 'g',
        image: '/images/ingredients/mayonnaise.webp',
      }
    ]
  },
  {
    name: 'Garlic Sauce',
    image: '/images/garlic-sauce.jpg',
    ingredients: [
      {
        item: 'Minced Garlic',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg',
      },
      {
        item: 'White Sugar',
        quantity: 300,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Miwon',
        quantity: 150,
        unit: 'g',
        image: '/images/ingredients/miwon.png',
      },
      {
        item: 'Black Pepper Powder',
        quantity: 30,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.webp',
      },
      {
        item: 'Seasoned Salt',
        quantity: 300,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'White Onion',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/white-onion.jpg',
      },
      {
        item: 'Plum Extract',
        quantity: 420,
        unit: 'g',
        image: '/images/ingredients/plum-extract.jpg',
      },
      {
        item: 'Corn Oil',
        quantity: 900,
        unit: 'g',
        image: '/images/ingredients/corn-oil.webp',
      },
      {
        item: 'Sesame Oil',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/sesame-oil.jpg',
      }
    ]
  },
  {
    name: 'Radish Kimchi',
    image: '/images/radish-kimchi.jpg',
    ingredients: [
      {
        item: 'Radish',
        quantity: 20,
        unit: 'Kg',
        image: '/images/ingredients/radish.webp',
      },
      {
        item: 'Spring Onion',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/spring-onion.webp',
      },
      {
        item: 'Kimchi Paste',
        quantity: 2.4,
        unit: 'Kg',
        image: '/images/ingredients/kimchi-paste.jpg',
      },
      {
        item: 'Coarse Sea Salt',
        quantity: 400,
        unit: 'g',
        image: '/images/ingredients/coarse-sea-salt.jpg',
      },
      {
        item: 'New sugar',
        quantity: 20,
        unit: 'g'
      }
    ]
  },
  {
    name: 'Sancho Soy Sauce',
    image: '/images//sancho-soy-sauce.jpg',
    ingredients: [
      {
        item: 'White Sugar',
        quantity: 3600,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Seasoned Salt',
        quantity: 80,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'Vietnamese Dried Chili',
        quantity: 20,
        unit: 'g',
        image: '/images/ingredients/vietnamese-dried-chili.webp',
      },
      {
        item: 'Sancho Powder',
        quantity: 80,
        unit: 'g',
        image: '/images/ingredients/sancho-powder.webp',
      },
      {
        item: 'Black Pepper Power',
        quantity: 40,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.webp',
      },
      {
        item: 'Rice Wine',
        quantity: 480,
        unit: 'g',
        image: '/images/ingredients/rice-wine.webp',       
      },
      {
        item: 'Kikoman Soy Sauce',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/kikoman-soy-sauce.webp',
      },
      {
        item: 'Plum Extract',
        quantity: 1200,
        unit: 'g',
        image: '/images/ingredients/plum-extract.jpg',
      },
      {
        item: 'Water',
        quantity: 12000,
        unit: 'g',
        image: '/images/ingredients/water.jpeg',
      },
      {
        item: 'Potato Starch',
        quantity: 440,
        unit: 'g',
        image: '/images/ingredients/potato-starch.jpg',
      },
      {
        item: 'Water for Potato Starch',
        quantity: 440,
        unit: 'g',
        image: '/images/ingredients/water.jpeg',
      }
    ]
  },
  {
    name: 'Dipping Sauce',
    image: '/images//dipping-sauce.jpg',
    ingredients: [
      {
        item: 'Minced Garlic',
        quantity: 2100,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg',
      },
      {
        item: 'Chopped Leek',
        quantity: 2100,
        unit: 'g',
        image: '/images/ingredients/chopped-leek.jpg',
      },
      {
        item: 'White Sugar',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Soy Sauce',
        quantity: 6300,
        unit: 'g',
        image: '/images/ingredients/soy-sauce.webp',
      },
      {
        item: 'Vinegar',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/vinegar-hwan-man.webp',
      },
      {
        item: 'Fine Chili Powder',
        quantity: 700,
        unit: 'g',
        image: '/images/ingredients/fine-chili-powder.webp'
      },
      {
        item: 'Mirin',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/mirin.jpg'
      },
      {
        item: 'Sesame Seeds',
        quantity: 700,
        unit: 'g',
        image: '/images/ingredients/sesame-seeds.jpg'
      }
    ]
  },
  {
    name: 'Rice Ball',
    image: '/images//rice-ball.jpg',
    ingredients: [
      {
        item: 'Cooked Rice',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/cooked-rice.jpg'
      },
      {
        item: 'Seaweed Flake',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/seaweed-flake.jpg'
      },
      {
        item: 'Tenkasu',
        quantity: 240,
        unit: 'g',
        image: '/images/ingredients/tenkasu.jpg'
      },
      {
        item: 'Seasoned Salt',
        quantity: 13,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg'
      },
      {
        item: 'Sesame Oil',
        quantity: '40',
        unit: 'g',
        image: '/images/ingredients/sesame-oil.jpg'
      }
    ]
  },
  {
    name: 'Kimchi Paste',
    image: '/images/kimchi-paste.jpg',
    ingredients: [
      {
        item: 'Coarse Chilli Powder',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/coarse-chilli-powder.jpg'
      },
      {
        item: 'Garlic',
        quantity: 650,
        unit: 'g',
        image: '/images/ingredients/garlic.jpg'
      },
      {
        item: 'Onion',
        quantity: 1300,
        unit: 'g',
        image: '/images/ingredients/onion.jpg'
      },
      {
        item: 'Salted Prawn',
        quantity: 750,
        unit: 'g',
        image: '/images/ingredients/salted-prawn.jpg'
      },
      {
        item: 'Brown Pear',
        quantity: 1500,
        unit: 'g',
        image: '/images/ingredients/brown-pear.jpg'
      },
      {
        item: 'Sugar',
        quantity: 1000,
        unit: 'g',
        image: '/images/ingredients/sugar.jpg'
      },
      {
        item: 'Kanari Fish Sauce',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/kabari-fish-sauce.jpg'
      },
      {
        item: 'Miwon',
        quantity: 100,
        unit: 'g',
        image: '/images/ingredients/miwon.png',
      },
      {
        item: 'Glutinous Rice Flour',
        quantity: 120,
        unit: 'g',
        image: '/images/ingredients/glutinous-rice-fllour.jpg'
      },
      {
        item: 'Water',
        quantity: 1200,
        unit: 'g',
        image: '/images/ingredients/water.jpeg'
      }
    ]
  },
  {
    name: 'Egg Roll',
    image: '/images/egg-roll.jpg',
    ingredients: [
      {
        item: 'Egg',
        quantity: 2,
        unit: 'L',
        image: '/images/ingredients/egg.jpg'
      },
      {
        item: 'Water',
        quantity: 250,
        unit: 'ml',
        image: '/images/ingredients/water.jpeg'
      },
      {
        item: 'Mirin',
        quantity: 100,
        unit: 'ml',
        image: '/images/ingredients/mirin.jpg'
      },
      {
        item: 'Seasoned Salt',
        quantity: 12.5,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg'
      },
      {
        item: 'Carrot',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/carrot.jpg'
      },
      {
        item: 'Spring Onion',
        quantity: 100,
        unit: 'g',
        image: '/images/ingredients/sring-onion.jpg'
      },
      {
        item: 'Roasted Kimbap Laver',
        quantity: 0.5,
        unit: 'sheet',
        image: '/images/ingredients/roasted-kimbap-laver.jpg'
      }
    ]
  },
  {
    name: 'Stir-fried Garlic Rice Sauce',
    image: '/images/stir-fried-garlic-rice-sauce.jpg',
    ingredients: [
      {
        item: 'Non Alcohol Mirin',
        quantity: 1000,
        unit: 'g',
        image: '/images/ingredients/non-alcohol-mirin.jpg'
      },
      {
        item: 'Oyster Sauce',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/oyster-sauce.jpg'
      },
      {
        item: 'Dark Soy Sauce',
        quantity: 100,
        unit: 'g',
        image: '/images/ingredients/dark-soy-sauce.jpg'
      }
    ]
  },
  {
    name: 'Bibim Noodle Sauce',
    image: '/images//bibim-noodle-sauce.jpg',
    ingredients: [
      {
        item: 'Seasoned Salt',
        quantity: 240,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg'
      },
      {
        item: 'Whtie Sugar',
        quantity: 2250,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg'
      },
      {
        item: 'Miwon',
        quantity: 80,
        unit: 'g',
        image: '/images/ingredients/miwon.png'
      },
      {
        item: 'Red Cheongyang Chilli Powder',
        quantity: 750,
        unit: 'g',
        image: '/images/ingredients/red-cheongyang-chilli-powder.jpg'
      },
      {
        item: 'Minced Garlic',
        quantity: 750,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg'
      },
      {
        item: 'Corn Syrup',
        quantity: 1500,
        unit: 'g',
        image: '/images/ingredients/corn-syrup.jpg'
      },
      {
        item: 'Thai Fish Sauce',
        quantity: 450,
        unit: 'g',
        image: '/images/ingredients/thai-fish-sauce.jpg'
      },
      {
        item: 'Kikoman Soy Sauce',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/kikoman-soy-sauce,webp'
      },
      {
        item: 'Sprite',
        quantity: 2250,
        unit: 'g',
        image: '/images/ingredients/sprite.jpg'
      },
      {
        item: 'Non Alcohol Mirin',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/non-alcohol-mirin.jpg'
      },
      {
        item: 'Vineger (Hwan Man)',
        quantity: 1500,
        unit: 'g',
        image: '/images/ingredients/vinegar-hwan-man.webp'
      }
    ]
  },
  {
    name: 'Cabbage Pickle',
    image: '/images//cabbage-pickle.jpg',
    ingredients: [
      {
        item: 'Minced Garlic',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg'
      },
      {
        item: 'Seasoned Salt',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg'
      },
      {
        item: 'White Sugar',
        quantity: 2800,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg'
      },
      {
        item: 'Yuju Cheong',
        quantity: 1000,
        unit: 'g',
        image: '/images/ingredients/yuju-cheong.jpg'
      },
      {
        item: 'Vinegar (Hwan Man)',
        quantity: 3500,
        unit: 'g',
        image: '/images/ingredients/vinegar-hwan-man.webp'
      },
      {
        item: 'Water',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/water.jpeg'
      },
      {
        item: 'Napa Cabbage',
        quantity: 20,
        unit: 'kg',
        image: '/images/ingredients/napa-cabbage.png'
      },
      {
        item: 'Coarse Sea Salt',
        quantity: 400,
        unit: 'g',
        image: '/images/ingredients/coarse-sea-salt.jpg'
      }
    ]
  },
  {
    name: 'Celery Pickle',
    image: '/images/celery-pickle.jpg',
    ingredients: [
      {
        item: 'Celery',
        quantity: 30,
        unit: 'kg',
        image: '/images/ingredients/celery.jpg'
      },
      {
        item: 'Jin Soy Sauce',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/jin-soy-sauce.jpg'
      },
      {
        item: 'Vinegar (Hwan man)',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/vinegar-hwan-man.webp'
      },
      {
        item: 'White Sugar',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg'
      },
      {
        item: 'Water',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/water.jpeg'
      },
      {
        item: 'Mirin',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/mirin.jpg'
      },
      {
        item: 'Red Chili',
        quantity: 15,
        unit: 'Pcs',
        image: '/images/ingredients/red-chili.jpg'
      },
      {
        item: 'White Onion',
        quantity: 2,
        unit: 'Pcs',
        image: '/images/ingredients/white-onion.jpg'
      }
    ]
  },
  {
    name: 'Chye Sim Pickle',
    image: '/images/chye-sim-pickle.jpg',
    ingredients: [
      {
        item: 'Chye Sim',
        quantity: 30,
        unit: 'kg',
        image: '/images/ingredients/celery.jpg'
      },
      {
        item: 'Jin Soy Sauce',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/jin-soy-sauce.jpg'
      },
      {
        item: 'Vinegar (Hwan man)',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/vinegar-hwan-man.webp'
      },
      {
        item: 'White Sugar',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg'
      },
      {
        item: 'Water',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/water.jpeg'
      },
      {
        item: 'Mirin',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/mirin.jpg'
      },
      {
        item: 'Red Chili',
        quantity: 15,
        unit: 'Pcs',
        image: '/images/ingredients/red-chili.jpg'
      },
      {
        item: 'White Onion',
        quantity: 2,
        unit: 'Pcs',
        image: '/images/ingredients/white-onion.jpg'
      }
    ]
  },
  {
    name: 'Chili Pickle',
    image: '/images/chili-pickle.jpg',
    ingredients: [
      {
        item: 'White Sugar',
        quantity: 2500,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg'
      },
      {
        item: 'Kikoman Soy Sauce',
        quantity: 2500,
        unit: 'g',
        image: '/images/ingredients/kikoman-soy-sauce.webp'
      },
      {
        item: 'Vinegar (Hwan Man)',
        quantity: 1300,
        unit: 'g',
        image: '/images/ingredients/vinegar-hwan-man.webp'
      },
      {
        item: 'Water',
        quantity: 4500,
        unit: 'g',
        image: '/images/ingredients/water.jpeg'
      },
      {
        item: 'Minced Garlic',
        quantity: 300,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg'
      },
      {
        item: 'Vietnamese Dried Chili',
        quantity: '700',
        unit: 'g',
        image: '/images/ingredients/vietnamese-dried-chili.webp'
      },
      {
        item: 'Green Chili',
        quantity: 4500,
        unit: 'g',
        image: '/images/ingredients/green-chili.png'
      },
      {
        item: 'Green Chili Padi',
        quantity: 2500,
        unit: 'g',
        image: '/images/ingredients/green-chili-padi.webp'
      }
    ],
    method: 'Slice the chili into thin pieces (1–2 mm). Chop the garlic. In a pot, boil water, sugar, and soy sauce — but do not add the garlic, vinegar, or chili flakes yet. Once the pickling sauce comes to a boil, turn off the heat and add the garlic and chili flakes. Let the sauce cool down to room temperature, then stir in the vinegar. Store it in the refrigerator.'
  },
  {
    name: 'Miso Sauce',
    image: '/images/miso-sauce.jpg',
    ingredients: [
      {
        item: 'White Sugar',
        quantity: 160,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg'
      },
      {
        item: 'Miwon',
        quantity: 80,
        unit: 'g',
        image: '/images/ingredients/miwon.png'
      },
      {
        item: 'Awase Miso',
        quantity: 1600,
        unit: 'g',
        image: '/images/ingredients/awase-miso.jpg'
      },
      {
        item: 'Non Alcohol Mirin',
        quantity: 480,
        unit: 'g',
        image: '/images/ingredients/non-alcohol-mirin.jpg'
      },
      {
        item: 'Corn Syrup',
        quantity: 480,
        unit: 'g',
        image: '/images/ingredients/corn-syrup.jpg'
      }
    ]
  },
  {
    name: 'Garlic Rice Prep',
    image: '/images/garlic-rice-prep.jpg',
    ingredients: [
      {
        item: 'Cooked Rice',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/cooked-rice.jpg'
      },
      {
        item: 'Minced Garlic',
        quantity: 220,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg'
      },
      {
        item: 'Unsalted Butter',
        quantity: 160,
        unit: 'g',
        image: '/images/ingredients/unsalted-butter.jpg'
      },
      {
        item: 'Seasoned Salt',
        quantity: 15,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg'
      },
    ]
  },
  {
    name: 'Bibim Noodle Chicken',
    image: '/images/bibim-noodle-chicken.jpg',
    ingredients: [
      {
        item: 'Minced Chiken Tender',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/minced-chiken-tender.jpg'
      },
      {
        item: 'Non Alcohol - Sancho Soy Sauce',
        quantity: 320,
        unit: 'g',
        image: '/images/ingredients/non-alcohol-chicken-sansho-soy-sauce.jpg'
      },
      {
        item: 'Dark Soy Sauce',
        quantity: 40,
        unit: 'g',
        image: '/images/ingredients/dark-soy-sauce.jpg'
      },
      {
        item: 'Cooking Oil',
        quantity: '',
        unit: 'g',
        image: '/images/ingredients/cooking-oil.jpg'
      }
    ]
  },
  {
    name: "Minari Water Snail Sauce",
    image: '/images/minari-water-snail-sauce.jpg',
    ingredients: [
      {
        item: 'Minced Garlic',
        quantity: 667,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg'
      },
      {
        item: 'White Sugar',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg'
      },
      {
        item: 'Jin Soy Sauce',
        quantity: 1000,
        unit: 'g',
        image: '/images/ingredients/jin-soy-sauce.jpg'
      },
      {
        item: 'Black Pepper',
        quantity: 12,
        unit: 'g',
        image: '/images/ingredients/black-pepper.jpg'
      },
      {
        item: 'Dark Soy Sauce',
        quantity: 1000,
        unit: 'g',
        image: '/images/ingredients/dark-soy-sauce.jpg'
      },
      {
        item: 'Hwanman Vinegar',
        quantity: 4660,
        unit: 'g',
        image: '/images/ingredients/hwanman-vinegar.jpg'
      },
      {
        item: 'Coarse Chili Powder',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/coarse-chili-powder.jpg'
      },
      {
        item: 'Corn Syrup',
        quantity: 3330,
        unit: 'g',
        image: '/images/ingredients/corn-syrup.jpg'
      },
      {
       item: 'Gochujan',
       quantity: 2000,
       unit: 'g',
       image: '/images/ingredients/gochujang.jpg' 
      },
      {
        item: 'Sesame',
        quantity: '',
        unit: 'g',
        image: '/images/ingredients/sesame.jpg'
      }
    ]
  },
  {
    name: 'Cold Soft Tofu Sauce',
    image: '/images/cold-soft-tofu-sauce',
    ingredients: [
      {
        item: 'Soy Sauce',
        quantity: 1200,
        unit: 'g',
        image: '/images/ingredients/soy-sauce.jpg'
      },
      {
        item: 'Coarse Chili Powder',
        quantity: 120,
        unit: 'g',
        image: '/images/ingredients/coarse-chili-powder.jpg'
      },
      {
        item: 'Minced Garlic',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg'
      },
      {
        item: 'Corn Syrup',
        quantity: 280,
        unit: 'g',
        image: '/images/ingredients/corn-syrup.jpg'
      },
      {
        item: 'Sesame Oil',
        quantity: 800,
        unit: 'g',
        image: '/images/ingredients/sesame.jpg'
      },
      {
        item: 'Sesame Seeds',
        quantity: 320,
        unit: 'g',
        image: '/images/ingredients/sesame-seeds.jpg'
      },
      {
        item: 'Spring Onion',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/spring-onion.jpg'
      },
      {
        item: 'Green Chili',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/green-chili.jpg'
      },
      {
        item: 'Red Chili',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/red-chili.jpg'
      }
    ]
  },
  {
    name: 'SGO Doenjang Base',
    image: '/images/sgo-doenjang-base.jpg',
    ingredients: [
      {
        item: 'Kikoman Soy Sauce',
        quantity: 180,
        unit: 'g',
        image: '/images/ingredients/kikoman-soy-sauce.jpg'
      },
      {
        item: 'Dark Soy Sauce',
        quantity: 180,
        unit: 'g',
        image: '/images/ingredients/dark-soy-sauce.jpg'
      },
      {
        item: 'Non Alcohol Mirin',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/non-alcohol-mirin.jpg'
      },
      {
        item: 'Miwon',
        quantity: 180,
        unit: 'g',
        image: '/images/ingredients/miwon.png'
      },
      {
        item: 'Enchovy Powder',
        quantity: 150,
        unit: 'g',
        image: '/images/ingredients/enchovy-powder.jpg'
      },
      {
        item: 'Red Cheongyang Chilli Powder',
        quantity:  240,
        unit: 'g',
        image: '/images/ingredients/red-cheong-yang-chili-powder.jpg'
      },
      {
        item: 'Soybean Paste',
        quantity: 1500,
        unit: 'g',
        image: '/images/ingredients/soybean-paste.jpg'
      },
      {
        item: 'Cheonggukjang',
        quantity: 2700,
        unit: 'g',
        image: '/images/ingredients/cheonggukjang.jpg'
      },
      {
        item: 'White Radish',
        quantity: 3600,
        unit: 'g',
        image: '/images/ingredients/white-radish.jpg'
      },
      {
        item: 'Leek (Green Part)',
        quantity: 1500,
        unit: 'g',
        image: '/images/ingredients/leek.jpg'
      },
      {
        item: 'White Onion',
        quantity: 2400,
        unit: 'g',
        image: '/images/ingredients/white-onion.jpg'
      },
      {
        item: 'water',
        quantity: 12000,
        unit: 'g',
        image: '/images/ingredients/water.jpg'
      }
    ]
  }
];

export default recipes