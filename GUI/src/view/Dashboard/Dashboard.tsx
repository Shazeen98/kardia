import React, {Suspense} from "react";
import {SideBar} from "../SideBar/SideBar";
import {Switch, Route, Router} from "react-router";
import {createBrowserHistory} from "history";
import {Login} from "../Login/Login";
import {Predict} from "../Predict/Predict";

export const history = createBrowserHistory()

export function Dashboard () {

    const history = createBrowserHistory();

    return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/login'} render={() =>
                            <Suspense fallback={""}>
                                <Login/>
                            </Suspense>
                        }/>
                    </Switch>
                    <Switch>
                        <Route exact path={'/'} render={() =>
                            <Suspense fallback={""}>
                                <SideBar/>
                                <Predict/>
                            </Suspense>
                        }/>
                    </Switch>
                </Router>
            </div>
    );
}
