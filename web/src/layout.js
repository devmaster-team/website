import React from "react";
import Appcontext from "./context";
import MetaTop from "./components/metaTop"
import MetaDown from "./components/metaDown"
import Header from "./components/header"
import Footer from "./components/footer"
import Applying from "./components/position";
import { Router } from "@reach/router"


class Layout extends React.Component {
    state = {
        langCode: 'en',
        langName: 'English',
        langIndex: 0
    }

    changeLang = (lang, name, index) => {
        this.setState({
            langCode: lang,
            langName: name,
            langIndex: index
        })
    }

    render() {
        return (
            <>
                <Appcontext.Provider value={this.state}>
                    <MetaTop />
                    <div id="main-wrapper">
                        <Header changeLang={(lang, name, index) => this.changeLang(lang, name, index)} />
                        <div className="site-wrapper-reveal">
                            {this.props.children}
                        </div>
                        <Footer />
                    </div>
                    <MetaDown />
                </Appcontext.Provider>
            </>
        )
    }
}

export default Layout