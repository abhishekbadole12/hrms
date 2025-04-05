// Function to get the next date
export const getNextDate = (date: string) => {
  if (!date) {
    return "";
  }

  const currentDate = new Date(date);
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
};
