const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../tasks.json');

const readTasks = () => {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, '[]');
    }
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
};

const writeTasks = (tasks) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
};

module.exports = {readTasks, writeTasks};
