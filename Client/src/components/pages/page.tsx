import Home from "./homePage/page";
import { useSelectedTab } from "@/context/selectedTabContext";
import Skills from "./skillsPage/page";
import Contact from "./contactPage/page";
import NoTabSelected from "./noTabSelectedPage/page";
import Projects from "./ProjectsPage/page";
import ExperiencePage from "./experiencePage/page";
import Education from "./educationPage/page";

function Pages(bottomPannelToggle: { bottomPannelToggle: boolean }) {
  const { activeId } = useSelectedTab();


  return (
    <div className={`pt-20 flex-1 min-w-[78.8vw]  overflow-y-scroll px-10 }`}>
      {activeId ? (
        activeId === "1.1.1" ? (
          <Home />
        ) : activeId === "1.1.2" ? (
          <Skills />
        ) : activeId === "1.1.3" ? (
          <Projects />
        ) : activeId === "1.1.6" ? (
          <Contact />
        ) : activeId === "1.1.5" ? (
          <Education />
        ) : activeId === "1.1.4" ? (
          <ExperiencePage />
        ) : (
          <NoTabSelected />
        )
      ) : (
        <NoTabSelected />
      )}
    </div>
  );
}

export default Pages;
