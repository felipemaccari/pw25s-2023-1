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

import { useMutationUpdateCategory } from "../../../services/categories";
import { Category } from "../types";

export const CategoriesManagementListActionsEditForm: React.FC<Category> = ({
  category,
}) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: category.name,
    },
  });

  const { mutate, isLoading } = useMutationUpdateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryCategories"]);
    },
  });

  const onSubmit = async (data: any) => {
    const formData = { id: category.id, ...data };

    await mutate(formData);
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

            {errors.name && (
              <FormErrorMessage>
                <Text>A descrição é obrigatória</Text>
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
