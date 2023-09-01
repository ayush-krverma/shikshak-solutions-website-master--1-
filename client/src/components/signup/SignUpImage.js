import React from 'react'
import Bulb from '../../image/Simg3.png';
import S5img from '../../image/S5img.jpg';

function SignUpImage() {
    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <div className="signup">
                            <div className=" d-flex">
                                <div className=" align_center" >
                                    <img src={S5img} className={"image_align_center"}  alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <div className="signup">
                            <div className="d-flex">
                                <div className="align_center" >
                                    <img src={Bulb} className={"image_align_center"}  alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpImage
