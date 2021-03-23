
import React from 'react'
import { Link } from 'react-router-dom';
import './Form1.css'
import { useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';



function Form1({props}) {
    const useremail = useFormInput('');
    const password = useFormInput('');
    const[loading,setLoading]=useState(false);
    const [error, setError] = useState(null);

    const loginSubmit =  () => {
        setError(null);
        setLoading(true);

   
        axios.post('http://localhost:8081', 
        { useremail: useremail.value, password:password.value })
        .then(response => {
            setLoading(false);
            // setUserSession(response.data.token, response.data.user);
            props.history.push('/predict');
          }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) 
            setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
          });

        
    }

    return(
        <div className = " form-start">
            <Link to = '/home'>
            <i className = " fas fa-times"/> 
            </Link>
            <div className = 'image2'>
                <img src="/Images/img2.png" width='1238px' height= '964px'/>   
            </div>
            <div className='log-cont'>
              <h1 className='log-in'>Login</h1>
              <button className = 'fb-sign-in'>Continue with Facebook</button><br/>
                        <div className = "or-text1">
                        ──────────────── or ───────────────
                        </div>
                       
              <p className = 'log-text'>Sign in to your account to continue</p>
                  <div className = 'list1'>
                      <form className = 'cont'>
                      <label className="lbl">Email Address</label><br/><br/>
                      <input className = 'email-txt' type="text" {...useremail} placeholder= '     Enter your email'/><br/><br/><br/>
                      <label className="lbl">Password</label><br/><br/>
                      <input className = 'pswd-txt'type="password" {...password} placeholder='     Enter your password'/><br/><br/><br/>
                      <button className = 'btn-sign'
                      value={loading ? 'Loading...' : 'Login'} 
                      onClick={loginSubmit} 
                      disabled={loading} >Sign in</button>
                      <p className = 'p-reg'>Not registered ?<Link to = '/sign-up' className = "create-acc">  Create account</Link></p>
            
                    
                    </form>
                </div>
            </div>
        </div>
    );
    
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

export default Form1;
