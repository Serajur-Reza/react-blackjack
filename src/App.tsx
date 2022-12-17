import React, { useState, useCallback, useEffect } from 'react'
import './App.css'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { cardDrawer, cardGenerator, scoreCalculator } from './utils/utils'
import { getCards, getDealerCards, getDealerScore, getPlayerCards, getPlayerScore } from './store/actions'
import Player from './components/playerCards'
import Dealer from './components/dealerCards'

function App() {
  const state = useSelector(state=> state)
  // onst playerScore = useSelector(state=> state.blackJack.)
  const cards = useSelector(state=> state.blackJack.cards)
  const dispatch = useDispatch();
  // const [playerScore, setPlayerScore] = useState(0)
  // const [dealerScore, setDealerScore] = useState(0)
  

  const loadGame = useCallback(
    () => {
      const deck = cardGenerator()
      const playerCards = cardDrawer(2, deck)
      const dealerCards = cardDrawer(2, deck)
      const playerScore = scoreCalculator(playerCards);
      const dealerScore = scoreCalculator(dealerCards)
      console.log("deck:", deck)
      console.log("playerCards:", playerCards)
      console.log("dealerCards:", dealerCards)
      console.log("playerScore:", playerScore)
      console.log("dealerScore:", dealerScore)

      dispatch(getCards(deck))
      dispatch(getPlayerCards(playerCards))
      dispatch(getDealerCards(dealerCards))
      
      dispatch(getPlayerScore(playerScore))
      dispatch(getDealerScore(dealerScore))
      console.log("State:", state)
      // dispatch(getCards(deck))
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
    const card = cardDrawer(1, cards)
    //dispatch()
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
              <Button variant='contained' onClick={hitCard}>Hit</Button>
              <Button variant='contained'>Stand</Button>
            </Grid>
      </Grid>

      {/* <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
          <Grid item xs={12} sm={6} lg={12}>

          </Grid>

          <Grid item xs={12} sm={6} lg={12}>
            <h1>Dealer Score</h1>
          </Grid>
      </Grid> */}

      <Player />
      <Dealer />
    </div>
  )
}

export default App
