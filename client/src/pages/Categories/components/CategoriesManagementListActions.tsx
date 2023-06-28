import { Menu, MenuButton, IconButton, MenuList } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import CategoriesManagementListActionsEdit from "./CategoriesManagementListActionsEdit";
import CategoriesManagementListActionsDelete from "./CategoriesManagementListActionsDelete";
import { Category } from "../types";

const CategoriesManagementListActions: React.FC<Category> = ({ category }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <CategoriesManagementListActionsEdit category={category} />

        <CategoriesManagementListActionsDelete category={category} />
      </MenuList>
    </Menu>
  );
};

export default CategoriesManagementListActions;
