import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Client from "components/Client";
import SectionHeader from "components/SectionHeader";

const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients,
    header: rootHeader,
    subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {clients.map(({ href, imageFileName }) => (
          <Col md={3} sm={6} className="my-3" key={imageFileName}>
            <Client href={href} imageFileName={imageFileName} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
