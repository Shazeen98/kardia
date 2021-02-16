import React from 'react';
import './Middle.css';
import { Button } from './Button';

function Middle(){
    return(
        <div className = 'middle-container'>
            
             <div className='topic-container'>
             <p >Welcome to  </p>
             <p>Kardia</p>
             </div>
             <div className = 'mid-text'>
             <p >Machine Learning to predict mortality</p>
             </div>
             <Button buttonStyle='btn--primary'>GET STARTED </Button>
             <img src="/Images/img1.png"/>
             
             
        </div>
    )
}

export default Middle;