import React, {useState} from 'react';
import {useHistory} from "react-router";
import axios from "axios";
import firebase from "firebase";

const URL = "https://kardia-predict-model.herokuapp.com/predict";

export function FetchModal({success,failure} : {success : any,failure: any}) {

    const history  = useHistory();
    const[onClose,setOnClose] = useState(false);

    const[saving,setSaving] = useState(false);
    const[age,setAge] = useState<number>();
    const[ef,setEF] = useState<number>();
    const[creatinine,setCreatinine] = useState<number>();

    function onPredict() {
        if(!!age && !!ef && !!creatinine && age >= 1) {
            setSaving(true);
            axios.post(URL,{
                Age : age,
                EF : ef,
                Creatinine : creatinine
            }
            )
            .then((res) => {
                    if(res.status === 200 && !!res && !!res.data) {
                        firebase.firestore().collection("predictions").add({
                            date : new Date().toLocaleDateString("en-US"),
                            age : age,
                            ef : ef,
                            creatinine : creatinine,
                            prediction : res.data
                        })
                            .then(() => {
                                success("Fetch prediction!")
                            })
                            .catch(error  => [
                                failure(error)
                            ])
                    } else {
                        failure("Failed to predict!")
                    }
                    setSaving(false);
                })
                .catch((error) => {
                    console.error("ERROR" + error)
                    setSaving(false);
                    failure("Failed to predict!")
                })
        } else {
            failure("Please provide all details!")
        }
    }

    return (
        <>
            <div className={!onClose ? "modal fade show d-block animated slideInDown" : "modal fade show d-block animated fadeOutUp"} id="add-new-notification-modal" tabIndex={-1}
                 aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">Fetching</h5>
                            <button onClick={()=> {
                                setOnClose(true)
                                history.goBack()
                            } } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-4 mb-6 bold-font">Age </div>
                                <div className="col-lg-4 mb-6 bold-font">Ejection Fraction</div>
                                <div className="col-lg-4 mb-6 bold-font">Creatinine</div>
                            </div>
                            <div className="row mb-6">
                                <div className="col-sm-4">
                                    <input className="form-control" type="number"
                                           onChange={(e)=> setAge(Number(e.target.value))}
                                           value={age}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <input className="form-control" type="number"
                                           onChange={(e)=> setEF(Number(e.target.value))}
                                           value={ef}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <input className="form-control" type="number"
                                           onChange={(e)=> setCreatinine(Number(e.target.value))}
                                           value={creatinine}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                    onClick={()=> {
                                        setOnClose(true);
                                        history.goBack()}}
                            >Close</button>
                            <button type="button" className={!saving ? "btn btn-primary modal-footer__save-btn" : "btn btn-primary modal-footer__save-btn d-none"}
                                    onClick={()=> onPredict()}>Predict
                            </button>
                            <button type="button" className={!saving ? "btn btn-primary modal-footer__saving-btn d-none" : "btn btn-primary modal-footer__saving-btn"}><i
                                className="fas fa-spin fa-spinner"></i>&nbsp;Predicting...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}