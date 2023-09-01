import React, {Component} from 'react';
import OfferingItem from './OfferingItem';
import atl from '../../image/offering/atl.jpg';
import ai from '../../image/offering/AI.jpg';
import threeD from '../../image/offering/3d.jpg';
import steam from '../../image/offering/steam.jpg';
import curriculum from '../../image/offering/curriculum.png';
import robotics from '../../image/offering/robotics.png';
import coding from '../../image/offering/coding.jpg';
import drones from '../../image/offering/drones.jpg';
import training from '../../image/offering/training.jpg';
import happytap from '../../image/offering/happytap.jpg';
import workshop from '../../image/offering/workshop.png';
import panel from '../../image/offering/panel.png';
import withRouter from "../../hooks/withRouter";


class OurOffering extends Component{
    render(){
        const offeringData= [
            {
                image: atl, title: "Atl Tinkering Labs",category:"lab",
                data: "ATL’S i.e. Atal Tinkering Labs are an initiative of Atal Innovation Mission, Govt. Of India to create a place with an innovative thought aspect,With this mission AIM grants lakhs of amount to the selected schools for setting these labs. Hence it becomes very important to invest this money at the right place, Try Shikshak!! We have already set up many labs across the nation with the best resources. From Infrastructure to the kits as well as training sessions, We take care."
            },{
                image: steam, title: "STEAM Labs",itemClass:"tracking_pr_two",category:"lab", rowclass:"flex-row-reverse",
                data: "Gear up in different Science Experiments with us. We in Shikshak provide a package or collection of numerous science experiments based on different topics that range for students of different age groups.They are all based on STEM Learning (Science, Technology, Engineering, Arts and Mathematics).<br/>The practical self demonstration of the topic in the form of an experiment always helps in better understanding and the students enjoy it for the never forgetting experience. We make STEM interesting for you."
            },{
                image: ai, title: "Artificial Intelligence Labs",category:"lab",itemClass:"tracking_pr_three",
                data: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.</br>Shikshak is experienced in providing you best AI Lab where training is provided on Machine Learning, Data Analytics, Artificial Intelligence along with so many other related programs.We give you a lab where lots of experimentation can happen with best tools giving unbeatable projects as a result."
            },{
                image: threeD, title: "3D Printer- “Gives life to your thought”",itemClass:"tracking_pr_two", rowclass:"flex-row-reverse",
                data: "A 3D printer is the machine with the r nozzle as that of 3D  but requires special softwares and then it is all set to make anything you want.3D Printer can help us to make 3D objects with required specifications like solid ball, hollow structure, embedded structures, toys, jewelry etc. So why wait!! Your desires are just one command away. We offer you the best quality 3D printers with filaments to print and support you at our best in training about its working and designing of objects by it."
            },{
                image: curriculum, title: "Digital Curriculum",category:"curriculum",itemClass:"tracking_pr_three",
                data: "We have a well designed curriculum for this that will offer basic to high level training in Artificial Intelligence and Robotics. Students will learn about these concepts and their applications in real lives so that they can apply their knowledge in the practicals they perform and projects they make. We are a Cutting-edge program with an Integrated, experiential & project-based educational environment. Develop entrepreneurial mindset & global perspective with cross disciplinary knowledge that will lead in solving a number of problems thereby serving the community."
            },{
                image: robotics, title: "A Robotic Kit",itemClass:"tracking_pr_two", rowclass:"flex-row-reverse",
                data: "We provide ultra compact, high performance and embeddable solutions in robotics. A robot kit is a special construction kit for building robots.It supports the DIY education system. Robotics is a fascinating subject for students where they can turn their imaginations into reality in the form of their robots after lots of brainstorming.We provide the best quality and durable construction material . One can explore a huge variety of the same in the kit we offer. The entire kit is one of its kind, with the guide manuals inside, Rest creativity has no limits and our kit meets all of those flexible options.If you are also looking for the entire Robotics Lab, we meet your requirements."
            },{
                image: coding, title: "Coding",itemClass:"tracking_pr_three",
                data: "Coding is the language with which we communicate with Computers and make our bots run our way.Interesting isn’t it ? Many of you think “Coding is not my cup of tea”, well shikshak makes it very easy for you ,you need not be essentially from a technology background to learn coding. Just have a desire to learn and we will help you learn this in various programming languages."
            },{
                image: drones, title: "Drones",itemClass:"tracking_pr_two", rowclass:"flex-row-reverse",
                data: "Drones are the unmanned flying bots that operate themselves on the given set of instructions and are remote controlled . In other words they are unmanned aircrafts.In addition to the software, autonomous drones also employ a host of advanced technologies that allow them to carry out their missions without humans . We have kits for you where you can build up your own drones by assembling them and flying them . Additionally there will be a guide manual that will make it all easy to follow your flight. Besides this we have elaborated the concept and offered conceptual learnings on this technology where you can design yours as well . Drones can be used for various purposes, such as filming a wildlife video, capturing aerial shots of crops, or capturing stunning photos and much more."
            },{
                image: training, title: "Training",itemClass:"tracking_pr_three", category: "training",
                data: "We provide training to school for STEAM lab, Robotics lab and AI lab.Robotics and AI training involve acquiring the knowledge and skills required to design, develop, and program robots and AI systems. This training can range from basic programming skills to advanced knowledge of machine learning, computer vision, natural language processing, and other AI-related technologies."
            },{
                image: workshop, title: "Workshop",itemClass:"tracking_pr_two", rowclass:"flex-row-reverse", category: "workshop",
                data: "We conduct workshop on different domain like Robotics, AI, Environment, Water, technology and many more. Join our upcoming Robotics, AI, Technology, and Environment workshop and learn how these fields are changing the world! This workshop will provide an in-depth exploration of the latest developments in robotics, artificial intelligence, and technology and their impact on the environment. "
            },{
                image: happytap, title: "Hand Hygiene",itemClass:"tracking_pr_three",
                data: "Hand hygiene is important in all settings, including schools. Students, teachers, and other staff members in schools come into contact with various surfaces and people throughout the day, which can increase the risk of spreading germs and infections. Therefore, practicing good hand hygiene is crucial to prevent the transmission of illness and keep everyone healthy. We are working with HappyTap to educate students, staff, and parents about the importance of hand hygiene in preventing the spread of illness. Provide information on proper handwashing techniques and the benefits of good hand hygiene."
            },{
                image: panel, title: "Interactive Panel",itemClass:"tracking_pr_two",rowclass:"flex-row-reverse",
                data: "An interactive panel for education is a technology-based tool used to enhance the learning experience in classrooms. It typically consists of a large touch-enabled screen that allows teachers to present lessons, videos, and other educational materials in an engaging and interactive way. Students can also interact with the panel by touching the screen, using a stylus, or even their own devices, depending on the panel's features. The use of interactive panels in education has been shown to improve student engagement, enhance teacher effectiveness, and increase overall student achievement. They provide a more immersive and interactive learning experience that encourages students to participate and take an active role in their learning."
            }];
        let cat = this.props.params?.cat;
        return(
            <section className="tracking_product_area sec_pad">
                <div className="container">
                    { offeringData.map((offeringContent, index) => {
                            if(offeringContent.category == cat || !cat){
                                return (
                                    <OfferingItem key={index} item={offeringContent}/>
                                )
                            }
                        })
                    }
                </div>
            </section>
        )
    }
}

export default withRouter(OurOffering);
