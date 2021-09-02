import React from "react";
import { Link } from "gatsby";

class Services extends React.Component {
  render () {
    return (
        <>
         <div className="mobile-menu-overlay" id="mobile-menu-overlay">
            <div className="mobile-menu-overlay__inner">
                <div className="mobile-menu-overlay__header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-8">
                                <div className="logo">
                                    <Link to="index.html">
                                        <img src="assets/images/logo/logo-dark.png" className="img-fluid" alt="DEV Masters"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-4">
                                <div className="mobile-menu-content text-right">
                                    <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay__body">
                    <nav className="offcanvas-navigation">
                        <ul>
                            <li>
                                <Link to="#"><span>Home</span></Link>
                            </li>
                            <li>
                                <Link to="#services"><span>Services</span></Link>
                            </li>
                            <li>
                                <Link to="#portfolio"><span>Portfolio</span></Link>
                            </li>
                            <li>
                                <Link to="#history"><span>History</span></Link>
                            </li>
                            <li>
                                <Link to="#whywe"><span>Why we?</span></Link>
                            </li>
                            <li>
                                <Link to="#team"><span>Team</span></Link>
                            </li>
                            <li>
                                <Link to="#contact"><span>Contact</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
  }
};

export default Services;