import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  MenuItem,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";

import { Transaction } from "./types";
import { TransactionsListActionsEditForm } from "./TransactionsListActionsEditForm";

const TransactionsListActionsEdit: React.FC<Transaction> = ({
  transaction,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify="end">
      <MenuItem onClick={onOpen} icon={<EditIcon />}>
        Editar Transações
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Transações</ModalHeader>

          <ModalCloseButton />
          <ModalBody pb="30px">
            <TransactionsListActionsEditForm transaction={transaction} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TransactionsListActionsEdit;
