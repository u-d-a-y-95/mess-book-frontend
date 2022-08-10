import { useForm } from "react-hook-form";
import { initialValue, validationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink } from "react-router-dom";
import { signupUser } from "./helper";
import circle from "../../../assets/circle.svg";
import { useState } from "react";
import WorkSpace from "./components/workspace";
import Personal from "./components/personal";
const Signup = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(validationSchema),
  });

  const formSubmitted = (data) => {
    signupUser(data, setLoading, (res) => {
      reset();
    });
  };

  const tabs = [
    {
      id: 1,
      value: 0,
      label: "Work Space",
    },
    {
      id: 2,
      value: 1,
      label: "Personal",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* hero banar */}
      <div className="lg:w-2/6  lg:block hidden">
        <div className="bg-sky-800 h-full"></div>
      </div>

      {/* login content */}
      <div className="w-full lg:w-4/6 flex justify-center items-center login  ">
        <div className="shadow-lg w-full mx-10 lg:mx-0 lg:w-2/4 p-16 bg-white rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl underline underline-offset-4 decoration-wavy text-sky-500 tracking-[.5rem]">
              SIGN UP
            </h1>
          </div>
          <div className="my-4">
            <form onSubmit={handleSubmit(formSubmitted)}>
              <ul className="text-sm flex border-b my-8 text-gray-400">
                {tabs?.map((item) => (
                  <li
                    key={item?.id}
                    className={`px-4 py-2 ${
                      tabIndex === item?.value
                        ? "bg-gray-100 shadow-lg border-b-sky-500 border-b-2 text-sky-400 font-bold"
                        : ""
                    }`}
                    onClick={() => {
                      setTabIndex(item?.value);
                    }}
                  >
                    {item?.label}
                  </li>
                ))}
              </ul>
              <div className="h-[280px]">
                {tabIndex === 0 && (
                  <WorkSpace errors={errors} register={register} />
                )}
                {tabIndex === 1 && (
                  <Personal
                    errors={errors}
                    register={register}
                    control={control}
                  />
                )}
              </div>
              <div className={`mt-8 ${tabIndex === 0 ? "invisible" : ""}`}>
                <button
                  type="submit"
                  className="text-white bg-sky-500 px-4 py-2 rounded active:bg-sky-600 flex"
                >
                  {loading && <img src={circle} alt="spinner" />}
                  sign up
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12">
            <span className="text-gray-400 text-sm">
              Already have an account ?
            </span>
            <NavLink to="/login">
              <span className=" ml-2 text-sky-400 font-bold text-sm">
                Login
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
