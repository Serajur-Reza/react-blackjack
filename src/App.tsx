import React, { useState, useCallback, useEffect } from 'react'
import './App.css'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { cardDrawer, cardGenerator, scoreCalculator } from './utils/utils'
import Player from './components/playerCards'
import Dealer from './components/dealerCards'
import { getCards, getDealerCards, getDealerScore, getPlayerCards, getPlayerScore, getResult } from './store/blackJack'

function App() {
  const cards = useSelector((state: any)=> state.blackJack.cards)
  const playerCards = useSelector((state: any)=> state.blackJack.playerCards)
  const dealerCards = useSelector((state: any)=> state.blackJack.dealerCards)
  const playerScore = useSelector((state: any)=> state.blackJack.playerScore)
  const dealerScore = useSelector((state: any)=> state.blackJack.dealerScore)
  const resultMessage = useSelector((state: any)=> state.blackJack.resultMessage)
  const dispatch = useDispatch();
  
  const loadGame = useCallback(
    () => {
      const deck = cardGenerator()
      const playerCards = cardDrawer(2, deck)
      const dealerCards = cardDrawer(1, deck)
      const playerScore = scoreCalculator(playerCards);
      const dealerScore = scoreCalculator(dealerCards);

      dispatch(getCards(deck))
      dispatch(getPlayerCards(playerCards))
      dispatch(getDealerCards(dealerCards))
      dispatch(getPlayerScore(playerScore))
      dispatch(getDealerScore(dealerScore))
      if(playerScore === 21){
        dispatch(getResult("BlackJack! Please stand"))
      }
      else{
        dispatch(getResult(""))
      }
    },
    [dispatch],
  )
  
  useEffect(()=>{
    loadGame()
  },[loadGame, dispatch])

  const resetGame = () => {
    loadGame();
  }

  const hitCard = () =>{
    const tempCards = [...cards]
    console.log("hit:", tempCards)
    const card = cardDrawer(1, tempCards)
    const tempPlayerCards = [...playerCards, ...card]
    const tempPlayerScore = scoreCalculator(tempPlayerCards)
    if(tempPlayerScore > 21){
      dispatch(getResult("You are busted. Dealer has won"))
    }
    else if(tempPlayerScore === 21){
      dispatch(getResult("BlackJack! Please stand"))
    }
    dispatch(getPlayerCards(tempPlayerCards))
    dispatch(getPlayerScore(tempPlayerScore))
  }

  const stand = () => {
    let tempCards = [...cards]
    let card = cardDrawer(1, tempCards);
    let tempDealerCards = [...dealerCards, ...card];
    let tempDealerScore = scoreCalculator(tempDealerCards);
    let tempPlayerScore = playerScore;

    while(tempDealerScore < 17){
      card = cardDrawer(1, tempCards);
      tempDealerCards = [...tempDealerCards, ...card];
      tempDealerScore = scoreCalculator(tempDealerCards);
    }

    if(tempDealerScore > 21){
      dispatch(getResult("Dealer is busted. You have won"))
    }
    else{
      if(tempPlayerScore === tempDealerScore){
        dispatch(getResult("Game Drawn"))
      }
  
      else if(tempPlayerScore > tempDealerScore){
        dispatch(getResult("You have won"))
      }
      else{
        dispatch(getResult("Dealer has won"))
      }
    }
    dispatch(getDealerCards(tempDealerCards))
    dispatch(getDealerScore(tempDealerScore))
  }
  
  return (
    <div>
      <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Grid item xs={12}>
            <h1>BlackJack</h1>
          </Grid>

          <Grid item xs={12} onClick = {()=> resetGame()}>
            <Button variant='contained'>Start</Button>
          </Grid>

          <Grid item xs={6} sm={6} lg={3}>
            <Button variant='contained' onClick={hitCard} disabled={playerScore >= 21 || dealerScore >= 21 || resultMessage}>Hit</Button>
            <Button variant='contained' onClick={stand} disabled={playerScore > 21 || dealerScore >= 17}>Stand</Button>
          </Grid>

          <Grid item xs={6} sm={6} lg={3}>
            <h2>{resultMessage}</h2>
          </Grid>

          <Grid item xs={6} sm={6} lg={3}>
            <Player />
            <Dealer />
          </Grid>
      </Grid>
    </div>
  )
}

export default App
