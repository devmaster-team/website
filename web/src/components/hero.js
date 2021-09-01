import React from "react";
import { Link } from "gatsby";

class Hero extends React.Component {
  render () {
    return (
        <>

          <div className="infotechno-hero infotechno-bg">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="infotechno-hero-text wow move-up text-white">
                                <h1 className="font-weight--reguler mb-15 text-white">Let Dev Masters take<br/>care of yourbusiness</h1>
                                <p>Highly Tailored IT Design, Management & Support Services. </p>
                                <div className="hero-button  mt-30">
                                    <Link to="#" className="ht-btn ht-btn-md">Get details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="infotechno-hero-inner-images">
                                <div className="infotechno-inner-two pulsed animated">
                                    <div className="box-pulse">
                                        <span className="pulse delay-5"></span>
                                        <span className="pulse2 delay-3"></span>
                                        <span className="pulse3 delay-1"></span>
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

export default Hero;