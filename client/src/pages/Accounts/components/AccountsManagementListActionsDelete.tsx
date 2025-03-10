import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  MenuItem,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import { useMutationDeleteAccount } from "../../../services/accounts";
import { useQueryClient } from "@tanstack/react-query";
import { Account } from "../types";

const CategoriesManagementListActionsDelete: React.FC<Account> = ({
  account,
}) => {
  const queryClient = useQueryClient();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading } = useMutationDeleteAccount({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryAccounts"]);
    },
  });

  const handleDeleteCategory = () => {
    mutate(account.id);
  };

  return (
    <Flex justify="end">
      <MenuItem onClick={onOpen} icon={<DeleteIcon />}>
        Excluir Conta
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Conta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="30px">Deseja remover a Conta?</ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button onClick={onClose}>Cancelar</Button>

            <Button isLoading={isLoading} onClick={handleDeleteCategory}>
              Remover
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CategoriesManagementListActionsDelete;
