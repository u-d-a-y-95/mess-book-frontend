import axios from "axios";
import toast from "react-hot-toast";

export const signupUser = async (payload, setLoading, cb) => {
  try {
    setLoading(true);
    const result = await axios.post("/auth/signup", payload);
    cb(result.data);
    setLoading(false);
    toast.success("New Account is created");
  } catch (error) {
    setLoading(false);
    toast.error(error.response.data.message);
  }
};
