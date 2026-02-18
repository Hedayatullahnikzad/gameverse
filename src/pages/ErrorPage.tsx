import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-6">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {isRouteErrorResponse(error)
            ? error.status === 404
              ? "This page does not exist."
              : "An unexpected route error occurred."
            : "An unexpected error occurred."}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
