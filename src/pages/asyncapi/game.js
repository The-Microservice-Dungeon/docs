import React from "react";
import AsyncApiComponent from "@asyncapi/react-component";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./async.css"

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <div className="container">
        <AsyncApiComponent schema={{ url: siteConfig.customFields.asyncApiSpec.game }} />
      </div>
    </Layout>
  );
}
