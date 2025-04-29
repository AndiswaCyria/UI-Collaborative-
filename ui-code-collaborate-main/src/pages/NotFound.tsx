
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white p-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link to="/" className="bg-purple text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
