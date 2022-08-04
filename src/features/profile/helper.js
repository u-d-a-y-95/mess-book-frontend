import axios from "axios";
import toast from "react-hot-toast";

export const getUserById = async (id, setter) => {
  try {
    const result = await axios.get(`/profile/${id}`);
    setter(result.data);
  } catch (error) {
    setter([]);
  }
};

export const updateUserById = async (id, data,setLoading, cb) => {
  try {
    setLoading(true)
    const result = await axios.patch(`/profile/${id}`, data);
    toast.success("Sucessfully updated the data")
    cb(result.data);
    setLoading(false)
  } catch (error) {
    setLoading(false)
  }
};
