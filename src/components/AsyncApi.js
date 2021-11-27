import React from "react";
import AsyncApiComponent from "@asyncapi/react-component";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import "@asyncapi/react-component/lib/styles/fiori.css";
import "../css/async.css"

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title}`}>
            <div className="container">
                <AsyncApiComponent schema={{ url: "https://raw.githubusercontent.com/The-Microservice-Dungeon/map/main/asyncapi/asyncapi.yml" }} />
            </div>
        </Layout>
    );
}
