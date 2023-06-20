import { useContext } from "react";

import { useForm } from "react-hook-form";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AuthContext } from "../../providers/AuthProvider";
import { useMutationAuth } from "../../services/auth";

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

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

      return;
    },
    onSuccess: ({ data }: any) => {
      localStorage.setItem("USER", data.token);

      window.location.reload();
    },
  });

  const onSubmit = async (data: any) => {
    await mutate(data);
  };

  return (
    <Flex
      background="#F7F8FA"
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      width="100%"
    >
      <Flex direction="column">
        <Text fontSize="2rem" mb="100px">
          Sistema Financeiro
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired mb="30px">
            <FormLabel>Nome de usuário</FormLabel>
            <Input placeholder="nomeUsuario" {...register("username")} />
          </FormControl>

          <FormControl isRequired mb="30px">
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              placeholder="*********"
              {...register("password")}
            />
          </FormControl>

          <Button type="submit" width="100%" background="primary" color="white">
            Login
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
