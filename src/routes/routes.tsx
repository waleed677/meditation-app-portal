import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Protected from "./protected";
import Signin from "../screens/auth/sign-in";
import Signup from "../screens/auth/sign-up";
import Dashboard from "../screens/admin/dashboard";
import User from "../screens/admin/users";
import VisualPractice from "../screens/admin/visualPractice";
import AudioPractice from "../screens/admin/audioPractice";
import Practices from "../screens/admin/practices";
import Resources from "../screens/admin/resources";
import ResourcesArticles from "../screens/admin/resources-article";
import ResourcesAddArticles from "../screens/admin/resources-article/components/add-article";
import ResourcesEditArticles from "../screens/admin/resources-article/components/edit-article";
import Moments from "../screens/admin/moments";
import Setting from "../screens/admin/setting";
import PageNotFound from "../screens/PageNotFound";
import ForgotPassword from "../screens/auth/forgot-password";
import ResetPassword from "../screens/auth/reset-password";
import Otp from "../screens/auth/otp-screen"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Protected />}>
        <Route index element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/visual-practice" element={<VisualPractice />} />
        <Route path="/audio-practice" element={<AudioPractice />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources-articles" element={<ResourcesArticles />} />
        <Route
          path="/resources-add-articles"
          element={<ResourcesAddArticles />}
        />
        <Route
          path="/resources-edit-articles"
          element={<ResourcesEditArticles />}
        />
        <Route path="/moments" element={<Moments />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/otp-verification" element={<Otp />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
