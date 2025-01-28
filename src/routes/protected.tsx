import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "../components/layout";

const Protected = () => {
  const isAuthorized = Boolean(localStorage.getItem("authToken"));

  return isAuthorized ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default Protected;
