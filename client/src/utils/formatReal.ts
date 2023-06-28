export const formatMoney = (valor: any) => {
  const formato = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formato.format(valor);
};
