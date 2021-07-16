import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";

const Technology = ({ imageFileName, href }) => {
    const imgPart = (
        <Image className="img-fluid d-block mx-auto" fileName={imageFileName} alt={imageFileName} />
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {imgPart}
            </a>
        );
    }

    return imgPart;
};

Technology.propTypes = {
    imageFileName: PropTypes.string.isRequired,
    href: PropTypes.string,
};

Technology.defaultProps = {
    href: null,
};

export default Technology;
