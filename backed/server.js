import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import  workoutsRoutes from './routes/workouts.js'


// start express app
const app= express()
// start dot env file
dotenv.config()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
  next()
})
//routers
 app.use('/api/workouts',workoutsRoutes)

// connect to db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  //listen for request  when we have connect to database
app.listen(process.env.PORT,()=>{
  console.log(" connect to db & listening on port",process.env.PORT);
})
})
.catch((error)=>{
  console.log(error);
})
