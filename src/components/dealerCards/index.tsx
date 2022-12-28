import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../cards'
import {ICard} from '../../types/index'
import { Grid } from '@mui/material'
import './styles.scss'

const Dealer = () => {
  const dealerCards = useSelector((state: any)=> state.blackJack.dealerCards)
  const dealerScore = useSelector((state: any)=> state.blackJack.dealerScore)
  return (
    <div>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <h1>Dealer Score</h1>
          <h4>{dealerScore}</h4>
          <div className='dealerCards'>
              {
                dealerCards?.map((item: ICard, index: number)=> (
                    <Card suit = {item.suit} value= {item.value} key={index}></Card>
                )) 
            }
          </div>
        </Grid>
    </div>
  )
}

export default Dealer