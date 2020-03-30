import { Component, Input, OnInit } from '@angular/core'

import { getNumber, getSuit, Suit } from './card'

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() number?: number
  @Input() suit?: Suit
  @Input() position?: { x: number; y: number } = { x: 0, y: 0 }

  numberHtml = ''
  suitHtml = ''

  moving = false

  ngOnInit() {
    if (this.number) {
      this.numberHtml = getNumber(this.number)
    }
    if (this.suit) {
      this.suitHtml = getSuit(this.suit)
    }
    if (this.position === undefined) {
      this.position = { x: 0, y: 0 }
    }
  }

  mouseStart(ev: MouseEvent) {
    this.moving = true
  }

  mouseMove(ev: MouseEvent) {
    if (this.moving) {
      this.position.x = ev.x - ev.offsetX
      this.position.y = ev.y - ev.offsetY
    }
  }
  drop(ev: MouseEvent) {
    this.moving = false
  }
}
