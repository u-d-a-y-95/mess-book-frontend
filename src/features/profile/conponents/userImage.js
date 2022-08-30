import { CameraIcon } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "../../../state/stateHooks";
import { SET_PROFILE } from "../../../state/type";
import { updateProfileIamgeByUserId } from "../helper";
import avater from "../../../assets/avater.png";
const UserImage = () => {
  const { profile } = useSelector();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const imageInputRef = useRef();
  const [fileDataURL, setFileDataURL] = useState(null);
  const fileInputClick = () => {
    imageInputRef.current.click();
  };

  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        setFileDataURL(reader.result);
      };
    }
  }, [file]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <span className="w-fit h-fit relative rounded">
          <img
            className="w-48 h-48 rounded-full ring-2 ring-offset-8 ring-sky-500"
            src={
              fileDataURL ||
              (profile.profileImage
                ? process.env.REACT_APP_API_BASE_URL +
                  "/static/" +
                  profile.profileImage
                : avater)
            }
            alt="avater"
          />
          <span
            className="absolute bottom-0 right-0 bg-white z-10 rounded-full p-2 shadow"
            onClick={fileInputClick}
          >
            <input
              ref={imageInputRef}
              type="file"
              className="hidden"
              onChange={fileChange}
              accept="image/*"
            />
            <CameraIcon className="w-6 h-6" />
          </span>
        </span>
      </div>
      <div className="text-center">
        {fileDataURL && (
          <button
            type="button"
            className="mt-2 bg-teal-500 py-1 px-6 rounded text-white font-bold"
            onClick={(e) => {
              updateProfileIamgeByUserId(profile._id, file, (data) => {
                setFile(null);
                setFileDataURL("");
                dispatch({
                  type: SET_PROFILE,
                  data,
                });
              });
            }}
          >
            save
          </button>
        )}
      </div>
    </div>
  );
};

export default UserImage;
