import {
  QueryOptions,
  useMutation,
  MutationOptions,
  useQuery,
} from "@tanstack/react-query";

import { handleFetchRequests } from "..";

const PATH = "bank-accounts";

export const useQueryAccounts = (options?: QueryOptions) =>
  useQuery({
    queryKey: ["useQueryAccounts"],
    queryFn: async () => await handleFetchRequests("get", PATH),
    ...options,
  });

export const useMutationCreateAccounts = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (data: any) =>
      await handleFetchRequests("post", PATH, data),
    ...options,
  });

export const useMutationUpdateAccount = (options: MutationOptions) =>
  useMutation({
    mutationFn: async ({ id, ...data }: any) =>
      await handleFetchRequests("put", `${PATH}/${id}`, {
        id,
        ...data,
      }),
    ...options,
  });

export const useMutationDeleteAccount = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (accountId: any) =>
      await handleFetchRequests("delete", `${PATH}/${accountId}`),
    ...options,
  });
