import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { ModalTransactionsOperations } from "./ModalTransactionsOperations";

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
              <TabPanel>Transferencias</TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
