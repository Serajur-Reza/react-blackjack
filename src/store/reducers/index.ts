import { GET_CARDS, GET_DEALER_CARDS, GET_PLAYER_CARDS, STAND, HIT, GET_DEALER_SCORE, GET_PLAYER_SCORE } from "../allActions";

const initialState = {
    // cards: [],
    // dealerCards: [],
    // playerCards: [],
}

const blackJack = (state = initialState, action: any) =>{
    switch (action.type) {
        case GET_DEALER_CARDS:
            return {...state, ...action.payload};
        
        case GET_PLAYER_CARDS:
            console.log("getPlayerCardsReducer:", action.payload)
            // return Object.assign(state, action.payload)
            return {...state, ...action.payload}

        case GET_DEALER_SCORE:
            return {...state, ...action.payload};
        
        case GET_PLAYER_SCORE:
            console.log("getPlayerCardsReducer:", action.payload)
            // return Object.assign(state, action.payload)
            return {...state, ...action.payload}
    
        case GET_CARDS:
            return {...state, ...action.payload}

        case HIT:
            return {...state, ...action.payload}

        case STAND:
            return {...state, ...action.payload}
    
        default:
            return state;
    }
}

export default blackJack;