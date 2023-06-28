import { useContext } from "react";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AuthContext } from "../../providers/AuthProvider";
import { useMutationRegister } from "../../services/auth";

const Register = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast();

  const { mutate, isLoading } = useMutationRegister({
    onError: ({ response }: any) => {
      const message = response.data.message;

      toast({
        title: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
    onSuccess: (data: any) => {
      const { success, validationErrors } = data;

      console.log("data", data);

      if (!success) {
        toast({
          title: Object.values(validationErrors),
          status: "error",
          duration: 9000,
          isClosable: true,
        });

        return;
      }

      toast({
        title: "Usuário cadastrado com sucesso. Faça o login!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      navigate("/");
    },
  });

  const onSubmit = async (data: any) => {
    await mutate(data);
  };

  return (
    <Flex height="100vh" width="100%" align="center" justify="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column">
          <Text
            fontWeight="bold"
            fontSize="2rem"
            mb="50px"
            textDecor="underline"
            align="center"
          >
            Cadastrar novo usuário
          </Text>

          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="displayName">Seu Nome</FormLabel>
            <Input
              id="displayName"
              type="text"
              placeholder="Seu nome completo"
              {...register("displayName", {
                required: "O nome é obrigatório!",
              })}
            />

            {errors.displayName && (
              <FormErrorMessage>O nome é obrigatório</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.username} mt="30px">
            <FormLabel htmlFor="username">Usuário</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="Seu nome de usuário"
              {...register("username", {
                required: "O nome de usuário é obrigatório!",
              })}
            />

            {errors.username && (
              <FormErrorMessage>Usuário incorreto</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mt="30px" isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Sua senha"
              {...register("password", { required: "A senha é obrigatória" })}
            />

            {errors.password && (
              <FormErrorMessage>Senha incorreta</FormErrorMessage>
            )}
          </FormControl>

          <Button
            background="primary"
            color="white"
            mt="30px"
            type="submit"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Cadastrar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Register;
