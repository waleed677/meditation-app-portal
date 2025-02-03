import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth-layout";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
// import { useForgotPasswordMutation } from "../../../services/auth";
// import { useEffect } from "react";

const Index = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // const [forgotPassword, { isLoading, isSuccess, isError, data }] = useForgotPasswordMutation();

  const onFinish = async (values: { email: string }) => {
    console.log("values", values);
    // await forgotPassword(values).unwrap();
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     if (data) {
  //       message.success(data.msg);
  //       // let email= form.getFieldValue("email")
  //       navigate("/otp-verification");
  //     } else {
  //       message.error("Token not found in response");
  //     }
  //   }
  // }, [isSuccess]);
  // useEffect(() => {
  //   if (isSuccess) {
  //     if (data) {
  //       message.success(data.msg);
  //       navigate("/");
  //     } else {
  //       message.error("Token not found in response");
  //     }
  //   }
  // }, [isSuccess]);

  // useEffect(() => {
  //   if (isError) {
  //     message.error("Something went wrong");
  //   }
  // }, [isError]);
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3">
        <Form form={form} onFinish={onFinish} layout="vertical" className="sm:w-[300px]">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button
            // disabled={isLoading}
            // loading={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Forgot Password
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
