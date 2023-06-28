export interface TransactionProps {
  id: any;
  description: string;
  entryDate: string;
  transactionDate: string;
  transactionValue: number;
  category: {
    id: number;
    name: string;
  };
  bankAccount: {
    id: number;
    description: string;
    agency: number;
    account: number;
    initialBalance: number;
  };
}

export interface Transaction {
  transaction: TransactionProps;
}
