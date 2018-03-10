const todoItems = require('./todo');
const main = async () => {
    var todoItemsTasks = await todoItems.getAllTasks();
    for (let task of todoItemsTasks) {
        await todoItems.removeTask(task._id);
    }
    let tasks = [
        {
            title: "Ponder Dinosaurs",
            description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
        },
        {
            title: "Play Pokemon with Twitch TV",
            description: "Should we revive Helix?"
        }
    ]
    for (task of tasks) {
        await todoItems.createTask(task.title, task.description);
    }
    var todoItemsTasks = await todoItems.getAllTasks();
    console.log("Task list: ");
    console.log(todoItemsTasks);
    let taskIdToRemove = todoItemsTasks[0]._id;
    try {
        let removed = await todoItems.removeTask(taskIdToRemove);
        console.log(`Task ${taskIdToRemove} removed.`);
    }
    catch(e) {
        console.log("Error: ");
        console.log(e);
    }
    /*
    try {
        const removeTask = await todoItems.getTask(taskIdToRemove);
    }catch(e) {
        console.log("Error: ");
        console.log(e);
        console.log("");
    }
    */
    
    var todoItemsTasks = await todoItems.getAllTasks();
    console.log("Remaining Task list");
    console.log(todoItemsTasks);
    let taskCompleted = await todoItems.completeTask(todoItemsTasks[0]._id);
    console.log("Completed Tasks: ");
    console.log(taskCompleted);
};

main().catch( (error) => {
    console.log(error);
})
