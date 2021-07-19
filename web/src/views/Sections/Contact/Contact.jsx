import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <div className="contact-container">
        <form id="contact" method="post" action="https://formspree.io/f/mayadlyd">
          <label htmlFor="name">
            <input placeholder="Your name" type="text" name="name" id="name" required/>
          </label>
          <label htmlFor="_replyto">
            <input placeholder="Your Email Address" type="email" name="_replyto" id="email" required/>
          </label>
          <label htmlFor="phone">
            <input placeholder="Your Phone Number (optional)" type="text" name="phone" id="phone" />
          </label>
          <label htmlFor="subject">
            <input placeholder="Subject" type="text" name="subject" id="subject" required/>
          </label>
          <label htmlFor="message">
            <textarea placeholder="Type your message here...." name="message" id="message" rows="5" required/>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      <Row>
        <Col lg={12} className="mr-auto text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>


    </PageSection >
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
