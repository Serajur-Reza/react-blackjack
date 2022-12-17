import { GET_CARDS, GET_DEALER_CARDS, GET_PLAYER_CARDS, STAND, HIT, GET_DEALER_SCORE, GET_PLAYER_SCORE } from "../allActions"

export const getDealerCards = (dealerCards: Object[]) => {
    return {
        type: GET_DEALER_CARDS,
        payload: {dealerCards}
    }
}

export const getPlayerCards = (playerCards: Object[]) => {
    return {
        type: GET_PLAYER_CARDS,
        payload: {playerCards}
    }
}

export const getDealerScore = (dealerScore: number) => {
    return {
        type: GET_DEALER_SCORE,
        payload: {dealerScore}
    }
}

export const getPlayerScore = (playerScore: number) => {
    return {
        type: GET_PLAYER_SCORE,
        payload: {playerScore}
    }
}

export const getCards = (cards: Object[]) =>{
    return {
        type: GET_CARDS,
        payload: {cards}
    }
}

export const hit = (cards: Object[]) =>{
    return {
        type: HIT,
        payload: cards
    }
}

export const stand = (cards: Object[]) => {
    return {
        type: STAND,
        payload: {cards}
    }
}