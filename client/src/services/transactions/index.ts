import {
  QueryOptions,
  useMutation,
  MutationOptions,
  useQuery,
} from "@tanstack/react-query";

import { handleFetchRequests } from "..";

const PATH = "transactions";

export const useQueryTransactions = (options?: QueryOptions) =>
  useQuery({
    queryKey: ["useQueryTransactions"],
    queryFn: async () => await handleFetchRequests("get", PATH),
    ...options,
  });

export const useMutationCreateTransaction = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (data: any) =>
      await handleFetchRequests("post", PATH, data),
    ...options,
  });

export const useMutationCreateTransference = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (data: any) =>
      await handleFetchRequests("post", "transferences", data),
    ...options,
  });

export const useMutationUpdateTransaction = (options: MutationOptions) =>
  useMutation({
    mutationFn: async ({ id, ...data }: any) =>
      await handleFetchRequests("put", `${PATH}/${id}`, {
        id,
        ...data,
      }),
    ...options,
  });

export const useMutationDeleteTransaction = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (transactionId: any) =>
      await handleFetchRequests("delete", `${PATH}/${transactionId}`),
    ...options,
  });
