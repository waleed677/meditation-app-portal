import { useNavigate } from "react-router-dom";
import AppleIcon from "../../../assets/vendors/apple-icon";
import GoogleIcon from "../../../assets/vendors/google-icon";
import AuthLayout from "../../../components/auth-layout";
import IconButton from "../../../components/buttons/icon-button";
import { Button, Form, Input } from "antd";
import TextInput from "../../../components/form-inputs/textInput";

const Index = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3">
        {/* <IconButton
          onClick={() => navigate("/")}
          leftIcon={<AppleIcon />}
          text="Sign in with Apple"
          bg="#000"
        />
        <IconButton
          onClick={() => navigate("/")}
          leftIcon={<GoogleIcon />}
          text="Sign in with Google"
        /> */}
        <Form layout="vertical" className="sm:w-[300px]">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Login
          </Button>
          <div
            className="flex justify-center text-black cursor-pointer mt-3"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Back to login
          </div>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Index;
