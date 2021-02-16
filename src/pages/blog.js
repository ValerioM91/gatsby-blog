import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/Layout";
import blogStyle from "./blog.module.scss";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li key={edge.node.title} className={blogStyle.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Blog;
