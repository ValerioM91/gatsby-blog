import React from "react";
import { Link } from "gatsby";
import Head from "../components/head";
import Layout from "../components/Layout";
import Image from "../components/Images";

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h2>Page not found</h2>
      <p>
        <Link to="/">Head home</Link>
      </p>
      <Image src="img/IMG_9354.JPG" alt="not found" />
    </Layout>
  );
};

export default NotFound;
