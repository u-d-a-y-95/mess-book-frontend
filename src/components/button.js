import Tooltip from "./tooltip";

const Button = ({ label, Icon, tooltip, className }) => {
  return (
    <>
      {tooltip ? (
        <Tooltip tooltip={tooltip}>
          <button
            className={`bg-gray-200 p-2 rounded hover:bg-gray-500 hover:text-white active:bg-gray-800 transition duration-300 ease-in flex ${className}`}
          >
            {Icon && <Icon className="h-5" />}

            {label && <span className={`font-bold ${Icon && "ml-2"}`}>{label}</span>}
          </button>
        </Tooltip>
      ) : (
        <button className={`bg-gray-200 p-2 rounded hover:bg-gray-500 hover:text-white active:bg-gray-800 transition duration-300 ease-in flex ${className}`}>
          {Icon && <Icon className="h-5" />}
          {label && <span className={`font-bold ${Icon && "ml-2"}`}>{label}</span>}
        </button>
      )}
    </>
  );
};

export default Button;
