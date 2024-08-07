const getDayName = (date: Date) => {
  return date.toLocaleDateString("en-EN", { weekday: "long" });
};

const getNextDay = (currentDate: Date, daysToAdd: number) => {
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + daysToAdd);
  return getDayName(nextDate);
};

export default getNextDay;
