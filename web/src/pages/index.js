import React from "react";
import Appcontext from "../context";
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
  state = {
    langCode:'en',
    langName:'English',
    langIndex: 0
  }

  changeLang = (lang, name, index) =>{
    this.setState({
      langCode: lang,
      langName: name,
      langIndex: index
    })
  }

  render() {
      return(
      <Appcontext.Provider value={this.state}>
        <MetaTop/>
        <div id="main-wrapper">
            <Header changeLang={(lang, name, index) => this.changeLang(lang, name, index)} />
            <div className="site-wrapper-reveal">
              <Hero/>
              <LogoCarusel/>
              <Services/>
              <Portfolio/>
              <History/>
              <Whywe/>
              <Team />
              <Contact/>
            </div>
            <Footer/>
        </div>
        
        <MetaDown/>
      </Appcontext.Provider>
    )
  }
}

export default IndexPage