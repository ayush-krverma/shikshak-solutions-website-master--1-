import React, {useState} from "react";
import {IonAlert, IonCol, IonRow} from "@ionic/react";
import {useDispatch, useSelector} from "react-redux";
import siteLog from "../../theme/image/siteLog.png";
import {signout} from "../../actions/CommonAction";
import {useHistory} from "react-router-dom";

export const SchoolMasterDashboardBodyComponent = ()=>{
    const {userInfo} = useSelector((state) => state.userSignin);
    const [showAlert,setShowAlert] = useState(false);
    const dispatch = useDispatch();
    const logOutMe = ()=>{
        dispatch(signout())
    }
    const history = useHistory();

    const goToPage = (type)=>{
        history.push(type);
    }
    return(
        <div className={"admin_dashboard_main_content_container"}>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header="Logout"
                message="Are you sure to logout?"
                buttons={
                    [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                setShowAlert(false)
                            },
                        },
                        {
                            text: 'Yes',
                            role: 'confirm',
                            handler: () => {
                                logOutMe();
                            },
                        },
                    ]
                }
            />
            <div className={"admin_logo_section"}>
                <img alt={"siteLog"} src={siteLog}/>
            </div>
            <div className={"admin_hello_section"}>
                Welcome {userInfo?.name}
            </div>
            <div className={"admin_dashboard_main_content_inner"}>
                <IonRow>
                    <IonCol className={"admin_dashboard_block_div_container_col"}>
                        <div className={"admin_dashboard_block_div_container"}>
                            <div className={"icon_svg"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.68 478.68"><path d="M468.68 255.61v207.54h-91.73V255.6h91.72z" fill="#f2d59f"/><path d="M416.91 186.8l51.76 68.8h-91.72v-68.8z" fill="#8ecac1"/><path d="M376.95 255.6v207.55h-91.74v-100.4h-45.87-45.87v100.4h-91.74V255.6v-68.8L239.34 118l137.61 68.8v68.8zm-115.03-50.19c0-12.47-10.11-22.58-22.58-22.58s-22.58 10.11-22.58 22.58 10.11 22.58 22.58 22.58 22.58-10.11 22.58-22.58z" fill="#f2d59f"/><path d="M326.06 15.53l-31.07 26.32 31.07 26.32h-86.72V15.53zm-86.72 347.22h45.87v100.4h-45.87z" fill="#ff7124"/><circle cx="239.34" cy="205.41" r="22.58" fill="#e6b263"/><path d="M193.47 362.75h45.87v100.4h-45.87z" fill="#ff7124"/><path d="M101.73 255.6v207.55H10V255.61l.01-.01z" fill="#f2d59f"/><path d="M101.73 186.8v68.8H10.01l51.76-68.8z" fill="#8ecac1"/><g fill="#5e2a41"><path d="M376.95 473.15h-91.74c-5.522 0-10-4.477-10-10s4.478-10 10-10h91.74c5.522 0 10 4.477 10 10a10 10 0 0 1-10 10zm-183.48 0h-91.74c-5.522 0-10-4.477-10-10s4.478-10 10-10h91.74c5.522 0 10 4.477 10 10s-4.478 10-10 10z"/><path d="M101.729 473.15H10a10 10 0 0 1-10-10V255.61a10 10 0 0 1 10-10c5.522 0 10 4.477 10 10v197.54h81.729c5.522 0 10 4.477 10 10a10 10 0 0 1-10 10z"/><path d="M101.729 265.6H10.01c-5.522 0-10-4.477-10-10s4.478-10 10-10h91.72c5.522 0 10 4.477 10 10s-4.478 10-10.001 10zm366.941 0h-91.72c-5.522 0-10-4.477-10-10s4.478-10 10-10h91.72c5.522 0 10 4.477 10 10s-4.478 10-10 10z"/><path d="M468.68 473.15h-91.73c-5.522 0-10-4.477-10-10s4.478-10 10-10h81.729V255.61c0-5.523 4.478-10 10-10s10 4.477 10 10v207.54a10 10 0 0 1-9.999 10zm-183.47-1h-91.74a9 9 0 0 1-9-9v-100.4a9 9 0 0 1 9-9h91.74a9 9 0 0 1 9 9v100.4a9 9 0 0 1-9 9zm-82.74-18h73.74v-82.4h-73.74v82.4zm-146.6-29.58c-5.522 0-10-4.477-10-10V392.6c0-5.523 4.478-10 10-10s10 4.477 10 10v21.97a10 10 0 0 1-10 10zm366.94 0c-5.522 0-10-4.477-10-10V392.6c0-5.523 4.478-10 10-10s10 4.477 10 10v21.97c0 5.523-4.478 10-10 10zM55.87 345.09c-5.522 0-10-4.477-10-10v-21.97c0-5.523 4.478-10 10-10s10 4.477 10 10v21.97a10 10 0 0 1-10 10zm366.94 0c-5.522 0-10-4.477-10-10v-21.97c0-5.523 4.478-10 10-10s10 4.477 10 10v21.97c0 5.523-4.478 10-10 10z"/><use/><use/><use y="-79.48"/><use y="-79.48"/><path d="M239.34 315.23c-5.522 0-10-4.477-10-10v-21.96c0-5.523 4.478-10 10-10a10 10 0 0 1 10 10v21.96c0 5.523-4.478 10-10 10zm229.334-49.623a9.96 9.96 0 0 1-7.235-3.101 10.29 10.29 0 0 1-.76-.895L411.92 196.8h-34.97c-5.522 0-10-4.477-10-10s4.478-10 10-10h39.96a10 10 0 0 1 7.991 3.988l51.684 68.698a10.01 10.01 0 0 1-1.014 13.36c-1.936 1.845-4.42 2.761-6.897 2.761zm-458.673-.004a9.96 9.96 0 0 1-6.892-2.756c-3.769-3.589-4.127-9.413-.969-13.418l51.639-68.64a10 10 0 0 1 7.991-3.988h39.96c5.522 0 10 4.477 10 10s-4.478 10-10 10H66.76l-48.759 64.811a10.02 10.02 0 0 1-.75.885c-1.967 2.064-4.607 3.106-7.25 3.106zM239.34 472.15a9 9 0 0 1-9-9v-100.4a9 9 0 1 1 18 0v100.4a9 9 0 0 1-9 9z"/><path d="M376.95 473.15c-5.522 0-10-4.477-10-10V192.98l-127.61-63.8-127.61 63.8v270.17c0 5.523-4.478 10-10 10s-10-4.477-10-10V186.8a10 10 0 0 1 5.528-8.944l137.61-68.8a10 10 0 0 1 8.943 0l137.61 68.8a10 10 0 0 1 5.528 8.944v276.35a10 10 0 0 1-9.999 10z"/><path d="M239.34 128c-5.522 0-10-4.477-10-10V68.17c0-5.523 4.478-10 10-10a10 10 0 0 1 10 10V118c0 5.523-4.478 10-10 10z"/><path d="M326.06 78.17h-86.72c-5.522 0-10-4.477-10-10V15.53c0-5.523 4.478-10 10-10h86.72a10 10 0 0 1 6.464 17.631l-22.063 18.69 22.063 18.69a10 10 0 0 1 2.925 11.073c-1.445 3.937-5.194 6.556-9.389 6.556zm-76.72-20h49.444l-10.258-8.69a10 10 0 0 1 0-15.26l10.258-8.69H249.34v32.64zm-10 178.82c-17.413 0-31.58-14.167-31.58-31.58s14.167-31.58 31.58-31.58 31.58 14.167 31.58 31.58-14.167 31.58-31.58 31.58zm0-45.16a13.6 13.6 0 0 0-13.58 13.58 13.6 13.6 0 0 0 13.58 13.58 13.6 13.6 0 0 0 13.58-13.58 13.6 13.6 0 0 0-13.58-13.58z"/></g><defs><path id="B" d="M147.6 394.71c-5.522 0-10-4.477-10-10v-21.96c0-5.523 4.478-10 10-10s10 4.477 10 10v21.96c0 5.523-4.478 10-10 10z"/><path id="C" d="M331.08 394.71c-5.522 0-10-4.477-10-10v-21.96c0-5.523 4.478-10 10-10a10 10 0 0 1 10 10v21.96a10 10 0 0 1-10 10z"/></defs></svg>
                            </div>
                            <IonRow>
                                <IonCol className={"text-center"}>
                                    <button onClick={()=>goToPage('/add-new-teacher')} className={"add_button"}>Add New Teacher</button>
                                </IonCol>
                                <IonCol className={"text-center"}>
                                    <button onClick={()=>goToPage('/all-teacher-list')} className={"view_button"}>View Teacher List</button>
                                </IonCol>
                            </IonRow>
                        </div>
                    </IonCol>
                    <IonCol className={"admin_dashboard_block_div_container_col"}>
                        <div className={"admin_dashboard_block_div_container"}>
                            <div className={"icon_svg"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><path d="M474.261 401.508v43.113h-37.724-134.729v-43.113h80.729z" fill="#f4661e"/><path d="M188.634 318.73c15.629 8.192 33.844 12.718 53.892 12.718s38.263-4.635 53.892-12.718v34.276s-22.203 26.945-53.892 26.945-53.892-26.945-53.892-26.945V318.73h0z" fill="#fedaab"/><path d="M344.921 385.341c14.551 4.635 26.945 9.7 37.616 15.197v.97h-80.73v43.113h134.729v1.94c10.671 17.245 10.779 30.395 10.779 30.395v26.945H37.738v-26.945s.97-58.958 102.395-91.616c0 0 36.755-19.185 48.503-32.335 0 0 22.203 26.945 53.892 26.945s53.892-26.945 53.892-26.945c11.746 13.15 48.501 32.336 48.501 32.336z" fill="#4cbd91"/><path d="M296.418 318.73c-15.629 8.084-33.844 12.718-53.892 12.718s-38.263-4.527-53.892-12.718c-34.598-18-57.34-53.353-63.161-95.497-16.706-2.263-33.844-18.108-33.844-31.903 0-14.874 14.443-21.557 32.335-21.557v-21.557s43.113 0 91.616-48.503c0 0 70.059 43.113 145.508 43.113v26.945c17.892 0 32.335 6.682 32.335 21.557 0 13.797-17.137 29.64-33.844 31.903-5.819 42.146-28.563 77.499-63.161 95.499z" fill="#fedaab"/><path d="M215.581 99.714c-48.503 48.503-91.616 48.503-91.616 48.503v-5.389S118.36 8.099 242.527 8.099c123.951 0 118.562 134.729 118.562 134.729-75.449-.001-145.508-43.114-145.508-43.114z" fill="#a67c52"/><path d="M482.359 393.409h-96.15l.037-.07c-11.234-5.787-23.733-10.86-38.188-15.498-9.621-5.065-33.321-18.491-43.542-28.137v-26.192c32.68-18.787 55.045-52.405 62.206-93.53 18.607-5.313 34.799-22.687 34.799-38.653 0-16.219-12.185-26.993-32.335-29.224v-19.129c.158-4.579 1.563-67.652-37.994-108.823C309.419 11.491 279.587 0 242.527 0c-37.158 0-67.044 11.513-88.826 34.219-39.48 41.157-38.001 104.125-37.834 108.761v19.125c-20.151 2.231-32.335 13.004-32.335 29.224 0 15.966 16.194 33.339 34.799 38.653 7.162 41.133 29.533 74.756 62.206 93.531v26.19c-10.217 9.641-33.938 23.079-43.554 28.144-105.062 34.091-107.299 96.337-107.342 98.976l-.001 35.176h425.773v-35.11c-.004-.509-.175-10.398-6.421-24.172h33.366v-59.308h.001zm-285.627-62.136c14.14 5.487 29.485 8.273 45.794 8.273 16.181 0 31.524-2.8 45.794-8.317v18.657c-5.531 5.783-23.048 21.967-45.794 21.967-22.598 0-40.237-16.216-45.794-21.984v-18.596h0zM165.457 45.361c18.605-19.353 44.534-29.165 77.07-29.165 32.442 0 58.322 9.793 76.918 29.106 27.707 28.776 32.611 71.659 33.422 89.245-69.062-2.924-132.388-41.328-133.041-41.73l-5.447-3.351-4.523 4.522c-33.19 33.19-63.757 42.509-77.815 45.119.165-13.207 2.921-62.024 33.416-93.746zm-31.962 176.766l-.841-6.091-6.093-.826c-11.717-1.588-26.834-13.453-26.834-23.88 0-12.488 18.552-13.459 24.237-13.459h8.098v-22.305c14.834-2.216 48.103-10.995 84.763-45.763 17.497 9.815 73.821 38.599 136.169 40.961l-.005 27.106h8.098c5.686 0 24.237.97 24.237 13.459 0 10.427-15.117 22.292-26.833 23.88l-6.094.826-.841 6.091c-5.559 40.254-27.019 72.846-58.86 89.412-15.154 7.839-32.033 11.812-50.171 11.812-18.337 0-35.203-3.968-50.155-11.805-31.855-16.573-53.315-49.164-58.875-89.418zm305.723 254.932v18.745H45.836v-18.699c.052-.948.975-13.94 12.483-30.19 20.263-28.612 57.024-45.086 84.297-53.868l.654-.211.61-.319c3.353-1.75 29.401-15.505 44.481-28.135 9.324 8.777 28.869 23.665 54.166 23.665s44.842-14.888 54.166-23.665c15.08 12.629 41.129 26.385 44.481 28.135l.622.325.668.213 1.078.353H293.71v59.31h137.064c7.838 13.494 8.416 23.685 8.444 24.341zm26.945-40.535H309.905v-26.918h156.259v26.918z" fill="#231f20"/></svg>
                            </div>
                            <IonRow>
                                <IonCol className={"text-center"}>
                                    <button onClick={()=>goToPage('/add-new-student')} className={"add_button"}>Add New Student</button>
                                </IonCol>
                                <IonCol className={"text-center"}>
                                    <button onClick={()=>goToPage('/all-student-list')} className={"view_button"}>View Student List</button>
                                </IonCol>
                            </IonRow>
                        </div>
                    </IonCol>
                    <IonCol>
                        <div className={"admin_dashboard_block_div_container"}>
                            <div className={"icon_svg"}>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M13.809 256l140.627 81.19V174.809z" fill="#cee8fa"/><path d="M273.19 203.873H168.245v-29.064c0-4.934-2.632-9.492-6.904-11.958s-9.536-2.466-13.809 0L6.904 244.04A13.81 13.81 0 0 0 0 255.999c0 4.934 2.632 9.492 6.904 11.958l140.628 81.191a13.8 13.8 0 0 0 13.808 0c4.272-2.466 6.904-7.024 6.904-11.958v-29.064H273.19c7.625 0 13.809-6.182 13.809-13.809V217.68c-.001-7.625-6.184-13.807-13.809-13.807zM140.628 313.274L41.426 256l99.202-57.275v18.956 76.637 18.956zm118.753-32.764h-91.136v-49.02h91.136v49.02z" fill="#2d527c"/><path d="M323.513 113.414v285.17c59.418-20.133 102.183-76.365 102.183-142.586s-42.764-122.451-102.183-142.584z" fill="#cee8fa"/><path d="M323.515 412.393c-2.85 0-5.67-.882-8.048-2.586a13.81 13.81 0 0 1-5.762-11.222v-285.17a13.81 13.81 0 0 1 18.239-13.078C394.672 122.948 439.505 185.503 439.505 256s-44.834 133.052-111.561 155.664c-1.445.488-2.942.729-4.429.729zm13.807-278.215V377.82c45.286-23.071 74.566-69.852 74.566-121.822s-29.28-98.748-74.566-121.82zm-62.138 358.638c-78.997 0-152.51-39.19-196.65-104.834a13.81 13.81 0 0 1 3.755-19.163c6.328-4.257 14.909-2.575 19.165 3.753 38.999 58 103.945 92.628 173.731 92.628 115.352 0 209.199-93.846 209.199-209.199s-93.848-209.2-209.2-209.2c-69.786 0-134.731 34.628-173.731 92.628-4.256 6.328-12.838 8.009-19.165 3.753s-8.009-12.835-3.755-19.163c44.14-65.644 117.654-104.834 196.65-104.834C405.764 19.184 512 125.42 512 256S405.765 492.816 275.184 492.816z" fill="#2d527c"/></svg>
                            </div>
                            <IonRow>
                                <IonCol className={"text-center"}>
                                    <button onClick={()=>setShowAlert(true)} className={"add_button"}>Log out Me</button>
                                </IonCol>
                                <IonCol className={"text-center"}>
                                    <button onClick={()=>goToPage('/change-my-password')} className={"view_button"}>Change Password</button>
                                </IonCol>
                            </IonRow>
                        </div>
                    </IonCol>
                </IonRow>
                {/*<IonRow>*/}
                {/*    <IonCol className={"admin_dashboard_block_div_container_col"}>*/}
                {/*        <div className={"admin_dashboard_block_div_container"}>*/}
                {/*            <div className={"icon_svg"}>*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M32 7h10v45H32z" fill="#14a085"/><path d="M17 38h10v14H17z" fill="#f29c1f"/><path d="M2 29h10v23H2z" fill="#e57e25"/><path d="M47 15h10v37H47z" fill="#71c285"/><path d="M59 53H1a1 1 0 1 1 0-2h58a1 1 0 1 1 0 2z" fill="#556080"/></svg>*/}
                {/*            </div>*/}
                {/*            <IonRow>*/}
                {/*                <IonCol className={"text-center"}>*/}
                {/*                    <button onClick={()=>goToPage('/all-student-list-progress')} className={"add_button"}>Student progress</button>*/}
                {/*                </IonCol>*/}
                {/*                <IonCol className={"text-center"}>*/}
                {/*                    <button onClick={()=>goToPage('/all-teacher-list-progress')} className={"view_button"}>Teacher progress</button>*/}
                {/*                </IonCol>*/}
                {/*            </IonRow>*/}
                {/*        </div>*/}
                {/*    </IonCol>*/}
                {/*</IonRow>*/}
            </div>
        </div>
    )
}