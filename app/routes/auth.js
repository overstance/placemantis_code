const User = require('../models/User');

module.exports = (app) => {
  app.post('/api/register_user', (req, res) => {
    User.register(
      new User({
        username: req.body.username,
        email: req.body.email,
        avatarType: req.body.avatarType
      }),
      req.body.password,
      (err, user) => {
        if (err) {
          console.log(err);
          res.send({ error: err.name });
        } else if (user) {
          res.send('User Registration Successful');
        } else {
          res.send({ error: 'unknown error' });
        }
      }
    );
  });

  app.get('/api/check_username_availability', (req, res) => {
    User.findOne({ username: req.query.username }, (err, user) => {
      if (err) {
        res.send({ error: error });
      } else if (user) {
        if (user._id) {
          res.send('Username Unavailable');
        }
      } else {
        res.send('Username Available');
      }
    });
  });
};
