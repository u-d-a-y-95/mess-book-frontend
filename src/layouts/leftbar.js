import { CalendarIcon } from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/solid";
import NavMenu from "../components/navMenu";
import { useSelector } from "../state/stateHooks";

const LeftBar = () => {
  const { profile } = useSelector();
  return (
    <div className="w-full sm:w-fit min-w-[250px] mb-3 fixed sm:static h-screen z-20 shadow-lg bg-white">
      <div className="">
        <NavMenu label="Meals" path="/pipelines" Icon={CalendarIcon} />
        <NavMenu label="Users" path="/users" Icon={UserGroupIcon} />
        <NavMenu
          label="Profile"
          path={`/profile/${profile?._id}`}
          Icon={CalendarIcon}
        />
      </div>
    </div>
  );
};

export default LeftBar;
