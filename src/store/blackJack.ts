import { createSlice } from "@reduxjs/toolkit";
import { IBlackJack } from "../types";


const initialState: IBlackJack = {
    cards: [],
    playerCards: [],
    dealerCards: [],
    playerScore: 0,
    dealerScore: 0,
    resultMessage: ""
} 

export const blackJackSlice = createSlice({
    name: 'blackJack',
    initialState,
    reducers: {
        getCards: (state, action) => {
            return {...state, cards: action.payload}
        },

        getPlayerCards: (state, action) => {
            // console.log("getCards:", action.payload)
            return {...state, playerCards: action.payload}
        },

        getDealerCards: (state, action) => {
            // console.log("getCards:", action.payload)
            return {...state, dealerCards: action.payload}
        },

        getPlayerScore: (state, action) => {
            return {...state, playerScore: action.payload}
        },

        getDealerScore: (state, action) => {
            return {...state, dealerScore: action.payload}
        },

        getResult: (state, action) =>{
            return {...state, resultMessage: action.payload}
        }
    }
})

export const { getCards, getPlayerCards, getDealerCards, getPlayerScore, getDealerScore, getResult } = blackJackSlice.actions

export default blackJackSlice.reducer