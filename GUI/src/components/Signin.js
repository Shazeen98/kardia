import React from 'react'
import './Signin.css'



function Signin(){
    return(
        <div className = " sign-start">
        
        <div className = 'image3'>
            <img src="/Images/img3.png" width='600px' height= '600px'/>   
        </div>
        <div className = 'container'>
        <h1 className='sign-in'>Get started with your account</h1>
         <p className = 'sign-text'>create a kardia account</p>

        </div>
         
         <div className = 'list1'>
         <form>
            
           
            <label>Email Address</label> 
            <label className='pswd-label'>Password</label><br/><br/>
            <input className = 'email-address' type="text" placeholder=' name@yourdomain.com'/>
            <input className = 'user-name' type="password" placeholder=' Enter your password'/><br/><br/><br/>

            <label>Username</label>
             <label className='confirm-label'>Confirm Password</label><br/>
            <input className = '' type="text" placeholder=' Enter your name'/>
            <input className = 're-pswd' type="password" placeholder=' Re-Enter your password'/><br/><br/><br/>

            <p className = 'txt-pa'>By clicking the 'Get Started' button, you are creating a Kardia account, and you agree to Kardia's Terms of Use and Privacy Policy.</p>
            <button className = 'sign-in-btn'>Sign in</button>
        
        </form>
        </div>
        </div>
    );
}

export default Signin;
