import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  @Input() todo!: TodoItem;
}
