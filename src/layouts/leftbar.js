import { CalendarIcon } from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/solid";
import { ClipBoardIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import NavMenu from "../components/navMenu";

const LeftBar = () => {
  return (
    <div className="w-72 h-full shadow-lg bg-white">
      <div className="">
            <NavMenu label="Meals" path="/meals" Icon={CalendarIcon}/>
            <NavMenu label="Users" path="/users" Icon={UserGroupIcon}/>
            <NavMenu label="Notes" path="/notes" Icon={CalendarIcon}/>
            <NavMenu label="Profile" path="/profile" Icon={CalendarIcon}/>
      </div>
    </div>
  );
};

export default LeftBar;
