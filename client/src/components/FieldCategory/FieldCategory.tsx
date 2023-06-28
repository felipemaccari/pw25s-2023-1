import { Select } from "@chakra-ui/react";

import { useQueryCategories } from "../../services/categories";

export const FieldCategory = ({ ...props }) => {
  const { data, isLoading }: any = useQueryCategories();

  if (data?.data.length === 0 && !isLoading) {
    return (
      <Select
        disabled
        placeholder="Nenhuma categoria cadastrada"
        isDisabled={isLoading}
        {...props}
      />
    );
  }

  return (
    <Select
      placeholder="Selecione a Categoria"
      isDisabled={isLoading}
      {...props}
    >
      {data?.data.map((category: any) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};
