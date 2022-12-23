import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import InputField from "../../../components/inputField";
import SelectField from "../../../components/select";
import {
  createValidationSchema,
  initialValue,
  validationSchema,
} from "../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/loader";
import { useEffect } from "react";
import {
  useGetUserById,
  useInsertUser,
  useUpdateUser,
} from "../../../hooks/useUser";

const UsersForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data: userByIdData } = useGetUserById(params?.userId);
  const { mutate: updateUserMutation, isLoading: isUpdateUserMutationLoading } =
    useUpdateUser();
  const { mutate: insertUserMutation, isLoading: isInsertUserMutationLoading } =
    useInsertUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: userByIdData?.data || initialValue,
    resolver: zodResolver(
      params?.userId ? validationSchema : createValidationSchema
    ),
  });

  useEffect(() => {
    if (userByIdData?.data) {
      reset(userByIdData?.data);
    }
  }, [userByIdData?.data]);

  const saveBtnClick = (data) => {
    if (params?.userId) {
      updateUserMutation({
        userId: params?.userId,
        payload: data,
      });
    } else {
      insertUserMutation(data);
    }
  };
  const isLoading = isInsertUserMutationLoading || isUpdateUserMutationLoading;
  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit((data) => saveBtnClick(data))}>
        <div className="flex justify-between my-2">
          <div>
            <h1 className="text-2xl text-gray-500 font-bold tracking-wide">
              {!params?.type
                ? "Create User"
                : params?.type === "view"
                ? "View user"
                : "Edit User"}
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
            {params?.type !== "view" && (
              <Button
                label="save"
                className="ml-2 hover:bg-teal-500 hover:text-white px-4 text-sm active:bg-teal-600"
                type="submit"
              />
            )}
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-3 bg-gray-50 p-5 rounded">
            <InputField
              label="name"
              name="name"
              errors={errors}
              register={register}
              disabled={params?.type === "view"}
            />
            <InputField
              label="display name"
              name="displayName"
              errors={errors}
              register={register}
              disabled={params?.type === "view"}
            />
            <InputField
              label="email"
              name="email"
              errors={errors}
              register={register}
              type="text"
              disabled={params?.type === "view"}
            />
            <InputField
              label="mobile"
              name="mobile"
              errors={errors}
              register={register}
              type="mobile"
              disabled={params?.type === "view"}
            />
            <SelectField
              label="gender"
              name="gender"
              control={control}
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
              disabled={params?.type === "view"}
            />
            {!params?.userId && (
              <>
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
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsersForm;
