const express=require('express');
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();
const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('So this is a task management system now');
});

const userRoute=require('./routes/userRoute');
app.use('/user',userRoute);

const taskRoute=require('./routes/taskRoute');
app.use('/task',taskRoute);

app.listen(PORT,()=>{
    console.log('Listening to port 3000');
});

