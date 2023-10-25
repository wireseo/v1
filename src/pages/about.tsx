import * as React from "react";
import HoverTitle from "../components/HoverTitle";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="text-blue-white/[0.8] tracking-wider font-mono leading-relaxed"
    >
      <HoverTitle sectionId="about" title="ABOUT" />

      <p>
        <strong className="font-medium text-bright-blue opacity-80 hover:opacity-100 transition-opacity duration-300">
          Hey there!
        </strong>{" "}
        I'm Eryn, a seasoned full-stack engineer specializing in spearheading
        innovative projects from inception to launch.
      </p>
      <br />
      <p>
        Riding the entrepreneurial wave since secondary school, I've surfed all
        the way from the bustling breakers of{" "}
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
        range of SaaS B2B products focusing on maritime decarbonization. Off the
        clock, I am a tinkerer at heart: you can find me writing cool{" "}
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
  );
};

export default About;
