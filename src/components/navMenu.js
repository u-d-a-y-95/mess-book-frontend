import { NavLink } from "react-router-dom";
import { useDispatch } from "../state/stateHooks";
import { LEFTBAR } from "../state/type";

const NavMenu = ({ path, Icon, label }) => {
  const dispatch = useDispatch();
  return (
    <NavLink
      to={path}
      onClick={(e) => {
        if (window.innerWidth < 500) {
          dispatch({
            type: LEFTBAR,
            data: false,
          });
        }
      }}
    >
      {({ isActive }) => (
        <div className="border-b-2 border-gray-200">
          <span
            className={`w-full text-gray-600 py-4 px-4 flex justify-start items-center ${
              isActive
                ? "bg-sky-400 text-white font-bold"
                : "hover:bg-sky-200 hover:text-sky-600 hover:font-bold "
            }`}
          >
            <Icon className="h-5" />
            <span className="ml-2">{label}</span>
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default NavMenu;
