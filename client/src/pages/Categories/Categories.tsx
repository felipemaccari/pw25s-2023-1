import { Box, Text } from "@chakra-ui/react";

import { CategoriesManagementList } from "./components/CategoriesManagementList";
import { CategoriesManagementCreateModal } from "./components/CategoriesManagementCreateModal";

const Categories: React.FC = () => (
  <Box>
    <Text fontSize="2rem" fontWeight="semiBold">
      Categorias de Despesa
    </Text>

    <CategoriesManagementCreateModal />

    <CategoriesManagementList />
  </Box>
);

export default Categories;
