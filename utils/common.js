export function currMonthYearString() {
  return (
    new Date().getMonth().toString() +
    "-" +
    new Date().getUTCFullYear().toString()
  );
}
