import express from 'express'
import {
    createWorkouts,
    getWorkouts,
    getWorkout,
    deleteWork,
    updateWork
} from '../controllers/workoutController.js'
const router=express.Router()

// get all workouts
router.get('/',getWorkouts)

// get single workouts
router.get('/:id',getWorkout)

// post new workouts
router.post('/',createWorkouts)

    
 // delete a workouts
router.delete('/:id',deleteWork)   

// update a workouts
router.patch('/:id',updateWork)    
export default router