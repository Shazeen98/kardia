import React, {useEffect, useState} from "react";

export const TOAST_SUCCESS = "notify-success";
export const TOAST_FAILURE = "notify-failure";

export function Toast ({type,message,timeout} : {type : string,message : string,timeout : number}) {

    const[isTimeOut,setIsTimeOut] = useState(false);

    useEffect(()=> {
        setTimeout(
            function () {
                setIsTimeOut(true)
            },
            timeout
        );
    },[]);

    return (
        <div className={`notification-box ${type} ${isTimeOut ? "animated fadeOutUp" : "animated fadeInDown"}
        merchant-discover-success-notification`}>
            <div className="container-fluid no-padding">
                <div className="row">
                    <div className="col-1 notification-box__icon-area">
                        <span className="notification-box__icon"><i className="fas fa-check-circle"></i></span>
                    </div>
                    <div className="col-10">
                        <span className="notification-box__text">{message}</span>
                    </div>
                    <div className="col-1">
                            <span className="notification-box__close"><a>
                                <i className="fas fa-times-circle"></i></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
