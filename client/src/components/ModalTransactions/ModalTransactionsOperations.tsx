import { Controller, useForm } from "react-hook-form";

import {
  Button,
  Text,
  RadioGroup,
  Stack,
  Radio,
  FormControl,
  FormLabel,
  Flex,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

import { TRANSACTION_TYPES } from "./constants";
import { FieldCategory } from "../FieldCategory";

export const ModalTransactionsOperations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" mt="20px">
        <FormControl>
          <FormLabel htmlFor="transactionType">Tipo de Transação</FormLabel>

          <Controller
            name="transactionType"
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <RadioGroup
                onChange={onChange}
                value={value}
                defaultValue={TRANSACTION_TYPES.revenue}
              >
                <Stack direction="row">
                  <Radio value={TRANSACTION_TYPES.revenue}>Receita</Radio>
                  <Radio value={TRANSACTION_TYPES.expense}>Despesa</Radio>
                </Stack>
              </RadioGroup>
            )}
          />
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.description}>
          <FormLabel htmlFor="description">Descrição</FormLabel>
          <Input
            id="description"
            type="text"
            placeholder="Descrição de sua transção"
            {...register("description", {
              required: true,
            })}
          />

          {errors.description && (
            <FormErrorMessage>
              <Text>A descrição é obrigatória</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.category}>
          <FormLabel htmlFor="category">Categoria</FormLabel>
          <FieldCategory
            {...register("category", {
              required: true,
            })}
          />

          {errors.category && (
            <FormErrorMessage>
              <Text>A categoria é obrigatória</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.description}>
          <FormLabel htmlFor="description">Descrição</FormLabel>
          <Input
            id="description"
            type="text"
            placeholder="Descrição"
            {...register("description", {
              required: true,
            })}
          />

          {errors.description && (
            <FormErrorMessage>
              <Text>Descrição</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <Button background="primary" color="white" mt="50px" type="submit">
          Login
        </Button>
      </Flex>
    </form>
  );
};
