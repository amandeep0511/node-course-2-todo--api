const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');

var id = '5ca376a2b0c90d156c8d8f38';
if(!ObjectID.isValid(id))
console.log("Id not valid");

Todo.find({
  _id: id
}).then((todos)=>{
  console.log(todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log(todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo)
    return console.log("Id not find");
  console.log(todo);
}).catch((e)=>{
  console.log(e);
});
