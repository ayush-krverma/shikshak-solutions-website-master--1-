import React from 'react'
import CustomNavbar from '../layout/CustomNavbar';
import Footer from '../layout/Footer';
import PdfPreview from './PdfPreview';
import PdfPreview2 from './PdfPreview2';
import "../../../src/Invoice.css";
import PdfPreview3 from './PdfPreview3';
import PdfPreview4 from './PdfPreview4';
import InvoiceTable from './InvoiceTable';
import InvoiceTC from './InvoiceTC';

function Invoice() {
  return (
    <>
    <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
   
    <div>
    <section className="sign_in_area bg_color sec_pad">
                <div className="container">
                    <div className="sign_info">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="sign_info_content">
                                    <PdfPreview/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <PdfPreview2/>
                            </div>
                            <hr className='hr'></hr>
                        </div>

                        <div className="row">
                            <div className="col-lg-7">
                                <div className="sign_info_content">
                                    <PdfPreview3/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <PdfPreview4/>
                            </div>
                           <hr className='mt-1'></hr>
                           <div className="col-lg-10">
                                <InvoiceTable/>
                            </div>
                            <div className="col-lg-10">
                                <InvoiceTC/>
                            </div>
                        </div>


                        
                    </div>
                   
                </div>
                
            </section>

    <Footer/>
    </div>
    </>
  )
}

export default Invoice
