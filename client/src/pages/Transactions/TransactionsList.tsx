import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner,
  Text,
} from "@chakra-ui/react";

import TransactionsListActions from "./TransactionsListActions";

import { useQueryTransactions } from "../../services/transactions";
import { formatMoney } from "../../utils/formatReal";
import { TransactionProps } from "./types";
import { format } from "date-fns";

export const TransactionsList = () => {
  const { data, isLoading }: any = useQueryTransactions();

  if (isLoading) {
    return <Spinner />;
  }

  if (!data.data || data.data.length === 0) {
    return <Text>Nenhuma transação cadastrada</Text>;
  }

  return (
    <TableContainer mt="30px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Data de Cadastro</Th>
            <Th>Data de Execução</Th>
            <Th>Valor</Th>
            <Th>Categoria</Th>
            <Th>Conta</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.data.map((transaction: TransactionProps) => (
            <Tr key={transaction.id}>
              <Td>{transaction.description}</Td>
              <Td>{format(new Date(transaction.entryDate), "dd/MM/yyyy")}</Td>
              <Td>
                {format(new Date(transaction.transactionDate), "dd/MM/yyyy")}
              </Td>
              <Td color={transaction.transactionValue < 0 ? "red" : "initial"}>
                {formatMoney(transaction.transactionValue)}
              </Td>
              <Td>{transaction.category.name}</Td>
              <Td>{transaction.bankAccount.description}</Td>
              <Td>
                <TransactionsListActions transaction={transaction} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
