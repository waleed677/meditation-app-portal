import { useNavigate } from "react-router-dom";
import AppleIcon from "../../../assets/vendors/apple-icon";
import GoogleIcon from "../../../assets/vendors/google-icon";
import AuthLayout from "../../../components/auth-layout";
import IconButton from "../../../components/buttons/icon-button";

const Index = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3">
        <IconButton
          onClick={() => navigate("/")}
          leftIcon={<AppleIcon />}
          text="Sign in with Apple"
          bg="#000"
        />
        <IconButton
          onClick={() => navigate("/")}
          leftIcon={<GoogleIcon />}
          text="Sign in with Google"
        />
      </div>
    </AuthLayout>
  );
};

export default Index;
