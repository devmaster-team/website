import React from "react";
import {Link} from "gatsby";
class Header extends React.Component {
render () {
    return (
        <>
            <div className="header-area header-area--default">
                <div className="header-top-wrap border-bottom bg-blue text-white">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-center top-message ">Welcome To DevMasters team!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom-wrap">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-11">
                                <div className="header default-menu-style position-relative">
                                    <div className="header__logo">
                                        <Link to="/">
                                            <img src="assets/images/logo/logo-dark.png" className="img-fluid" alt="DEV Masters"/>
                                        </Link>
                                    </div>
                                    <div className="header-midle-box">
                                        <div className="header-bottom-wrap d-md-block d-none">
                                            <div className="header-bottom-inner">
                                                <div className="header-bottom-left-wrap">
                                                    <div className="header__navigation d-none d-xl-block">
                                                        <nav className="navigation-menu primary--menu">
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
                                        </div>
                                    </div>
                                    <div className="header-right-box">
                                        <div className="header-right-inner" id="hidden-icon-wrapper">
                                            <div className="language-menu">
                                                <ul>
                                                    <li>
                                                        <Link to="#" className="">
                                                            <img className="ls-flag" src="assets/images/flags/en.png" alt="en"
                                                                title="English"/>
                                                            <span className="wpml-ls-native">English</span>
                                                        </Link>
                                                        <ul className="ls-sub-menu">
                                                            <li className="">
                                                                <Link to="#" className="">
                                                                    <img className="wpml-ls-flag" src="assets/images/flags/de.png"
                                                                        alt="de" title="Deutsch"/><span
                                                                        className="wpml-ls-native">Deutsch</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                                            <i></i>
                                        </div>
                                        <div className="hidden-icons-menu d-block d-md-none" id="hidden-icon-trigger">
                                            <Link to="#">
                                                <i className="far fa-ellipsis-h-alt"></i>
                                            </Link>
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

export default Header;