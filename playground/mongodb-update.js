//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client)=>{
  if(err)
  return console.log('Unable to connect to mongodb server');

  console.log("Connected to mongodb server");

  const db=client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ca23c797f57074cb0afad79')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ca23f5cdaf9d65e540765fb')
  },{
    $inc:{
      age:1
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });
  //client.close();
});
