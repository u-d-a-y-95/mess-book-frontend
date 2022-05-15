const Tooltip = ({ children, tooltip }) => {
  return (
    <span className="relative inline-block group">
      {children}
      <span
        className="whitespace-nowrap text-sm py-2 absolute left-2/4 -translate-x-2/4 p-2 px-4 bottom-full bg-gray-400 rounded text-white mb-3
        before:text-gray-400 before:absolute before:content-['▼'] before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:text-3xl invisible group-hover:visible z-10 "
      >
        {tooltip}
      </span>
    </span>
  );
};

export default Tooltip;
