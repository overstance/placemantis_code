const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  avatarType: String,
  rank: {
    type: String,
    default: 'N/A'
  },
  registrationDate: {
    type: Date,
    default: Date.now()
  },
  savedMission: Object,
  bestScoreAfrica: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreOceania: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreEurope: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreNorthAmerica: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreAsia: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreSouthAmerica: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreSouthernEurope: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreSCAsia: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreWCAfrica: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreCaribbean: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreIndiesAfrica: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreAsiaOceania: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreAfricaAsia: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreWorld: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  },
  bestScoreMultilevel: {
    type: Object,
    default: {
      simple: 0,
      hard: 0
    }
  }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema);
