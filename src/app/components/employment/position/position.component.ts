import { Component, Input, ElementRef } from '@angular/core'

@Component({
  selector: 'position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class Position {
  @Input() positionName: String
  @Input() place: String
  @Input() start: String
  @Input() end: String
  @Input() text: String
  @Input() last: String
  @Input() hiddenText: String

  public isLast: Boolean
  public isHidden: Boolean

  constructor (private element: ElementRef) {}

  ngOnInit () {
    setTimeout(() => {
      this.isLast = this.last === 'true'
      this.isHidden = this.hiddenText === 'true'

      let animation = this.element.nativeElement.querySelector('.animation')
      var height = window.getComputedStyle(animation).height
      animation.style.height = height
    })
  }

  onHidden () {
    this.isHidden = !this.isHidden
  }
}