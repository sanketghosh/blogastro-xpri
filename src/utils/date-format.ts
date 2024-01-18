export function formatDate(inputDate: Date): string {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[inputDate.getUTCDay()];
  const month = months[inputDate.getUTCMonth()];
  const day = inputDate.getUTCDate();
  const year = inputDate.getUTCFullYear();

  return `${dayOfWeek} - ${month} ${day}, ${year}`;
}

// Example usage:
/* const inputDate = new Date(
  "Tue Jan 16 2024 05:30:00 GMT+0530 (India Standard Time)"
);
const formattedDate = formatDate(inputDate);
console.log(formattedDate);
 */
