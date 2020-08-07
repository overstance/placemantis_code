const passport = require('passport');
const mongoose = require('mongoose');

const LocalStrategy = require('passport-local').Strategy;
// const User = mongoose.model('users');

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  done(null, user);
});

passport.use(new LocalStrategy(User.authenticate()));
