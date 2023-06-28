import {
  useMutation,
  MutationOptions,
  QueryOptions,
  useQuery,
} from "@tanstack/react-query";

import { handleFetchRequests } from "..";

export const useMutationAuth = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (data: any) =>
      await handleFetchRequests("post", "login", data),
    ...options,
  });

export const useMutationRegister = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (data: any) =>
      await handleFetchRequests("post", "users", data),
    ...options,
  });

export const useQueryUserInformation = (id: number, options?: any) =>
  useQuery({
    queryKey: ["useQueryUserInformation"],
    queryFn: async () => await handleFetchRequests("get", `users/${id}`),
    enabled: false,
    ...options,
  });
