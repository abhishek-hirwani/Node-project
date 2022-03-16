
const Task= require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-erros')

//get all the data from the api
const getAllTasks = asyncWrapper( async (req, res)=>{
  
  const tasks = await Task.find({})
  res.status(200).json({tasks})
 
})

//creating the new user data in a api
const createTask =asyncWrapper( async(req, res)=>{
 
  const task = await Task.create(req.body)
  res.status(201).json({task})
 
 })
 
//getting the data from api
const getTask = asyncWrapper( async (req, res, next)=>{
 
  const {id: taskId} = req.params
  const task = await Task.findOne({_id:taskId})
  if(!task){
   
   return next(createCustomError(`no task with id : ${taskId}`,404))
  }
  res.status(200).json({task})
})

//deleting the data from api
const deleteTask = asyncWrapper( async (req, res, next)=>{

  const {id: taskId }=req.params
  const task= await Task.findOneAndDelete({_id:taskId})
  if(!task){
   return next(createCustomError(`no task with id : ${taskId}`,404))
  }
  res.status(200).json({task})
 
})

//updating the data from api
const updateTask =asyncWrapper(async (req, res, next)=>{

 const { id: taskId } = req.params
 const task = await Task.findOneAndUpdate({_id: taskId }, req.body, {
  new: true,
  runValidators:true,
 })

 if (!task){
  return next(createCustomError(`no task with id : ${taskId}`,404))
 }
 res.status(200).json({ task })

})

module.exports={
 getAllTasks,
 getTask,
 createTask,
 updateTask,
 deleteTask,
}

