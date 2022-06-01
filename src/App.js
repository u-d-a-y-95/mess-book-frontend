import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./features/auth/login";
import Meals from "./features/meals";
import Users from "./features/users";
import UsersForm from "./features/users/form";
import BaseLayout from "./layouts";

function App() {

  console.log(process.env.REACT_APP_API_BASE_URL)

  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

  return (
    <Routes>
      <Route path="" element={<BaseLayout />}>
        <Route path="" element={<Navigate to="meals" replace={true} />} />
        <Route path="meals" element={<Meals />}></Route>
        <Route path="users">
          <Route path="" element={<Users />}></Route>
          <Route path=":type/:userId" element={<UsersForm />}></Route>
          <Route path="add" element={<UsersForm />}></Route>
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
