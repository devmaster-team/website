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
import MobileMenu from "../components/mobileMenu"
class IndexPage extends React.Component {
state = {
  menuToggle: false
}

openMenu = () => {
  this.setState({ menuToggle: true })
}

closeMenu = () => {
  this.setState({ menuToggle: false })
}

  render() {
      return(
      <>
        <MetaTop/>
        <div id="main-wrapper">
                <Header openMenu={this.openMenu} />
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
        {(this.state.menuToggle) && <MobileMenu closeMenu={this.closeMenu} />}
        <MetaDown/>
      </>
    )
  }
}

export default IndexPage