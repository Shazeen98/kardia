import React from 'react'
import './Info.css'

function Info(){
    return(
        <div >
            <video src = './Videos/video1.mp4' autoPlay loop muted/>
            <br/><br/><br/><br/><br/><br/>
            <div className = "text1">
            We're overdue for a revolution of predicting mortality.
           
            </div>
            
            <div className = "text1"></div>
            <div className = "container">
            Using Data Science and Machine Learning techniques , Kardia is predicting mortality 
            of Heart Failure Patients- doing for mortality prediction what Google did for the internet .
            </div>
            
            
          

            
        </div>
    )
}

export default Info;