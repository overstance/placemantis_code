const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  avatarType: String,
  Rank: {
    type: String,
    default: 'N/A'
  },
  registrationDate: {
    type: Date,
    default: Date.now()
  },
  savedMission: Object,
  bestScoreAfrica: {
    type: Number,
    default: 0
  },
  bestScoreOceania: {
    type: Number,
    default: 0
  },
  bestScoreEurope: {
    type: Number,
    default: 0
  },
  bestScoreNorthAmerica: {
    type: Number,
    default: 0
  },
  bestScoreAsia: {
    type: Number,
    default: 0
  },
  bestScoreSouthAmerica: {
    type: Number,
    default: 0
  },
  bestScoreSouthernEurope: {
    type: Number,
    default: 0
  },
  bestScoreSCAsia: {
    type: Number,
    default: 0
  },
  bestScoreWCAfrica: {
    type: Number,
    default: 0
  },
  bestScoreCaribbean: {
    type: Number,
    default: 0
  },
  bestScoreIndiesAfrica: {
    type: Number,
    default: 0
  },
  bestScoreAsiaOceania: {
    type: Number,
    default: 0
  },
  bestScoreAfricaAsia: {
    type: Number,
    default: 0
  }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema);
