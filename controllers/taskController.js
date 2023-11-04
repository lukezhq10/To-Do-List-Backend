const mongoose = require('mongoose');
const Task = require('../models/Task');

const add_task = async (req, res) => {
    // add a task to the DB
    const { title, status } = req.body;

    const task = new Task({
        title,
        status
    });

    try {
        if (!title) {
            return res.status(400).json({
                error: 'All fields are required'
            })
        }
        await task.save()
        res.status(200).json({
            message: 'Task added'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }

    console.log(task)
}

const get_tasks = async (req, res) => {
    // get all undone and done tasks
    // sort tasks alphatically by title
    // only give max 10 most recent done tasks
    try {
        const undoneTasks = await Task.find({ status: false })
            .sort({ title: 1 })
            .exec()

        const doneTasks = await Task.find({ status: true })
            .sort({ createdAt: -1 })
            .limit(10)
            .exec()

        return res.status(200).json({ undoneTasks, doneTasks })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }
}

const update_task = async (req, res) => {
    // update task status
    try {
        const id = req.params.id;
        const task = await Task.findById(id);

        if (!task) {
            return res.status(400).json({
                error: 'Task not found'
            })
        }

        task.status = !task.status;
        await task.save();

        return res.status(200).json({
            message: 'Task status updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }
}

const delete_task = async (req, res) => {
    // delete task from DB
    try {
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(400).json({
                error: 'Task not found'
            })
        }
        return res.status(200).json({
            message: 'Task deleted successfully'
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}

module.exports = {
    add_task,
    get_tasks,
    update_task,
    delete_task
}