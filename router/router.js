const router = require('express').Router();

const { getAllTasks, createTask, updateTask, deleteSpecTask, getSpecTask } = require('../controllers/tasks')

//get...

router.get('/', getAllTasks)





module.exports = router;