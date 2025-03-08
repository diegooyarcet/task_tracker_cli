const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../tasks.json');


/**
 *
 *
 * @return {JSON} tasks in JSON format 
 */
const readTasks = () => {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, '[]');
    }
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
};



/**
 *
 *
 * @param {tasks} tasks
 */
const writeTasks = (tasks) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
};

module.exports = {readTasks, writeTasks};
