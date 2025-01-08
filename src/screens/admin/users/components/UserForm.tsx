import TextInput from "../../../../components/form-inputs/textInput";
const UserForm = () => {
  return (
    <>
      <TextInput
        name="first_name"
        label="First Name"
        placeholder="Enter your first name"
      />
      <TextInput
        name="last_name"
        label="Last Name"
        placeholder="Enter your last name"
      />
      <TextInput name="email" label="Email" placeholder="Enter your email" />
      <TextInput name="phone" label="Phone" placeholder="Enter your phone" />
    </>
  );
};

export default UserForm;
