import React, {Component} from "react";
import Contact from "./Contact";
class ContactHome extends Component {
    render() {
        return (
            <section className="contact_info_area sec_pad sec_background">
                <div className="container">
                    <div className="row">
                        <div className="contact_form col-lg-12">
                            <Contact />
                        </div>
                    </div>

                </div>
            </section>
        )

    }
}
export default ContactHome;