import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Head from "../components/head";
import Layout from "../components/Layout";
import blogStyle from "./blog.module.scss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM YYYY")
            author
            bookPublished
            preview
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Home" />
      <h2 className={blogStyle.title}>My latest reviews</h2>
      <ol className={blogStyle.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li key={edge.node.title} className={blogStyle.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h3 className={blogStyle.post__title}>{edge.node.title}</h3>
              <p className={blogStyle.post__date}>{edge.node.publishedDate}</p>
              <img
                src={edge.node.image.file.url}
                alt={edge.node.title}
                className={blogStyle.post__img}
              />
              <p className={blogStyle.post__author}>
                Author: {edge.node.author} &mdash; Published:{" "}
                {edge.node.bookPublished}
              </p>
              <p className={blogStyle.post__text}>{edge.node.preview}</p>
            </Link>
          </li>
        ))}
      </ol>
      {/* <Link to="/contact">Contact me</Link> */}
    </Layout>
  );
};

export default IndexPage;
