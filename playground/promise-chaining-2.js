require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5dfbf497e92c610f56680ed2')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//5dfbf6697b77210f69f92121

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5dfbf6697b77210f69f92121')
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
