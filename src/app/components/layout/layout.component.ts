import { Component } from '@angular/core'

import { AboutMe } from '../aboutMe/aboutMe.component'
import { Info } from '../info/info.component'
import { Employment } from '../employment/employment.component'

import { Menu, MenuItem } from '../../providers/menu/menu.provider'

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class Layout {
  public menuItems: MenuItem[]
  public opened: Boolean = false
  private menu: Menu

  constructor (menu: Menu) {
    this.menuItems = menu.items
  }

  goToItem (event, item) {
    event.preventDefault()
    this.opened = false
  }
}
