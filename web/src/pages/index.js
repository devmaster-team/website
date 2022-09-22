import React from "react";
import Hero from "../components/hero"
import LogoCarusel from "../components/logoCarusel"
import Services from "../components/services"
import Portfolio from "../components/portfolio"
import History from "../components/history"
import Whywe from "../components/whywe"
import Team from "../components/team"
import Contact from "../components/contact"
import Layout from "../layout";


class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero />
        <LogoCarusel />
        <Services />
        <Portfolio />
        <History />
        <Whywe />
        <Team />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage