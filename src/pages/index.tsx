import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="space-y-28 lg:space-y-40 py-32">
        <About />
        <Experience />
        <Projects />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: React.FC = () => <Seo title="Eryn Seo's Web Portfolio" />;
