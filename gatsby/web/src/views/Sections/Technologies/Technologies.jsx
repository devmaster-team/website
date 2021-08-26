import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionHeader from "components/SectionHeader";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Technology from "components/Technology";

const Technologies = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, technologies,
        header: rootHeader,
        subheader: rootSubHeader } = frontmatter;

    return (
        <PageSection className={clsx("py-5", className)} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row>
                {technologies.map(({ href, imageFileName }) => (
                    <Col className="my-3" key={imageFileName}>
                        <Technology href={href} imageFileName={imageFileName} />
                    </Col>
                ))}
            </Row>
        </PageSection >
    );
};

Technologies.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Technologies.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Technologies;
