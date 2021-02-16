import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>Benvenuti nel mio blog</h2>
      <Link to="/contact">Contact me</Link>
    </Layout>
  );
};

export default IndexPage;
