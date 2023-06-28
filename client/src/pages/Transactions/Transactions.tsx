import { Box, Text } from "@chakra-ui/react";
import { TransactionsList } from "./TransactionsList";

const Transactions: React.FC = () => {
  return (
    <Box>
      <Text fontSize="2rem" fontWeight="semiBold">
        Transações
      </Text>

      <TransactionsList />
    </Box>
  );
};

export default Transactions;
