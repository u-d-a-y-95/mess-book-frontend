import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changeUserRoleByUserId,
  deleteUserById,
  getUsers,
  getUsersById,
  insertUser,
  updateUserById,
} from "../services.js/users";

export const useGetUsers = () => {
  return useQuery(["users"], getUsers);
};
export const useGetUserById = (id) => {
  return useQuery(["users", id], getUsersById, {
    enabled: !!id,
  });
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
export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateUserById,
    onSuccess: (res) => {},
  });
};
export const useInsertUser = () => {
  return useMutation({
    mutationFn: insertUser,
    onSuccess: (res) => {},
  });
};
