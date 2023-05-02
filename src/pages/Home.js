import React from 'react'

import Img from '../components/Img.jpg'
import { FcMusic } from 'react-icons/fc';

export default function Home() {

    return (
      <div style={{backgroundColor: " lightyellow"}}>
      <div style={{ color: 'red', fontWeight: 'bold', textAlign: 'center',  height: '100vh' }}> 
      <h1 style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}>Welcome  <FcMusic size={50} /> </h1>
      <p>Ready for some fun!</p>
      <p>Click the</p>
      <p style={{ color: 'blue'}}> "Let's Play"</p>
      <p> button on the top </p>
      
    <div className="img"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <img src={Img} alt="img"  width="500px" height="500px" style={{ borderRadius: '50%' }}/>
  
</div>
</div>
</div>
    )
   }
  