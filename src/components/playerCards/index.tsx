import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../cards'
import {ICard} from '../../types/index'
import { Button, Grid } from '@mui/material'
import { scoreCalculator } from '../../utils/utils'
import { getPlayerScore } from '../../store/actions'


const Player = () => {
  const playerCards = useSelector((state: any)=> state.blackJack.playerCards)
  const playerScore = useSelector((state: any)=> state.blackJack.playerScore)
  const state = useSelector(state=> state)

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   const score = scoreCalculator(playerCards)
  //   dispatch(getPlayerScore(score))
  // },[playerCards, dispatch])

  console.log("playerScore:", state)
  return (
    <div>
        <h1>Your Score</h1>
        <h5>{playerScore}</h5>

        <div>
          
        </div>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          {/* <Grid item xs={6} sm={6} lg={3}>
          {
            playerCards?.map((item: ICard, index: number)=> (
                <Card suit = {item.suit} value= {item.value} ></Card>
            )) 
          }
          </Grid> */}
          <Grid item>
            {
            playerCards?.map((item: ICard, index: number)=> (
                <Card suit = {item.suit} value= {item.value} ></Card>
            )) 
          }
          </Grid>
        </Grid>
    </div>
  )
}

export default Player