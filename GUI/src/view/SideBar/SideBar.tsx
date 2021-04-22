import React, {useEffect} from "react";
import {SideBarHeader} from "./SideBarHeader";
import {SideBarNavigation} from "./SideBarNavigation";
import {SideBarFooter} from "./SideBarFooter";
import {useHistory} from "react-router";
import firebase from "firebase";

export function SideBar () {

    const history = useHistory();

    useEffect(() => {
        const user = firebase.auth().currentUser;
        console.log(user);
        if(user == null || user == undefined) {
            history.push("/login");
        }
    },[]);

    return (
        <nav className="sidebar">
            <SideBarHeader/>
            <SideBarNavigation/>
            <SideBarFooter/>
        </nav>
    );
}
