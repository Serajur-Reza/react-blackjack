import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../cards'
import {ICard} from '../../types/index'
import { Button, Grid } from '@mui/material'
import { scoreCalculator } from '../../utils/utils'
import './styles.scss'

const Player = () => {
  const playerCards = useSelector((state: any)=> state.blackJack.playerCards)
  const playerScore = useSelector((state: any)=> state.blackJack.playerScore)
  const state = useSelector(state=> state)

  const dispatch = useDispatch();

  console.log("playerScore:", state)
  return (
    <div>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <h1>Your Score</h1>
          <h4>{playerScore}</h4>
          <div className='playerCards'>
            {
              playerCards?.map((item: ICard, index: number)=> (
                  <Card suit = {item.suit} value= {item.value} key={index}></Card>
              )) 
          }
          </div>
        </Grid>
    </div>
  )
}

export default Player