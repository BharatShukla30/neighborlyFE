import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useSelector(state => state.auth);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center ">
        <Loader />
      </div>
    );
  }

  if (loading && !isAuthenticated) {
    return <Loader />;
  }

  if (!loading) {
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    } else return <Outlet />;
  }

};

export default ProtectedRoute;
