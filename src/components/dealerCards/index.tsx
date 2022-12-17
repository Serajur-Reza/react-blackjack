import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../cards'
import {ICard} from '../../types/index'


const Dealer = () => {
  const dealerCards = useSelector((state: any)=> state.blackJack.dealerCards)
  const dealerScore = useSelector((state: any)=> state.blackJack.dealerScore)

  console.log("dealerScore:", dealerCards)
  return (
    <div>
        <h1>Dealer Score</h1>
        <h5>{dealerScore}</h5>

        {
          dealerCards?.map((item: ICard, index: number)=> (
            <div>
              <Card suit = {item.suit} value= {item.value} key={index}/>
            </div>
          )) 
        }
    </div>
  )
}

export default Dealer