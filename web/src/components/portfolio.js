import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Appcontext from "../context";

export const query = graphql`
query Portfolio{
    allMdx(
      filter: {frontmatter: {anchor: {eq: "Portfolio"}}}
      sort: {fields: frontmatter___langIndex}
    ) {
      nodes {
          frontmatter {
              title
                titleBlue
              portfolios
              {
                aId
                href
                imageFileName
                imageFileNameDetail
                header
                subheader
                content
                extraInfo
              }
            }
      }
    }
    }
`;

const Portfolio = () => {
    const data = useStaticQuery(query);

    return (
        <Appcontext.Consumer>
            {(context) => (
                <div id="portfolio" className="tabs-wrapper section-space--ptb_100 projectinfotechno-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-wrapper text-center section-space--mb_60 wow move-up animated"
                                >
                                    <h6 className="section-sub-title mb-20">Portfolio</h6>
                                    <h3 className="section-title">{data.allMdx.nodes[context['langIndex']].frontmatter.title}<span className="text-color-primary"> {data.allMdx.nodes[context['langIndex']].frontmatter.titleBlue}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 ht-tab-wrap">
                                <div className="row">
                                    <div className="col-12 text-center wow move-up  animated" >
                                        <ul className="nav justify-content-center ht-tab-menu" role="tablist">
                                            {data.allMdx.nodes[context['langIndex']].frontmatter.portfolios.map((x, idx) => (<li key={x.header + " " + idx} className={idx === 0 ? "tab__item nav-item active" : "tab__item nav-item"}>
                                                <a className={idx === 0 ? "nav-link active" : "nav-link"} id={x.aId} data-toggle="tab"
                                                    href={"#" + x.href} role="tab" aria-selected={idx === 0 ? "true" : "false"}>{x.header}</a>
                                            </li>))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-content ht-tab__content wow move-up animated">
                                    {data.allMdx.nodes[context['langIndex']].frontmatter.portfolios.map((x, idx) => (
                                        <div className={idx === 0 ? "tab-pane fade show active" : "tab-pane fade"} id={x.href} role="tabpanel">
                                        <div className="tab-history-wrap section-space--mt_60">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tab-history-image video-popup mt-30">
                                                        <Link to="#"
                                                            className="video-link">
                                                            <div className="single-popup-wrap">
                                                                <img className="img-fluid"
                                                                    src={x.imageFileName[0]}
                                                                    alt="" />
                                                                <div className="ht-popup-video video-button">
                                                                    <div className="video-mark">
                                                                        <div className="wave-pulse wave-pulse-1"></div>
                                                                        <div className="wave-pulse wave-pulse-2"></div>
                                                                    </div>
                                                                    <div className="video-button__two">
                                                                        <div className="video-play">
                                                                            <span className="video-play-icon"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 offset-lg-1 ">
                                                    <div className="tab-content-inner  mt-30">
                                                        <div className="text mb-30">...</div>
                                                        <ul className="check-list section-space--mb_40">
                                                            <li className="list-item">..</li>
                                                            <li className="list-item">..</li>
                                                            <li className="list-item">..</li>
                                                            <li className="list-item">..</li>
                                                        </ul>
                                                        <div className="text mb-30">...</div>
                                                        <div className="tab-button mt-20">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </Appcontext.Consumer>
    );
};

export default Portfolio;