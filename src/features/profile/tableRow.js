import { PencilAltIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import InputField from "../../components/inputField";
import { useDispatch } from "../../state/stateHooks";
import { SET_PROFILE } from "../../state/type";
import { updateUserById } from "./helper";

const TableRow = ({
  label,
  value,
  changeEditState,
  editedKey,
  labelkey,
  changeData,
  setLoading,
  setData,
  data,
}) => {
  const params = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      [labelkey]: value,
    },
    // resolver: zodResolver(
    //   params?.userId ? validationSchema : createValidationSchema
    // ),
  });
  useEffect(() => {
    reset({
      [labelkey]: data[labelkey],
    });
  }, [data, reset, labelkey]);
  const saveBtnClick = (data) => {
    updateUserById(params?.id, data, setLoading, (newData) => {
      reset(newData);
      setData(newData);
      dispatch({
        type: SET_PROFILE,
        data: newData,
      });
      changeEditState("");
    });
  };
  return (
    <>
      <tr className="" key="0">
        <td
          className={`border-b font-bold text-sm py-2 px-2 text-gray-600 ${
            editedKey === labelkey ? "bg-gray-100" : ""
          } `}
        >
          {label}
        </td>

        <td
          className={`border-b text-sm py-1 px-2 text-gray-600 ${
            editedKey === labelkey ? "bg-gray-100" : ""
          }`}
        >
          {editedKey === labelkey && (
            <div className="flex flex-col bg-gray-100 p-5 rounded">
              <form onSubmit={handleSubmit((data) => saveBtnClick(data))}>
                <InputField
                  label={label}
                  name={labelkey}
                  errors={errors}
                  register={register}
                />
                <div className="flex justify-end mt-2">
                  <Button label="save" className="mr-2" />
                  <Button
                    label="cancel"
                    onClick={(e) => {
                      changeEditState("");
                    }}
                  />
                </div>
              </form>
            </div>
          )}
          {editedKey !== labelkey && value}
        </td>
        {
          <td
            className={`border-b text-right text-sm py-1  text-gray-600 ${
              editedKey === labelkey ? "bg-gray-100" : ""
            }`}
          >
            <span>
              {editedKey !== labelkey && (
                <Button
                  Icon={PencilAltIcon}
                  tooltip="edit"
                  className="text-sm"
                  onClick={(e) => {
                    changeEditState(labelkey);
                  }}
                />
              )}
            </span>
          </td>
        }
      </tr>
    </>
  );
};

export default TableRow;
