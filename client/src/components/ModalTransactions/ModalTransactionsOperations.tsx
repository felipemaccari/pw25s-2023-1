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
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  useToast,
} from "@chakra-ui/react";

import { TRANSACTION_TYPES } from "./constants";

import { FieldCategory } from "../FieldCategory";
import { FieldBankAccount } from "../FieldBankAccount";
import { useMutationCreateTransaction } from "../../services/transactions";
import { useQueryClient } from "@tanstack/react-query";

export const ModalTransactionsOperations = () => {
  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutate, isLoading } = useMutationCreateTransaction({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryTransactions"]);

      toast({
        title: "Transação cadastrada",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      transactionType: TRANSACTION_TYPES.revenue,
      description: "",
      transactionValue: 0.0,
      entryDate: null,
      transactionDate: null,
      category: null,
      bankAccount: null,
    },
  });

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      category: {
        id: data.category,
      },
      bankAccount: {
        id: data.bankAccount,
      },
      transactionValue:
        data.transactionType === TRANSACTION_TYPES.expense
          ? data.transactionValue * -1
          : data.transactionValue,
    };

    mutate(payload);
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

        <FormControl mt="20px" isInvalid={!!errors.transactionValue}>
          <FormLabel htmlFor="transactionValue">Valor</FormLabel>
          <NumberInput
            id="transactionValue"
            defaultValue={0}
            precision={2}
            step={0.1}
          >
            <NumberInputField
              {...register("transactionValue", {
                required: true,
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          {errors.transactionValue && (
            <FormErrorMessage>
              <Text>O valor é obrigatório</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.entryDate}>
          <FormLabel htmlFor="entryDate">Data da Despesa</FormLabel>
          <Input
            id="entryDate"
            placeholder="01/01/2023"
            size="md"
            type="date"
            {...register("entryDate", {
              required: true,
            })}
          />

          {errors.entryDate && (
            <FormErrorMessage>
              <Text>A data da despesa é obrigatória</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.transactionDate}>
          <FormLabel htmlFor="transactionDate">Data de Execução</FormLabel>
          <Input
            id="transactionDate"
            placeholder="01/01/2023"
            size="md"
            type="date"
            {...register("transactionDate", {
              required: true,
            })}
          />

          {errors.transactionDate && (
            <FormErrorMessage>
              <Text>A data da despesa é obrigatória</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.category}>
          <FormLabel htmlFor="category">Categoria</FormLabel>
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <FieldCategory onChange={onChange} value={value} />
            )}
          />

          {errors.category && (
            <FormErrorMessage>
              <Text>A categoria é obrigatória</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.bankAccount}>
          <FormLabel htmlFor="bankAccount">Conta</FormLabel>
          <Controller
            name="bankAccount"
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <FieldBankAccount onChange={onChange} value={value} />
            )}
          />

          {errors.bankAccount && (
            <FormErrorMessage>
              <Text>A conta é obrigatória</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <Button
          background="primary"
          color="white"
          mt="50px"
          type="submit"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          Salvar
        </Button>
      </Flex>
    </form>
  );
};
