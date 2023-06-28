import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import { AccountsManagementCreateForm } from "./AccountsManagementCreateForm";

export const AccountsManagementCreateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify="end">
      <Button
        onClick={onOpen}
        background="primary"
        color="white"
        mt="50px"
        type="submit"
        w="20%"
      >
        Nova Conta
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova Conta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="40px">
            <AccountsManagementCreateForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
