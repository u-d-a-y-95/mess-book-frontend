import { CameraIcon } from "@heroicons/react/solid";
import CatUrl from "../../../assets/cat.jpeg";
const UserImage = () => {
  return (
    <div className="flex justify-center">
      <span className="w-fit h-fit relative rounded">
        <img
          className="w-48 h-48 rounded-full ring-2 ring-offset-8 ring-rose-600"
          src={CatUrl}
          alt="avater"
        />
        <span className="absolute bottom-0 right-0 bg-white z-10 rounded-full p-2 shadow">
          <CameraIcon className="w-6 h-6" />
        </span>
      </span>
    </div>
  );
};

export default UserImage;
