import axios from "axios";
import toast from "react-hot-toast";


export const getUsers = async (setter) => {
  try {
    const result = await axios.get("/users");
    setter(result?.data);
  } catch (error) {
    setter([]);
  }
};

export const saveUser = async (payload, cb) => {
  try {
    await axios.post("/users",payload)
    cb();
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }
};
