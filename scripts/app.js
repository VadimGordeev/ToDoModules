import { TaskStorage } from "./storage/index.js";
import { ToDoView } from "./view/index.js";
//Get TaskStorage instance, then pull getTasks method (not sure this right choice)
const storage = new TaskStorage ();
const getTasks = storage.getTasks();

// Create class that binds storage and view
export class TaskController {
    constructor (containerId) {
        this.view = new ToDoView ({
            containerId,
            getTasks,
            onTaskAdd: this.createNewTask,
            onRemoveTask: this.removeTasks,
            onToggleTaskStatus: this.toggleTaskStatus
        })
    }
    
    //Add new task 
    createNewTask = (newTask) => {
        this.view.createTask(newTask)
        storage.addTask(newTask)
    }
    // Remove task
    removeTasks = (taskId) => {
        storage.removeTaskStorage(taskId)
        this.view.removeTask(taskId);
    }
    // Toggle task status
    toggleTaskStatus = (taskId, done) => {
        storage.toggleCompleteStatus(taskId, done)
        this.view.toggleStatus(taskId)
    }
}
