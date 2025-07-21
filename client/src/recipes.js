// Your recipe data
const recipes = [
  {
    name: 'Yuzu Kosho',
    image: '/images/yuzu-kosho.jpg',
    ingredients: [
      {
        item: 'Seasoned Salt',
        quantity: 420,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'Miwon',
        quantity: 60,
        unit: 'g',
        image: '/images/ingredients/miwon.png',
      },
      {
        item: 'Black Pepper Powder',
        quantity: 45,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.webp',
      },
      {
        item: 'Yuju Cheong',
        quantity: 3900,
        unit: 'g',
        image: '/images/ingredients/yuju-cheong.jpg',
      },
      {
        item: 'Korean Chili',
        quantity: 6000,
        unit: 'g',
        image: '/images/ingredients/korean-chili.jpg',
      },
      {
        item: 'Chili Padi',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/chili-padi.jpg',
      }
    ]
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
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg',
      },
      {
        item: 'White Sugar',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Miwon',
        quantity: 100,
        unit: 'g',
        image: '/images/ingredients/miwon.png',
      },
      {
        item: 'Black Pepper Powder',
        quantity: 20,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.webp',
      },
      {
        item: 'Seasoned Salt',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'White Onion',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/white-onion.jpg',
      },
      {
        item: 'Plum Extract',
        quantity: 280,
        unit: 'g',
        image: '/images/ingredients/plum-extract.jpg',
      },
      {
        item: 'Corn Oil',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/corn-oil.webp',
      },
      {
        item: 'Sesame Oil',
        quantity: 400,
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
        image: '/images/ingredients/vietnamese-dried-chili.jpg',
      },
      {
        item: 'Sancho Powder',
        quantity: 80,
        unit: 'g',
        image: '/images/ingredients/sancho-powder.jpg',
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
        image: '/images/ingredients/rice-wine.jpg',       
      },
      {
        item: 'Kikoman Soy Sauce',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/kikoman-say-sauce.jpg',
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
        item: 'Sugar',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/suar.jpg',
      },
      {
        item: 'Soy Sauce',
        quantity: 6300,
        unit: 'g',
        image: '/images/ingredients/soy-sauce.jpg',
      },
      {
        item: 'Vinegar',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/vinegar.jpg',
      },
      {
        item: 'Fine Chilli Powder',
        quantity: 700,
        unit: 'g',
        image: '/images/ingredients/fine-chilli-powder.jpg'
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
        item: 'Seansoned Salt',
        quantity: 13,
        unit: 'g',
        image: '/images/ingredients/Seasoned-salt.jpg'
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
        item: 'Fish Sauce',
        quantity: 0,
        unit: 'g',
        image: '/images/ingredients/fish-sauce.jpg'
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
        quantity: 4,
        unit: 'L',
        image: '/images/ingredients/egg.jpg'
      },
      {
        item: 'Water',
        quantity: 500,
        unit: 'ml',
        image: '/images/ingredients/water.jpeg'
      },
      {
        item: 'Mirin',
        quantity: 200,
        unit: 'ml',
        image: '/images/ingredients/mirin.jpg'
      },
      {
        item: 'Seasoned Salt',
        quantity: 25,
        uniit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg'
      },
      {
        item: 'Carrot',
        quantity: 400,
        unit: 'g',
        image: '/images/ingredients/carrot.jpg'
      },
      {
        item: 'Spring Onion',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/sring-onion.jpg'
      }
    ]
  },
  {
    name: 'Stir-fried Garlic Rice Sauce',
    image: '/images/stir-fried-garlic-rice-sauce.jpg',
    ingredients: [
      {
        item: 'Mihyang',
        quantity: 1000,
        unit: 'g',
        image: '/images/ingredients/mihyang.jpg'
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
        image: '/images/ingredients/kikoman-soy-sauce.jpg'
      },
      {
        item: 'Sprite',
        quantity: 2250,
        unit: 'g',
        image: '/images/ingredients/sprite.jpg'
      },
      {
        item: 'Mihyang',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/mihyang.jpg'
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
        image: '/images/ingredients/kikoman-soy-sauce.jpg'
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
        
      }
    ]
  }
];

export default recipes