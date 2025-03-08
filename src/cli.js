const [,, command, ...args] = process.argv;
const { addTask, updateTask, listTasks, deleteTask, markStatus } = require('./taskService');

switch (command) {
    case 'add':
        addTask(args.join(' '));
        break;
    case 'update':
        updateTask(args[0], args.slice(1).join(' '));
        break;
    case 'delete':
        deleteTask(args[0]);
        break;
    case 'mark-in-progress':
        markStatus(Number(args[0]), 'in-progress');
        break;
    case 'mark-done':
        markStatus(Number(args[0]), 'done');
        break;
    case 'list':
        listTasks(args[0], args[1]);
        break;
    default:
        console.log("Invalid command :(");
}