import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changeUserRoleByUserId,
  deleteUserById,
  getUsers,
} from "../services.js/users";

export const useGetUsers = () => {
  return useQuery(["users"], getUsers);
};

export const useChangeUserRoleByUserId = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: changeUserRoleByUserId,
    onSuccess: () => {
      client.invalidateQueries("users");
    },
  });
};

export const useDeleteUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: deleteUserById,
    onSuccess: (res) => {
      client.setQueryData(["users"], (old) => {
        return old.filter((user) => user._id !== res.data._id);
      });
    },
  });
};
