export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg text-white">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-400 mb-8">Page not found</p>
      <a
        href="/"
        className="px-4 py-2 bg-highlight-green text-black rounded hover:bg-green-400 transition-colors"
      >
        Go Home
      </a>
    </div>
  );
}