export interface ICard {
    suit: string,
    value: number | string
}


export interface IBlackJack{
    cards: ICard[],
    playerCards: ICard[],
    dealerCards: ICard[],
    playerScore: number,
    dealerScore: number,
    resultMessage: string,
}
