import React from "react";
import vision from '../../image/vision5.png';
import mission from '../../image/mission5.png';
import values from '../../image/values5.png';

const VisionMission = () => {
    return (
        <section className="chat_core_features_area sec_pad">
            <div className="container">
                <div className="hosting_title chat_title text-center">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <h2 >
                            We are ...
                        </h2>
                        <p>
                            We are an innovative answer to your problem statements; we are <b>Shikshak Solutions</b>
                        </p>
                        <h3>Become masters of AI and Robotics with us.</h3>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="chat_features_item wow fadeInUp">
                            <div className="round round-icon">
                                <div className="round_circle"></div>
                                <img
                                    className="top_img p_absoulte"
                                    src={require("../../../img/home-chat/pluse.png")}
                                    alt=""
                                />
                                <img src={vision} alt="" className={"icon-image"}/>
                            </div>
                            <a href="#">
                                <h4>Vision</h4>
                            </a>
                            <p>
                                We empathize with your ideas and unfold the potential of young global leaders inducing a culture of curious scientific
                                tinkering and festive learning.We look forward to creating a society questioning fearlessly where the aura of
                                brainstorming shall be created.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="chat_features_item two wow fadeInUp" data-wow-delay="0.2s">
                            <div className="round round-icon">
                                <div className="round_circle two"></div>
                                <img
                                    className="top_img p_absoulte"
                                    src={require("../../../img/home-chat/triangle.png")}
                                    alt=""
                                />
                                <img src={mission} alt="" className={"icon-image"}/>
                            </div>
                            <a href="#">
                                <h4>Mission</h4>
                            </a>
                            <p>
                                Mission of Shikshak is to provide best tools to the mentors globally  in order to build a strong platform for all the
                                innovators out there  by providing best of the solutions and mentorship to bring a futuristic change.It is all about
                                empowering the education by giving students an experiential learning. Technical Literacy and Critical Thinking is
                                encouraged here.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="round round-icon">
                                <div className="round_circle three"></div>
                                <img
                                    className="top_img p_absoulte"
                                    src={require("../../../img/home-chat/box.png")}
                                    alt=""
                                />
                                <img src={values} alt="" className={"icon-image"} />
                            </div>
                            <a href="#">
                                <h4>Values</h4>
                            </a>
                            <p> We respect your ideas and understand your needs.</p>
                            <ul className={"list-unstyled"}>
                                <li>Trust</li>
                                <li>Quality Centered</li>
                                <li>Transparency</li>
                                <li>Team Work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default VisionMission;
