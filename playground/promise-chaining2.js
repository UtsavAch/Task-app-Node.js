require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("62938ae781dd61f2b891edf0")
//   .then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = Task.findByIdAndDelete(id);
  const incompleteTaskCount = Task.countDocuments({ completed: false });
  return incompleteTaskCount;
};

deleteTaskAndCount("6298c42aa14e445ea5b830bc")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.log(e));
