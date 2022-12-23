import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services.js/users";

export const useGetUsers = () => {
  return useQuery(["users"], getUsers);
};
