import { createTaskList } from './utils.js';
// Class with task card 
export class TaskBody {
    constructor(tasks, onRemoveTask, onToggleTaskStatus) {
    this.TaskList = createTaskList();
    
    for (const task of tasks) {
      if (task.done) {
        this.TaskList.append(this.createCompleteTaskCard(task))
      } else {
        this.TaskList.append(this.createTaskCard(task))
      }
    }

    // Add listener for button 
    this.TaskList.addEventListener('click', ({ target }) => {
      if (target.id === 'delete') {
        onRemoveTask(target.dataset.taskId);
      }
      if (target.id === 'complete') {
        onToggleTaskStatus(target.dataset.taskId)
      } else if (target.id === 'done') {
        onToggleTaskStatus(target.dataset.taskId)
      }
    });
  }

  // Function for create task card in DOM
  createTaskCard ({ text, id }) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = id;
    card.innerHTML = `                    
    <p class="task_name">${text}</p>
    <button id="complete" class="btn_compl" type="button"  data-task-id="${id}" type="submit">Complete</button>
    <button id="delete" class="btn_del" type="button"  data-task-id="${id}" type="submit">Delete</button>
    `;

    return card;
  }

// Function for create complete task card in DOM
  createCompleteTaskCard ({ id, text }) {
    const card = document.createElement('div');
    card.classList.add('card', 'complete');
    card.id = id;
    card.innerHTML = `                    
    <p class="task_name">${text}</p> 
    <button id="done" class="btn_compl complete_btn" type="button"  data-task-id="${id}" type="submit">Done</button>
    <button id="delete" class="btn_del" type="button"  data-task-id="${id}" type="submit">Delete</button>
    `;

    return card;
  }
  
  //Function for remove task from DOM
  removeTaskCard (taskId) {
    const card = document.getElementById(taskId);

    if (card) {
      card.remove();
    }
  }

  //Function for toggle task card status in DOM
  toggleCompleteStatus (taskId) {
    const card = document.getElementById(taskId);
    const completeBtn = card.querySelector('.btn_compl');
    const completeBtnId = completeBtn.id;

    if (completeBtnId === 'complete') {
      card.classList.add('complete');

      completeBtn.classList.add('complete_btn');
      completeBtn.id = 'done';
      completeBtn.textContent = 'Done';
    }

    if (completeBtnId === 'done') {
      card.classList.remove('complete')

      completeBtn.classList.remove('complete_btn');
      completeBtn.id = 'complete';
      completeBtn.textContent = 'Complete';
    }
  }
}
