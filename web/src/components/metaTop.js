import React from "react";
import {Helmet} from "react-helmet";
import favicon from "../images/gatsby-icon.png";

const MetaTop = () => (
        <>
          <Helmet>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <title>DEV Master</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href={favicon}/>
            <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css"/>
            <link rel="stylesheet" href="/assets/css/vendor/fontawesome-all.min.css"/>
            <link rel="stylesheet" href="/assets/css/vendor/linea-icons.css"/>
            <link rel="stylesheet" href="/assets/css/plugins/animate-text.css"/>
            <link rel="stylesheet" href="/assets/css/plugins/animate.min.css"/>
            <link rel="stylesheet" href="/assets/css/plugins/lightgallery.min.css"/>
            <link rel="stylesheet" href="/assets/css/style.css"/>
          </Helmet>
      </>
    )
export default MetaTop;