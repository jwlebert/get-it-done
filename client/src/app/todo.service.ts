import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

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

  constructor() { }

  getAllTodos(sortBy?: "id" | "position"): TodoItem[] {
    switch (sortBy ?? null) {
      case null:
        return this.todos;
      case 'id':
        return [...this.todos].sort((x, y) => x.id - y.id);
      case 'position':
        return [...this.todos].sort((x, y) => x.position - y.position);
      default:
        throw Error;
    }
    
    return this.todos;
  }

  getTodoById(id: number): TodoItem | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(title: string, id?: number) {
    const newTodo: TodoItem = {
      title: title,
      position: this.todos.length,
      id: id ?? this.next_id++,
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
    }

    todo.position -= posDiff;
  }

  removeTodo(todo: TodoItem) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  renameTodo(todo: TodoItem, newTitle: string) {
    console.log(todo)
    let t = this.todos.find(t => t === todo) ?? null;

    if (t === null) { return; }
    t.title = newTitle;
  }
}
