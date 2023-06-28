import { useContext } from "react";

import { Link } from "react-router-dom";

import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";

import { AuthContext } from "../../providers/AuthProvider";

export const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Flex
      justify="space-between"
      align="center"
      p="10px 30px"
      background="primary"
      color="white"
    >
      <Text fontWeight="bold" fontSize="20px">
        Sistema Financeiro
      </Text>

      <Flex>
        <Text mx="10px" fontWeight="bold" textDecor="underline">
          <Link to="/">Home</Link>
        </Text>

        <Text mx="10px" fontWeight="bold" textDecor="underline">
          <Link to="/categories">Categorias</Link>
        </Text>

        <Text mx="10px" fontWeight="bold" textDecor="underline">
          <Link to="/accounts">Minhas Contas</Link>
        </Text>
      </Flex>

      <Menu>
        <MenuButton>
          <Avatar size="sm" />
        </MenuButton>

        <MenuList color="primary">
          <MenuItem>
            <Link to="/profile">Meu perfil</Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => logout()}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
