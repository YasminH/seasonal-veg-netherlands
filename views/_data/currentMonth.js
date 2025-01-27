import months from "./months.json" with { type: "json" };

export default () => {
  const currentMonthIndex = new Date().getMonth();
  return months[currentMonthIndex];
};
