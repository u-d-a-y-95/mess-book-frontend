import InputField from "../../../../components/inputField";
import SelectField from "../../../../components/select";

const Personal = ({ errors, register, control }) => {
  return (
    <>
      <InputField
        label="name"
        name="name"
        errors={errors}
        register={register}
      />
      <InputField
        label="mobile"
        name="mobile"
        errors={errors}
        register={register}
        type="mobile"
      />
      <InputField
        label="password"
        name="password"
        errors={errors}
        register={register}
        type="password"
      />
      <InputField
        label="confirm password"
        name="confirmPassword"
        errors={errors}
        register={register}
        type="password"
        disabled={false}
      />
    </>
  );
};

export default Personal;
