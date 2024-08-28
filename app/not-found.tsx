import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        We couldn't find the page you're looking for.
      </p>
      <Link href="/" className="mt-6">
        <span className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Go back home
        </span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
