import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../state/stateHooks";
import { LEFTBAR, SET_RESET } from "../state/type";

const Topbar = () => {
  const dispatch = useDispatch();
  const { profile, leftBar } = useSelector();
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="border-sky-500 border-b-2 h-20 shadow-lg bg-white flex justify-between items-center px-10 min-h-[70px]">
      <div className="flex justify-center items-center">
        <span
          className="cursor-pointer"
          onClick={(e) => {
            dispatch({
              type: LEFTBAR,
              data: !leftBar,
            });
          }}
        >
          <MenuIcon className="w-5 h-5" />
        </span>
       

        <h3 className="mx-5 font-bold">Mess Book</h3>
      </div>
      <div>
        <div>
          <div
            className="w-10 h-10 bg-gray-200 rounded-full ring-2 ring-sky-500 ring-offset-4 relative"
            onClick={(e) => {
              setState((prevState) => !prevState);
            }}
            onBlur={(e) => {}}
          >
            {state && (
              <>
                <div className="absolute bg-white  w-4 h-4 top-[52px] right-[12px] rotate-45 transform shadow"></div>
                <div className="w-48  bg-white absolute top-[60px] right-[-10px] rounded shadow z-10">
                  <div className="flex flex-col p-4 border-b-2 h-24">
                    <span className="font-bold">{profile?.name}</span>
                    <span className="text-sm text-gray-500">
                      {profile?.email}
                    </span>
                    <span className="text-sm text-gray-500">
                      {/* {profile?.account} */}
                    </span>
                  </div>
                  <div
                    className="p-4 border-b-2 hover:text-sky-500 hover:cursor-pointer hover:font-bold"
                    onClick={(e) => {
                      navigate(`./profile/${profile?._id}`);
                    }}
                  >
                    Profile
                  </div>
                  <div
                    className="p-4 hover:text-sky-500 hover:cursor-pointer hover:font-bold "
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({
                        type: SET_RESET,
                      });
                    }}
                  >
                    Log out
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
