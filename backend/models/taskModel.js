import mongoose from 'mongoose'

const taskModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        enum: ["low","medium","high"],
        default: "medium",
        required: true
    },
    remainder: {
        type: Date,
        required: false
    },
    tags: {
        type: [String],
        default: [],
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Task = mongoose.model("Task",taskModel)
export default Task