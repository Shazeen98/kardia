import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quick Menu</h2>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/sign-up'>Sign Up</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
              <div className = 'address-footer'>
              57, Ramakrishna Road, Colombo 06, Sri Lanka
              </div>
              <div className = 'Number-footer'>
              +94-77-148-3381
              +94-71-036-5150
              </div>
          </div>
          
            <Button buttonStyle = 'prdict-btn-f'>Predict </Button>
          
        </div>
       
      </div>

      <div className = "rule">
        <hr/>
   
      </div>
    
       
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Kardia
              
            </Link>
          </div>
         
        
       
     
    </div>
  );
}

export default Footer;