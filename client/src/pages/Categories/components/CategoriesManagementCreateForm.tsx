import { useForm } from "react-hook-form";

import { useQueryClient } from "@tanstack/react-query";

import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Flex,
  Input,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

import { useMutationCreateCategory } from "../../../services/categories";

export const CategoriesManagementCreateForm = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutationCreateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryCategories"]);
    },
  });

  const onSubmit = async (data: any) => {
    await mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Flex align="center">
          <FormControl mt="20px" isInvalid={!!errors.name} w="80%" mr="30px">
            <FormLabel htmlFor="name">Descrição</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Descrição"
              isDisabled={isLoading}
              {...register("name", {
                required: true,
              })}
            />

            {errors.description && (
              <FormErrorMessage>
                <Text>Descrição</Text>
              </FormErrorMessage>
            )}
          </FormControl>

          <Button
            background="primary"
            color="white"
            mt="50px"
            type="submit"
            w="20%"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Salvar
          </Button>
        </Flex>
      </Box>
    </form>
  );
};
