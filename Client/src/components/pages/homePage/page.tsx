import { useEffect, useState } from "react";
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
import { HomeInterface } from "@/lib/types/home";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFoundPage from "../notFoundPage/page";
import ServerErrorPage from "../serverErrorPage/page";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function getHome() {
  const res = await fetch("http://localhost:5000/api/home", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

function HomePage() {
  const [data, setData] = useState<HomeInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const homeData = await getHome();
      setData(homeData);
    } catch (error: unknown) {
      console.error("Failed to fetch home data:", error);
      const message = error instanceof Error ? error.message : String(error);
      const statusCode = parseInt(message);
      if (statusCode === 404) {
        setError({ type: 'not-found', statusCode: 404 });
      } else if (statusCode >= 500) {
        setError({ type: 'server-error', statusCode });
      } else {
        setError({ type: 'server-error', statusCode: 500 });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return error.type === 'not-found' ? <NotFoundPage /> : <ServerErrorPage />;
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-around flex-1">
        {loading ? (
          <>
            {/* Left Section Loading */}
            <div className="max-w-2xl flex flex-col justify-center">
              <SkeletonTheme baseColor="#1a1d28" highlightColor="#25293648" duration={2} borderRadius={10} enableAnimation={true}>
                <Skeleton height={60} className="mb-4" />
                <Skeleton height={40} className="mb-4" />
                <Skeleton height={40} className="mb-4" />
                <Skeleton height={80} className="mb-4" />
                <Skeleton height={40} />
              </SkeletonTheme>
            </div>

            {/* Right Section Skeleton */}
            <div className="relative w-[150] h-[300] mt-20">
              <SkeletonTheme baseColor="#1a1d28" highlightColor="#25293648" duration={2} borderRadius={10} enableAnimation={true}>
                <Skeleton height={300} width={300} circle={true} />
              </SkeletonTheme>
            </div>
          </>
        ) : (
          <>
            {/* Left Section - Text */}
        <div className="max-w-xl">
          <div className="pt-18 text-5xl text-white font-bold relative">
            Hi, I&apos;m Vaibhav Kapoor
          </div>
          <div className="pt-4 text-gray-300 leading-relaxed">
            &ldquo;I&apos;m passionate about building scalable and user-friendly software.
            With experience in full-stack development, quality assurance, and
            AI-driven projects, I&apos;ll enjoy turning ideas into real-world
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
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
