import WorkoutModels from '../models/WorkoutModels.js'
import mongoose  from 'mongoose'

// get all workouts
const getWorkouts= async(req,res)=>{
    const workout=await WorkoutModels.find({}).sort({createAt:-1})
    res.status(200).json({workout})
}

// get single workouts
 const getWorkout= async(req,res)=>{
    const { id }= req.params
      //check if id is match with the one we have in db
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workouts in database"})
    }
    const workout= await WorkoutModels.findById(id)
  
  

    if(!workout){
        return res.status(404).json({error:"no such workouts in database"})
    }
    res.status(200).json({workout})
 }

// create new workouts
 const createWorkouts= async(req,res)=>{
    const {title,reps,load}=req.body
    //add doc to db
    try {
     const Workout= await WorkoutModels.create({title,reps,load})
     res.status(200).json({Workout})
    } catch (error) {
     res.status(404).json({error:error.message})
    }
     }
 


 // delete a workouts
const deleteWork=async(req,res)=>{
    const {id}= req.params
      //check if id is match with the one we have in db
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workouts in database"})
    }
    const Workout= await WorkoutModels.findOneAndDelete({_id: id})
    if(!Workout){
        return res.status(404).json({error:"no such workouts in database"})
    }
    res.status(200).json({workout})
}

 // update a workouts
    
   const updateWork=async(req,res)=>{
      
    const { id }= req.params
      //check if id is match with the one we have in db
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workouts in database"})
    }
       const workout= await WorkoutModels.findOneAndUpdate({_id:id},{
        ...req.body
       })

       if(!workout){
        return res.status(404).json({error:"no such workouts in database"})
    }
    res.status(200).json({workout})
   }


 export  {
    createWorkouts,
    getWorkouts,
    getWorkout,
    deleteWork,
    updateWork
}