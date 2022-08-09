import axios from "axios";
import toast from "react-hot-toast";

export const loginUser = async (payload,setLoading, cb) => {
  try {
    setLoading(true)
    const result = await axios.post("/auth/login", payload);
    cb(result.data);
    setLoading(false)
  } catch (error) {
    setLoading(false)
    toast.error(error.response.data.message);
  }
};
