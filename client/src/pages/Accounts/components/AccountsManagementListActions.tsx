import { Menu, MenuButton, IconButton, MenuList } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import AccountsManagementListActionsEdit from "./AccountsManagementListActionsEdit";
import AccountsManagementListActionsDelete from "./AccountsManagementListActionsDelete";
import { Account } from "../types";

const AccountsManagementListActions: React.FC<Account> = ({ account }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <AccountsManagementListActionsEdit account={account} />

        <AccountsManagementListActionsDelete account={account} />
      </MenuList>
    </Menu>
  );
};

export default AccountsManagementListActions;
