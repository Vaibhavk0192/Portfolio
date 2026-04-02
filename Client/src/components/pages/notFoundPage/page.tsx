import { FaExclamationTriangle } from "react-icons/fa";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-center">
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-2">Page Not Found</p>
        <p className="text-gray-400 mb-8 max-w-md">
          Unable to load the requested page. The server may be down or the data is unavailable.
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

export default NotFoundPage;
