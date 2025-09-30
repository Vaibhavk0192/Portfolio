import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactPage() {
 return (
    <div className="py-20 px-12 ">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Let’s Connect
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-xl ">
          Open to professional opportunities, collaborations, or simply
          exchanging ideas. Feel free to reach out anytime.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify gap-10">
        <a
          href="https://github.com/Vaibhavk0192"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <FaGithub className="text-4xl text-gray-400 group-hover:text-white transition-colors" />
          <span className="mt-2 text-sm text-gray-400 group-hover:text-white">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/vaibhavkapoor0192/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <FaLinkedin className="text-4xl text-gray-400 group-hover:text-blue-400 transition-colors" />
          <span className="mt-2 text-sm text-gray-400 group-hover:text-white">
            LinkedIn
          </span>
        </a>

        <a
          href="mailto:vaibhavkapoor0192@gmail.com"
          className="flex flex-col items-center group"
        >
          <MdEmail className="text-4xl text-gray-400 group-hover:text-red-400 transition-colors" />
          <span className="mt-2 text-sm text-gray-400 group-hover:text-white">
            Mail
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
