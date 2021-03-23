import React,{useState} from 'react'
import './Signin.css'
import axios from "axios";
import { Link } from 'react-router-dom'
// import { setUserSession } from './Utils/Common';
import { Button } from './Button';


function Signin(props){

    const[isLoading,setLoading]=useState(false);
    const [error, setError] = useState(null);
    const fullname = useFormInput('');
    const email = useFormInput('');
    const username = useFormInput('');
    const password = useFormInput('');
    const cnfrmPassword = useFormInput('');

    const formSubmit =  () => {
        setError(null);
        setLoading(true);

    this.password = password.value;
    this.cnfrmPassword = cnfrmPassword.value;


        if(password === cnfrmPassword){
        axios.post('http://localhost:8081', 
        { fullname: fullname.value, email: email.value, username: username.value,password:password.value })
        .then(response => {
            setLoading(false);
            // setUserSession(response.data.token, response.data.user);
            props.history.push('/login');
          }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) 
            setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
          });

        }
    }

    return(
        <div className = "sign-in-page">
            <div className="text-sign-page">
                <Link to = '/home'>
                <i className = " fas fa-times"/> 
                </Link>
                <div className = "get-text">
                    Get started with your account
                </div>
                <div className= "get-text1">
                     Create a Kardia account
                </div>
                <div  className="lb">
                <img src = "/Images/img3.png"  width ="693px " height="811px "/>   
                </div>
            </div>
            <div className = 'side-comp'>
                <div className= 'form-sign'>
                    <form noValidate onSubmit={Signin}>
                        <button className = 'btn-sign-in'>Sign up with facebook</button><br/>
                        <div className = "or-text">
                        ──────── or ──────── <br/>
                        <p className = "email-sign-in">sign up with your email addresss</p>
                        </div>

                        <div className="sign-form-info">
                            <label className="sign-name">Full Name</label><br/>
                            <input type = "text" {...fullname} className = "sign-name-txt" placeholder="  Enter your full  name"/><br/>
                            <label className="sign-email">Email Address</label><br/>
                            <input type = "text"  {...email} className = "sign-email-txt" placeholder="  Enter your email"/><br/>
                            <label className="sign-username">Username</label><br/>
                            <input type = "text"  {...username} className = "sign-uname-txt" placeholder="  Enter your user name"/><br/>
                            <label className="sign-pswd">Password</label>
                            <label className="sign-cn-pswd">Confirm Password</label><br/>
                            <input type = "password"  {...password} className = "sign-pswd-txt" placeholder="  Enter your password "/>
                            <input type = "password"  {...cnfrmPassword} className = "sign-cnpswd-txt" placeholder="  Re-Enter your password"/><br/>
                            <label className="sign-dob">Date of birth</label><br/>
                            <input type = "text" className = "sign-dob-txt" placeholder="  Enter your birthday"/><br/>
                            <p className = "sign-bot-text">By clicking the 'Get Started' button,
                             you are creating a Kardia account, and you agree to Kardia's Terms of Use and Privacy Policy.</p>

                             <button className = 'btn-getstart-sign' 
                             value={isLoading ? 'Loading...' : 'Login'} 
                             onClick={formSubmit} 
                             disabled={isLoading} 
                             >Getstarted</button>

                             <br/>

                             <p className = 'p-alr'>Already have an account ?<Link to = '/log-in' className = "login-acc">  Login</Link></p>

                        </div>
                                        
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

export default Signin;
