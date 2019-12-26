const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const user_router = require('./routes/user');
const task_router = require('./routes/tasks');

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
