import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "../components/layout";

const Protected = () => {
  const isAuthorized =
    localStorage.getItem("authToken")?.length > 0 ? true : false;
  return isAuthorized ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default Protected;
