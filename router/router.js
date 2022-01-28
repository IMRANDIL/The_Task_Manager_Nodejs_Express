const router = require('express').Router();

const { getAllTasks, createTask, updateTask, deleteSpecTask, getSpecTask } = require('../controllers/tasks')

//get...routess.

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getSpecTask).patch(updateTask).delete(deleteSpecTask)





module.exports = router;