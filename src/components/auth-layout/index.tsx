import { ReactNode } from "react";
import UserTagIcon from "../../assets/vendors/user-tag-icon";
import Typography from "../Typography/typography";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#FFF9F0] h-screen w-screen flex items-center justify-center">
      <div className="bg-white md:w-96 drop-shadow-2xl border border-zinc-300 rounded-xl flex flex-col items-center gap-1 p-10 w-full md:mx-0 mx-2">
        <UserTagIcon />
        <Typography type="title3">Hi there,</Typography>
        <Typography type="title3">I am happy you are here!</Typography>
        <Typography type="paragraph1" className="text-center m-5">
          You can sync your favorites, downloads. Start now by signing in.
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
