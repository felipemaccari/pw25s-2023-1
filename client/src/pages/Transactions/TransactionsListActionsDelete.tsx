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

import { useQueryClient } from "@tanstack/react-query";
import { Transaction } from "./types";
import { useMutationDeleteTransaction } from "../../services/transactions";

const TransactionsListActionsDelete: React.FC<Transaction> = ({
  transaction,
}) => {
  const queryClient = useQueryClient();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading } = useMutationDeleteTransaction({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryTransactions"]);
    },
  });

  const handleDeleteTransaction = () => {
    mutate(transaction.id);
  };

  return (
    <Flex justify="end">
      <MenuItem onClick={onOpen} icon={<DeleteIcon />}>
        Excluir Transação
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remover Transação</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="30px">Deseja remover a transação?</ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button onClick={onClose}>Cancelar</Button>

            <Button isLoading={isLoading} onClick={handleDeleteTransaction}>
              Remover
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TransactionsListActionsDelete;
