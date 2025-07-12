export const formatDate = (dateISO: string) => {
  const date = new Date(dateISO);
  return new Intl.DateTimeFormat('ru-RU').format(date);
}
