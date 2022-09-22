import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Appcontext from "../context";

const query = graphql`
query team{
  allMdx(
    filter: {frontmatter: {anchor: {eq: "Team"}}}
    sort: {fields: frontmatter___langIndex}
  ) {
    nodes {
      frontmatter {
        anchor
        lang
        header
        headerSub
        teamMember{
					imageFileName
          header
          subheader
          social{
            twitter
            facebook
            linkedin
          }
        }
      }
    }
  }
  }
`;


const Team = () => {
  const dataww = useStaticQuery(query);
  
  return (
    <Appcontext.Consumer>
    {(context) => (
    <>
              <div id="team" className="section-space--ptb_100 infotechno-section-bg-01">
                <div className="feature-large-images-wrapper section-space--pt_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-wrap text-center section-space--mb_30">
                                    <h6 className="section-sub-title mb-20">{dataww.allMdx.nodes[context['langIndex']].frontmatter.header}</h6>
                                    <h3 className="heading">{dataww.allMdx.nodes[context['langIndex']].frontmatter.headerSub}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row ht-team-member-style-two">
                          {
                          dataww.allMdx.nodes[context['langIndex']].frontmatter.teamMember.map(team => 
                            <>
                                <div className="col-lg-4 col-md-6 wow move-up animated">
                                    <div className="grid-item">
                                        <div className="ht-team-member">
                                            <div className="team-image">
                                                <img className="img-fluid" src={team.imageFileName} alt={team.header}/>
                                                <div className="social-networks">
                                                    <div className="inner">
                                                        <Link target="_blank" to={team.social['facebook']}
                                                            className=" hint--bounce  hint--top hint--theme-two"
                                                            aria-label="Facebook"><i className="fab fa-facebook"></i>
                                                        </Link>
                                                        <Link target="_blank" to={team.social['twitter']}
                                                            className=" hint--bounce hint--top hint--theme-two"
                                                            aria-label="Twitter"><i className="fab fa-twitter"></i>
                                                        </Link>
                                                        <Link target="_blank" to={team.social['linkedin']}
                                                            className=" hint--bounce hint--top hint--theme-two"
                                                            aria-label="linkedin"><i className="fab fa-linkedin"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="team-info text-center">
                                                <h5 className="name">{team.header}</h5>
                                                <div className="position">{team.subheader}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                          }
                        </div>
                    </div>
                </div>
            </div>
            </>
            )}
        </Appcontext.Consumer>
  )
}

export default Team
