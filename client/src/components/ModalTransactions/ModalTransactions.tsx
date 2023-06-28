import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { ModalTransactionsOperations } from "./ModalTransactionsOperations";
import { ModalTransactionsOperationsTransference } from "./ModalTransactionsOperationsTransference";

interface ModalTransactionsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalTransactions = ({
  isOpen,
  onClose,
}: ModalTransactionsProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalBody>
          <Tabs>
            <TabList>
              <Tab>Transações</Tab>
              <Tab>Transferência Entre Contas</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ModalTransactionsOperations />
              </TabPanel>
              <TabPanel>
                <ModalTransactionsOperationsTransference />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
