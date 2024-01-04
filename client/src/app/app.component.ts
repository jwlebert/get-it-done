import { Component, inject } from '@angular/core';
import { TodoService } from './todo.service';

const themes = {
  'dark': {
    'primary': "#121420",
    'secondary': "#2C2B3C",
    'contrast': "#FFFAFA",
  },
  'light': {
    'primary': "#FFFFFF",
    'secondary': "grey", // TODO
    'contrast': "#000000",
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'getitdone';

  todoService: TodoService = inject(TodoService);

  currentTheme: number = 0;
  changeTheme(): void {
    this.currentTheme = (this.currentTheme + 1) % 2;

    const theme = Object.values(themes)[this.currentTheme];

    for (let [variable, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(`--${variable}`, value);
    }
  }
}
