import InputField from "../../../../components/inputField";

const WorkSpace = ({ errors, register }) => {
  return (
    <>
      <InputField
        label="Name"
        name="workSpaceName"
        errors={errors}
        register={register}
      />
      <InputField
        label="Email"
        name="workSpaceEmail"
        errors={errors}
        register={register}
        type="email"
      />
    </>
  );
};

export default WorkSpace
