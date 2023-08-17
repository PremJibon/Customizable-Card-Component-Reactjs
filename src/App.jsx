import { useState } from 'react'
import {Card} from './components/Card'
import './App.css'

function App() {
  
  return (
    <>
      <Card imgSrc='https://picsum.photos/300/200'  imgAlt="card img"
      title='Hero Khor' 
      description='This is the card discrioption you can add ore detail;'
      buttonText='Learn More'
      link='cardPage'
      />
    </>
  )
}

export default App
