import { useState } from "react";
import { useDispatch, useSelector } from "../state/stateHooks";
import { SET_RESET } from "../state/type";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

const Topbar = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector();
  const [state, setState] = useState(false);
  return (
    <div className="border-sky-500 border-b-2 h-20 shadow-lg bg-white flex justify-between items-center px-10">
      <div></div>
      <div>
        <div>
          <div
            className="w-10 h-10 bg-gray-200 rounded-full ring-2 ring-sky-500 ring-offset-4 relative"
            onClick={(e) => {
              setState((prevState) => !prevState);
            }}
            onBlur={e=>{
              console.log("Change")
            }}
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
                  </div>
                  <div className="p-4 border-b-2 hover:text-sky-500 hover:cursor-pointer hover:font-bold">
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
