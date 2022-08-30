import { PlusIcon, TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../../../components/button";
import InputField from "../../../components/inputField";
import SelectField from "../../../components/select";
import {
  getUsersDDL,
  getUsersFromPipelineById,
  updatePipelineById,
} from "../helper";
import { editViewValidationSchema, initialValue } from "../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "../../../components/loader";
import moment from "moment";

const TableHeader = ({ label }) => {
  return (
    <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
      {label}
    </th>
  );
};
const EditViewMealSchidulePipeline = ({ setModal, setPipelineData, modal }) => {
  const [pipeLineUser, setPipeLineUser] = useState([]);
  const [userDDL, setUserDDL] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    control,
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(editViewValidationSchema),
  });

  useEffect(() => {
    getUsersDDL(setUserDDL);
  }, []);

  useEffect(() => {
    if (modal.item?.id) {
      getUsersFromPipelineById(modal.item.id, (data) => {
        reset({
          startDate: moment(data.startDate).format("YYYY-MM-DD"),
          endDate: moment(data.endDate).format("YYYY-MM-DD"),
          member: "",
          initialBalance: 0,
        });
        setPipeLineUser(
          data.users.map((item) => ({
            ...item,
            user: { ...item.user, label: item.user.name, value: item.user._id },
          }))
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal?.item]);

  const addUserToPipeLine = (values) => {
    if (pipeLineUser.find((item) => item.user.value === values.member.value))
      return toast.error("Already added");
    pipeLineUser.push({
      user: values.member,
      initialBalance: +values?.initialBalance,
    });
    setPipeLineUser([...pipeLineUser]);
    reset({
      member: "",
      initialBalance: 0,
    });
  };

  const deleteUserFromPipeLine = (index) => {
    pipeLineUser.splice(index, 1);
    setPipeLineUser([...pipeLineUser]);
  };

  const saveBtnClick = (values) => {
    if (pipeLineUser.length < 1)
      return toast.error("At least one member needed");
    const payload = {
      users: pipeLineUser,
    };
    updatePipelineById(modal.item.id, payload, setLoading, (data) => {
      setPipelineData();
      setModal({
        isOpen: false,
        data: null,
      });
    });
  };

  return (
    <div className="w-96">
      {loading && <Loader />}
      <form onSubmit={handleSubmit((data) => addUserToPipeLine(data))}>
        <div className="flex justify-between items-center border-b-2 pb-2 border-teal-500">
          <h1 className="text-teal-500 font-bold">
            {modal?.type === "edit" ? "Edit" : "View"} Meal Pipeline
          </h1>

          <div className="flex gap-1">
            <Button
              type="button"
              label="Save"
              className={`text-sm ${modal?.type === "edit" ? "" : "invisible"}`}
              onClick={(e) => {
                saveBtnClick(getValues());
              }}
            />
            <Button
              type="button"
              label="Close"
              className="hover:bg-gray-500 hover:text-white px-4 text-sm active:bg-gray-600"
              onClick={(e) => {
                setModal({
                  isOpen: false,
                  data: null,
                });
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-3 border bg-gray-50 rounded p-5">
            <InputField
              label="Start Date"
              name="startDate"
              errors={errors}
              register={register}
              type="date"
              disabled
            />
            <InputField
              label="End Date"
              name="endDate"
              errors={errors}
              register={register}
              type="date"
              disabled
            />
          </div>
          {modal.type === "edit" && (
            <div className="flex gap-x-3 bg-gray-50 rounded p-5 mt-2">
              <div className="grid grid-cols-2 gap-x-3">
                <SelectField
                  label="member"
                  name="member"
                  options={userDDL}
                  register={register}
                  errors={errors}
                  control={control}
                />
                <InputField
                  label="Initial balance"
                  name="initialBalance"
                  errors={errors}
                  register={register}
                  type="number"
                />
              </div>

              <div className="self-end pb-2">
                <Button type="submit" Icon={PlusIcon} />
              </div>
            </div>
          )}

          <div className="mt-2">
            <table className="w-full">
              <thead>
                <tr className="">
                  <TableHeader label="SL" />
                  <TableHeader label="User Name" />
                  <TableHeader label="Initial value" />
                  {modal?.type === "edit" && <TableHeader label="Actions" />}
                </tr>
              </thead>
              <tbody>
                {pipeLineUser?.map((item, index) => (
                  <tr className="text-center" key={item?.user?.value}>
                    <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                      {index + 1}
                    </td>
                    <td className="border text-sm py-1 px-2 text-gray-600">
                      {item?.user.label}
                    </td>
                    <td className="border text-sm py-1 px-2 text-gray-600">
                      {item?.initialBalance}
                    </td>
                    {modal?.type === "edit" && (
                      <td className="border text-sm py-1 px-2 text-gray-600 w-[50px]">
                        {!item?._id && (
                          <span>
                            <Button
                              Icon={TrashIcon}
                              tooltip="delete"
                              className="p-1"
                              onClick={(e) => {
                                deleteUserFromPipeLine(index);
                              }}
                            />
                          </span>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditViewMealSchidulePipeline;
