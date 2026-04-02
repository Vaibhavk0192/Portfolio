import { FaExclamationTriangle } from "react-icons/fa";

function ServerErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-center">
        <FaExclamationTriangle className="text-6xl text-highlight-green mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-white mb-4">500</h1>
        <p className="text-2xl text-gray-300 mb-2">Server Error</p>
        <p className="text-gray-400 mb-8 max-w-md">
          Something went wrong on our end. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-highlight-green text-black font-semibold rounded-md hover:bg-opacity-80 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default ServerErrorPage;