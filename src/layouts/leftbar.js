import { CalendarIcon } from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/solid";
import NavMenu from "../components/navMenu";

const LeftBar = () => {
  return (
    <div className="min-w-[250px] h-full shadow-lg bg-white">
      <div className="">
        <NavMenu label="Meals" path="/pipelines" Icon={CalendarIcon} />
        <NavMenu label="Users" path="/users" Icon={UserGroupIcon} />
        <NavMenu label="Notes" path="/notes" Icon={CalendarIcon} />
        <NavMenu label="Profile" path="/profile" Icon={CalendarIcon} />
      </div>
    </div>
  );
};

export default LeftBar;
