import React, {useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router';
import { Toast, TOAST_FAILURE, TOAST_SUCCESS } from '../Common/Toasts/Toast';
import { FetchModal } from '../FetchModal/FetchModal';
import firebase from "firebase";

interface Data {
    date : string,
    age : number,
    ef : number,
    creatinine : number,
    prediction : number
}

export function Predict() {

    const history = useHistory();
    const location = useLocation();
    const [success,setSuccess] = useState(false);
    const [failure,setFailure] = useState(false);
    const [userMessage,setUserMessage] = useState("");
    const [data,setData] = useState<Data[]>();

    function fetch() {
        let temp : Data[] = [];
        firebase.firestore().collection("predictions")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let _d = doc.data();
                    let d = {
                        date : _d["date"] ,
                        age : _d["age"],
                        ef : _d["ef"],
                        creatinine : _d["creatinine"],
                        prediction : _d["prediction"]
                    } ;
                    temp.push(d);
                });
                setData(temp);
                console.log(temp)
            });
    }

    useEffect(()=> {
        fetch();
    },[])

    return (
        <>
            <div className="flex-shrink-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <h5 className="font-weight-bold mt-1 mb-1">Predict</h5>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-8 col-sm-6 mb-2">
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-primary w-100 bold-font" data-toggle="modal" data-target="#fetch-modal" onClick={()=>history.push("#fetch")}>
                                        <i className="fas fa-search-plus"></i>Predict</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-2">
                                    <div className="table-responsive border-0 p-0 shadow-none">
                                        <table className="table table-borderless">
                                            <thead>
                                            <tr>
                                                <th className="width: 20%">Date Time</th>
                                                <th className="width: 10%">Age</th>
                                                <th className="width: 20%">Ejection Fraction</th>
                                                <th className="width: 20%">Creatinine</th>
                                                <th className="width: 20%">Prediction</th>
                                                <th className="width: 10%">Has a risk ?</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                !!data &&
                                                data.map((d : Data)=> {
                                                    return (
                                                        <tr>
                                                            <td><span className="responsive-mobile-heading">Date Time</span>{d.date.toString()}</td>
                                                            <td><span className="responsive-mobile-heading">Age</span>{d.age}</td>
                                                            <td><span className="responsive-mobile-heading">Ejection Fraction</span>{d.ef}</td>
                                                            <td><span className="responsive-mobile-heading">Creatinine</span>{d.creatinine}</td>
                                                            <td><span className="responsive-mobile-heading">Prediction</span>{d.prediction}</td>
                                                            <td><span className="responsive-mobile-heading">Has a risk</span>{d.prediction > 0.45 ? "Yes" : "No"}</td>
                                                        </tr>);
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        !!location.hash && location.hash === "#fetch" &&
                        <FetchModal
                            success={(msg : any)=> {
                                setUserMessage(msg)
                                setSuccess(true)
                                fetch()
                            }
                            }
                            failure={(msg:any)=> {
                                setUserMessage(msg)
                                setFailure(true)}}
                        />
                    }
                    {
                        success && <Toast type={TOAST_SUCCESS} message={userMessage}
                                          timeout={3000}/>
                    }
                    {
                        failure && <Toast type={TOAST_FAILURE} message={userMessage}
                                          timeout={3000}/>
                    }
                </div>
            </div>
        </>
    );
}