import { Form, Input } from "antd";

const TextInput = ({
  placeholder,
  name,
  label,
  required = true,
  readOnly = false,
}: {
  placeholder?: string;
  name?: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: required, message: "Field is required!" }]}
      className="mb-3"
    >
      <Input placeholder={placeholder} disabled={readOnly} />
    </Form.Item>
  );
};

export default TextInput;
