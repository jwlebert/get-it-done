import { Component, inject } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'getitdone';
  todoService: TodoService = inject(TodoService);

  currentTheme: 'dark' | 'light' = 'dark';
  themes = {
    'hovered': '-outline',
    'dark': {
      'icon': 'moon',
      'colors': {
        'primary': "#121420",
        'secondary': "#2C2B3C",
        'contrast': "#FFFAFA",
      }
    },
    'light': {
      'icon': 'sunny',
      'colors': {
        'primary': "#FFFFFF",
        'secondary': "#D3D3D3", // lightgrey < vscode color
        'contrast': "#000000",
      } 
    }
  }

  changeTheme(): void {
    this.currentTheme = (this.currentTheme === 'dark') ? 'light' : 'dark';
    const theme = this.themes[this.currentTheme];

    for (let [variable, value] of Object.entries(theme.colors)) {
      document.documentElement.style.setProperty(`--${variable}`, value);
    }
  }
}
