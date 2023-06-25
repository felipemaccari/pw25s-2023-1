import { useMutation, MutationOptions } from "@tanstack/react-query";

import { handleFetchRequests } from "..";

export const useMutationAuth = (options: MutationOptions) =>
  useMutation({
    mutationFn: async (data: any) =>
      await handleFetchRequests("post", "login", data),
    ...options,
  });
