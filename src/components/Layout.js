import React from "react";

import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import "../styles/index.scss";
import "../styles/customization.scss";
import LayoutStyles from "./Layout.module.scss";

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        <div className={`${LayoutStyles.wrapper} row`}>
          <div className={LayoutStyles.main}>{props.children}</div>
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
