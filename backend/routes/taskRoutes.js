import express from 'express'
const router = express.Router()
import { addNewTask ,deleteTask,getAllTasks,getCompletedTasks,updateTask} from '../controllers/taskControllers.js';
import {verifyToken} from '../middleware/verifyToken.js'

router.post('/addTask',verifyToken,addNewTask)
router.put('/update-task/:id',verifyToken,updateTask)
router.delete('/delete-task/:id',verifyToken,deleteTask)
router.get('/get-all',verifyToken,getAllTasks)
router.get('/get-completed-tasks',verifyToken,getCompletedTasks)

export default router;