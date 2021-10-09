import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import Appcontext from "../context";

const query = graphql`
query Top{
  allMdx(
    filter: {frontmatter: {anchor: {eq: "Top"}}}
    sort: {fields: frontmatter___langIndex}
  ) {
    nodes {
        frontmatter {
            header
            motto
            jumpToAnchorText
          }
    }
  }
}
`;

const Hero = () => {
    const data = useStaticQuery(query);

    return (
        <Appcontext.Consumer>
            {(context) => (
            <>
                <div className="infotechno-hero infotechno-bg">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="infotechno-hero-text wow move-up text-white">
                                    <h1 className="font-weight--reguler mb-15 text-white">
                                        {data.allMdx.nodes[context['langIndex']].frontmatter.header}
                                    </h1>
                                    <p>{data.allMdx.nodes[context['langIndex']].frontmatter.motto}</p>
                                    <div className="hero-button  mt-30">
                                        <Link to="#" className="ht-btn ht-btn-md">{data.allMdx.nodes[context['langIndex']].frontmatter.jumpToAnchorText}</Link>
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
            )}
        </Appcontext.Consumer>
    )};

export default Hero;