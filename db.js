const mongoose=require('mongoose');
require('dotenv').config();

const mongoURL=process.env.MONGODB_URL;

mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB');
});

db.on('error',(error)=>{
    console.log('Error:',error);
});

db.on('disconnected',()=>{
    console.log('Disconnected to MongoDB');
});

module.exports=db;
