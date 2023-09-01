import React, { Component } from 'react';
import Reveal from 'react-awesome-reveal';
class BackBreadcrumb extends Component {
    render() {
        const { Ptitle, Pdescription, breadcrumbClass, imgName } = this.props;
        return (
            <section className={`${breadcrumbClass}`}>

            </section>
        )
    }
}
export default BackBreadcrumb;
