//get....

const getAllTasks = (req, res) => {
    res.send('all items');

}

//post...

const createTask = (req, res) => {
    res.send('create tasks')
}

//get specific task...

const getSpecTask = (req, res) => {
    res.send('get single task')
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