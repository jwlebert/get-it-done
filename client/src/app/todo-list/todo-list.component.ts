import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  newTodoForm = new FormGroup({
    title: new FormControl('New todo...')
  });

  constructor() {
    this.todos = this.todoService.getAllTodos();
  }

  addTodo() {
    this.todoService.addTodo(
      this.newTodoForm.value.title ?? ''
    )
  }
}
