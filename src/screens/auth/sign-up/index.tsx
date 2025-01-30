import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth-layout";
import { Button, Form, Input, message } from "antd";
import { useSignupMutation } from "../../../services/auth";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [signup, { isLoading, isSuccess, isError, data }] = useSignupMutation();

  const handleSignUp = async (values: any) => {
    await signup(values).unwrap();
  };  
  

  useEffect(() => {
    if (isSuccess) {
      console.log("success response", data)
      if (data && data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        message.success(data.message);
        navigate("/");
      } else {
        message.error("Token not found in response");
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError && data) {
      message.error(data.error?.message || 'Something went wrong. Please try again.');
    }
  }, [isError, data]);
  
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
        <Form
          layout="vertical"
          form={form}
          className="sm:w-[300px]"
          onFinish={handleSignUp}
        >
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
            // rules={[{ required: true }]}
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            loading={isLoading}
            disabled={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Sign Up
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
