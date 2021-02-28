 import './Homepage.css'
import Info from '../Info'
import Navbar from '../Navbar';
import People from '../People';

function Homepage(){
    return(
        <div className= 'home-page'>
        <Navbar/>
        <Info/>
        <People/>
        </div>
        
    )
}

export default Homepage;
