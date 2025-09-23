export type Skill = {
  name: string;
  icon: string; // path or URL of the image
};

export type Section = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillSections: Section[] = [
  {
    id: "dev",
    title: "Development",
    skills: [
      {
        name: "Python",
        icon: "https://images2.imgbox.com/73/82/yMYwmEPa_o.png",
      },
      { name: "Java", icon: "https://images2.imgbox.com/87/28/IffzJuQ9_o.png" },
      {
        name: "JavaScript",
        icon: "https://images2.imgbox.com/cf/1f/nW4Bt7z8_o.png",
      },
      {
        name: "Next.js",
        icon: "https://images2.imgbox.com/23/3b/gSbEb6go_o.png",
      },
      {
        name: "React.js",
        icon: "https://images2.imgbox.com/8a/ba/wUqXT4ZM_o.png",
      },
      {
        name: "MongoDB",
        icon: "https://images2.imgbox.com/27/7c/TwRueJur_o.png",
      },
      { name: "Git", icon: "https://images2.imgbox.com/05/7c/WHcKJM3F_o.png" },
      {
        name: "GitHub",
        icon: "https://images2.imgbox.com/2f/82/GYVFF8Mj_o.png",
      },
      {
        name: "Express",
        icon: "https://images2.imgbox.com/c8/50/fUVmg7fd_o.png",
      },
      {
        name: "MySql",
        icon: "https://images2.imgbox.com/d4/25/xFmZkwf1_o.png",
      },
    ],
  },
  {
    id: "qa",
    title: "Testing & QA",
    skills: [
      { name: "Selenium", icon: "https://images2.imgbox.com/63/9a/O1cNkTuC_o.png" },
      { name: "JUnit", icon: "https://images2.imgbox.com/33/a6/Nvph5bw9_o.png" },
      { name: "Cucumber", icon: "https://images2.imgbox.com/c1/50/zDt2FQqn_o.png" },
      { name: "Jmeter", icon: "https://images2.imgbox.com/4f/66/lcaFXxAT_o.png" },
      { name: "Playwright", icon: "https://images2.imgbox.com/01/7f/7Nop1UUT_o.png" },
      {
        name: "Postman",
        icon: "https://images2.imgbox.com/b5/e0/UsXt0PVI_o.png",
      },
    ],
  },
  {
    id: "ai",
    title: "Data & Cloud",
    skills: [
      // { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
      { name: "Numpy", icon: "https://images2.imgbox.com/47/34/NxfXSGX9_o.png" },
      { name: "Pandas", icon: "https://images2.imgbox.com/e3/d0/LAmZF95H_o.png" },
      // { name: "Machine Learning", icon: "/icons/ml.svg" },
      { name: "AWS", icon: "https://images2.imgbox.com/c6/c2/eOAulxrI_o.png" },
      // { name: "Azure", icon: "/icons/azure.svg" },
    ],
  },
  {
    id: "design",
    title: "Design",
    skills: [
      { name: "Figma", icon: "https://images2.imgbox.com/8f/8a/D8zjVdII_o.png" },
      { name: "Adobe Illustrator", icon: "https://images2.imgbox.com/d0/99/zO7SOheE_o.png" },
      { name: "Premiere Pro", icon: "https://images2.imgbox.com/97/57/3Oq86oPB_o.png" },
    ],
  },
];
