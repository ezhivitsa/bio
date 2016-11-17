import { Component } from '@angular/core'

import { AboutMe } from '../aboutMe/aboutMe.component'
import { Info } from '../info/info.component'
import { Employment } from '../employment/employment.component'

import { Menu, MenuItem } from '../../providers/menu/menu.provider'

const MIN_DISTANCE = 2

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class Layout {
  public menuItems: MenuItem[]
  public opened: Boolean = false
  private menu: Menu

  private isAnimated: Boolean

  constructor (menu: Menu) {
    this.menuItems = menu.items
  }

  goToItem (event, item: MenuItem) {
    event.preventDefault()
    this.opened = false

    let contentEl = document.querySelector(`#${item.link}`)

    let bodyRect = document.body.getBoundingClientRect()
    let elemRect = contentEl.getBoundingClientRect()
    let offset   = elemRect.top - bodyRect.top
    let scrollY = window.scrollY

    if (!this.isAnimated) {
      this.isAnimated = true
      this.scrollWindow(scrollY, offset)
    }
  }

  scrollWindow (from:number, to:number) {
    let elDistance = Math.abs(from - to)
    if (elDistance > MIN_DISTANCE) {
      setTimeout(() => {
        let distance = Math.min(8, elDistance)
        let sign = (from - to > 0) ? 1 : -1
        window.scrollTo(0, from - distance * sign)

        this.scrollWindow(from - distance * sign, to)
      }, 2)
    } else {
      this.isAnimated = false
    }
  }
}
