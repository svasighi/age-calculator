import arrow from "./assets/images/icon-arrow.svg";
import Result from "./components/calculator/Result";
import useAgeCalculator from "./components/hooks/useAgeCalculator";
import Input from "./components/input";
import { useForm } from "react-hook-form";

function App() {
  const { days, months, years, setDate } = useAgeCalculator();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(errors);
    setDate(data);
  };

  return (
    <div className="container flex h-screen max-w-xl flex-col items-stretch justify-center">
      <div className="rounded-2xl rounded-br-[100px] bg-white px-6 py-8 desktop:px-7 desktop:py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10 flex w-10/12 space-x-5">
            <Input
              className="w-2/6"
              placeholder="DD"
              error={errors?.day?.message?.toString() ?? ""}
              type="number"
              register={register("day", {
                required: "day is required",
                min: {
                  value: 1,
                  message: "day is invalid",
                },
                max: {
                  value: 31,
                  message: "day is invalid",
                },
              })}
            />
            <Input
              className="w-2/6"
              placeholder="MM"
              error={errors?.month?.message?.toString() ?? ""}
              type="number"
              register={register("month", {
                required: "month is required",
                min: {
                  value: 1,
                  message: "month is invalid",
                },
                max: {
                  value: 12,
                  message: "month is invalid",
                },
              })}
            />

            <Input
              className="w-2/6"
              placeholder="YYYY"
              error={errors?.year?.message?.toString() ?? ""}
              register={register("year", {
                required: "year is required",
                min: {
                  value: 1930,
                  message: "year is invalid",
                },
                max: {
                  value: 2022,
                  message: "year is invalid",
                },
              })}
            />
          </div>
          <div className="relative">
            <hr />
            <button
              type="submit"
              onClick={() => {
                console.log(errors);
              }}
              className="flex-col-center absolute -top-7 right-0 h-14 w-14 rounded-full bg-purple hover:bg-off-black"
            >
              <img src={arrow} className="h-9 w-9" />
            </button>
          </div>
        </form>
        <Result years={years} months={months} days={days} />
      </div>
    </div>
  );
}

export default App;
