import React, { useState } from "react";
import { Link } from "gatsby";
import MobileMenu from "./mobileMenu"
import { useStaticQuery, graphql } from "gatsby"
import Appcontext from "../context";

const query = graphql`
query Header{
  allMdx(
    filter: {frontmatter: {anchor: {eq: "NavBar"}}}
    sort: {fields: frontmatter___langIndex}
  ) {
    nodes {
        frontmatter {
            topMessage
            home
            servicesPoz
            portfolio
            history
            whyWe
            team
            contact
          }
    }
  }
}
`;

const Header = (props) => {
    
    const data = useStaticQuery(query);
    const [menuToggle, setVisiblemenuToggle] = useState(0);
    const [menuLangToggle, setVisiblemenuLangToggle] = useState(0);

    return (
        <Appcontext.Consumer>
            {(context) => (
            <>
                {(menuToggle)?<MobileMenu closeMenu={() => setVisiblemenuToggle()} />: ""}
                <div className="header-area header-area--default">
                    <div className="header-top-wrap border-bottom bg-blue text-white">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="text-center top-message ">{data.allMdx.nodes[context['langIndex']].frontmatter.topMessage} {context['langIcon']}</p>
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
                                                <img src="assets/images/logo/logo-dark.png" className="img-fluid" alt="DEV Master"/>
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
                                                                        <Link to="/#"><span>{data.allMdx.nodes[context['langIndex']].frontmatter.home}</span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/#services"><span>{data.allMdx.nodes[context['langIndex']].frontmatter.servicesPoz}</span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/#portfolio"><span>{data.allMdx.nodes[context['langIndex']].frontmatter.portfolio}</span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/#history"><span>{data.allMdx.nodes[context['langIndex']].frontmatter.history}</span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/careers"><span>Careers</span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/#whywe"><span>{data.allMdx.nodes[context['langIndex']].frontmatter.whyWe}</span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/#team"><span>{data.allMdx.nodes[context['langIndex']].frontmatter.team}</span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/#contact"><span>{data.allMdx.nodes[context['langIndex']].frontmatter.contact}</span></Link>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-right-box">
                                            <div>
                                                <div className="language-menu" onClick={() => setVisiblemenuLangToggle(!menuLangToggle)}>
                                                    <ul>
                                                        <li>
                                                            <div className="pointer">
                                                                <img className="ls-flag" src={"assets/images/flags/"+context['langCode']+".png"} alt="en"
                                                                    title="English"/>
                                                                <span className="wpml-ls-native"> {context['langName']}</span>
                                                            </div>
                                                            {(menuLangToggle)?
                                                            <ul className="ls-sub-menu">
                                                                <li className="">
                                                                    <div onClick={() => props.changeLang("en","English", 0)}>
                                                                        <img className="wpml-ls-flag" src="assets/images/flags/en.png"
                                                                            alt="de" title="English"/><span
                                                                            className="wpml-ls-native">English</span>
                                                                    </div>
                                                                </li>
                                                                <li className="">
                                                                    <div onClick={() =>props.changeLang("de","Deutsch", 1)}>
                                                                        <img className="wpml-ls-flag" src="assets/images/flags/de.png"
                                                                            alt="de" title="Deutsch"/><span
                                                                            className="wpml-ls-native">Deutsch</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            : ""}

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div onClick={() => setVisiblemenuToggle(true)} className="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                                                <i></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )}
        </Appcontext.Consumer>
    )};

export default Header;