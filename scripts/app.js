import { TaskStorage } from "./storage/index.js";
import { ToDoView } from "./view/index.js";


// Create class that binds storage and view
export class TaskController {
    constructor (containerId) {
        this.storage = new TaskStorage ();
        const getTasks = this.storage.getTasks(); 
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
        this.storage.addTask(newTask)
    }
    // Remove task
    removeTasks = (taskId) => {
        this.storage.removeTaskStorage(taskId)
        this.view.removeTask(taskId);
    }
    // Toggle task status
    toggleTaskStatus = (taskId, done) => {
        this.storage.toggleCompleteStatus(taskId, done)
        this.view.toggleStatus(taskId)
    }
}
