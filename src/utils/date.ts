// Function to get the next date
export const getNextDate = (date: string) => {
  if (!date) return "";

  const currentDate = new Date(date);
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);

  // Format the date to YYYY-MM-DD
  return nextDate.toISOString().split("T")[0];
};
