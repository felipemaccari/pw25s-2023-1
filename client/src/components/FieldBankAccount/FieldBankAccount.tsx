import { Select } from "@chakra-ui/react";

import { useQueryAccounts } from "../../services/accounts";

export const FieldBankAccount = ({ ...props }) => {
  const { data, isLoading }: any = useQueryAccounts();

  if (data?.data.length === 0 && !isLoading) {
    return (
      <Select
        disabled
        placeholder="Nenhuma conta bancária cadastrada"
        isDisabled={isLoading}
        {...props}
      />
    );
  }

  return (
    <Select placeholder="Selecione a Conta" isDisabled={isLoading} {...props}>
      {data?.data.map((account: any) => (
        <option key={account.id} value={account.id}>
          {account.description}
        </option>
      ))}
    </Select>
  );
};
