import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Appcontext from "../context";

const query = graphql`
query WhyWe{
  allMdx(
    filter: {frontmatter: {anchor: {eq: "WhyWe"}}}
    sort: {fields: frontmatter___langIndex}
  ) {
    nodes {
        frontmatter {
            title
            ending
            parts {
                iconName
                header
                content
            }
          }
    }
  }
}
`;

const Whywe = (props) => {
    const data = useStaticQuery(query);

    return (
        <Appcontext.Consumer>
            {(context) => (
                <>

                    <div id="whywe" className="feature-icon-wrapper section-space--pb_70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title-wrap text-center section-space--mb_20">
                                        <h3 className="heading">{data.allMdx.nodes[context['langIndex']].frontmatter.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="feature-list__three">
                                        <div className="row">
                                            {data.allMdx.nodes[context['langIndex']].frontmatter.parts.map(x => (
                                                <div className="col-lg-6">
                                                    <div className="grid-item animate">
                                                        <div className="ht-box-icon style-03">
                                                            <div className="icon-box-wrap">
                                                                <div className="content-header">
                                                                    <div className="icon">
                                                                        <i className={x.iconName}></i>
                                                                    </div>
                                                                    <h5 className="heading">
                                                                        {x.header}
                                                                    </h5>
                                                                </div>
                                                                <div className="content">
                                                                    <div className="text">{x.content}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="section-under-heading text-center section-space--pt_30">
                                            {data.allMdx.nodes[context['langIndex']].frontmatter.ending}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Appcontext.Consumer>
    )
};

export default Whywe;