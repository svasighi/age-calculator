import classNames from "classnames";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: string;
  required?: boolean;
  register: any;
}

const Input = ({
  name,
  error = "",
  className,
  placeholder,
  register,
  type,
}: InputProps): JSX.Element => (
  <div className={className}>
    <label
      className={classNames(
        "text-smoky-grey mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500",
        { "text-light-red": error != "" },
      )}
    >
      {register.name}
    </label>
    <input
      className={classNames(
        "focus:shadow-outline w-full appearance-none rounded-md border px-3 py-3 font-bold hover:border-purple dark:bg-slate-800 dark:text-slate-500 dark:placeholder:text-slate-500",
        {
          "border-light-red text-light-red": error != "",
          "border-light-grey focus:border-off-black focus:outline-none dark:border-slate-700 dark:focus:border-slate-400":
            error == "",
        },
      )}
      placeholder={placeholder}
      name={name}
      type={type}
      {...register}
    />
    {error != "" && (
      <p className="mt-1 text-[0.7rem] italic text-light-red">{error}</p>
    )}
  </div>
);

export default Input;
