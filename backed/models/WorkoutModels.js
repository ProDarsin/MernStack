import mongoose from 'mongoose'

const Schema= mongoose.Schema
const workoutSchema= new Schema({
    title:{
        type:String,
        require:true
    },
    reps:{
        type:String,
        require:true
    },
    load:{
        type:String,
        require:true
    }
},{timestamps:true})

export default mongoose.model('Workout',workoutSchema)