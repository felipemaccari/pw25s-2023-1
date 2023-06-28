export interface AccountProps {
  id: any;
  description: string;
  account: string;
  agency: string;
  initialBalance: number;
}

export interface Account {
  account: AccountProps;
}
