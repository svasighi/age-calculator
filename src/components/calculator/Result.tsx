import ResultItem from "./ResultItem";

const Result = ({
  years,
  months,
  days,
}: {
  years: number;
  months: number;
  days: number;
}) => {
  return (
    <div className="mt-10 flex flex-col text-5xl italic desktop:text-6xl">
      <ResultItem count={years} name="years" animationSpeed="slow" />
      <ResultItem count={months} name="months" animationSpeed="medium" />
      <ResultItem count={days} name="days" animationSpeed="fast" />
    </div>
  );
};

export default Result;
