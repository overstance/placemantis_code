const mongoose = require('mongoose');
const { Schema } = mongoose;

const place = new Schema({
  name: String,
  domID: String,
  capital: String,
  flag: Boolean,
  emblem: Boolean,
  currency: String,
  territory: Boolean,
  sovereignState: String,
  commonLanguages: Array,
  geographicFeatures: Object
});

module.exports = mongoose.model('places', place);
