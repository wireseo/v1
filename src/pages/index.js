import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ExperienceCard from "../components/experienceCard";
import { ExperienceProvider } from "../components/experienceProvider";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="space-y-40 p-48">
        <section id="about" className="text-[#FFFFFF] font-light min-w-[600px]">
          My problem-solving journey began unexpectedly when I picked up Java as
          an attempt to assist my high school principal with class scheduling. I
          bore witness to the magic of what used to be months of intense manual
          labor being reduced to a simple—and oh so satisfying—click of a
          button; seeing how elegant code could efficiently streamline
          processes, I was instantly hooked to the world of code. Since then,
          I've ventured into the dynamic realm of startups, from the buzzing
          landscape of{" "}
          <strong>
            <a
              href="https://www.propelsoftware.com/"
              className="text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Silicon Valley{" "}
            </a>
          </strong>
          to the vibrant startup scene in{" "}
          <strong>
            <a
              href="https://www.marinachain.io/"
              className="text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Singapore's maritime industry
            </a>
          </strong>
          . By day, I craft tasteful front-end components and brainstorm ways to
          optimize sprawling backends for multiple products at MarinaChain. By
          night, I am a tinkerer at heart: you can find me writing indie music
          and making things prettier via graphic design. I relish every
          opportunity to dive into complex challenges, cherishing the process of
          creating elegant solutions that captivate users with their intuitive
          design and seamless experiences.
        </section>

        <section
          id="experience"
          className="text-[#FFFFFF] font-light min-w-[600px] "
        >
          <ExperienceProvider>
            <ExperienceCard
              startDate="Sep 2022"
              endDate="Present"
              jobTitle="Tech Lead"
              company="MarinaChain"
              techStack={["Vue", "Django", "PostgreSQL", "TailwindCSS"]}
              link="https://www.example.com"
              description="Developed several web applications, managed databases, etc."
            />
            <ExperienceCard
              startDate="Jan 2021"
              endDate="Dec 2021"
              jobTitle="Software Engineer Intern"
              company="Propel Software"
              techStack={[
                "Javascript",
                "Apex (Java)",
                "Lightning Web Components",
                "Salesforce",
              ]}
              link="https://www.example.com"
              description="Developed several web applications, managed databases, etc."
            />
          </ExperienceProvider>
        </section>

        <section
          id="projects"
          className="text-[#FFFFFF] font-light  min-w-[600px]"
        >
          Here is the projects{/* your projects section content */}
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
