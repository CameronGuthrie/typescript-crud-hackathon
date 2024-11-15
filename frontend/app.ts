import { Task } from './models/Task.js';
import { ApiService } from './services/ApiService.js';
import { LogMethod } from './decorators/LogMethod.js';

class TaskManager {
    private apiService: ApiService<Task>;
    private taskListElement: HTMLElement;
    private taskInput: HTMLInputElement;
    private addTaskButton: HTMLButtonElement;

    constructor() {
        this.apiService = new ApiService<Task>('http://localhost:5000/api/tasks');
        this.taskListElement = document.getElementById('task-list') as HTMLElement;
        this.taskInput = document.getElementById('task-title') as HTMLInputElement;
        this.addTaskButton = document.getElementById('add-task') as HTMLButtonElement;

        this.addTaskButton.addEventListener('click', () => this.addTask());
        this.loadTasks();
    }

    @LogMethod
    async loadTasks() {
        const tasks = await this.apiService.getAll();
        this.renderTasks(tasks);
    }

    @LogMethod
    renderTasks(tasks: Task[]) {
        this.taskListElement.innerHTML = '';
        tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.title;
        li.className = task.completed ? 'completed' : '';
        this.taskListElement.appendChild(li);
        });
    }

    @LogMethod
    addTask() {
        const title = this.taskInput.value.trim();
        if (title === '') return;

        // Here, you would typically send a POST request to the backend to create the task
        // For simplicity, we'll just log the action
        console.log(`Adding task: ${title}`);
        this.taskInput.value = '';
        this.loadTasks();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
