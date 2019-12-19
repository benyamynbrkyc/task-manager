const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes('password'))
        throw new Error('Password cannot contain "password"');
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  }
});

const Task = mongoose.model('Task', {
  description: {
    required: true,
    trim: true,
    type: String
  },
  completed: {
    default: false,
    type: Boolean
  }
});

// const eda = new User({
//   name: '   Eda   ',
//   email: 'EDA@gmail.com',
//   age: 19,
//   password: 'eda123'
// });

// eda
//   .save()
//   .then(me => {
//     console.log(me);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   });

const zadaca = new Task({
  description: '      Uraditi      Spark      zadacu        '
});

zadaca
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log('Error', err);
  });
