const InputField = ({
  label,
  name,
  placeholder,
  errors,
  register,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className="capitalize text-sm text-gray-400 ml-2">{label}</label>
      <input
        className="outline-none border rounded p-2 my-1 text-sm placeholder:capitalize"
        placeholder={placeholder ? placeholder : `enter ${label}`}
        {...register(name)}
        {...props}
      />
      {errors?.[name]?.message && (
        <span className="text-sm text-rose-500 italic ml-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
