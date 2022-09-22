import React from "react";
import Layout from "../../layout";
import { useStaticQuery, graphql } from "gatsby";
import Appcontext from "../../context";
import { Link } from "gatsby";
import { Router } from "@reach/router"

const query = graphql`
query Careers3{
  allMdx(
    filter: {frontmatter: {anchor: {eq: "Careers"}}}
    sort: {fields: frontmatter___langIndex}
  ) {
    nodes {
        frontmatter {
            positions {
                id
                name
            }
          }
    }
  }
  }
`;

const Applying = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <Appcontext.Consumer>
                {(context) => (
                    <div id="applying" className="feature-images-wrapper bg-gray section-space--ptb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title-wrap text-center">
                                        <h6 className="section-sub-title mb-20">Careers</h6>
                                        <h3 className="heading">Open
                                            <span className='text-color-primary'> positions</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="feature-images__one">
                                        <div className="row">
                                            {data.allMdx.nodes[context['langIndex']].frontmatter.positions.map(position =>
                                                <>
                                                    <div className="col-lg-4 col-md-6 wow move-up">
                                                        <div className="ht-box-images style-01">
                                                            <div className="image-box-wrap" style={{ minHeight: '0' }}>
                                                                <div className="content">
                                                                    <h5 className="heading">{position.name}</h5>
                                                                    <div className="circle-arrow">
                                                                        <div className="middle-dot"></div>
                                                                        <div className="middle-dot dot-2"></div>
                                                                        {position.id}
                                                                        <Link to={`/careers/${position.id}`}>
                                                                            <i className="far fa-long-arrow-right"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="section-under-heading text-center section-space--mt_60 section-space--pt_30">
                                        {data.allMdx.nodes[context['langIndex']].frontmatter.endTitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Appcontext.Consumer>
        </Layout>
    )
}

export default Applying