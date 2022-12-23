import axios from "axios";

export const getUsers = async () => {
  const result = await axios.get("/users");
  return result.data;
};

export const changeUserRoleByUserId = async ({ userId, payload }) => {
  return axios.patch(`/users/${userId}/changeRole`, payload);
};

export const deleteUserById = async (userId) =>
  axios.delete(`/users/${userId}`);
