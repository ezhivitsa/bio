import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-card-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class Title {
  @Input() text: String
  @Input() icon: String
}