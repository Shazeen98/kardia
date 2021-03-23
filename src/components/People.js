import React from 'react'
import './People.css'


function People(){
    return(
        <div className = "people1">
            <br/><br/>
            <div className = "num1">
                18M
            </div>
            <div className = "people2">
            people dies globally each year from Cardiovascular diseases (CVDs),
             making CVDs the number one cause of death globally.
            </div>
            <div className = 'num2'>
                31%
            </div>
            <p className = "people3">
            of all global death
            </p>
            <img className = "img4" src = "./Images/img4.png" width="788" height="746"/>
            <div className="people4">
                
                Cardiovascular diseases are set of diseases which involve the circulatory system.CVDs mainly exhibit 
            as Heart failure. Heart failure can simply define as failure of the heart’s main function which is 
            to pump blood properly to the whole body.
                
            
            </div>
            <p className="people5">
            Risk-stratification of heart failure patients for therapy and heart 
            implantation is a severe problem nowadays due to the lack of methods 
            to forecasting the mortality of heart failure patients manually by a 
            physician or a doctor. Generally risk-stratification is done by
             calculating a risk score using medical history, lifestyle and crucial
              health indicators, manually. It is not accurate.
            </p>
            <p className = "people6">
            By predicting heart failure patient will survive or not,
             Kardia can act as a supporting tool for doctors.
            </p>
            <button className ="bt" buttonStyle='btn-2'>Try kardia </button>

        </div>
    )
}

export default People;
