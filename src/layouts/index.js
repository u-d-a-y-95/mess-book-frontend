import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "../utils/hooks/useLocalStorage";
import LeftBar from "./leftbar";
import MainContent from "./main";
import Topbar from "./topbar";

const BaseLayout = () => {
  const navigate = useNavigate();
  const [localStoredValue, setLocalStoreValue] = useLocalStorage("auth-token");

  useEffect(() => {
    if (!localStoredValue) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStoredValue]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Topbar></Topbar>
      <div className="mt-4 flex h-full">
        <LeftBar />
        <MainContent />
      </div>

    </div>
  );
};

export default BaseLayout;
