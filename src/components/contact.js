import React from "react";
import { Link } from "gatsby";

class Contact extends React.Component {
  render () {
    return (
        <>
        <div id="contact" className="contact-us-area appointment-contact-bg section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-title section-space--mb_50">
                                <h3 className="mb-20">Need a hand?</h3>
                                <p className="sub-title">Reach out to the world’s most reliable IT services.</p>
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
                                                <input name="con_name" type="text" placeholder="Name *"/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="email" placeholder="Email *"/>
                                            </div>
                                        </div>
                                        <div className="contact-select">
                                            <div className="form-item contact-inner">
                                                <span className="inquiry">
                                                    <select id="Visiting" defaultValue="test" name="Visiting">
                                                        <option disabled="" selected="">Select Department to email
                                                        </option>
                                                        <option value="Your inquiry about">Your inquiry about</option>
                                                        <option value="General Information Request">General Information
                                                            Request</option>
                                                        <option value="Partner Relations">Partner Relations</option>
                                                        <option value="Careers">Careers</option>
                                                        <option value="Software Licencing">Software Licencing</option>
                                                    </select>

                                                </span>
                                            </div>
                                        </div>
                                        <div className="contact-inner contact-message">
                                            <textarea name="con_message"
                                                placeholder="Please describe what you need."></textarea>
                                        </div>
                                        <div className="comment-submit-btn">
                                            <button className="ht-btn ht-btn-md" type="submit">Get a free
                                                consultation</button>
                                            <p className="form-messege-2"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 ml-auto">
                            <div className="contact-info-three text-left">
                                <h6 className="heading font-weight--reguler">Have questions?</h6>
                                <h3 className="call-us"><Link to="mailto:contact@devmaster.team"
                                        className="hover-style-link">contact@devmaster.team</Link></h3>
                                {/* <h3 className="call-us"><Link to="tel:123344556"
                                        className="hover-style-link text-black font-weight--bold">(+48) 111 222 333</Link></h3> */}
                                <div className="text">Start the collaboration with us while figuring out the best solution
                                    based on your needs.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
};

export default Contact;