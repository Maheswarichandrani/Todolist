import Task from '../models/taskModel.js'
import mongoose from 'mongoose'

//@ creating a new-task

export const addNewTask = async (req,res) => {
    try {
        const {
            name,
            description,
            date,
            priority,
            remainder,
            tags,
        } = req.body

        const newTask = await Task.create({
            name,
            description,
            date,
            priority,
            remainder,
            tags,
            createdBy: req.userId
        })

        res.status(200).json({
            success: true,
            message: "Task created successfully",
            task: {
                ...newTask._doc
            }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error in creating task",
        })
        console.log(error.message)
    }
}

//@Update a task

export const updateTask = async(req,res) => {
    try {
        const task = await Task.findById(req.params.id)

        if(!task){
            return res.status(404).json({success: false,message: "Task Not found"})
        }

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {...req.body,createdBy: req.userId},
            {new : true},
        )

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task: {
                ...updatedTask._doc
            }
        });
    } catch (error) {
        res.status(400).json({success: false,message: "Error in updating a task"})
        console.log(error.message)
    }
}

//@Delete Task

export const deleteTask = async(req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).json({success: false,message: "Task Not found"})
        }

        return res.status(200).json({success: true,message: "Task deleted successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(400).json({success: false,message: "Failed to delete task"});
    }
}

//@Get all tasks

export const getAllTasks = async(req,res) => {
    try {
        const tasks = await Task.find({createdBy: new mongoose.Types.ObjectId(req.userId)}).sort({createdAt: -1})

        console.log(tasks)
        console.log("User Id: ",req.userId)
        res.status(200).json({
            success: true,
            tasks
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({message: "Error is fetching the data"})
    }
}

//get-completed tasks

export const getCompletedTasks = async(req,res) => {
    try {
        const completedTasks = await Task.find({
            createdBy: req.userId,
            completed: true
        })

        res.status(200).json(
            {
                success: true,
                message: "Completed Tasks",
                completeTasks: {
                    ...completedTasks._doc
                }
            })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({message: "Error is fetching the completed data"})
    }
}

