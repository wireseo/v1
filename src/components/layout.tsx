import * as React from "react";
import Tab from "./Tab";
import Socials from "./Socials";
import WaveName from "./WaveName";
import LoadingPage from "./LoadingPage";

const Layout: React.FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  const [activeTab, setActiveTab] = React.useState<string>("about");
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleScroll = (scrollableDiv: Element) => {
    const about = document.getElementById("about");
    const experience = document.getElementById("experience");

    if (!about || !experience) return;

    if (scrollableDiv.scrollTop < about.offsetHeight) {
      setActiveTab("about");
    } else if (
      scrollableDiv.scrollTop >= about.offsetHeight &&
      scrollableDiv.scrollTop < about.offsetHeight + experience.offsetHeight
    ) {
      setActiveTab("experience");
    } else {
      setActiveTab("projects");
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!loading) {
      const scrollableDiv = document.querySelector(".overflow-auto");

      const onScroll = () => handleScroll(scrollableDiv!);

      if (scrollableDiv) {
        scrollableDiv.addEventListener("scroll", onScroll);

        return () => {
          scrollableDiv.removeEventListener("scroll", onScroll);
        };
      }
    }
  }, [loading]);

  React.useEffect(() => {
    document.addEventListener("mousemove", (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const gradient = `radial-gradient(500px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 70%)`;

      const gradientElement = document.querySelector(".gradient-spot");

      if (gradientElement) {
        gradientElement.style.background = gradient;
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-blue-black mx-auto min-h-screen max-w-screen-xl px-8 lg:px-12">
          <div className="gradient-spot"></div>
          <div className="lg:flex lg:justify-between lg:h-screen lg:gap-8">
            <div className="lg:w-2/5 lg:py-24 pt-12 lg:pl-8 lg:sticky lg:top-0 ">
              <main>
                <div className="flex flex-col pb-4 relative min-w-[300px]">
                  <div className="text-layer">
                    <WaveName />
                    <h2 className="text-blue-white text-xl">
                      Tech Lead at MarinaChain
                    </h2>
                    <h3 className="text-blue-white/[0.8] font-mono text-[15.5px]">
                      Inventive, elegant solutions for the web.
                    </h3>
                  </div>
                </div>

                <nav className="pt-12 hidden lg:block">
                  <ul className="flex flex-col space-y-4">
                    <Tab
                      to="#about"
                      text="about"
                      isActive={activeTab === "about"}
                      setActiveTab={setActiveTab}
                    />
                    <Tab
                      to="#experience"
                      text="experience"
                      isActive={activeTab === "experience"}
                      setActiveTab={setActiveTab}
                    />
                    <Tab
                      to="#projects"
                      text="projects"
                      isActive={activeTab === "projects"}
                      setActiveTab={setActiveTab}
                    />
                  </ul>
                </nav>

                <Socials />
              </main>
            </div>
            <div className="overflow-auto lg:w-1/2 ">
              {children}
              <section className="mb-8 text-blue-white/[0.5] font-light text-sm">
                Built w/ ❤️ in Gatsby and Tailwind CSS. Roboto Slab & Neue
                Montreal Typeface.
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
