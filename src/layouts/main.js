
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return <div className="ml-4 w-full h-full bg-white p-8 rounded">
    <Outlet/>
  </div>;
};

export default MainContent;
