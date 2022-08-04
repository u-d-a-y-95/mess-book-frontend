
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../state/stateHooks";
import LeftBar from "./leftbar";
import MainContent from "./main";
import Topbar from "./topbar";

const BaseLayout = () => {
  const navigate = useNavigate();
  const { isAuth, token, leftBar, } = useSelector();

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
      <div className="mt-4 block sm:flex h-full">
        {leftBar && <LeftBar />}
        <MainContent />
      </div>
    </div>
  );
};

export default BaseLayout;
