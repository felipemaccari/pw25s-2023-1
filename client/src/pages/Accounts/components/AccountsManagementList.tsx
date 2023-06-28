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

import { useQueryAccounts } from "../../../services/accounts";

import AccountsManagementListActions from "./AccountsManagementListActions";
import { formatMoney } from "../../../utils/formatReal";

export const AccountsManagementList = () => {
  const { data, isLoading }: any = useQueryAccounts();

  if (isLoading) {
    return <Spinner />;
  }

  if (!data.data || data.data.length === 0) {
    return <Text>Nenhuma conta bancária cadastrada</Text>;
  }

  return (
    <TableContainer mt="30px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Agência</Th>
            <Th>Conta</Th>
            <Th>Saldo Inicial</Th>
            <Th>Açoes</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.data.map((account: any) => (
            <Tr key={account.id}>
              <Td>{account.description}</Td>
              <Td>{account.account}</Td>
              <Td>{account.agency}</Td>
              <Td>{formatMoney(account.initialBalance)}</Td>
              <Td>
                <AccountsManagementListActions account={account} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
