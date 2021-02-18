import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/Layout";
import Image from "../components/Images";

const about = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About me</h2>
      <div className="image__container">
        <Image src="img/IMG_2135.PNG" alt="oh my god" />
      </div>
      <p>Sei bruuuutto</p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};

export default about;
