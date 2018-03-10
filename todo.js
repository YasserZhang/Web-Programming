const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid/v4');
// TODO: uuid package
let todo = {
    async createTask(title, description) {
        if (!title) throw "You must provide a title.";
        if (!description) {
            throw "You must provide a description of the new task.";
        }
        const todoCollection = await todoItems();
        let newTask = {
            _id: uuidv4(),
            title: title,
            description: description,
            completed: false,
            completedAt: null
        }
        const insertInfo = await todoCollection.insertOne(newTask);
        if (insertInfo.insertedCount == 0) {
            throw "Could not add new task.";
        }
        const newId = insertInfo.insertedId;
        const task = await this.getTask(newId);
        return task;
    },

    async getAllTasks() {
        const taskCollection = await todoItems();
        const tasks = await taskCollection.find({}).toArray();
        return tasks;
    },
    async getTask(taskId) {
        if (!taskId) throw "You must provide an id to search for.";

        const todoCollection = await todoItems();
        const todo = await todoCollection.findOne({_id: taskId});
        if (todo === null) throw "No todo item with this id";
        return todo;
    },
    async completeTask(taskId) {
        const todo = await this.getTask(taskId);
        todo.completed = true;
        todo.completedAt = new Date().toLocaleString();
        return todo;
    },
    async removeTask(taskId) {
        if (!taskId) throw "You must provide an id to search for.";
        const todoCollection = await todoItems();
        const deletionInfo = await todoCollection.removeOne({_id: taskId});
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete todo task with id of ${taskId}`;
        }
        return true;
    }
};

module.exports = todo;