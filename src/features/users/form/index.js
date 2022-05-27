import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import InputField from "../../../components/inputField";
import SelectField from "../../../components/select";
import { initialValue, validationSchema } from "../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../helper";

const UsersForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(validationSchema),
  });

  const saveBtnClick = data =>{
    saveUser(data,()=>{
      // reset()
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit((data) => saveBtnClick(data))}>
        <div className="flex justify-between my-2">
          <div>
            <h1 className="text-2xl text-gray-500 font-bold tracking-wide">
              Create User
            </h1>
          </div>
          <div className="flex">
            <Button
              label="back"
              className="px-4 text-sm"
              type="button"
              onClick={(e) => {
                navigate("../");
              }}
            />
            <Button
              label="save"
              className="ml-2 hover:bg-teal-500 hover:text-white px-4 text-sm active:bg-teal-600"
              type="submit"
            />
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-3 bg-gray-50 p-5 rounded">
            <InputField
              label="name"
              name="name"
              errors={errors}
              register={register}
            />
            <InputField
              label="email"
              name="email"
              errors={errors}
              register={register}
              type="text"
            />
            <InputField
              label="mobile"
              name="mobile"
              errors={errors}
              register={register}
              type="mobile"
            />
            <SelectField
              label="gender"
              name="gender"
              options={[
                {
                  value: 1,
                  label: "Male",
                },
                {
                  value: 2,
                  label: "Female",
                },
              ]}
              register={register}
              errors={errors}
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
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsersForm;
