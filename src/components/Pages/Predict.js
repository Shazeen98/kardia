
import './Predict.css';

function App() {
  return (
    <div className="predict">
      <div className="pic">
         <img src="/Images/Img for Predict Pg.png" width='900px' height='800px' />
     
      </div>

      <div className="predict-form">
        <div className='topic'>
          <h1>Predict Your Morality</h1>
          </div>
          <div className = 'list'>
                    <form className = 'prediction'>
                      <div className="align">
                    <label className="lbla">Age</label><br/><br/>
                    <input className = 'predict-txt' type="text" placeholder= '   '/><br/><br/><br/>
                    <label className="lbla">Ejection Fraction</label><br/><br/>
                    <input className = 'predict-txt' type="text" placeholder= '      '/><br/><br/><br/>
                    <label className="lbla">Serum Creatinine</label><br/><br/>
                    <input className = 'predict-txt'type="text" placeholder='     '/><br/><br/><br/>
                    <button className = 'btn-submit'>View Result</button></div>
                    <div className="result-div">
                    <label className="lblb"></label><br/><br/>
                    <input className = 'result'type="text" placeholder='     '/><br/><br/><br/></div>
            
                    
                    </form>
                </div> 
      </div>
         
    </div>
  );
}

export default App;
