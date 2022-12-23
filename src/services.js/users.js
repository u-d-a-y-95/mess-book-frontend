import axios from "axios";

export const getUsers = async () => {
  const result = await axios.get("/users");
  return result.data;
};
