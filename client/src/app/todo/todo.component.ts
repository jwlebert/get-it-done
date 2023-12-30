import { Component, Input, inject} from '@angular/core';
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

  removeTodo(): void {
    this.todoService.removeTodo(this.todo);
  }
}
