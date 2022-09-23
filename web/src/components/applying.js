import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Appcontext from "../context";
const query = graphql`
query Applying{
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
const Applying = (props) => {
    const data = useStaticQuery(query)
    return (
        <Appcontext.Consumer>
            {(context) => (
                <div id="applying" className="contact-us-area appointment-contact-bg section-space--ptb_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-form-wrap">
                                    <form className="contact-form" id="contact-form-2" method="post">
                                        <div className="contact-form__two">
                                            <h3 className="section-title"><span className="text-color-primary"> {data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)) && data.allMdx.nodes[context['langIndex']].frontmatter.positions.find(x => x.id === parseInt(props.id)).name}</span>
                                            </h3>
                                            <h5 className="heading mb-20">Personal information
                                            </h5>
                                            <div className="contact-input">

                                                <div className="contact-inner" style={{ float: 'none' }}>
                                                    <input name="applying_name" type="text" placeholder="First Name" required />
                                                </div>
                                                <div className="contact-inner" style={{ float: 'none' }}>
                                                    <input name="applying_lastname" type="text" placeholder="Last name" required />
                                                </div>
                                                <div className="contact-inner" style={{ float: 'none' }}>
                                                    <input name="applying_email" type="email" placeholder="E-mail address" required />
                                                </div>
                                                <div className="contact-inner" style={{ float: 'none' }}>
                                                    <input name="applying_phone" type="phone" placeholder="Mobile phone" required />
                                                </div>
                                            </div>

                                            <hr></hr>
                                            <h5 className="heading mb-20">Availability date
                                            </h5>
                                            <div className="contact-select">
                                                <div className="form-item contact-inner" style={{ float: 'none', width: '50%' }}>
                                                    <span className="inquiry">
                                                        <select id="availability-date" defaultValue="test" name="Visiting" required>
                                                            <option value="" selected>Select
                                                            </option>
                                                            <option value="14 days">14 days</option>
                                                            <option value="1 month">1 month</option>
                                                            <option value="2 months">2 months</option>
                                                            <option value="3 months">3 months</option>
                                                            <option value="more than 3 months">more than 3 months</option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <h5 className="heading mb-20">Financial expectation
                                            </h5>
                                            <div className="contact-input">
                                                <div className="contact-inner" style={{ float: 'none' }}>
                                                    <input name="b2b_amount" type="text" placeholder="B2B net/month amount" required />
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <h5 className="heading mb-20">CV file
                                            </h5>
                                            <div className="contact-input">
                                                <div className="contact-inner" style={{ float: 'none' }}>
                                                    <input name="b2b_csv" type="file" required />
                                                </div>
                                            </div>
                                            <div style={{ float: 'none', fontSize: '10px' }}>
                                                <label>
                                                    <input name="b2b_rodo" type="checkbox" required />
                                                    I express consent on processing of my personal data by Matrix-reliability with its registered office in Tarnów (33-100) at ul. Osiedle Zielone 14/15 included in the submitted application documents and, in particular, of my image for the needs of the present recruitment process. I accept that the consent can be revoked at any time. *
                                                </label>
                                            </div>
                                            <div className="comment-submit-btn">
                                                <button className="ht-btn ht-btn-md" type="submit">Apply</button>
                                                <p className="form-messege-2"></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </Appcontext.Consumer>
    )
}

export default Applying