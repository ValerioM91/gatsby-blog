import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import FooterStyles from "./Footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <div className={FooterStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2021</p>
    </div>
  );
};

export default Footer;
