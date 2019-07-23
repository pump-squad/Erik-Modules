const filter = require('../client/src/lib/filter.js');

const products =
  [
    {
      "colors": [
        "DARKBLUE",
        "DARKGRAY"
      ],
      "activities": [
        "TREKKING"
      ],
      "materials": [
        "INSULATED",
        "PHASIC"
      ],
      "_id": "5d2ce88b0441608cf4e9599e",
      "gender": "M",
      "category": "SHOE",
      "name": "Denali SHOE",
      "image": "/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Mens/Norvan-LD-GTX-Shoe-Conifer-Everglade.jpeg",
      "price": "$195 USD",
      "rating": 61,
      "numRatings": "(12)",
      "__v": 0
    },
    {
      "colors": [
        "LAVENDER",
        "BLUE",
        "ORANGE"
      ],
      "activities": [
        "ALL ROUND",
        "SKI/SNOWBOARD"
      ],
      "materials": [
        "SYNTHETIC INSULATION",
        "SOFTSHELL"
      ],
      "_id": "5d2ce88b0441608cf4e959df",
      "gender": "M",
      "category": "SHOE",
      "name": "Denali SHOE",
      "image": "/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Mens/Norvan-VT-GTX-Shoe-Orion-LICHEN.jpeg",
      "price": "$200 USD",
      "rating": 80,
      "numRatings": "(17)",
      "__v": 0
    },
    {
      "colors": [
        "YELLOW",
        "DARKRED",
        "GOLD"
      ],
      "activities": [
        "ROCK CLIMBING"
      ],
      "materials": [
        "NYLON",
        "SYNTHETIC FIBRE"
      ],
      "_id": "5d2ce88b0441608cf4e95a28",
      "gender": "U",
      "category": "GLOVE",
      "name": "Denali GLOVE",
      "image": "/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Mens/Alpha-FL-Glove-Graphite-Cardinal.jpeg",
      "price": "$159 USD",
      "rating": 60,
      "numRatings": "(13)",
      "__v": 0
    },
    {
      "colors": [
        "MEDIUMBLUE"
      ],
      "activities": [
        "ALPINE CLIMBING"
      ],
      "materials": [
        "CORELOFT"
      ],
      "_id": "5d2ce88b0441608cf4e95a5b",
      "gender": "U",
      "category": "MITTEN",
      "name": "Denali MITTEN",
      "image": "/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Mens/Down-Mitten-Black.jpeg",
      "price": "$129 USD",
      "rating": 77,
      "numRatings": "(8)",
      "__v": 0
    },
    {
      "colors": [
        "INDIGO",
        "DARKBLUE",
        "PINK"
      ],
      "activities": [
        "TRAINING/FITNESS"
      ],
      "materials": [
        "DOWN FILL",
        "LIGHTWEIGHT"
      ],
      "_id": "5d2ce88b0441608cf4e95aec",
      "gender": "W",
      "category": "4.5",
      "name": "Denali 4.5",
      "image": "/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Womens/Creston-Short-10.5-W-Iolite.jpeg",
      "price": "$89 USD",
      "rating": 0,
      "numRatings": "(0)",
      "__v": 0
    },
    {
      "colors": [
        "DARKBLUE",
        "DARKRED"
      ],
      "activities": [
        "TREKKING"
      ],
      "materials": [
        "CORELOFT"
      ],
      "_id": "5d2ce88b0441608cf4e95afe",
      "gender": "W",
      "category": "PARKA",
      "name": "Denali PARKA",
      "image": "/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/Womens/Firebee-AR-Parka-W-Twilight.jpeg",
      "price": "$949 USD",
      "rating": 100,
      "numRatings": "(3)",
      "__v": 0
    }
  ];

test('filters products who have a certain color', () => {
  expect(filter(products, {colors:["YELLOW"]}).length).toBe(1);
});

test('filters should return none when config doesn\'t exist', () => {
  expect(filter(products, {activities:["DANCING"]}).length).toBe(0);
})

test('filters should return none when config does not match exactly', () => {
  expect(filter(products, {activities:["TREKKING", "DANCING"]}).length).toBe(0);
})

test('filters should return none when config and products do not exist', () => {
  expect(filter().length).toBe(0);
})