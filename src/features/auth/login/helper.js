import axios from "axios";
import toast from "react-hot-toast";

export const loginUser = async (payload, cb) => {
  try {
    const result = await axios.post("/auth/login", payload);
    cb(result.data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
