 import './Homepage.css'
import Info from '../Info'
import Navbar from '../Navbar';
import People from '../People';
import Homebot from '../Homebot'
import Footer from '../Footer'


function Homepage(){
    return(
        <div className= 'home-page'>
        <Navbar/>
        <Info/>
        <People/>
        <Homebot/>
        <Footer/>
        </div>
        
    )
}

export default Homepage;
