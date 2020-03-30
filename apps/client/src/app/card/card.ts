export type Suit = 'hearts' | 'clubs' | 'spades' | 'diamonds'

const suits: Suit[] = ['hearts', 'clubs', 'spades', 'diamonds']

export enum Colors {
  BLACK = '#000',
  RED = '#ff0000'
}

export interface CardPosition {
  x: number
  y: number
}

export interface Card {
  number: number
  suit: Suit
  position?: CardPosition
}

export function getSuit(suit: Suit): string {
  switch (suit) {
    case 'hearts':
      return '♥'
    case 'diamonds':
      return '♦'
    case 'spades':
      return '♠'
    case 'clubs':
      return '♣'
    default:
      console.warn('Did you forget to miss a case?')
      return ''
  }
}

export function getNumber(nr: number | string): string {
  const number = +nr
  if (number === 1) return 'A'
  if (number <= 10) {
    return '' + number
  }
  if (number > 10) {
    switch (number) {
      case 11:
        return 'J'
      case 12:
        return 'Q'
      case 13:
        return 'K'
      default:
        return '' + number
    }
  }
}

export function suitToColor(suit: Suit): string {
  switch (suit) {
    case 'hearts':
      return Colors.RED
    case 'clubs':
      return Colors.BLACK
    case 'diamonds':
      return Colors.RED
    case 'spades':
      return Colors.BLACK
    default:
      return Colors.BLACK
  }
}

export function generateDeck(): Card[] {
  const numberOfCards = 13
  const deck = []
  let count = 1
  suits.forEach(s => {
    for (let i = 1; i <= numberOfCards; i++) {
      deck.push({ number: i, suit: s })
    }
    count++
  })
  return deck
}

export function shuffle(array: Card[]): Card[] {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
