import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  todoService: TodoService = inject(TodoService);
  sorting?: "id" | "position" = 'position';

  newTodoForm = new FormGroup({
    title: new FormControl('New todo...')
  });

  addTodo() {
    if ((this.newTodoForm.value.title ?? '') === '') { return; }
    this.todoService.addTodo(
      this.newTodoForm.value.title ?? ''
    )
  }
}
