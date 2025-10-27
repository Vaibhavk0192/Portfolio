import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaGraduationCap,
  FaFilePdf,
} from "react-icons/fa";

const IconMap: { [string: string]: React.ElementType } = {
  Home: FaHome,
  Skills: FaTools,
  Projects: FaProjectDiagram,
  Experience: FaBriefcase,
  Education: FaGraduationCap,
  Contact: FaEnvelope,
  "resume.pdf": FaFilePdf,
};

export default IconMap;