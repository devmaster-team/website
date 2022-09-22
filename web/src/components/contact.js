import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import Appcontext from "../context";

const query = graphql`
query Contact{
  allMdx(
    filter: {frontmatter: {anchor: {eq: "Contact"}}}
    sort: {fields: frontmatter___langIndex}
  ) {
    nodes {
      frontmatter {
        nameInputPlaceholder
        emailInputPlaceholder
        title
        subtitle
        dropdownPlaceholder
        dropdownValues
        dropdownItems
        textareaPlaceholder
        btnText
        h6
        email
        contactDescription
        }
      }
    }
  }
`;

const Contact = () => {
    const data = useStaticQuery(query)
    return (
        <Appcontext.Consumer>
        {(context) => (
        <div id="contact" className="contact-us-area appointment-contact-bg section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-title section-space--mb_50">
                                <h3 className="mb-20">{data.allMdx.nodes[context['langIndex']].frontmatter.title}</h3>
                                <p className="sub-title">{data.allMdx.nodes[context['langIndex']].frontmatter.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-form-wrap">
                                <form className="contact-form" id="contact-form-2" method="post">
                                    <div className="contact-form__two">
                                        <div className="contact-input">
                                            <div className="contact-inner">
                                                <input name="con_name" type="text" placeholder={data.allMdx.nodes[context['langIndex']].frontmatter.nameInputPlaceholder}/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="email" placeholder={data.allMdx.nodes[context['langIndex']].frontmatter.emailInputPlaceholder}/>
                                            </div>
                                        </div>
                                        <div className="contact-select">
                                            <div className="form-item contact-inner">
                                                <span className="inquiry">
                                                    <select id="Visiting" defaultValue="test" name="Visiting">
                                                        <option value="" selected>{data.allMdx.nodes[context['langIndex']].frontmatter.dropdownPlaceholder}
                                                        </option>
                                                        {data.allMdx.nodes[context['langIndex']].frontmatter.dropdownValues.map((x, idx) => (
                                                            <option value={x}>{data.allMdx.nodes[context['langIndex']].frontmatter.dropdownItems[idx]}</option>
                                                        ))}
                                                    </select>

                                                </span>
                                            </div>
                                        </div>
                                        <div className="contact-inner contact-message">
                                            <textarea name="con_message"
                                                placeholder={data.allMdx.nodes[context['langIndex']].frontmatter.textareaPlaceholder}></textarea>
                                        </div>
                                        <div className="comment-submit-btn">
                                            <button className="ht-btn ht-btn-md" type="submit">{data.allMdx.nodes[context['langIndex']].frontmatter.btnText}</button>
                                            <p className="form-messege-2"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 ml-auto">
                            <div className="contact-info-three text-left">
                                <h6 className="heading font-weight--reguler">{data.allMdx.nodes[context['langIndex']].frontmatter.h6}</h6>
                                <h3 className="call-us"><Link to="mailto:contact@devmaster.team"
                                        className="hover-style-link">{data.allMdx.nodes[context['langIndex']].frontmatter.email}</Link></h3>
                                {/* <h3 className="call-us"><Link to="tel:123344556"
                                        className="hover-style-link text-black font-weight--bold">(+48) 111 222 333</Link></h3> */}
                                <div className="text">{data.allMdx.nodes[context['langIndex']].frontmatter.contactDescription}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </Appcontext.Consumer>
    );
};

export default Contact;