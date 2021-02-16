import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Head from "../components/head";
import Layout from "../components/Layout";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM YYYY")
      body {
        raw
        references {
          file {
            url
          }
          contentful_id
          title
        }
      }
    }
  }
`;

const Blog = props => {
  const {
    contentfulBlogPost: {
      title,
      publishedDate,
      body: { raw, references },
    },
  } = props.data;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageID = node.data.target.sys.id;
        const {
          file: { url },
          title,
        } = references.find(({ contentful_id: id }) => {
          return id === imageID;
        });

        return <img src={url} alt={title} />;
      },
    },
  };
  // console.log(JSON.parse(props.data.contentfulBlogPost.body.raw));

  const rawBlogPostObject = JSON.parse(raw);

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(rawBlogPostObject, options)}
    </Layout>
  );
};

export default Blog;
