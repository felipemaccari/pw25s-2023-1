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
import { AccountsManagementListActionsEditForm } from "./AccountsManagementListActionsEditForm";
import { Account } from "../types";

const AccountsManagementListActionsEdit: React.FC<Account> = ({ account }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify="end">
      <MenuItem onClick={onOpen} icon={<EditIcon />}>
        Editar Conta
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Conta</ModalHeader>

          <ModalCloseButton />
          <ModalBody pb="30px">
            <AccountsManagementListActionsEditForm account={account} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default AccountsManagementListActionsEdit;
