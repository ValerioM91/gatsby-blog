import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import HeaderStyle from "./Header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={HeaderStyle.header}>
      <h1>
        <Link to="/" className={HeaderStyle.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={HeaderStyle.navList}>
          <li>
            <Link
              to="/"
              className={HeaderStyle.navItem}
              activeClassName={HeaderStyle.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={HeaderStyle.navItem}
              activeClassName={HeaderStyle.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={HeaderStyle.navItem}
              activeClassName={HeaderStyle.activeNavItem}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={HeaderStyle.navItem}
              activeClassName={HeaderStyle.activeNavItem}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
