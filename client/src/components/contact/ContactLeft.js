import React, {Component} from "react";
class ContactLeft extends Component {
render(){
    // const {name, email, subject, message, emailStatus} = this.state;
    return(
        <>
            <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
                <p className="f_400 f_size_15">861, sector 47, Gurugram</p>
            </div>
            <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                <p className="f_400 f_size_15"><span className="f_400 t_color3">Mobile:</span> <a href="tel:9289583244">(+91) 9289583244</a></p>
                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:01244289013">(0124) 4289013</a></p>
                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:info@shikshaksolutions.com">info@shikshaksolutions.com</a></p>
            </div>
        </>
    )
}
}

export default ContactLeft;