const Task = require('../models/schema')



//get....

const getAllTasks = (req, res) => {
    res.send('all items');

}

//post...

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

//get specific task...

const getSpecTask = (req, res) => {
    res.json({ id: req.params.id })
}


//update task...

const updateTask = (req, res) => {
    res.send('update task')
}


//delete task...

const deleteSpecTask = (req, res) => {
    res.send('delete task')
}




module.exports = {
    getAllTasks,
    updateTask,
    getSpecTask,
    deleteSpecTask,
    createTask
}