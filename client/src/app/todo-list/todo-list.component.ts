import { Component, inject } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  todos: TodoItem[] = [];
  todoService: TodoService = inject(TodoService);

  constructor() {
    this.todos = this.todoService.getAllTodos();
  }
}
