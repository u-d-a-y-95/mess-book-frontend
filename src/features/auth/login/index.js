import { useForm } from "react-hook-form";
import InputField from "../../../components/inputField";
import { initialValue, validationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./helper";
import { useDispatch } from "../../../state/stateHooks";
import { SET_IS_AUTH, SET_PROFILE, SET_TOKEN } from "../../../state/type";
import circle from "../../../assets/circle.svg";
import { useState } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(validationSchema),
  });

  const formSubmitted = (data) => {
    loginUser(data, setLoading, (res) => {
      const { token, ...rest } = res;
      dispatch({
        type: SET_PROFILE,
        data: rest,
      });
      dispatch({
        type: SET_TOKEN,
        data: token,
      });
      dispatch({
        type: SET_IS_AUTH,
        data: true,
      });
      navigate("/");
    });
  };

  return (
    <div className="flex h-screen">
      {/* hero banar */}
      <div className="lg:w-2/5  lg:block hidden">
        <div className="bg-sky-400 h-full"></div>
      </div>

      {/* login content */}
      <div className="w-full lg:w-3/5 flex justify-center items-center login ">
        <div className="shadow-lg w-full mx-10 lg:mx-0 lg:w-2/4 p-16 bg-white rounded-lg ">
          <div className="text-center">
            <h1 className="text-2xl underline underline-offset-4 decoration-wavy text-sky-500 tracking-[.5rem]">
              Login
            </h1>
          </div>
          <div className="my-4">
            <form onSubmit={handleSubmit(formSubmitted)}>
              <InputField
                label="mobile"
                name="mobile"
                errors={errors}
                register={register}
              />
              <InputField
                label="password"
                name="password"
                errors={errors}
                register={register}
                type="password"
              />
              <div className="mt-4">
                <button
                  type="submit"
                  className="text-white bg-sky-500 px-4 py-2 rounded active:bg-sky-600 flex"
                >
                  {loading && <img src={circle} alt="spinner" />}
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
