import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../components/inputField";
import SelectField from "../../../components/select";

const CreateMealSchidulePipeline = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
    // resolver: zodResolver(validationSchema),
  });
  const getTotalMeal = (index, data) => {
    return data?.reduce((acc, item) => acc + +item?.meals[index], 0);
  };

  const getTotal = (key, data) => {
    return data?.reduce((acc, item) => acc + +item?.[key], 0);
  };
  return (
    <div className="w-96">
      <div className="flex justify-between items-center border-b-2 pb-2 border-teal-500">
        <h1 className="text-teal-500 font-bold">Create Meal Pipeline</h1>
        <button className="bg-rose-200 rounded-full p-1">
          <XIcon className="w-4 text-rose-500 " />
        </button>
      </div>
      <div className="">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-3 bg-gray-100 rounded p-5">
          <InputField
            label="Start Date"
            name="name"
            errors={errors}
            register={register}
            type="date"
          />
          <InputField
            label="End Date"
            name="email"
            errors={errors}
            register={register}
            type="date"
          />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-x-3 bg-gray-50 rounded p-5 mt-2">
          <SelectField
            label="Member"
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
          <div className="w-32">
            <InputField
              label="Initial balance"
              name="password"
              errors={errors}
              register={register}
              type="number"
            />
          </div>

          <button className="w-fit">add</button>
        </div>
      </div>
    </div>
  );
};

export default CreateMealSchidulePipeline;
