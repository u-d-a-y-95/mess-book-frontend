import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/login";
import BaseLayout from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}></Route>
    </Routes>
  );
  // return <Login></Login>
  return <BaseLayout />;
}

export default App;
