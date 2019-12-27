const express = require('express');
require('./db/mongoose');
const user_router = require('./routes/user');
const task_router = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method == 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site under maintenance');
// });

app.use(express.json());
app.use(user_router);
app.use(task_router);

app.listen(port, () => {
  console.log('Server is up on port', port);
});

const main = async () => {
  // const task = await Task.findById('5e0625e916c4d205109dc63b');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);
  // const user = await User.findById('5e061f65537107049ab28d8e');
  // await user.populate('tasks').execPopulate();
  // console.log(user.tasks);
};

main();
