const SelectField = ({
  label,
  name,
  placeholder,
  errors,
  options,
  register,
  ...props
}) => {

  // console.log(register)
  return (
    <div className="flex flex-col">
      <label className="capitalize text-sm text-gray-400 ml-2">{label}</label>
      <select
        className="outline-none border rounded my-1 text-sm placeholder:capitalize h-10"
        {...register(name)}
        {...props}
      >
        {options?.map((option) => (
          <option key={option?.value} value={JSON.stringify(option)}>
            {option?.label}
          </option>
        ))}
      </select>
      {errors?.[name]?.message && (
        <span className="text-sm text-rose-500 italic ml-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default SelectField;
