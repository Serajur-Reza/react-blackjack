import { Paper } from '@mui/material'
import React from 'react'
import './style.scss'

type Props = {
  suit: string,
  value: number | string
}

const Card = (props: Props) => {
  const {suit, value} = props

  const dynamicClass =  () =>{
    if(suit === '♦' || suit === '♥'){
      return 'red-card'
    }
    else{
      return 'black-card'
    }
  }
  return (
    <Paper className='card'>
      <div className={dynamicClass()}>
        {suit}
      </div>
      <div className={dynamicClass()}>
        {value}
      </div>
    </Paper>
  )
}

export default Card