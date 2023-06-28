import { AddIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";
import { ModalTransactions } from "../ModalTransactions";

export const FloatingActionButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bottom="20px"
        right="20px"
        position="fixed"
        borderRadius="50%"
        height="60px"
        width="60px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        background="primary"
        color="white"
        _hover={{ color: "primary", background: "white" }}
        onClick={() => onOpen()}
      >
        <AddIcon />
      </Button>

      <ModalTransactions isOpen={isOpen} onClose={onClose} />
    </>
  );
};
