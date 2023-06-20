import { useMutation, MutationOptions } from "@tanstack/react-query";

import { handleFetchRequests } from "..";

export const useMutationAuth = (options: MutationOptions) =>
  useMutation({
    mutationFn: async () => await handleFetchRequests("post", "login", {}),
    ...options,
  });
