import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

const Team = () => {
//   const data = useStaticQuery(graphql`
//   {
//     allMdx(filter: {slug: {eq: "sections/4-Team.en"}}) {
//       nodes {
//         frontmatter {
//           teamMember {
//             header
//             imageFileName
//             subheader
//             social {
//               twitter
//               facebook
//               linkedin
//               medium
//             }
//           }
//         }
//       }
//     }
//   }
// `)
  return (
      <>
          <div id="team" className="section-space--ptb_100 infotechno-section-bg-01">
                <div className="feature-large-images-wrapper section-space--pt_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-wrap text-center section-space--mb_30">
                                    <h6 className="section-sub-title mb-20">Our Amazing</h6>
                                    <h3 className="heading">Team</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row ht-team-member-style-two">
                            <div className="col-lg-6 col-md-6 wow move-up animated">
                                <div className="grid-item">
                                    <div className="ht-team-member">
                                        <div className="team-image">
                                            <img className="img-fluid" src="assets/images/2.webp" alt=""/>
                                            <div className="social-networks">
                                                <div className="inner">
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce  hint--top hint--theme-two"
                                                        aria-label="Facebook"><i className="fab fa-facebook"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Twitter"><i className="fab fa-twitter"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Instagram"><i className="fab fa-instagram"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info text-center">
                                            <h5 className="name">Arkadiusz</h5>
                                            <div className="position">Lead Designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 wow move-up animated">
                                <div className="grid-item">
                                    <div className="ht-team-member">
                                        <div className="team-image">
                                            <img className="img-fluid" src="assets/images/2.webp" alt=""/>
                                            <div className="social-networks">
                                                <div className="inner">
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce  hint--top hint--theme-two"
                                                        aria-label="Facebook"><i className="fab fa-facebook"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Twitter"><i className="fab fa-twitter"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Instagram"><i className="fab fa-instagram"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info text-center">
                                            <h5 className="name">Borysław</h5>
                                            <div className="position">Lead Designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 wow move-up animated">
                                <div className="grid-item">
                                    <div className="ht-team-member">
                                        <div className="team-image">
                                            <img className="img-fluid" src="assets/images/2.webp" alt=""/>
                                            <div className="social-networks">
                                                <div className="inner">
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce  hint--top hint--theme-two"
                                                        aria-label="Facebook"><i className="fab fa-facebook"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Twitter"><i className="fab fa-twitter"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Instagram"><i className="fab fa-instagram"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info text-center">
                                            <h5 className="name">Przemysław</h5>
                                            <div className="position">Lead Designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 wow move-up animated">
                                <div className="grid-item">
                                    <div className="ht-team-member">
                                        <div className="team-image">
                                            <img className="img-fluid" src="assets/images/2.webp" alt=""/>
                                            <div className="social-networks">
                                                <div className="inner">
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce  hint--top hint--theme-two"
                                                        aria-label="Facebook"><i className="fab fa-facebook"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Twitter"><i className="fab fa-twitter"></i>
                                                    </Link>
                                                    <Link target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Instagram"><i className="fab fa-instagram"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info text-center">
                                            <h5 className="name">Patryk</h5>
                                            <div className="position">Lead Designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
  
}

export default Team
