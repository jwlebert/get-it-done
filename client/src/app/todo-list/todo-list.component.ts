import { Component } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  todos: TodoItem[] = [
    {
      id: 1,
      title: "test item 1",
      created: new Date(),
    },
    {
      id: 2,
      title: "test item 2",
      created: new Date(),
    },
    {
      id: 3,
      title: "test item 3",
      created: new Date(),
    }
  ]
}
