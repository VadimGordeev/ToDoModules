import { TaskHeader } from "./TaskHeader/TaskHeader.js";
import { TaskBody } from "./TaskBody/TaskBody.js";

export class ToDoView {
    constructor ({ onTaskAdd, containerId = 'todo', getTasks, onRemoveTask, onToggleTaskStatus }) {
        // Passing parametrs for new class instance
        this.addTaskHeader = new TaskHeader (onTaskAdd);
        this.addTaskBody = new TaskBody ( getTasks, onRemoveTask, onToggleTaskStatus );
        
        // Appending new div to container
        const container = document.getElementById(containerId);
        container.append(this.addTaskHeader.form, this.addTaskBody.TaskList)
    }

    // Pull methods from TaskBody class instance
    createTask (newTask) {
        this.addTaskBody.TaskList.append(this.addTaskBody.createTaskCard(newTask));
    }

    removeTask (taskId) {
        this.addTaskBody.removeTaskCard(taskId);
    }

    toggleStatus (taskId) {
        this.addTaskBody.toggleCompleteStatus(taskId);
    }
}
