import React from "react";
import Head from "../components/head";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact info</h2>
      <p>
        <i className="fas fa-mobile-alt"></i>Tel: 0123 4567890
      </p>
      <p>
        <i className="far fa-envelope"></i>Email: abc@def.com
      </p>
      <p>
        <i className="fas fa-map-marker-alt"></i>Address: 'Abbasc a Molar'
      </p>
      <p>
        <a href="http://facebook.com">
          <i className="fab fa-facebook-f"></i>Facebook
        </a>
      </p>
      <p>
        <a href="http://facebook.com">
          <i className="fab fa-instagram"></i>Instagram
        </a>
      </p>
    </Layout>
  );
};

export default contact;
