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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { useMutationCreateBankAccount } from "../../services/accounts";

export const ModalOperationsBankAccountsForm = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutationCreateBankAccount({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryBankAccount"]);
    },
  });

  const onSubmit = async (data: any) => {
    const account = {
      ...data,
      initialBalance: parseFloat(data.initialBalance),
    };

    console.log("account", account);

    await mutate(account);
  };

  return (
    <Accordion mb="30px" border="1px solid #f5f5f5" allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Cadastrar nova conta
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <AccordionPanel pb={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" align="center">
              <FormControl mt="20px" isInvalid={!!errors.description}>
                <FormLabel htmlFor="description">Descrição</FormLabel>
                <Input
                  id="description"
                  type="text"
                  placeholder="Descrição"
                  isDisabled={isLoading}
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

              <Flex width="100%">
                <FormControl mt="20px" isInvalid={!!errors.account} mr="30px">
                  <FormLabel htmlFor="account">Conta Bancária</FormLabel>
                  <Input
                    id="account"
                    type="text"
                    placeholder="Conta Bancária"
                    isDisabled={isLoading}
                    {...register("account", {
                      required: true,
                    })}
                  />

                  {errors.description && (
                    <FormErrorMessage>
                      <Text>A Conta Bancária é obrigatória</Text>
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl mt="20px" isInvalid={!!errors.agency}>
                  <FormLabel htmlFor="agency">Agência</FormLabel>
                  <Input
                    id="agency"
                    type="text"
                    placeholder="Agência"
                    isDisabled={isLoading}
                    {...register("agency", {
                      required: true,
                    })}
                  />

                  {errors.description && (
                    <FormErrorMessage>
                      <Text>A Agência é obrigatória</Text>
                    </FormErrorMessage>
                  )}
                </FormControl>
              </Flex>

              <FormControl mt="20px" isInvalid={!!errors.initialBalance}>
                <FormLabel htmlFor="initialBalance">Saldo Inicial</FormLabel>
                <NumberInput
                  id="initialBalance"
                  defaultValue={0}
                  precision={2}
                  step={0.1}
                >
                  <NumberInputField
                    placeholder="Saldo Inicial"
                    {...register("initialBalance", {
                      required: true,
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                {errors.description && (
                  <FormErrorMessage>
                    <Text>A Saldo Inicial é obrigatória</Text>
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
                Cadastrar
              </Button>
            </Flex>
          </form>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
