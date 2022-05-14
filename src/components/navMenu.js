import { Link } from "react-router-dom";

const NavMenu = ({ path, Icon,label }) => {
  return (
    <Link to={path}>
      <div className="border-b-2 border-gray-200">
        <span className="w-full text-gray-600 hover:bg-sky-400 py-4 px-4 hover:text-white flex justify-start items-center">
          <Icon className="h-5" />
          <span className="ml-2">{label}</span>
        </span>
      </div>
    </Link>
  );
};

export default NavMenu
