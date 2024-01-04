import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

export type SortingMethod = "created" | "position";

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos: TodoItem[] = [
    {
      id: 1,
      position: 0,
      title: "test item 1",
      created: new Date(),
    },
    {
      id: 2,
      position: 1,
      title: "test item 2",
      created: new Date(),
    },
    {
      id: 3,
      position: 2,
      title: "test item 3",
      created: new Date(),
    }
  ]
  next_id: number = 4;
  confirmRemovals: boolean = true;
  sortingMethod: SortingMethod = 'position';

  getAllTodos(sorted: boolean = true): TodoItem[] {
    if (!sorted) {
      return this.todos;
    }

    switch (this.sortingMethod) {
      case 'created':
        return [...this.todos].sort(
          (x, y) => x.created.getSeconds() - y.created.getSeconds()
          );
      case 'position':
        return [...this.todos].sort((x, y) => x.position - y.position);
      default:
        throw Error;
    }
  }

  getTodoById(id: number): TodoItem | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(title: string) {
    const newTodo: TodoItem = {
      title: title,
      position: this.todos.length,
      id: this.next_id++,
      created: new Date()
    };

    this.todos.push(newTodo);
  }

  moveTodo(todo: TodoItem, posDiff: number) {
    const originalPos = todo.position;

    if (
      originalPos - posDiff < 0 || 
      originalPos - posDiff >= this.todos.length) {
        return;
    }

    const replacedTodo = this.todos.find(t => t.position === originalPos - posDiff) ?? null;

    if (replacedTodo !== null) {
      replacedTodo.position += posDiff;
      todo.position -= posDiff;
      this.sortingMethod = 'position';
    }
  }

  removeTodo(todo: TodoItem) {
    if (this.confirmRemovals) {
      if (
        !confirm(`Are you sure you want to delete "${todo.title}"?`)
      ) { return; }
    }

    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
