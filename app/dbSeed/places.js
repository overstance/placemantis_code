const Place = require('../models/Place');

const places = [
  {
    name: 'Cape Verde',
    domID: 'Cape_Verde',
    capital: 'Praia',
    flag: true,
    emblem: true,
    currency: 'Cape Verdean Escudo(CVE)',
    territory: false,
    sovereignState: null,
    commonLanguages: ['Portuguese'],
    geographicFeatures: {
      elevation: 'Pico do Fogo',
      forest: '',
      desert: '',
      waters: ''
    }
  },
  {
    name: 'Mauritania',
    domID: 'Mauritania',
    capital: 'Nouakchott',
    flag: true,
    emblem: true,
    currency: 'Ouguiya(MRU)',
    territory: false,
    sovereignState: null,
    commonLanguages: ['Arabic'],
    geographicFeatures: {
      elevation: 'Adrar Plateau',
      forest: '',
      desert: '',
      waters: 'Senegal River'
    }
  },
  {
    name: 'Nigeria',
    domID: 'Nigeria',
    capital: 'Nouakchott',
    flag: true,
    emblem: true,
    currency: 'Ouguiya(MRU)',
    territory: false,
    sovereignState: null,
    commonLanguages: ['Arabic'],
    geographicFeatures: {
      elevation: 'Adrar Plateau',
      forest: '',
      desert: '',
      waters: 'Senegal River'
    }
  }
];

function seedDB() {
  places.forEach(function (seed) {
    Place.create(seed, function (err, place) {
      if (err) {
        console.log(err);
      } else {
        place.save();
      }
    });
  });
}

module.exports = seedDB;
