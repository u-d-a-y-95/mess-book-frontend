import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import WithTitle from "./components/withTitle";
import Login from "./features/auth/login";
import Meals from "./features/meals";
import PipelineExtend from "./features/meals/form/mealExtend";
import Users from "./features/users";
import UsersForm from "./features/users/form";
import BaseLayout from "./layouts";

function App() {
  console.log(process.env)
  axios.defaults.baseURL = process.env.BASE_URL || process.env.REACT_APP_API_BASE_URL;

  return (
    <Routes>
      <Route path="" element={<BaseLayout />}>
        <Route path="" element={<Navigate to="pipelines" replace={true} />} />
        <Route
          path="pipelines"
          element={<WithTitle title="Meals" Component={Meals} />}
        />
        <Route
          path="pipelines/:pipelineId/extend"
          element={<WithTitle title="Meals" Component={PipelineExtend} />}
        />
        <Route path="users">
          <Route
            path=""
            element={<WithTitle title="User" Component={Users} />}
          ></Route>
          <Route path=":type/:userId" element={<UsersForm />}></Route>
          <Route path="add" element={<UsersForm />}></Route>
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
