import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
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

  constructor() { }

  getAllTodos(): TodoItem[] {
    return this.todos;
  }

  getTodoById(id: number): TodoItem | undefined {
    return this.todos.find(todo => todo.id === id);
  }
}
