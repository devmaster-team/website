import React from "react";
import { Link } from "gatsby";

class Portfolio extends React.Component {
  render () {
    return (
        <>
          <div id="portfolio" className="tabs-wrapper section-space--ptb_100 projectinfotechno-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrapper text-center section-space--mb_60 wow move-up animated"
                                >
                                <h6 className="section-sub-title mb-20">Portfolio</h6>
                                <h3 className="section-title">Our selected <span className="text-color-primary">projects</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ht-tab-wrap">
                            <div className="row">
                                <div className="col-12 text-center wow move-up  animated" >
                                    <ul className="nav justify-content-center ht-tab-menu" role="tablist">
                                        <li className="tab__item nav-item active">
                                            <a className="nav-link active" id="nav-tab1" data-toggle="tab"
                                                href="#history-tab" role="tab" aria-selected="true">Abs Bildelar</a>
                                        </li>
                                        <li className="tab__item nav-item">
                                            <a className="nav-link" id="nav-tab2" data-toggle="tab" href="#mission-tab"
                                                role="tab" aria-selected="false">Webalizing WinForms application</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content ht-tab__content wow move-up animated">
                                <div className="tab-pane fade show active" id="history-tab" role="tabpanel">
                                    <div className="tab-history-wrap section-space--mt_60">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="tab-history-image video-popup mt-30">
                                                    <Link to="#"
                                                        className="video-link">
                                                        <div className="single-popup-wrap">
                                                            <img className="img-fluid"
                                                                src="assets/images/bg/home-processing-video-intro-slider-slide-01-image-02-570x350.jpg"
                                                                alt=""/>
                                                            <div className="ht-popup-video video-button">
                                                                <div className="video-mark">
                                                                    <div className="wave-pulse wave-pulse-1"></div>
                                                                    <div className="wave-pulse wave-pulse-2"></div>
                                                                </div>
                                                                <div className="video-button__two">
                                                                    <div className="video-play">
                                                                        <span className="video-play-icon"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1 ">
                                                <div className="tab-content-inner  mt-30">
                                                    <div className="text mb-30">...</div>
                                                    <ul className="check-list section-space--mb_40">
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                    </ul>
                                                    <div className="text mb-30">...</div>
                                                    <div className="tab-button mt-20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="mission-tab" role="tabpanel">
                                    <div className="tab-history-wrap section-space--mt_60">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="tab-history-image video-popup mt-30">
                                                    <Link to="#"
                                                        className="video-link">
                                                        <div className="single-popup-wrap">
                                                            <img className="img-fluid"
                                                                src="assets/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg"
                                                                alt=""/>
                                                            <div className="ht-popup-video video-button">
                                                                <div className="video-mark">
                                                                    <div className="wave-pulse wave-pulse-1"></div>
                                                                    <div className="wave-pulse wave-pulse-2"></div>
                                                                </div>
                                                                <div className="video-button__two">
                                                                    <div className="video-play">
                                                                        <span className="video-play-icon"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1 ">
                                                <div className="tab-content-inner  mt-30">
                                                    <div className="text mb-30">...</div>
                                                    <ul className="check-list section-space--mb_40">
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                    </ul>
                                                    <div className="text mb-30">...</div>
                                                    <div className="tab-button mt-20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="support-tab" role="tabpanel">
                                    <div className="tab-history-wrap section-space--mt_60">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="tab-history-image video-popup mt-30">
                                                    <Link to="#"
                                                        className="video-link">
                                                        <div className="single-popup-wrap">
                                                            <img className="img-fluid"
                                                                src="assets/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg"
                                                                alt=""/>
                                                            <div className="ht-popup-video video-button">
                                                                <div className="video-mark">
                                                                    <div className="wave-pulse wave-pulse-1"></div>
                                                                    <div className="wave-pulse wave-pulse-2"></div>
                                                                </div>
                                                                <div className="video-button__two">
                                                                    <div className="video-play">
                                                                        <span className="video-play-icon"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1 ">
                                                <div className="tab-content-inner  mt-30">
                                                    <div className="text mb-30">...</div>
                                                    <ul className="check-list section-space--mb_40">
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                        <li className="list-item">..</li>
                                                    </ul>
                                                    <div className="text mb-30">...</div>
                                                    <div className="tab-button mt-20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="awards-tab" role="tabpanel">
                                    <div className="tab-history-wrap section-space--mt_60">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="tab-history-image video-popup mt-30">
                                                    <Link to="#"
                                                        className="video-link">
                                                        <div className="single-popup-wrap">
                                                            <img className="img-fluid"
                                                                src="assets/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg"
                                                                alt=""/>
                                                            <div className="ht-popup-video video-button">
                                                                <div className="video-mark">
                                                                    <div className="wave-pulse wave-pulse-1"></div>
                                                                    <div className="wave-pulse wave-pulse-2"></div>
                                                                </div>
                                                                <div className="video-button__two">
                                                                    <div className="video-play">
                                                                        <span className="video-play-icon"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1 ">
                                                <div className="tab-content-inner  mt-30">
                                                    <div className="text mb-30">We’re available for 8 hours a day!
                                                        <br/>Contact to require a detailed analysis and assessment of
                                                        your plan.</div>
                                                    <ul className="check-list section-space--mb_40">
                                                        <li className="list-item">Receive real-time business analytics </li>
                                                        <li className="list-item">Cross-browser Compatible Design </li>
                                                        <li className="list-item">Completely Gutenberg Ready </li>
                                                        <li className="list-item">Highly Responsive Tools </li>
                                                    </ul>
                                                    <div className="tab-button">
                                                        <Link className="btn-text" href="#">
                                                            <span className="button-text">Let's get started <i
                                                                    className="far fa-long-arrow-right"></i></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
};

export default Portfolio;