"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactInterface } from "@/lib/types/contact";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFoundPage from "../notFoundPage/page";
import ServerErrorPage from "../serverErrorPage/page";

async function getContact() {
  const res = await fetch("http://localhost:5000/api/contact", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

function ContactPage() {
  const [data, setData] = useState<ContactInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const contact = await getContact();
      setData(contact);
    } catch (error: any) {
      console.error("Failed to fetch contact:", error);
      const statusCode = parseInt(error.message);
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
    <div className="py-20 px-12">
      {/* Heading */}
      <div className="mb-10">
        {loading ? (
          <SkeletonTheme baseColor="#1a1d28" highlightColor="#25293648" duration={2} borderRadius={10} enableAnimation={true}>
            <Skeleton height={50} className="mb-4" />
            <Skeleton height={60} />
          </SkeletonTheme>
        ) : (
          <>
            <p className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {data?.heading}
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              {data?.description}
            </p>
          </>
        )}
      </div>

      {/* Social Links */}
      <div className="flex justify gap-10">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <SkeletonTheme key={i} baseColor="#1a1d28" highlightColor="#25293648" duration={2} borderRadius={10} enableAnimation={true}>
              <Skeleton width={100} height={80} className="mr-10" />
            </SkeletonTheme>
          ))
        ) : (
          data?.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              {link.icon === "FaGithub" && (
                <FaGithub className="text-4xl text-gray-400 group-hover:text-white transition-colors" />
              )}
              {link.icon === "FaLinkedin" && (
                <FaLinkedin className="text-4xl text-gray-400 group-hover:text-blue-400 transition-colors" />
              )}
              {link.icon === "MdEmail" && (
                <MdEmail className="text-4xl text-gray-400 group-hover:text-red-400 transition-colors" />
              )}
              <span className="mt-2 text-sm text-gray-400 group-hover:text-white">
                {link.name}
              </span>
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export default ContactPage;
