const express=require('express');
const router=express.Router();
const task=require('../models/task');
const {jwtAuthMiddleware, generateToken}=require('../jwt');

router.post('/create',jwtAuthMiddleware,async(req,res)=>{
    const userData=req.user;

    try{
        const data=req.body;
        const newTask=new task(data);
        newTask.createdBy.id=userData.id;
        newTask.createdBy.name=userData.name;
        const response=await newTask.save();
        console.log('Task Saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

router.get('/', async(req,res)=>{
    try{
        const response=await task.find();
        console.log('Task fetched');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});    
    }
});

router.get('/:status', async(req,res)=>{
    {
        const Status=req.params.status;
        console.log(Status);
        if((Status === 'To Do')|| (Status === 'In Progress') || (Status ==='Done')){
            const response=await task.find({status:Status});
            res.status(200).json(response);
        }else{
            return res.status(404).json({message:'invalid status'});
        }

    }
})

router.put('/update/:id',jwtAuthMiddleware,async(req,res)=>{
    try{
        const id=req.params.id;
        const updatedData=req.body;
        const response=await task.findByIdAndUpdate(id,updatedData,{
            new:true,
            runValidators:true
        });
        if(!response){
            res.status(404).json({Error:"Task Does not exist"});
        }
        console.log('Task Updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'}); 
    }
});

router.delete('/delete/:id',jwtAuthMiddleware,async(req,res)=>{
    try{
        const id=req.params.id;
        const userData=req.user;

        const Task=await task.findById(id);
        if(userData.id != Task.createdBy.id){
            return res.status(403).json({message:'You are not allowed to delete this task'});
        }

        const response=await task.findByIdAndDelete(id);
        if(!response){
            res.status(404).json({Error:"Task Does not exist"});
        }
        console.log('Task Deleted');
        res.status(200).json({Message:'Task Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});   
    }
});

module.exports=router;

