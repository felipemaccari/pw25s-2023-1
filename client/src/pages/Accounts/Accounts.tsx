import { Box, Text } from "@chakra-ui/react";

import { AccountsManagementList } from "./components/AccountsManagementList";
import { AccountsManagementCreateModal } from "./components/AccountsManagementCreateModal";

const Accounts: React.FC = () => (
  <Box>
    <Text fontSize="2rem" fontWeight="semiBold">
      Minhas Contas
    </Text>

    <AccountsManagementCreateModal />

    <AccountsManagementList />
  </Box>
);

export default Accounts;
