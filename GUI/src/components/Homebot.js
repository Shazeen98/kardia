import React from 'react'
import './Homebot.css';

function Homebot() {
    return(
         <div className = "home-bot">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E0E2EE" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,250.7C480,288,600,288,720,256C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,
            1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <div className = "bot-text">
            For any inquiry or for more information, please feel free to get in touch.
                <div className = "bot-text2">
                  We'll be glad to hear from you
                </div>
            </div>
         </div>


    )
    
}

export default Homebot;