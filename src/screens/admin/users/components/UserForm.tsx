import { Form, Select } from "antd";
import TextInput from "../../../../components/form-inputs/textInput";
import TextArea from "antd/es/input/TextArea";
const UserForm = ({ type }: { type?: string }) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <TextInput
        name="username"
        label="User Name"
        placeholder="Enter your user name"
      />
      <TextInput name="email" label="Email" placeholder="Enter your email" />
      {type !== "edit" && (
        <TextInput
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
      )}
      <Form.Item label="Status" name="status" rules={[{ required: true }]}>
        <Select
          // defaultValue="Active"
          placeholder="Select Status"
          onChange={handleChange}
          options={[
            { value: "active", label: "Active" },
            { value: "block", label: "Block" },
          ]}
        />
      </Form.Item>
      <Form.Item label="Role" name="role" rules={[{ required: true }]}>
        <Select
          // defaultValue="admin"
          placeholder="Select Role"
          onChange={handleChange}
          options={[
            { value: "admin", label: "Admin" },
            { value: "user", label: "User" },
          ]}
        />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea placeholder="Write Some Text...." />
      </Form.Item>
    </>
  );
};

export default UserForm;
