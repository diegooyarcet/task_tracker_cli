const { readTasks, writeTasks } = require('./fileService');

const addTask = (description) => {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log("Task added successfully!");
};

const updateTask = (id, description) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id ==id);

    if(!task) return console.log("Task not found :(");

    task.description = description;
    task.updated = new Date().toISOString();
    writeTasks(tasks);
    console.log("Task updated successfully!");
};

const deleteTask = (id) => {
    let tasks = readTasks();
    tasks = tasks.filter(t => t.id != id);
    writeTasks(tasks);
    console.log("Task deleted successfully!");
};

const markStatus = (id, status) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id == id);

    if (!task) return console.log("Task not found :(");

    task.status = status;
    task.updatedAt = new Date();
    writeTasks(tasks);
    console.log("Task status updated successfully!");
};

const listTasks = (status = null) => {
    const tasks = readTasks();
    const filteredTasks = tasks.find(t => t.status == status);

    console.table(filteredTasks);
};

module.exports = { addTask, updateTask, deleteTask, markStatus, listTasks }