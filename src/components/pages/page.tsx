import Home from "./homePage/page";
import { useSelectedTab } from "@/context/selectedTabContext";
import Skills from "./skillsPage/page";
import Contact from "./contactPage/page";
import Experience from "./experiencePage/page";
import NoTabSelected from "./noTabSelectedPage/page";
import Projects from "./ProjectsPage/page";

function Pages() {
  const { activeId } = useSelectedTab();

  return (
    <div className="pt-20 flex-1 min-w-[78.8vw] h-[calc(100vh-5rem)] overflow-y-auto px-10">
      {activeId ? (
        activeId === "1.1.1.1" ? (
          <Home />
        ) : activeId === "1.1.2.1" ? (
          <Skills />
        ) : activeId === "1.1.3.1" ? (
          <Projects />
        ) : activeId === "1.1.4.1" ? (
          <Contact />
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
