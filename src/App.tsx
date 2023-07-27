import { useState } from "react";
import { arrow } from "./assets/images/";
import Result from "./components/calculator/Result";
import useAgeCalculator from "./components/hooks/useAgeCalculator";
import Input from "./components/input";
import { useForm } from "react-hook-form";

function App() {
  const { days, months, years, setDate } = useAgeCalculator();
  const [dark, setDark] = useState<Boolean>(localStorage.theme == "dark");
  const toggleDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (dark) {
      localStorage.theme = "light";
      setDark(false);
    } else {
      localStorage.theme = "dark";
      setDark(true);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setDate(data);
  };

  return (
    <div className="container flex h-screen max-w-xl flex-col items-stretch justify-center">
      <div className="rounded-2xl rounded-br-[100px] bg-white px-6 py-8 dark:bg-gray-900 desktop:px-7 desktop:py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10 flex w-10/12 space-x-5">
            <Input
              className="w-2/6"
              placeholder="DD"
              error={errors?.day?.message?.toString() ?? ""}
              register={register("day", {
                required: "day is required",
                valueAsNumber: true,
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
              type="number"
              error={errors?.month?.message?.toString() ?? ""}
              register={register("month", {
                required: "month is required",
                valueAsNumber: true,
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
              type="number"
              error={errors?.year?.message?.toString() ?? ""}
              register={register("year", {
                required: "year is required",
                valueAsNumber: true,
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
            <hr className="border-slate-600 " />
            <button
              type="submit"
              className="flex-col-center absolute -top-7 right-0 h-14 w-14 rounded-full bg-purple hover:bg-off-black dark:hover:hover:bg-gray-400"
            >
              <img src={arrow} className="h-9 w-9" />
            </button>
          </div>
        </form>
        <Result years={years} months={months} days={days} />
      </div>
      <div
        className="flex-col-center  absolute bottom-10 left-10 h-16 w-16 rounded-full bg-gray-900 dark:bg-gray-100"
        onClick={toggleDarkMode}
      >
        <svg className="h-9 w-9 " viewBox="4.45 2.03 19.11 23.93">
          <path
            className="fill-slate-100 dark:fill-slate-900"
            d="M21.054 4.356H15.66v4.135h4.7v2h-4.7v2.55h4.7v2h-4.7v2.55h2.683v2H15.66v3.653h5.393a2.5 2.5 0 0 0 2.5-2.5V6.858a2.5 2.5 0 0 0-2.499-2.502ZM12.556 4.356H6.947a2.5 2.5 0 0 0-2.5 2.5v13.887a2.5 2.5 0 0 0 2.5 2.5h5.609v2.722h2V2.033h-2ZM6.947 21.245a.5.5 0 0 1-.5-.5V6.858a.5.5 0 0 1 .5-.5h5.609v2.133H8.488v2h4.067v2.55H8.488v2h4.067v2.55H8.411v2h4.145v1.653Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
