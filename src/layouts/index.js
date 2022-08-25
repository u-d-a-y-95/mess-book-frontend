import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../socket/socketState";
import { useDispatch, useSelector } from "../state/stateHooks";
import { SET_PROFILE } from "../state/type";
import LeftBar from "./leftbar";
import MainContent from "./main";
import Topbar from "./topbar";

const BaseLayout = () => {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on("changeProfile", (data) => {
        dispatch({
          type: SET_PROFILE,
          data: data,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
  const { isAuth, token, leftBar } = useSelector();

  axios.defaults.headers["Authorization"] = `bearer ${token}`;

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Topbar></Topbar>
      <div className="mt-4 flex h-full">
        {leftBar && <LeftBar />}
        <MainContent />
      </div>
    </div>
  );
};

export default BaseLayout;
