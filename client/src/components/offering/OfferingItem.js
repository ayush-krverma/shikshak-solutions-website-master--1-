import React, {Component} from 'react';

class OfferingItem extends Component {
    render(){
        let {item}= this.props;
        return(
            <div className={`tracking_pr_item ${item?.itemClass}`}>
                <div className={`row align-items-center ${item?.rowclass}`}>
                    <div className="col-lg-6 tracking_bg">
                        <img src={item?.image} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="tracking_content wow fadeInDown">
                            <h3>{item?.title}</h3>
                            <p dangerouslySetInnerHTML={{__html:item?.data}} />
                            { item?.btn ? <a href={item?.link} className="seo_btn seo_btn_two btn_hover">{item?.btn}</a> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OfferingItem;