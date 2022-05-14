
import LeftBar from "./leftbar";
import MainContent from "./main";
import Topbar from "./topbar";

const BaseLayout = () => {
 

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Topbar></Topbar>
      <div className="mt-4 flex h-full">
        <LeftBar/>
        <MainContent/>
      </div>
    </div>
  );
};

export default BaseLayout;
