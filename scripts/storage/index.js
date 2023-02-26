import { LocalStorageKey } from "./constants.js";
  
export class TaskStorage {
    constructor () {
    // Get item from storage
      const savedTasks = localStorage.getItem(LocalStorageKey.Tasks);
      const tasks = savedTasks ? JSON.parse(savedTasks) : [];

    // Add item to storage
      this.addTask = (newTask) => {
  
        tasks.push(newTask);
  
        localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
  
        return newTask;
      }

      // Get copy of tasks massive, to avoid unauthorized push
      this.getTasks = () => {
        return tasks.slice();
      }

      // Remove task from storage
      this.removeTaskStorage = (taskId) => {
        const index = tasks.findIndex((task) => task.id === taskId);
  
        if (index > -1) {
          tasks.splice(index, 1)
        }
  
        if (index.length === 0 ) {
          localStorage.removeItem(LocalStorageKey.Tasks)
        } else {
          localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
        }
              
        return tasks.slice
      }
  
      //Toggle task status in storage
      this.toggleCompleteStatus = (taskId) => {
        const index = tasks.findIndex(({ id }) => id === taskId);
        
        if (index > -1) {
          tasks[index] = {
          ...tasks[index],
          done: !tasks[index].done
          }
        }
        
        localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
  
        return tasks.slice();
        }
    }
} 
