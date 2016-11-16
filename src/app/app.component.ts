import { Component } from '@angular/core';

import { Layout } from './components/layout/layout.component'
import { Menu } from './providers/menu/menu.provider'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menu: Menu = new Menu()
}
