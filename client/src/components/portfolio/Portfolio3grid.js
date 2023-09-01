import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import Portfolio2griditem from './Portfolio2griditem';
import labPic from "../../image/lab-pic-images/labPic.jpeg";
import labPic1 from "../../image/lab-pic-images/labPic1.jpg";
import labPic2 from "../../image/lab-pic-images/labPic2.jpeg";
import labPic2a from "../../image/lab-pic-images/labPic2.jpg";
import labPic3 from "../../image/lab-pic-images/labPic3.jpeg";
import labPic3a from "../../image/lab-pic-images/labPic3.jpg";
import labPic4 from "../../image/lab-pic-images/labPic4.jpeg";
import labPic4a from "../../image/lab-pic-images/labPic4.jpg";
import labPic5 from "../../image/lab-pic-images/labPic5.jpg";

class Portfolio3grid extends Component{
    state = {
        activeItem: '*',
    }


    componentDidMount() {
        var imgLoad = new ImagesLoaded('#work-portfolio');

        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('#work-portfolio', {
                itemSelector: '.portfolio_item',
                layoutMode: "masonry"
            });
        });

    }
    onFilterChange = (newFilter) => {

        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('#work-portfolio', {
                itemSelector: '.portfolio_item',
                layoutMode: "masonry"
            });
        }

        // this.iso.arrange({ filter: newFilter });

        if(newFilter === '*') {
            this.iso.arrange({ filter: `*` });
        } else {
            this.iso.arrange({ filter: `.${newFilter}` });
        }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';

    render(){
        const labPicData = [
            {
                image: labPic,
                url: "#",
                class: "steam",
                title:"",
                one:"STEAM Lab",
                two:""
            },
            {
                image: labPic1,
                url: "#",
                class: "robotics",
                title:"",
                one:"Robotics Lab",
                two:""
            },
            {
                image: labPic2,
                class: "robotics",
                title:"",
                one:"Robotics Lab",
                two:""
            },
            {
                image: labPic2a,
                class: "robotics",
                title:"",
                one:"Robotics Lab",
                two:""
            },{
                image: labPic3,
                class: "atl",
                title:"",
                one:"ATL Lab",
                two:""
            },{
                image: labPic3a,
                class: "robotics",
                title:"",
                one:"Robotics Lab",
                two:""
            },{
                image: labPic4,
                class: "robotics",
                title:"",
                one:"Robotics Lab",
                two:""
            },{
                image: labPic4a,
                class: "steam",
                title:"",
                one:"STEAM Lab",
                two:""
            },{
                image: labPic5,
                class: "robotics",
                title:"",
                one:"Robotics Lab",
                two:""
            },
        ];
        return(

            <section className="portfolio_area sec_pad bg_color">
                <div className="container">
                    <div id="portfolio_filter" className="portfolio_filter mb_50">
                        <div data-filter="*" className={`work_portfolio_item ${this.onActive('*')}`} onClick={() => {this.onFilterChange("*")}}>All</div>
                        <div data-filter="atl" className={`work_portfolio_item ${this.onActive('atl')}`} onClick={() => {this.onFilterChange("atl")}}>ATL</div>
                        <div data-filter="steam" className={`work_portfolio_item ${this.onActive('steam')}`} onClick={() => {this.onFilterChange("steam")}}>STEAM</div>
                        {/*<div data-filter="ai" className={`work_portfolio_item ${this.onActive('ai')}`} onClick={() => {this.onFilterChange("ai")}}>AI</div>
                        */}<div data-filter="robotics" className={`work_portfolio_item ${this.onActive('eobotics')}`} onClick={() => {this.onFilterChange("robotics")}}>Robotics</div>
                    </div>
                    <div className="row portfolio_gallery mb_30" id="work-portfolio">
                        { labPicData.map((data, index) => {
                           return(
                                   <Portfolio2griditem colClass={`col-lg-4 col-sm-6 ${data.class}`} pImg={data.image} ptitle={data.title} tOne={data.one} tTwo={data.two}/>
                               )
                            })
                        }
                    </div>
                </div>
            </section>

        )
    }
}
export default Portfolio3grid;
