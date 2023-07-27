import { useState } from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

const useAgeCalculator = () => {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const setDate = ({
    year,
    month,
    day,
  }: {
    year: number;
    month: number;
    day: number;
  }) => {
    setYear(year);
    setMonth(month);
    setDay(day);
  };
  let days = 0;
  let months = 0;
  let years = 0;
  if (year && month && day) {
    let date1 = new Date(year, month, day);

    days = differenceInDays(new Date(), date1);
    months = differenceInMonths(new Date(), date1);
    years = differenceInYears(new Date(), date1);
  }

  return { days, months, years, setDate };
};

export default useAgeCalculator;
