import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbarmain.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function Navbarmain() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick1 = () => setClick(!click);
  const closeMobileMenu1 = () => setClick(false);

  const showButton1 = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton1();
  }, []);

  window.addEventListener('resize', showButton1);

  return (
    <>
      <nav className='navbar1'>
        <div className='navbar-container1'>
          <Link to='/' className='navbar-logo1' onClick={closeMobileMenu1}>
            KARDIA
            <i class='fab fa-typo31' />
          </Link>
          <div className='menu-icon1' onClick={handleClick1}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars1'} />
          </div>
          <ul className={click ? 'nav-menu active1' : 'nav-menu1'}>
            
            
            <li className='nav-item1'>
              <Link
                to='/log-in'
                className='nav-links1'
                onClick={closeMobileMenu1}
              >
                LOG IN
              </Link>
            </li>


            
          </ul>
          {button && <Button buttonStyle='btn--primary' >GET STARTED</Button>}
        </div>
      </nav>
      <nav className = 'navbar2'>
        <div className = 'navbar-container2'>
          <ul className= {click ? 'nav-menu active1' : 'nav-menu2'}>
          <li className='nav-item2'>
              <Link to='/home' className='nav-links2' onClick={closeMobileMenu1}>
               HOME
              </Link>
          </li>
          <li className='nav-item2'>
              <Link
                to='/about'
                className='nav-links2'
                onClick={closeMobileMenu1}
              >
               ABOUT 
              </Link>
            </li>
            <li className='nav-item2'>
              <Link
                to='/predict'
                className='nav-links2'
                onClick={closeMobileMenu1}
              >
                PREDICT
              </Link>
            </li>

            <li className='nav-item2'>
              <Link
                to='/contact'
                className='nav-links2'
                onClick={closeMobileMenu1}
              >
                CONTACT
              </Link>
            </li>

            <li className='nav-item2'>
              <Link
                to='/log-in'
                className='nav-links2'
                onClick={closeMobileMenu1}
              >
               GITHUB
              </Link>
            </li>

          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbarmain;