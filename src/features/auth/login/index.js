import { useForm } from "react-hook-form";
import InputField from "../../../components/inputField";
import { initialValue, validationSchema } from "./helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalStorage } from "../../../utils/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [token,setToken] = useLocalStorage('auth-token')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(validationSchema),
  });

  const formSubmitted = (data) => {
    setToken('random')
    navigate("/")
  };

  return (
    <div className="flex h-screen">
      {/* hero banar */}
      <div className="w-2/5">
        <div className="bg-sky-400 h-full"></div>
      </div>

      {/* login content */}
      <div className="w-3/5 flex justify-center items-center login ">
        <div className="shadow-lg w-2/4 p-16 bg-white rounded-lg ">
          <div className="text-center">
            <h1 className="text-2xl underline underline-offset-4 decoration-wavy text-sky-500 tracking-[.5rem]">
              Login
            </h1>
          </div>
          <div className="my-4">
            <form onSubmit={handleSubmit(formSubmitted)}>
              <InputField
                label="user name"
                name="username"
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
                  className="text-white bg-sky-500 px-8 py-2 rounded active:bg-sky-600"
                >
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
