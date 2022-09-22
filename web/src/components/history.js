import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Appcontext from "../context";

export const query = graphql`
query History{
    allMdx(
      filter: {frontmatter: {anchor: {eq: "History"}}}
      sort: {fields: frontmatter___langIndex}
    ) {
      nodes {
          frontmatter {
              title
              titleBlue
              description
              timelines
              {
                range
                title
                content
                image
              }
            }
      }
    }
    }
`;
const History = () => {
    const data = useStaticQuery(query)
    return (
        <Appcontext.Consumer>
        {(context) => (
         <div id="history" className="our-history-wrapper section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrap text-center section-space--mb_30">
                                <h3 className="heading mb-20">{data.allMdx.nodes[context['langIndex']].frontmatter.title} <span className="text-color-primary"> {data.allMdx.nodes[context['langIndex']].frontmatter.titleBlue}</span>
                                </h3>
                                <p className="title-dec-text">{data.allMdx.nodes[context['langIndex']].frontmatter.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-area section-space--pt_60">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ht-timeline style-01">
                                    <ul className="tm-timeline-list ht-animation-queue">
                                        <li className="line"></li>
                                        {data.allMdx.nodes[context['langIndex']].frontmatter.timelines.map((x, idx) => (
                                            <li className="item animate">
                                            <div className="dots">
                                                <div className="middle-dot"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 timeline-col left timeline-feature">
                                                    <div className="inner">
                                                        <div className="date-wrap">
                                                            <h2 className="year">{x.range}</h2>
                                                        </div>
                                                        <div className="photo">
                                                            <img src={x.image} alt="Start up"
                                                                className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 timeline-col right timeline-info">
                                                    <div className="inner">
                                                        <div className="content-wrap">
                                                            <div className="content-body">
                                                                <h6 className="heading">{x.title}</h6>
                                                                <div className="text">
                                                                    {x.content}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </Appcontext.Consumer>
    );
}

export default History;