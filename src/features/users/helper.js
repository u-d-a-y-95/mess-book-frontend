import axios from "axios";
import toast from "react-hot-toast";

export const getUsers = async (setter, setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get("/users");
    setter(result?.data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
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
    toast.success("Successfully Save the user");
  } catch (error) {
    setLoading(false);
    toast.error(error.response.data.message);
  }
};
export const updateUserById = async (userId, payload, setLoading, cb) => {
  try {
    setLoading(true);
    const result = await axios.patch(`/users/${userId}`, payload);
    cb(result.data);
    setLoading(false);
    toast.success("Successfully Update the user");
  } catch (error) {
    setLoading(false);
    toast.error(error.response.data.message);
  }
};
export const changeUserRoleByUserId = async (
  userId,
  payload,
  setLoading,
  cb
) => {
  try {
    setLoading(true);
    const result = await axios.patch(`/users/${userId}/changeRole`, payload);
    cb(result.data);
    setLoading(false);
    toast.success("Successfully Update the user");
  } catch (error) {
    setLoading(false);
    toast.error(error.response.data.message);
  }
};

export const deleteUser = async (userId, setLoading, cb) => {
  try {
    setLoading(true);
    await axios.delete(`/users/${userId}`);
    toast.success("Successfully deleted the user");
    cb();
    setLoading(false);
  } catch (error) {
    setLoading(false);
    toast.error(error.response.data.message);
  }
};
