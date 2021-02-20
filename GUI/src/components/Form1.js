
import React from 'react'
import './Form1.css'
import { Button } from './Button';


function Form1(){
    return(
        <div className = " form-start">
        
        <div className = 'image2'>
            <img src="/Images/img2.png" width='600px' height= '600px'/>   
        </div>
         <h1 className='log-in'>Login</h1>
         <p className = 'log-text'>Sign in to your account to continue</p>
         <div className = 'list1'>
         <form className = 'info'>
           
            <label>Email Address</label><br/>
            <input type="text" placeholder='name@yourdomain.com'/><br/><br/><br/>
            <label>Password</label><br/>
            <input type="password" placeholder='Enter your password'/><br/><br/><br/>
            <button>Sign in</button>
        
        </form>
        </div>
        </div>
    );
}

export default Form1;