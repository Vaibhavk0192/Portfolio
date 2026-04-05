'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-bg text-white">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <p className="text-gray-400 mb-4">
            {error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-highlight-green text-black rounded hover:bg-green-400 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}