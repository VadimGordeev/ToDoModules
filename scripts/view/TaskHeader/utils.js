import { nameAttr } from "./constants.js";

// Function for creating a form for adding a task
export function createAddTaskContorlContainer () {
    const wrapper = document.createElement('form');
    wrapper.classList.add('card_header');

    const input = document.createElement('input');
    input.setAttribute('placeholder', 'Enter a task here');
    input.classList.add('card_header_input');
    input.setAttribute('name', nameAttr.addTaskInput);

    const addNewTaskButton = document.createElement('button');
    addNewTaskButton.textContent = 'Add';
    addNewTaskButton.classList.add('card_header_btn');
    addNewTaskButton.setAttribute('type', 'submit');
    addNewTaskButton.setAttribute('name', nameAttr.addTaskButton);
    addNewTaskButton.disabled = true;

    wrapper.append(input, addNewTaskButton);

    return wrapper;
}
