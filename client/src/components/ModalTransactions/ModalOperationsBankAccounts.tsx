import { Box } from "@chakra-ui/react";
import { ModalOperationsBankAccountsForm } from "./ModalOperationsBankAccountsForm";
import { ModalOperationsBankAccountsList } from "./ModalOperationsBankAccountsList";

export const ModalOperationsBankAccounts = () => {
  return (
    <Box>
      <ModalOperationsBankAccountsForm />

      <ModalOperationsBankAccountsList />
    </Box>
  );
};
