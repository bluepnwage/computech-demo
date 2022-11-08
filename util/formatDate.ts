export function formatdate(date: Date) {
  const formatter = new Intl.DateTimeFormat("en", { dateStyle: "medium" });
  return formatter.format(date);
}
