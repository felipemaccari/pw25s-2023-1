import { useContext } from "react";

import { useForm } from "react-hook-form";

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
import { useMutationAuth } from "../../services/auth";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast();

  const { mutate, isLoading } = useMutationAuth({
    onError: ({ response }: any) => {
      const message = response.data.message;

      toast({
        title: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
    onSuccess: (dataLogin: any) => {
      const { data } = dataLogin;

      login(data.token);
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
            Sistema Financeiro
          </Text>

          <FormControl isInvalid={!!errors.username}>
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
            Login
          </Button>

          <Text fontWeight="bold" textDecor="underline" mt="30px">
            <Link to="/register">Não possui conta? Cadastre-se agora!</Link>
          </Text>
        </Flex>
      </form>
    </Flex>
  );
};

export default LoginPage;
