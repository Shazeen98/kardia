import React from 'react';
import './Middle.css';
import { Button } from './Button';
import Navbarmain from './Navbarmain';

function Middle(){
    return(
        <div className = 'middle-container'>
             <Navbarmain/>
             <div className = 'image'>
             <img src="/Images/img1.png" width='1056px' height= '723px'/>   
             </div>
            
             <div className='topic-container'>
             <p >Welcome to  </p>
             <p>Kardia</p>
             </div>
             <div className = 'mid-text'>
             <p >Machine Learning to predict mortality</p>
             </div>
             <Button  buttonStyle='btn--primary'>GET STARTED </Button>
            
             
            
             
        </div>
    )
}

export default Middle;