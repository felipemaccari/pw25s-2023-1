import { Controller, useForm } from "react-hook-form";

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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

import { Transaction } from "./types";
import { useMutationUpdateTransaction } from "../../services/transactions";
import { TRANSACTION_TYPES } from "../../components/ModalTransactions/constants";
import { FieldCategory } from "../../components/FieldCategory";
import { FieldBankAccount } from "../../components/FieldBankAccount";

export const TransactionsListActionsEditForm: React.FC<Transaction> = ({
  transaction,
}) => {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      description: transaction.description,
      entryDate: transaction.entryDate,
      transactionDate: transaction.transactionDate,
      transactionValue: transaction.transactionValue,
      category: transaction.category,
      bankAccount: transaction.bankAccount,
      transactionType:
        transaction.transactionValue > 0
          ? TRANSACTION_TYPES.revenue
          : TRANSACTION_TYPES.expense,
    },
  });

  const { mutate, isLoading } = useMutationUpdateTransaction({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryAccounts"]);
    },
  });

  const onSubmit = async (data: any) => {
    const formData = { id: transaction.id, ...data };

    await mutate(formData);
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
