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
import { CategoriesManagementListActionsEditForm } from "./CategoriesManagementListActionsEditForm";
import { Category } from "../types";

const CategoriesManagementListActionsEdit: React.FC<Category> = ({
  category,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify="end">
      <MenuItem onClick={onOpen} icon={<EditIcon />}>
        Editar Categoria
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Categoria</ModalHeader>

          <ModalCloseButton />
          <ModalBody pb="30px">
            <CategoriesManagementListActionsEditForm category={category} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CategoriesManagementListActionsEdit;
