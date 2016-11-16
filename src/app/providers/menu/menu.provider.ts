import { Injectable } from '@angular/core';

export interface MenuItem {
  text: string
  link: string
}

@Injectable()
export class Menu {
  public items: MenuItem[] = [
    {
      text: 'About me',
      link: 'about'
    },
    {
      text: 'Personal info',
      link: 'info'
    },
    {
      text: 'Employment',
      link: 'employment'
    },
    {
      text: 'Education',
      link: 'education'
    }
  ]
}