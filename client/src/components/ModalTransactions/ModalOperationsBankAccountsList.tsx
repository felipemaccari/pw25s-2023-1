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

import { useQueryAccounts } from "../../services/accounts";

export const ModalOperationsBankAccountsList = () => {
  const { data, isLoading }: any = useQueryAccounts();

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || data.length === 0) {
    return <Text>Nenhuma conta cadastrada</Text>;
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Agência</Th>
            <Th>Conta</Th>
            <Th>Saldo Inicial</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((account: any) => (
            <Tr>
              <Td>{account.description}</Td>
              <Td>{account.account}</Td>
              <Td>{account.agency}</Td>
              <Td>{account.initialBalance}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
