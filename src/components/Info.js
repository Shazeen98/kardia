import React from 'react'
import './Info.css'

function Info(){
    return(
        <div className = "Video-page" >
            <video src = './Videos/video1.mp4' autoPlay loop muted/>
            <br/><br/><br/><br/><br/><br/>
            <div className = "text1">
            <p>We're overdue for a revolution of predicting mortality.</p>
           
            </div>
            
            
            <div className = "video-text">
        
            Using Data Science and Machine Learning techniques , Kardia is predicting mortality 
            of Heart Failure Patients- doing for mortality prediction what Google did for the internet .
            </div>
            
            
          

            
        </div>
    )
}

export default Info;