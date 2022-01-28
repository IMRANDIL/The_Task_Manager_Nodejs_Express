const Task = require('../models/schema')



//get....

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }


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

const getSpecTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${id}` });
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}


//update task...

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            res.status(404).json({ msg: `No task with id: ${id}` })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}


//delete task...

const deleteSpecTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.deleteOne({ _id: id });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${id}` });
        }
        res.status(200).json({ msg: `Successfully deleted this id: ${id}` })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}




module.exports = {
    getAllTasks,
    updateTask,
    getSpecTask,
    deleteSpecTask,
    createTask
}