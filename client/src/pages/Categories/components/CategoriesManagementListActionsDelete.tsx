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
import { useMutationDeleteCategory } from "../../../services/categories";
import { useQueryClient } from "@tanstack/react-query";
import { Category } from "../types";

const CategoriesManagementListActionsDelete: React.FC<Category> = ({
  category,
}) => {
  const queryClient = useQueryClient();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading } = useMutationDeleteCategory({
    onSuccess: () => {
      queryClient.invalidateQueries(["useQueryCategories"]);
    },
  });

  const handleDeleteCategory = () => {
    mutate(category.id);
  };

  return (
    <Flex justify="end">
      <MenuItem onClick={onOpen} icon={<DeleteIcon />}>
        Excluir Categoria
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="30px">Deseja remover a categoria?</ModalBody>

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
