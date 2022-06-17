const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET methods are disabled!");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("MENTENANCE going on!");
// });

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Listening on port " + port);
});

////////////////////////////////////////////////////////////////////////////////
// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("62a0bb4212ec5c968ba01097");
//   // await task.populate("owner");
//   // console.log(task.owner);

//   const user = await User.findById("62a0bb1812ec5c968ba01091");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };

// main();
