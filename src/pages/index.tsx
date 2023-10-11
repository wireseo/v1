import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ExperienceCard, {
  ExperienceCardProps,
} from "../components/experienceCard";
import { ExperienceProvider } from "../components/experienceProvider";

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="space-y-20 lg:space-y-60 py-32">
        <section
          id="about"
          className="text-[#FFFFFF]/50 font-light leading-relaxed"
        >
          <p>
            My problem-solving journey began unexpectedly when I picked up Java
            as an attempt to assist my high school principal with class
            scheduling. I bore witness to the magic of what used to be months of
            intense manual labor being reduced to a simple—and oh so
            satisfying—click of a button; seeing how elegant code could
            efficiently streamline processes, I was instantly hooked to the
            world of code.{" "}
          </p>
          <br />
          <p>
            Since then, I've ventured into the dynamic realm of startups, from
            the buzzing landscape of{" "}
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
            . By day, I craft tasteful front-end components and brainstorm ways
            to optimize sprawling backends for multiple products at MarinaChain.
            By night, I am a tinkerer at heart: you can find me writing{" "}
            <strong>
              <a
                href="https://open.spotify.com/artist/0w1g0B53ZzbTkbev0WDAmm?si=BMuVaWz-TZWUe0c7QdW32A"
                className="text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                indie music
              </a>
            </strong>{" "}
            and making things prettier via graphic design. I relish every
            opportunity to dive into complex challenges, cherishing the process
            of creating elegant solutions that captivate users with their
            intuitive design and seamless experiences.
          </p>
        </section>

        <section id="experience" className="text-[#FFFFFF] font-light">
          <ExperienceProvider>
            <ExperienceCard
              startDate="Sep 2022"
              endDate="Present"
              jobTitle="Tech Lead"
              company="MarinaChain"
              techStack={["Vue", "Django", "PostgreSQL", "TailwindCSS"]}
              link="https://www.marinachain.io/"
              description={[
                "Led a team of 4 to implement a responsive front-end for a ship analytics web platform by translating design wireframes with Vue, Pinia and Tailwind CSS",
                "Introduced and enforced code review practices, automated testing workflows, and continuous integration processes, resulting in a 15% reduction in production bugs and improved release cadence",
                "Developed internal API integrations and leveraged third-party APIs, enhancing overall system performance and reliability and data flow efficiency",
                "Optimized the relational database schema, reducing data retrieval times by 20% and ensuring scalability to accommodate a growing number of users",
                "Collaborated with Marketing & Design teams  in UI/UX design processes and directly engaged with clients to enhancing user engagement",
              ]}
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
              link="https://www.propelsoftware.com/"
              description={[
                "Implemented, tested, and deployed back-end and front-end features for large-scale enterprise web application built on Salesforce Apex connected to a Node-based server deployed on Heroku",
                "Integrated Salesforce-based APIs and the Office365 platform to complement native Salesforce file storage which streamlined business processes, resulting in a 5% increase in product adoption",
                "Migrated legacy React front-end to Salesforce LWC framework and refactored existing codebase to reduce item sorting and page loading time by 30%",
              ]}
            />
          </ExperienceProvider>
          <button
            onClick={() => window.open("/Eryn_Seo_Resume.pdf", "_blank")}
            className="no-underline transform transition-transform hover:translate-x-1 text-blue-500 hover:text-bright-blue border-b-2 border-blue-500 focus:outline-none"
          >
            Download Resume →
          </button>
        </section>

        {/* <section
          id="projects"
          className="text-[#FFFFFF] font-light  min-w-[550px]"
        >
          Here is the projects
          and making things prettier via graphic design. I relish every
          opportunity to dive into complex challenges, cherishing the process of
          creating elegant solutions that captivate users with their intuitive
          design and seamless experiences.and making things prettier via graphic
          design. I relish every opportunity to dive into complex challenges,
          cherishing the process of creating elegant solutions that captivate
          users with their intuitive design and seamless experiences.and making
          things prettier via graphic design. I relish every opportunity to dive
          into complex challenges, cherishing the process of creating elegant
          solutions that captivate users with their intuitive design and
          seamless experiences.and making things prettier via graphic design. I
          relish every opportunity to dive into complex challenges, cherishing
          the process of creating elegant solutions that captivate users with
          their intuitive design and seamless experiences.and making things
          prettier via graphic design. I relish every opportunity to dive into
          complex challenges, cherishing the process of creating elegant
          solutions that captivate users with their intuitive design and
          seamless experiences.and making things prettier via graphic design. I
          relish every opportunity to dive into complex challenges, cherishing
          the process of creating elegant solutions that captivate users with
          their intuitive design and seamless experiences.Here is the projects
          and making things prettier via graphic design. I relish every
          opportunity to dive into complex challenges, cherishing the process of
          creating elegant solutions that captivate users with their intuitive
          design and seamless experiences.and making things prettier via graphic
          design. I relish every opportunity to dive into complex challenges,
          cherishing the process of creating elegant solutions that captivate
          users with their intuitive design and seamless experiences.and making
          things prettier via graphic design. I relish every opportunity to dive
          into complex challenges, cherishing the process of creating elegant
          solutions that captivate users with their intuitive design and
          seamless experiences.and making things prettier via graphic design. I
          relish every opportunity to dive into complex challenges, cherishing
          the process of creating elegant solutions that captivate users with
          their intuitive design and seamless experiences.and making things
          prettier via graphic design. I relish every opportunity to dive into
          complex challenges, cherishing the process of creating elegant
          solutions that captivate users with their intuitive design and
          seamless experiences.and making things prettier via graphic design. I
          relish every opportunity to dive into complex challenges, cherishing
          the process of creating elegant solutions that captivate users with
          their intuitive design and seamless experiences.Here is the projects
          and making things prettier via graphic design. I relish every
          opportunity to dive into complex challenges, cherishing the process of
          creating elegant solutions that captivate users with their intuitive
          design and seamless experiences.and making things prettier via graphic
          design. I relish every opportunity to dive into complex challenges,
          cherishing the process of creating elegant solutions that captivate
          users with their intuitive design and seamless experiences.and making
          things prettier via graphic design. I relish every opportunity to dive
          into complex challenges, cherishing the process of creating elegant
          solutions that captivate users with their intuitive design and
          seamless experiences.and making things prettier via graphic design. I
          relish every opportunity to dive into complex challenges, cherishing
          the process of creating elegant solutions that captivate users with
          their intuitive design and seamless experiences.and making things
          prettier via graphic design. I relish every opportunity to dive into
          complex challenges, cherishing the process of creating elegant
          solutions that captivate users with their intuitive design and
          seamless experiences.and making things prettier via graphic design. I
          relish every opportunity to dive into complex challenges, cherishing
          the process of creating elegant solutions that captivate users with
          their intuitive design and seamless experiences.
        </section> */}

        <section className="text-[#FFFFFF]/[0.5] font-light text-sm">
          Built w/ ❤️ in Gatsby and Tailwind CSS. Roboto Slab Typeface.
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: React.FC = () => <Seo title="Eryn Seo's Web Portfolio" />;
