import React, {Component} from "react";
import Contact from "./Contact";
import ContactLeft from "./ContactLeft";
class ContactPage extends Component {
    render() {
        return (
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ContactLeft />
                        </div>
                        <div className="contact_form col-lg-8">
                            <Contact />
                        </div>
                    </div>

                </div>
            </section>
            )

    }
}
export default ContactPage;