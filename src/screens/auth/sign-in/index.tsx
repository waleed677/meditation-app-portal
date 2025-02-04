import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth-layout";
import { Button, Form, Input, message } from "antd";
import { useLoginMutation } from "../../../services/auth";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, isError, data }] = useLoginMutation();

  const onFinish = async (values: {
    email: string;
    password: string;
    action?: string;
  }) => {
    values["action"] = "login"; // Add extra field
    await login(values).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("userInfo", JSON.stringify(data.user));
          message.success(data.message);
          navigate("/");
        } else {
          message.error(data.error);
        }
      } else {
        message.error(data.error);
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error("Something went wrong");
    }
  }, [isError]);
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
        <Form onFinish={onFinish} layout="vertical" className="sm:w-[300px]">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <div
            className="flex justify-end text-[#2762A6] cursor-pointer"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Password?
          </div>
          <Button
            disabled={isLoading}
            loading={isLoading}
            className="w-full mt-2"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
          <div
            className="flex justify-center text-black cursor-pointer mt-2"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Are you a new user? Sign up
          </div>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Index;
