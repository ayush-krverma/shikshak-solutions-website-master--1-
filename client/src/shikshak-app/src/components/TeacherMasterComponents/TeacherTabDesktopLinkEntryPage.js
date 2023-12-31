import React from "react";
import {IonPage} from "@ionic/react";
import {Route,useRouteMatch,Redirect,Switch} from "react-router-dom";
import {LeftSideBarComponent} from "../LeftSideBarComponents/LeftSideBarComponent";
import {TeacherDesktopDashboard} from "./TeacherDesktopDashboard";

export default function TeacherTabDesktopLinkEntryPage() {
    const { path } = useRouteMatch();
    return (
        <IonPage className={"main_padding_main_page dashboard_container"}>
            <div className={"row"}>
                <div className={"col-2"}>
                    <LeftSideBarComponent isTeacherLeftSideBar={true}/>
                </div>
                <div className={"col-10"}>
                    <Switch>
                        <Route exact path={path} render={()=> (<Redirect to={`${path}/home`}/>)}></Route>
                        <Route path={`${path}/home`}>
                            <TeacherDesktopDashboard/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </IonPage>
    )
}