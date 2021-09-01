import React from "react";
import { Link } from "gatsby";

class Footer extends React.Component {
  render () {
    return (
        <>
          <div className="footer-area-wrapper bg-gray">
            <div className="footer-area section-space--ptb_80">
                <div className="container">
                    <div className="row footer-widget-wrapper">
                        <div className="col-lg-6 col-md-6 col-sm-6 footer-widget">
                            <div className="footer-widget__logo mb-30">
                                <img src="assets/images/logo/dark-logo-160x48.png" className="img-fluid" alt="DEV Masters"/>
                            </div>
                            <ul className="footer-widget__list">
                                <li><Link to="mailto:contact@devmaster.team" className="hover-style-link">contact@devmaster.team</Link></li>
                                {/* <li><Link to="tel:123344556" className="hover-style-link text-black font-weight--bold">(+48) 111 222 333</Link></li> */}
                                <li><Link to="https://devmaster.team/" className="hover-style-link text-color-primary">www.devmaster.team</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Column1</h6>
                            <ul className="footer-widget__list">
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Column2</h6>
                            <ul className="footer-widget__list">
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Column3</h6>
                            <ul className="footer-widget__list">
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                                <li><Link to="#" className="hover-style-link">Link</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-area section-space--pb_30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-left">
                            <span className="copyright-text">&copy; 2021 DEV Masters. <Link to="/">All Rights
                                    Reserved.</Link></span>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <ul className="list ht-social-networks solid-rounded-icon">

                                <li className="item">
                                    <Link to="https://twitter.com" target="_blank" aria-label="Twitter"
                                        className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-twitter link-icon"></i>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link to="https://facebook.com" target="_blank" aria-label="Facebook"
                                        className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-facebook-f link-icon"></i>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link to="https://instagram.com" target="_blank" aria-label="Instagram"
                                        className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-instagram link-icon"></i>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link to="https://linkedin.com" target="_blank" aria-label="Linkedin"
                                        className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-linkedin link-icon"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }
};

export default Footer;