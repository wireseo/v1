import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <section id="about" className="text-[#FFFFFF]">
        Here is the about{/* your about section content */}
      </section>

      <section id="experience" className="text-[#FFFFFF]">
        Here is the experience{/* your experience section content */}
      </section>

      <section id="projects" className="text-[#FFFFFF]">
        Here is the projects{/* your projects section content */}
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
