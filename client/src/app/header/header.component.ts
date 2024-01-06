import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  todoService: TodoService = inject(TodoService);

  iconsHovered: {
    [key: string]: '' | '-outline'
  } = {
    theme: '-outline',
    settings: '-outline',
  }

  currentTheme: 'dark' | 'light' = 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // check prefered theme
    ? 'dark' : 'light';

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

  toggleSettingsMenu() {
    const settingsMenu = document.getElementsByClassName('settings-box')[0];

    settingsMenu.classList.toggle('hidden');
  }
}