"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type TProps = { error: Error & { digest?: string }; reset: () => void };

const NotFound = ({ error, reset }: TProps) => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.back();
  };

  return (
    <html>
      <body className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Not Found</h2>
          <p className="mb-2">Could not find requested resource</p>
          {error && (
            <>
              <p className="text-red-500 mb-2">Error: {error.message}</p>
              {error.digest && (
                <p className="text-gray-500 mb-4">Details: {error.digest}</p>
              )}
            </>
          )}
          <div className="flex space-x-4 justify-center">
            <button
              onClick={reset}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try again
            </button>
            <button
              onClick={handleReturnHome}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Back
            </button>
            <Link href="/" legacyBehavior>
              <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Return Home
              </a>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
