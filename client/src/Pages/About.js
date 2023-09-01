import React, {Component} from "react";
import CustomNavbar from "../components/layout/CustomNavbar";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";
import VisionMissionValues from "../components/about/VisionMissionValues";
import ImageContent from "../components/layout/ImageContent";
import aboutImage from '../image/about.jpg';
import brainstormingImage from '../image/Brainstorming.jpg';
import critical_thinking from '../image/critical_thinking.png';
import innovation_hub from '../image/innovationHub.jpg';
import empowerImage from '../image/empower.png';
import why from '../image/why.png';

class About extends Component {
    render() {
        const contentJson={
            liContent:[
                {content:'We are education based organization, enabling schools to come up as their innovation hubs where the community too can be benefited'},
                {content:"We empower the Education System by giving the best tools to the teachers so that they can help their students answer all their queries and help them reach their goals."},
                {content:"Experiential learning and Scientific curiosity is uplifted at Shikshak. We have been working on imbibing this culture for years."},
                {content:"Our teachings are less of theory and more of practical activities that makes the learning fun and enhances the skills."},
                {content:"We're a technology driven and one stop education solution provider organization. Part of our DNA is curiosity. We want to know about your goals and what you're trying to achieve, because we care and help you to achieve."},
                {content:'We also manufacture best digital sources like smart boards, robotic kits, programming tools and much more that make the job of the mentor much easier.'},
            ],
            title:'Empowering The Education',
            description:"We create an ecosystem that nurtures an inclusive learning"};
        const whyShikshak={
            liContent:[
                /*{content:"Our curriculum focuses on holistic approach."},
                {content:"Best quality kits with next generation advancement solutions."},
                {content:"Development of brainstorming and intellectual mindset."},
                {content:"Time and Money saving."},
                {content:"We take care of installation, procurement, shipping and set up process."},
                {content:"24x7 online support, E-Books, Digital Library, Google Classroom."},
                {content:"Software only:- Tinker cad, Programming, Designing, Cura."},*/
                {content:"We offer quality products and set up efficient Labs."},
                {content:"We offer training programs for both teachers and students."},
                {content:"Our teaching is less on theory , more on Experiential Learning"},
                {content:"We offer endless interesting activities for mentors and teachers."},
                {content:"Shikshak includes an expert team dealing in various fields to give you the best solution."},
                {content:"We build up an ideal Smart Classroom."},
                {content:"We respond to your queries and give best assistance service."},
                {content:"We make it easier for teachers to teach their students in an efficient way with a flavor of fun."},
                {content:"We empathize and create it for our clients."},
                {content:"We are an experienced company who has set us a landmark in this field."}
    ],
            title:'Why Shikshak Solutions?'};

        const brainStorming = {title: 'Brainstorming',
            description: "Hey Teachers, so much in your student's brain, Right? Is it a struggle like, where to start from or how to make it possible. Well we are here to help you.Our system is entirely based on “NO MORE DREAMS, LET US MAKE IT HAPPEN”. The ideation ambience we create here will give you so much of brainstorming that your innovations can be witnessed by the world, and not merely be just dismantle projects.We give you best resources to help your students fulfill their needs."}
        const criticalThinking = {title: 'Critical Thinking',
            description: "Everyone thinks, but thinking with a vision is something that will take you to heights.Well No thought is right or wrong when it comes to innovating something.Brilliant products come out of vague ideas too."}
        const innovationHubs = {title: 'Innovation Hubs',
            description: "Innovation increases when it is shared as whole network of brainstorming happens.To instill this culture there must be places that should be able to cater the needs of our young scientists.These will be a set of hubs all set up across helping society to start from thought and reaching the project completion till product stage.We look forward to building up a number of innovation hubs so as to make this world a better place where we can come up with a place for the community to be benefitted."}
        const empower = {title: 'We empower leaders to create more leaders',
            description: "Leaders are not born but created, and that is what we do at Shikshak. One innovator can simply contribute a bit in changing society for a better place to live in .So when a teacher has the best resource in hand , imagine the number of innovators he can create.As mentor one needs to be very resourceful and insightful with the knowledge that an individual has to impart to the students therefore it becomes very important to empower the teachers as they are the one who will create and raise the leaders."}
        return (
            <div className="body_wrapper">
                <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us"
                            Pdescription="We are an innovative answer to your problem statements,we are shikshak solutions
                            <br /> <b>Become masters of AI and Robotics with us</b>
                            "/>
                <VisionMissionValues heading={false}/>
                <ImageContent aClass="sec_background" rClass="flex-row-reverse"  image={why} content={whyShikshak} />
                <ImageContent  image={aboutImage} content={contentJson} />
                <ImageContent aClass="sec_background" rClass="flex-row-reverse"  image={brainstormingImage} content={brainStorming} />
                <ImageContent  image={critical_thinking} content={criticalThinking} />
                <ImageContent aClass="sec_background" rClass="flex-row-reverse"  image={innovation_hub} content={innovationHubs} />
                <ImageContent  image={empowerImage} content={empower} />

                <Footer/>
            </div>
        )
    }
}
export default About;
