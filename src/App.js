import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import WithTitle from "./components/withTitle";
import Login from "./features/auth/login";
import Signup from "./features/auth/registration";
import Meals from "./features/meals";
import BalanceExtend from "./features/meals/form/extend/balanceExtend";
import ExpenseExtend from "./features/meals/form/extend/expenseExtend";
import PipelineExtend from "./features/meals/form/extend/mealExtend";
import Profile from "./features/profile";
import Users from "./features/users";
import UsersForm from "./features/users/form";
import BaseLayout from "./layouts";
import SocketStateProvider from "./socket/socketState";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL + "/api";
  axios.defaults.withCredentials = true;
  return (
    <Routes>
      <Route
        path=""
        element={
          <SocketStateProvider>
            <BaseLayout />
          </SocketStateProvider>
        }
      >
        <Route path="" element={<Navigate to="pipelines" replace={true} />} />
        <Route
          path="pipelines"
          element={<WithTitle title="Meals" Component={Meals} />}
        />
        <Route
          path="pipelines/:pipelineId/mealExtend"
          element={<WithTitle title="Meals" Component={PipelineExtend} />}
        />
        <Route
          path="pipelines/:pipelineId/balanceExtend"
          element={<WithTitle title="Meals" Component={BalanceExtend} />}
        />
        <Route
          path="pipelines/:pipelineId/expenseExtend"
          element={<WithTitle title="Meals" Component={ExpenseExtend} />}
        />
        <Route path="users">
          <Route
            path=""
            element={<WithTitle title="User" Component={Users} />}
          ></Route>
          <Route path=":type/:userId" element={<UsersForm />}></Route>
          <Route path="add" element={<UsersForm />}></Route>
        </Route>
        <Route path="profile/:id" element={<Profile />}></Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
