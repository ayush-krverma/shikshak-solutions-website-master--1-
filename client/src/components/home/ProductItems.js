import React, {Component} from 'react';
import Reveal from 'react-awesome-reveal';
class ProductItems extends Component{
    render(){
        var {Sicon,text,description,SUrl, iconClass} = this.props;
        return(
            <Reveal bottom cascade>
                <div className="startup_service_item">
                    <div className={`icon ${iconClass}`}>
                        {(Sicon) ?<i className={`${Sicon}`}></i> : <img src={SUrl} />}

                    </div>
                    <h3>{text}</h3>
                    <p dangerouslySetInnerHTML={{__html:description.split(",").join("<br />")}}></p>
                </div>
            </Reveal>
        )
    }
}
export default ProductItems;
