import Home from "./homePage/page";
import { useSelectedTab } from "@/context/selectedTabContext";
import Skills from "./skillsPage/page";
import Contact from "./contactPage/page";
import Experience from "./experiencePage/page";
import NoTabSelected from "./noTabSelectedPage/page";

function Pages() {
  const { activeId } = useSelectedTab();

  console.log(activeId);

  return (
    <div className="mt-20 flex-5 min-w-[78.8vw] px-10 h-full">
      {activeId ? (
        activeId === "1.1.1.1" ? (
          <Home />
        ) : activeId === "1.1.2.1" ? (
          <Skills />
        ) : activeId === "1.1.3.1" ? (
          <Experience />
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
