import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import firebase from "firebase";

export function SideBarFooter () {

    const history = useHistory();
    const[settingsClick,setSettingsClick] = useState(false);
    const [userName,setUserName] = useState();

    useEffect(()=> {
        let user = firebase.auth().currentUser;

        if(user != null && user.email != null) {
            var docRef = firebase.firestore().collection("users").doc(user.email);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    let data = doc.data();
                    if(data != null && data.hasOwnProperty("name")) {
                        setUserName(data["name"]);
                    } else {
                        history.push("/login");
                    }
                } else {
                    history.push("/login");
                }
            }).catch((error) => {
                history.push("/login");
            });
        } else {
            history.push("/login");
        }
    },[])

    return (
        <div className="sidebar-footer">
            <div className="row no-gutters">
                <div className="col-sm-8">
                    <div className="sidebar__account d-sm-block d-none">
                        <div className="sidebar__account-item">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <a href="#" className="sidebar__account-item-link">
                                            <p className="sidebar__account-item-link-name m-0">{userName}</p>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 text-right d-sm-block d-none">
                    <div className="dropup">
                        <a className="nav-link dropdown-toggle" href="#" id="user-dropdown" data-toggle="dropdown"

                           onClick={()=> {
                               if(!settingsClick) setSettingsClick(true)
                               else setSettingsClick(false)
                           }}

                           aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-cog fa-lg"></i>
                        </a>
                        <div className={settingsClick ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="user-dropdown">
                            <a className="dropdown-item"><i
                                className="fas fa-sign-out-alt"
                            onClick={()=> {
                                firebase.auth().signOut().then(() => {
                                    history.push("/login")
                                }).catch((error) => {
                                    // An error happened.
                                });
                            }}
                            ></i> Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}