import { Component, Input, inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoItem } from '../todo-item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  @Input() todo!: TodoItem;
  todoService: TodoService = inject(TodoService);

  checkmarkHovered: boolean = false;

  removeTodo(): void {
    this.todoService.removeTodo(this.todo);
  }

  moveTodo(posDiff: number): void {
    this.todoService.moveTodo(this.todo, posDiff);
  }
}
