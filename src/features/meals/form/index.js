import {
  PlusIcon,
  TrashIcon,
  UserAddIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import InputField from "../../../components/inputField";
import SelectField from "../../../components/select";
import { getUsersDDL } from "../helper";

const TableHeader = ({ label }) => {
  return (
    <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
      {label}
    </th>
  );
};
const CreateMealSchidulePipeline = () => {
  const [userDDL, setUserDDL] = useState([]);

  

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

  useEffect(() => {
    getUsersDDL(setUserDDL);
  }, []);
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
        <div className="flex gap-x-3 bg-gray-50 rounded p-5 mt-2">
          <div className="grid grid-cols-2 gap-x-3">
            <SelectField
              label="Member"
              name="gender"
              options={userDDL}
              register={register}
              errors={errors}
            />
            <InputField
              label="Initial balance"
              name="password"
              errors={errors}
              register={register}
              type="number"
            />
          </div>

          <div className="self-end pb-2">
            <Button Icon={PlusIcon} />
          </div>
        </div>
        <div className="mt-2">
          <table className="w-full">
            <thead>
              <tr className="">
                <TableHeader label="SL" />
                <TableHeader label="User Name" />
                <TableHeader label="Initial value" />
                <TableHeader label="Actions" />
              </tr>
            </thead>
            <tbody>
              {[]?.map((item, index) => (
                <tr className="text-center" key={item?._id}>
                  <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                    {index + 1}
                  </td>
                  <td className="border text-sm py-1 px-2 text-gray-600">
                    {item?.name}
                  </td>
                  <td className="border text-sm py-1 px-2 text-gray-600">
                    {item?.email}
                  </td>
                  <td className="border text-sm py-1 px-2 text-gray-600 w-[200px]">
                    <span>
                      <Button Icon={TrashIcon} tooltip="delete" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateMealSchidulePipeline;
