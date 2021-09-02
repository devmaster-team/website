import React from "react";
import { Link } from "gatsby";

class Services extends React.Component {
  render () {
    return (
        <>
          <div id="services" className="feature-images-wrapper bg-gray section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrap text-center">
                                <h6 className="section-sub-title mb-20">Our services</h6>
                                <h3 className="heading">For your very specific industry, <br/> we have <span
                                        className="text-color-primary"> highly-tailored IT solutions.</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="feature-images__one">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-01">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-box-image-style-01-image-01-100x108.png"
                                                        alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Webalizing
                                                        applications</h5>
                                                    <div className="text">We will rewrite your old desktop applications (PC
                                                        Windows) to a new, nice looking web version - available on all
                                                        devices with Internet access. We are refactoring experts.
                                                    </div>
                                                    <div className="circle-arrow">
                                                        <div className="middle-dot"></div>
                                                        <div className="middle-dot dot-2"></div>
                                                        <Link to="#">
                                                            <i className="far fa-long-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-01">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-box-image-style-01-image-02-100x108.png"
                                                        alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Mobile applications</h5>
                                                    <div className="text">... along with mobile applications designed for
                                                        all devices, whether they run on iOS or Android.
                                                    </div>
                                                    <div className="circle-arrow">
                                                        <div className="middle-dot"></div>
                                                        <div className="middle-dot dot-2"></div>
                                                        <Link to="#">
                                                            <i className="far fa-long-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-01">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-box-image-style-01-image-03-100x108.png"
                                                        alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Web applications</h5>
                                                    <div className="text">We design and create a new, web application...
                                                    </div>
                                                    <div className="circle-arrow">
                                                        <div className="middle-dot"></div>
                                                        <div className="middle-dot dot-2"></div>
                                                        <Link to="#">
                                                            <i className="far fa-long-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-under-heading text-center section-space--mt_60 section-space--pt_30">
                                Challenges are just opportunities in disguise. <Link to="#">Take the challenge!</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
};

export default Services;