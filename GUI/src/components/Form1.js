
import React from 'react'
import { Link } from 'react-router-dom'
import './Form1.css'


function Form1(){
    return(
        <div className = " form-start">
            <Link to = '/home'>
            <i className = " fas fa-times"/> 
            </Link>
            <div className = 'image2'>
                <img src="/Images/img2.png" width='1258px' height= '964px'/>   
            </div>
            <div className='log-cont'>
            <h1 className='log-in'>Login</h1>
            <button className = 'fb-sign-in'>Continue with facebook</button><br/>
                        <div className = "or-text1">
                        ──────────────── or ───────────────
                        </div>
                       
            <p className = 'log-text'>Sign in to your account to continue</p>
                <div className = 'list1'>
                    <form className = 'cont'>
                    <label className="lbl">Email Address</label><br/><br/>
                    <input className = 'email-txt' type="text" placeholder= '     Enter your email'/><br/><br/><br/>
                    <label className="lbl">Password</label><br/><br/>
                    <input className = 'pswd-txt'type="password" placeholder='     Enter your password'/><br/><br/><br/>
                    <button className = 'btn-sign'>Sign in</button>
                    <p className = 'p-reg'>Not registered ?<Link to = '/signup' className = "create-acc">  Create account</Link></p>
            
                    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form1;
