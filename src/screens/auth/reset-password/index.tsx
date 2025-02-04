import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth-layout";
import { Button, Form, Input, message } from "antd";
import { useResetPasswordMutation } from "../../../services/auth";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL
  const email = location.state?.email;
  console.log(email)
  const [resetPassword, { isLoading, isSuccess, data }] =
    useResetPasswordMutation();

  const onFinish = async (values: {
    password: string;
    password_confirmation: string;

  }) => {

    // if(values.password!==values.password_confirmation){
    //   message.error();
    // }
    const requestData = { ...values, email };
    console.log("requestData", requestData);
    await resetPassword(requestData).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      if (data && data.status == "success") {
        message.success(data.msg);
        navigate("/");
      } else {
        message.error(data.msg);
      }
    }
  }, [isSuccess]);
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3">
        <Form onFinish={onFinish} layout="vertical" className="sm:w-[300px]">
          <Form.Item
            name="password"
            label="New Password"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password_confirmation"
            label="Confirm Password"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Button
            disabled={isLoading}
            loading={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Reset Password
          </Button>
          <div
            className="flex justify-center text-black cursor-pointer mt-2"
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
