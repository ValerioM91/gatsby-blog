import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";

import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>I'm Valerio bla bla bla</p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};

export default about;
