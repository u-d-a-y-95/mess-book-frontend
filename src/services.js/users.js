import axios from "axios";

export const getUsers = async () => {
  const result = await axios.get("/users");
  return result.data;
};
export const getUsersById = async ({ queryKey }) => {
  const userId = queryKey[1];
  return axios.get(`/users/${userId}`);
};

export const changeUserRoleByUserId = async ({ userId, payload }) => {
  return axios.patch(`/users/${userId}/changeRole`, payload);
};

export const deleteUserById = async (userId) =>
  axios.delete(`/users/${userId}`);

export const updateUserById = async ({ userId, payload }) =>
  axios.patch(`/users/${userId}`, payload);

export const insertUser = async (payload) => axios.post("/users", payload);
