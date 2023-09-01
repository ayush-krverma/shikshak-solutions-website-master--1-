import React, {Component} from 'react';

class ImageContent extends Component {
    render(){
        let{image, rClass, content, aClass}= this.props;
        let delayValue =0.5;
        return(
            <section className={aClass}>
                <div className="container">

                    <div className={`row h_analytices_features_item align-items-center ${rClass}`}>
                        <div className="col-lg-6">
                            <div className="h_security_img text-center">
                                <img className="wow fadeInUp" src={image} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="h_analytices_content">
                                {content.title ? <h2 className="wow fadeInUp" data-wow-delay="0.1s">{content.title}</h2> : ''}
                                {content.description ?<p className="wow fadeInUp" data-wow-delay="0.3s">{content.description}</p>:''}
                                { content?.liContent?.length > 0 ?
                                    <ul className="list-unstyled">
                                    { content.liContent.map((liV, index) => {
                                        delayValue=delayValue+.2;
                                            return(
                                                <li className="wow fadeInUp" data-wow-delay={delayValue+'s'} key={index}>{liV.content}</li>
                                            )
                                        })}
                                    </ul> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default ImageContent;