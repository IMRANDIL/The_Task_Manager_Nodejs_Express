const Task = require('../models/schema')

const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error')

//get....

const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({});
    res.status(200).json({ tasks })





})

//post...

const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body)
    res.status(201).json({ task })


})

//get specific task...

const getSpecTask = asyncWrapper(async (req, res, next) => {

    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    if (!task) {
        return next(createCustomError(`No task with id: ${id}`, 404))

    }
    res.status(200).json({ task })


})


//update task...

const updateTask = asyncWrapper(async (req, res, next) => {

    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return next(createCustomError(`No task with id: ${id}`, 404))
    }
    res.status(200).json({ task })



})


//delete task...

const deleteSpecTask = asyncWrapper(async (req, res, next) => {

    const { id } = req.params;
    const task = await Task.deleteOne({ _id: id });
    if (!task) {
        return next(createCustomError(`No task with id: ${id}`, 404))
    }
    res.status(200).json({ msg: `Successfully deleted this id: ${id}` })


})




module.exports = {
    getAllTasks,
    updateTask,
    getSpecTask,
    deleteSpecTask,
    createTask
}