import { Component } from '@angular/core'

import { Card, generateDeck, shuffle } from './card/card'

@Component({
  selector: 'cards-n-boards-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // cards: Card[] = [
  //   { suit: 'hearts', number: 1 },
  //   { suit: 'spades', number: 13 }
  // ]
  cards: Card[] = shuffle(shuffle(shuffle(generateDeck())))

  dropped(card: any, idx: number, ev: any) {
    // const idx = this.cards.findIndex(c => c === card)
    this.cards.splice(idx, 1)
    this.cards.push(card)
  }
}
