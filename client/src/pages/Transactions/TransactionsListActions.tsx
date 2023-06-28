import { Menu, MenuButton, IconButton, MenuList } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import TransactionsListActionsEdit from "./TransactionsListActionsEdit";
import TransactionsListActionsDelete from "./TransactionsListActionsDelete";
import { Transaction } from "./types";

const TransactionsListActions: React.FC<Transaction> = ({ transaction }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <TransactionsListActionsEdit transaction={transaction} />

        <TransactionsListActionsDelete transaction={transaction} />
      </MenuList>
    </Menu>
  );
};

export default TransactionsListActions;
