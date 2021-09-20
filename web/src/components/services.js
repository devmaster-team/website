import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
{
  allMdx(filter: {slug: {eq: "sections/1-Services.en"}}) {
    nodes {
      frontmatter {
        titleH2
        titleH3
        titleH3Blue
        endTitle
        services {
          iconName
          header
          content
        }
      }
    }
  }
}
`;
const Services = () => {
    const data = useStaticQuery(query);
    const { titleH2, titleH3, titleH3Blue, endTitle} = data.allMdx.nodes[0].frontmatter;
    const services = data.allMdx.nodes[0].frontmatter.services.map(service => 
        <>
            <div className="col-lg-4 col-md-6 wow move-up">
                <div className="ht-box-images style-01">
                    <div className="image-box-wrap">
                        <div className="box-image">
                            <img className="img-fulid" src={service.iconName} alt=""/>
                        </div>
                        <div className="content">
                            <h5 className="heading">{service.header}</h5>
                            <div className="text">{service.content}
                            </div>
                            <div className="circle-arrow">
                                <div className="middle-dot"></div>
                                <div className="middle-dot dot-2"></div>
                                <Link to="#">
                                    <i className="far fa-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return(
        <>
        <div id="services" className="feature-images-wrapper bg-gray section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrap text-center">
                                <h6 className="section-sub-title mb-20">{titleH2}</h6>
                                <h3 className="heading">{titleH3} <span className='text-color-primary'>{titleH3Blue}</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="feature-images__one">
                                <div className="row">
                                    {services}
                                </div>
                            </div>
                            <div className="section-under-heading text-center section-space--mt_60 section-space--pt_30">
                                {endTitle}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Services;