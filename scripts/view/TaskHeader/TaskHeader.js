import { createAddTaskContorlContainer } from './utils.js';
import { nameAttr } from "./constants.js";


// Class for creating form 
export class TaskHeader {
    constructor (onTaskAdd) {
        this.form = createAddTaskContorlContainer();
        this.onTaskAdd = onTaskAdd;

        // Add listener for form 
        this.form.addEventListener('submit', this.onFormSubmit);
        this.form.addEventListener('input', this.onAddTaskChange.bind(this));
    }

    // Change button status
    onAddTaskChange ({ target: { value } }) {
        if (value.trim()) {
          this.form.elements[nameAttr.addTaskButton].disabled = false;
        } 
    }

    // Add event for submit form
    onFormSubmit = (event) => {
        event.preventDefault();

        const inputValue = this.form.elements[nameAttr.addTaskInput].value.trim();
      
        if (inputValue) {
            // Create object with information about task 
            const newTask = {
                text: inputValue,
                done: false, 
                id: window.crypto.randomUUID()
            }

            this.onTaskAdd(newTask);
            this.form.reset();
            this.form.elements[nameAttr.addTaskButton].disabled = true
        }
    }
}
