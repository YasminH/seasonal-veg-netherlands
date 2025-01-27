import months from "./months.json" with { type: "json" };

type Month = {
  name: string;
  abbreviation: string;
  vegetables: string[];
  fruit: string[];
}

export default (): Month => {
  const currentMonthIndex = new Date().getMonth();
  return months[currentMonthIndex];
};
