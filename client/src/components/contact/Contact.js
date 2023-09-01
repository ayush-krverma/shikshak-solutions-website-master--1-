import React, {Component} from 'react';
import emailjs from "emailjs-com";
const SERVICE_ID = "service_pebgbkk";
const TEMPLATE_ID = "template_larexam";
const USER_ID = "Qp4yYMZFP_pCEkxUH";
class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange = e => {
        console.log('19',this.state);
        this.setState({[e.target.name]: e.target.value})
    }
    //when submit btn is clicked
    submitForm = e => {
        //const {name, email, message} = this.state;
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,USER_ID)
            .then((result) => {
                console.log(result.text);
                this.setState ({
                    emailStatus: 'success'
                });
            }, (error) => {
                console.log(error.text);
                this.setState ({
                    emailStatus: 'error'
                });
            });

        // reset the fields
        this.setState({
            name: '',
            email: '',
            message: '',
            emailStatus: ''
        });
        e.target.reset();
        e.preventDefault();
        setTimeout(function (){
            this.setState ({
                emailStatus: false
            });
        },1000)
    }
    render(){
         const {emailStatus} = this.state;
        return(
            <>
                <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
                <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group text_box">
                                <input type="text" id="name" name="name" required={true} placeholder="Your Name" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group text_box">
                                <input type="text" name="email" id="email" placeholder="Your Email" required={true} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group text_box">
                                <input type="text" id="contact_no" name="contact_no" required={true} placeholder="Contact No" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group text_box">
                                <input type="text" id="subject" name="subject" placeholder="Subject" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group text_box">
                                <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn_three">Send Message</button>
                </form>
                {emailStatus =='success' ? <div id="success">Your message succesfully sent!</div> :
                    emailStatus =='error' ? <div id="error">Opps! There is something wrong. Please try again</div> : ''}


            </>


        )
    }
}

export default Contact;