import { Form, Input } from "antd";

const TextInput = ({
  placeholder,
  name,
  label,
  required = true,
}: {
  placeholder?: string;
  name?: string;
  label?: string;
  required?: boolean;
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: required, message: "Field is required!" }]}
      className="mb-3"
    >
      <Input placeholder={placeholder} />
    </Form.Item>
  );
};

export default TextInput;
