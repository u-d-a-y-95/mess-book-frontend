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
export const getUsersById = async (userId, setter) => {
  try {
    const result = await axios.get(`/users/${userId}`);
    setter(result?.data);
  } catch (error) {
    setter([]);
  }
};

export const saveUser = async (payload, setLoading, cb) => {
  try {
    setLoading(true);
    await axios.post("/users", payload);
    cb();
    setLoading(false);
    toast.success("Successfully deleted the user");
  } catch (error) {
    setLoading(false);
    toast.error(error.response.data.message);
  }
};

export const deleteUser = async (userId, cb) => {
  try {
    await axios.delete(`/users/${userId}`);
    toast.success("Successfully deleted the user");
    cb();
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
