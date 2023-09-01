import React, {Component} from 'react';
import axios from "axios";
import Slider from 'react-slick';
import schoolLogo from "../../image/testimonial/mv-internation-logo.png";
import schoolLogo1 from "../../image/testimonial/rrps.png";
import kvs from "../../image/testimonial/kvs.png";
import dps from "../../image/testimonial/dps.png";
import doon from "../../image/testimonial/doon.png";
class AppTestimonial extends Component{
    /*state = {
        testimonialData: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                const posts = response.data;
                this.setState ({posts});
            })
    }*/
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const testimonialData = [
            {
                image: schoolLogo,
                schoolName:'M. V. International Public School',
                designation: 'Robotics Teacher',
                description: '"The Shikshak Solutions team works hard so that our students can achieve better goals in the robotics field. They are also cooperative and work hard to train the teachers as well."'
            },{
                image: schoolLogo1,
                schoolName:'Red Rose Public School Saket',
                designation: 'Robotics Teacher',
                description: '"From the very beginning, Shikshak Solutions was professional, responsive, and accommodating. They took the time to understand our school\'s unique needs and worked with us to develop a tailored solution that fit our budget and timeline."'
            },{
                image: kvs,
                schoolName:'KV Dwarka Sector 5',
                designation: 'Principle',
                description: '"The quality of the Robotic Lab provided by Shikshak Solutions exceeded our expectations. Our school community has been thrilled with the results and we have already seen positive impacts in Robotics & AI."'
            },{
                image: dps,
                schoolName:'DPS Gaya',
                designation: 'Principle',
                description: '"Your products have been a game-changer for our students and teachers. The quality of your products has exceeded our expectations, and the support you have provided throughout the implementation process has been exceptional."'
            },{
                image: doon,
                schoolName:'Doon Public School',
                designation: 'ATL Incharge',
                description: '"The training sessions you have provided for our teachers have been invaluable, and have helped us to fully utilize the capabilities of your products. Your responsiveness to our needs and concerns has also been greatly appreciated."'
            },
        ];
        return(
            <section className="app_testimonial_area" id="testimonial">
                <div className="text_shadow" data-line="Feedback"></div>
                <div className="container nav_container">
                    <div className="slider_nav">
                        <i className="ti-arrow-left prev" onClick={this.previous}></i>
                        <i className="ti-arrow-right next" onClick={this.next}></i>
                    </div>
                    <div className="shap one"></div>
                    <div className="shap two"></div>
                    <Slider ref={c => (this.slider = c)} className="app_testimonial_slider" {...settings}>
                        { testimonialData.map((testimonial, index) => {
                            return(
                                <div key={index} className="app_testimonial_item text-center">
                                    <div className="author-img"><img
                                        src={testimonial.image} alt=""/></div>
                                    <div className="author_info">
                                        <h6 className="f_p f_500 f_size_18 t_color3 mb-0">{testimonial.schoolName}</h6>
                                        <p>{testimonial.designation}</p>
                                    </div>
                                    <p className="f_400">{testimonial.description}</p>
                                </div>
                                )
                        })}
                    </Slider>
                </div>
                {/*< ul >
                    {this.state.posts.map (post => {return post.title} )}
                < /ul >*/}
            </section>
        )
    }
}
export default AppTestimonial;
