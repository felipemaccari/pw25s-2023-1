import { Controller, useForm } from "react-hook-form";

import {
  Button,
  Text,
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
} from "@chakra-ui/react";

import { FieldCategory } from "../FieldCategory";
import { FieldBankAccount } from "../FieldBankAccount";
import { useMutationCreateTransference } from "../../services/transactions";

export const ModalTransactionsOperationsTransference = () => {
  const { mutate, isLoading } = useMutationCreateTransference({
    onSuccess: () => {
      console.log("deu boas");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      description: "",
      transferenceValue: 0.0,
      transferenceDate: null,
      category: null,
      bankAccountOrigin: null,
      bankAccountDestination: null,
    },
  });

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      category: {
        id: data.category,
      },
      bankAccountOrigin: {
        id: data.bankAccountOrigin,
      },
      bankAccountDestination: {
        id: data.bankAccountDestination,
      },
    };

    mutate(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" mt="20px">
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

        <FormControl mt="20px" isInvalid={!!errors.transferenceValue}>
          <FormLabel htmlFor="transferenceValue">Valor</FormLabel>
          <NumberInput
            id="transferenceValue"
            defaultValue={0}
            precision={2}
            step={0.1}
          >
            <NumberInputField
              {...register("transferenceValue", {
                required: true,
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          {errors.transferenceValue && (
            <FormErrorMessage>
              <Text>O valor é obrigatório</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.transferenceDate}>
          <FormLabel htmlFor="transferenceDate">
            Data da Transferencia
          </FormLabel>
          <Input
            id="transferenceDate"
            placeholder="01/01/2023"
            size="md"
            type="date"
            {...register("transferenceDate", {
              required: true,
            })}
          />

          {errors.transferenceDate && (
            <FormErrorMessage>
              <Text>A data da transferencia é obrigatória</Text>
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

        <FormControl mt="20px" isInvalid={!!errors.bankAccountOrigin}>
          <FormLabel htmlFor="bankAccountOrigin">Conta Origem</FormLabel>
          <Controller
            name="bankAccountOrigin"
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <FieldBankAccount onChange={onChange} value={value} />
            )}
          />

          {errors.bankAccountOrigin && (
            <FormErrorMessage>
              <Text>A conta de origem é obrigatória</Text>
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={!!errors.bankAccountDestination}>
          <FormLabel htmlFor="bankAccountDestination">Conta Destino</FormLabel>
          <Controller
            name="bankAccountDestination"
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <FieldBankAccount onChange={onChange} value={value} />
            )}
          />

          {errors.bankAccountDestination && (
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
