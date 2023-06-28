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
import { CategoriesManagementCreateForm } from "./CategoriesManagementCreateForm";

export const CategoriesManagementCreateModal = () => {
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
        Nova Categoria
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="40px">
            <CategoriesManagementCreateForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
