import {
  QueryOptions,
  useMutation,
  MutationOptions,
  useQuery,
} from "@tanstack/react-query";

import { handleFetchRequests } from "..";

const PATH = "categories";

export const useQueryCategories = (options?: QueryOptions) =>
  useQuery({
    queryKey: ["useQueryCategories"],
    queryFn: async () => await handleFetchRequests("get", PATH),
    ...options,
  });

export const useMutationCreateCategory = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (data: any) =>
      await handleFetchRequests("post", PATH, data),
    ...options,
  });

export const useMutationUpdateCategory = (options: MutationOptions) =>
  useMutation({
    mutationFn: async ({ id, ...data }: any) =>
      await handleFetchRequests("put", `${PATH}/${id}`, {
        id,
        ...data,
      }),
    ...options,
  });

export const useMutationDeleteCategory = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (categoryId: any) =>
      await handleFetchRequests("delete", `${PATH}/${categoryId}`),
    ...options,
  });
