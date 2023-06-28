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

import { useQueryCategories } from "../../../services/categories";

import CategoriesManagementListActions from "./CategoriesManagementListActions";

export const CategoriesManagementList = () => {
  const { data, isLoading }: any = useQueryCategories();

  if (isLoading) {
    return <Spinner />;
  }

  if (!data.data || data.data.length === 0) {
    return <Text>Nenhuma categoria cadastrada</Text>;
  }

  return (
    <TableContainer mt="30px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Descrição da categoria</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.data.map((category: any) => (
            <Tr key={category.id}>
              <Td width="90%">{category.name}</Td>
              <Td>
                <CategoriesManagementListActions category={category} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
