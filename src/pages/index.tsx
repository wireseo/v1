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
      <div className="space-y-20 lg:space-y-40 py-32">
        <section
          id="about"
          className="text-blue-white/[0.8] tracking-wider font-mono leading-relaxed"
        >
          <p>
            <strong className="font-medium text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300">
              Hey there!
            </strong>{" "}
            I'm Eryn, a seasoned full-stack engineer specializing in
            spearheading innovative projects from inception to launch.
          </p>
          <br />
          <p>
            Riding the entrepreneurial wave since secondary school, I've surfed
            all the way from the bustling breakers of{" "}
            <strong>
              <a
                href="https://www.propelsoftware.com/"
                className="font-medium text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                Silicon Valley{" "}
              </a>
            </strong>
            to the vibrant shores of{" "}
            <strong>
              <a
                href="https://www.marinachain.io/"
                className="font-medium text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                Singapore
              </a>
            </strong>
            's maritime startup scene.{" "}
            <span className="text-blue-white/[0.5] text-sm">
              (In a metaphorical sense, of course.)
            </span>
          </p>
          <p>
            <br />
            Currently, I build solutions and lead technical teams for a diverse
            range of SaaS B2B products focusing on maritime decarbonization. Off
            the clock, I am a tinkerer at heart: you can find me writing cool{" "}
            <strong>
              <a
                href="https://open.spotify.com/artist/0w1g0B53ZzbTkbev0WDAmm?si=BMuVaWz-TZWUe0c7QdW32A"
                className="font-medium text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                indie music
              </a>
            </strong>{" "}
            and making lovable things even lovelier via graphic design.
          </p>
        </section>

        <section id="experience">
          <ExperienceProvider>
            <ExperienceCard
              startDate="2022"
              endDate="Present"
              jobTitle="Tech Lead"
              company="MarinaChain"
              techStack={["Vue", "Django", "PostgreSQL", "TailwindCSS"]}
              link="https://www.marinachain.io/"
              description={
                "Delivered robust production code in creating a responsive frontend and optimized backend for a ship analytics / carbon accounting platform. Implemented best practices and CI/CD pipelines while providing leadership."
              }
            />
            <ExperienceCard
              startDate="Jan"
              endDate="Dec 2021"
              jobTitle="Software Engineer Intern"
              company="Propel Software"
              techStack={["Javascript", "Apex (Java)", "LWC", "Salesforce"]}
              link="https://www.propelsoftware.com/"
              description={
                "Integrated a large-scale enterprise web application based on Salesforce and Office365 to optimize business processes. Spearheaded a migration from a legacy React frontend to Salesforce LWC, streamlining performance and reducing load times significantly."
              }
            />
          </ExperienceProvider>
          <button
            onClick={() => window.open("/Eryn_Seo_Resume.pdf", "_blank")}
            className="text-blue-white ransform transition-transform hover:translate-x-1 text-blue-500 hover:text-bright-blue border-b-2 border-blue-500 focus:outline-none"
          >
            Download Resume →
          </button>
        </section>

        {/* <section
          id="projects"
          className="text-blue-white font-light min-w-[550px]"
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
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: React.FC = () => <Seo title="Eryn Seo's Web Portfolio" />;
