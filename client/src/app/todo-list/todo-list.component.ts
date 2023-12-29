import { Component } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  todo_item: TodoItem = {
    id: 1,
    title: "test item",
    created: new Date(),
  }
}
