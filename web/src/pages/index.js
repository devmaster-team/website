import React from "react";
import MetaTop from "../components/metaTop"
import MetaDown from "../components/metaDown"
import Header from "../components/header"
import Hero from "../components/hero"
import LogoCarusel from "../components/logoCarusel"
import Services from "../components/services"
import Portfolio from "../components/portfolio"
import History from "../components/history"
import Whywe from "../components/whywe"
import Team from "../components/team"
import Contact from "../components/contact"
import Footer from "../components/footer"

class IndexPage extends React.Component {
  render() {
      return(
      <>
        <MetaTop/>
        <div id="main-wrapper">
            <Header/>
            <div className="site-wrapper-reveal">
              <Hero/>
              <LogoCarusel/>
              <Services/>
              <Portfolio/>
              <History/>
              <Whywe/>
              <Team/>
              <Contact/>
            </div>
            <Footer/>
        </div>
        
        <MetaDown/>
      </>
    )
  }
}

export default IndexPage