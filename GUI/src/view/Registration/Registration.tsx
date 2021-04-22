import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {Toast, TOAST_FAILURE, TOAST_SUCCESS} from "../Common/Toasts/Toast";
import firebase from "firebase";

export function Registration({status} : {status : any}) {

    const history  = useHistory();
    const[onClose,setOnClose] = useState(false);

    const[user,setUser] = useState({
        email : "",
        password : "",
        confirmPassword : "",
        name : ""
    });

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");
    const[name,setName] = useState("");

    const [success,setSuccess] = useState(false);
    const [failure,setFailure] = useState(false);
    const [userMessage,setUserMessage] = useState("");


    useEffect(()=> {
        setUser({
            ...user,
            email : email,
            password : password,
            confirmPassword : confirmPassword,
            name : name
        })
    },[email,password,confirmPassword,name])

    const[emailIsReq,setEmailIsReq] = useState(false);
    const[passwordIsReq,setPasswordIsReq] = useState(false);
    const[confirmPasswordIsReq,setConfirmPasswordIsReq] = useState(false);
    const[nameIsReq,setNameIsReq] = useState(false);
    const[isPasswordsMatch,setIsPasswordsMatch] = useState(true);

    const[creating,setCreating] = useState(false);

    function onRegistration() {

        if(email === undefined || email === '') {
            setEmailIsReq(true);
        }
        if(password === undefined || password === '') {
            setPasswordIsReq(true);
        }
        if(confirmPassword === undefined || confirmPassword === '') {
            setConfirmPasswordIsReq(true);
        }
        if(name === undefined || name === '') {
            setNameIsReq(true);
        }


        if(!!email && !!password && !!confirmPassword && !!name) {
            if(password === confirmPassword) {
                setIsPasswordsMatch(true);

                setCreating(true);

                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then((userCredential) => {

                        firebase.firestore().collection("users").doc(email).set({
                            email :  email,
                            name : name
                        })
                            .then(() => {
                                setCreating(false);
                                setSuccess(false)
                                setUserMessage("Registration success! Please Login to your account.")
                                setSuccess(true)
                            })
                            .catch((error) => {
                                let user = firebase.auth().currentUser;
                                if(user != null) {
                                    user.delete().then(
                                        x => {
                                            //deleted created account
                                        }
                                    )
                                }
                                setCreating(false);
                                setFailure(false)
                                setUserMessage(error)
                                setFailure(true)
                            });
                         setCreating(false);
                    })
                    .catch((error) => {
                         let errorCode = error.code;
                         let errorMessage = error.message;
                         setCreating(false);
                         setFailure(false)
                         setUserMessage(errorMessage)
                         setFailure(true)
                    });
            } else {
                setIsPasswordsMatch(false);
            }
        }
    }

    return (
        <>
            <div className={!onClose ? "modal fade show d-block animated slideInDown" : "modal fade show d-block animated fadeOutUp"} id="add-new-notification-modal" tabIndex={-1}
                 aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">Sign Up</h5>
                            <button onClick={()=> {
                                setOnClose(true)
                                history.goBack()
                            } } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">

                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="bold-font mb-1">Your Name</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <input className={!nameIsReq ? "form-control" : "form-control border-danger"} type="text"
                                           onChange={(e)=> {
                                               if(e.target.value === undefined || e.target.value === '') setNameIsReq(true)
                                               else setNameIsReq(false)
                                               setName(e.target.value)}}
                                    />

                                    <small className={!nameIsReq ? "text-danger d-none" : "text-danger"}><i
                                        className="fas fa-exclamation-triangle"></i> Name Required
                                    </small>
                                </div>
                            </div>
                            <br/>

                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="bold-font mb-1">Email</p>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-sm-12">
                                    <input className={!emailIsReq ? "form-control" : "form-control border-danger"} type="text"
                                           onChange={(e)=> {
                                               if(e.target.value === undefined || e.target.value === '') setEmailIsReq(true)
                                               else setEmailIsReq(false)
                                               setEmail(e.target.value)}}
                                    />

                                    <small className={!emailIsReq ? "text-danger d-none" : "text-danger"}><i
                                        className="fas fa-exclamation-triangle"></i> Email Required
                                    </small>
                                </div>
                            </div>

                            <br/>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="bold-font mb-1">Password</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="bold-font mb-1">Confirm Password</p>
                                </div>
                            </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <input className={!passwordIsReq ? "form-control" : "form-control border-danger"} type="password"
                                       onChange={(e)=> {
                                           if(e.target.value === undefined || e.target.value === '') setPasswordIsReq(true)
                                           else setPasswordIsReq(false)
                                           setPassword(e.target.value)}}
                                />
                                <small className={!passwordIsReq ? "text-danger d-none" : "text-danger"}><i
                                    className="fas fa-exclamation-triangle"></i> Password Required
                                </small>
                            </div>
                            <div className="col-sm-6">
                                <input className={(!confirmPasswordIsReq && isPasswordsMatch) ? "form-control" : "form-control border-danger"} type="password"
                                       onChange={(e)=> {
                                           if(e.target.value === undefined || e.target.value === '') setConfirmPasswordIsReq(true)
                                           else setConfirmPasswordIsReq(false)
                                           setConfirmPassword(e.target.value)}}
                                />
                                <small className={(!confirmPasswordIsReq && isPasswordsMatch) ? "text-danger d-none" : "text-danger"}><i
                                    className="fas fa-exclamation-triangle"></i> {!isPasswordsMatch ? "Passwords doesn't match" : "Confirm Password Required"}
                                </small>
                            </div>
                        </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                    onClick={()=> {
                                        setOnClose(true);
                                        history.goBack()}}
                            >Close</button>
                            <button type="button" className={!creating ? "btn btn-primary modal-footer__save-btn" : "btn btn-primary modal-footer__save-btn d-none"}
                                    onClick={()=> onRegistration()}>Sign Up
                            </button>
                            <button type="button" className={!creating ? "btn btn-primary modal-footer__saving-btn d-none" : "btn btn-primary modal-footer__saving-btn"}><i
                                className="fas fa-spin fa-spinner"></i>&nbsp;Creating...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                success && <Toast type={TOAST_SUCCESS} message={userMessage}
                                  timeout={3000}/>
            }
            {
                failure && <Toast type={TOAST_FAILURE} message={userMessage}
                                  timeout={3000}/>
            }
        </>
    );
}