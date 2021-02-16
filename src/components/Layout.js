import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/index.scss";
import LayoutStyles from "./Layout.module.scss";

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
