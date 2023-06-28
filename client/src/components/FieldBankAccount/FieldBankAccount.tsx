import { Select } from "@chakra-ui/react";

import { useQueryBankAccount } from "../../services/accounts";

export const FieldBankAccount = ({ ...props }) => {
  const { data, isLoading }: any = useQueryBankAccount();

  if (data?.length === 0 && !isLoading) {
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
    <Select
      placeholder="Selecione a conta bancária"
      isDisabled={isLoading}
      {...props}
    >
      {data?.map((account: any) => (
        <option value={account.id}>{account.name}</option>
      ))}
    </Select>
  );
};
