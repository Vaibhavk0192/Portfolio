import Image from "next/image";
import Profile from "../../../../public/profile.png";
import {
  TbBrandGithubFilled,
  TbLocationCode,
  TbMailFilled,
} from "react-icons/tb";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  FaLinkedinIn,
  FaLocationArrow,
  FaLocationDot,
  FaLocationPin,
  FaLocationPinLock,
} from "react-icons/fa6";

function HomePage() {
  return (
    <div className=" h-full w-full">
      <div className="flex items-center justify-around">
        {/* Left Section - Text */}
        <div className="max-w-xl">
          <div className="pt-18 text-5xl text-white font-bold relative">
            Hi, I'm Vaibhav Kapoor
          </div>
          <div className="pt-4 text-gray-300 leading-relaxed">
            “I’m passionate about building scalable and user-friendly software.
            With experience in full-stack development, quality assurance, and
            AI-driven projects, I enjoy turning ideas into real-world
            applications—whether through responsive web platforms, performance
            optimization, or seamless backend integration.”
          </div>

          <div className="mt-5">
            <div className="flex items-center">
              <FaLocationDot className="text-highlight-green" />
              <p className="ml-2 text-gray-300 leading-relaxed ">
                Gurugram, Haryana, India
              </p>
            </div>
            <div className="flex w-16 mt-1 justify-between text-highlight-green ">
              <a
                href="https://github.com/Vaibhavk0192"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithubFilled />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhavkapoor0192/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a href="mailto:vaibhavkapoor0192@gmail.com">
                <TbMailFilled />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Profile with Stylish Background */}
        <div className="relative w-[350] h-[300] mt-20">
          {/* Stylish Background */}
          <div className="absolute w-[350] h-[300] rounded-full bg-gradient-to-r from-pink-700 via-indigo-500 to-secondary-bg-500 blur-2xl opacity-30 animate-pulse "></div>
          <Image
            src={Profile}
            width={500}
            height={500}
            alt="Profile picture"
            className="relative z-10 rounded-full shadow-xl "
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
