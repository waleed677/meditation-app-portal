import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth-layout";
import { Button, Form, Input, message } from "antd";
// import { useForgotPasswordMutation } from "../../../services/auth";
import { useEffect } from "react";
import { useVerifyOtpMutation } from "../../../services/auth";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  console.log("eamil", email);

  const [verifyOtp, { isLoading, isSuccess, isError, data }] =
    useVerifyOtpMutation();

  const onFinish = async (values: { otp: number }) => {
    let send = {
      email: email,
      otp: values.otp,
    };
    await verifyOtp(send).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      if (data && data.status=="success") {
        message.success(data.msg);
        navigate("/reset-password",{ state: { email } });
      } else {
        message.error(data.msg);
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
        <Form onFinish={onFinish} layout="vertical" className="sm:w-[300px]">
          <Form.Item
            name="otp"
            label="Otp"
            rules={[
              { required: true },
              { pattern: /^[0-9]{6}$/, message: "OTP must be 6 digits" },
            ]}
          >
            <Input.OTP />
          </Form.Item>
          <Button
            disabled={isLoading}
            loading={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Verify Otp
          </Button>
          {/* <div
            className="flex justify-center text-black cursor-pointer mt-2"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Back to login
          </div> */}
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Index;
