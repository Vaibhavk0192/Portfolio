import { useSelectedTab } from "@/context/selectedTabContext";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

interface topbarPropsType {
  id: string;
  title: string;
  icons: React.ElementType;
}

function TopbarTab(topbarProps: topbarPropsType) {
  const { activeId, activeTab, closeTab } = useSelectedTab();
  const isactive = activeId === topbarProps.id;

  return (
    <div
      className={`h-8 py-1 text-xs text-gray-400  items-center  min-w-32 max-w-fit px-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-highlight-green  border-r-[0.5px]
    border-r-text-gray/20 flex justify-between hover:cursor-pointer rounded-tr-md rounded-t-sm ${
      isactive && "bg-secondary-bg"
    }`}
      onClick={() => activeTab(topbarProps.id)}
    >
      <div className=" flex overflow-x-clip mr-2">
        <topbarProps.icons className="text-blue-400 mr-2" />
        <p className={`${isactive ? "text-highlight-green" : ""}`}>
          {topbarProps.title}
        </p>
      </div>
      <div>
        <IoIosClose
          className="text-xl flex text-text-gray hover:bg-text-gray/10 rounded-md  "
          onClick={(e) => {
            e.stopPropagation();
            closeTab(topbarProps.id);
          }}
        />
      </div>
    </div>
  );
}

export default TopbarTab;
