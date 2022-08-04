import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import { getUserById } from "./helper";
import TableRow from "./tableRow";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [editedKey, setEditedKey] = useState("");
  const params = useParams();
  useEffect(() => {
    if (params?.id) getUserById(params?.id, setData);
  }, [params?.id]);
  const changeEditState = (key) => {
    setEditedKey(key);
  };
  return (
    <div>
      {loading && <Loader />}
      <div className="flex justify-between my-2">
        <div>
          <h1 className="text-2xl text-gray-500 font-bold tracking-wide">
            User
          </h1>
        </div>
      </div>
      <div>
        <table className="w-full sm:w-1/2">
          <tbody>
            <TableRow
              label="Name"
              value={data["name"]}
              changeEditState={changeEditState}
              editedKey={editedKey}
              labelkey="name"
              setLoading={setLoading}
              setData={setData}
              data={data}
            />
            <TableRow
              label="Display Name"
              value={data["displayName"]}
              changeEditState={changeEditState}
              editedKey={editedKey}
              labelkey="displayName"
              setLoading={setLoading}
              setData={setData}
              data={data}
            />
            <TableRow
              label="Email"
              value={data["email"]}
              changeEditState={changeEditState}
              editedKey={editedKey}
              labelkey="email"
              setLoading={setLoading}
              setData={setData}
              data={data}
            />
            <TableRow
              label="Mobile"
              value={data["mobile"]}
              changeEditState={changeEditState}
              editedKey={editedKey}
              labelkey="mobile"
              setLoading={setLoading}
              setData={setData}
              data={data}
            />
            {/* <TableRow label="Gender" item={data["gender"]} /> */}
            <TableRow
              label="Password"
              value={data["password"]}
              changeEditState={changeEditState}
              editedKey={editedKey}
              labelkey="password"
              setLoading={setLoading}
              setData={setData}
              data={data}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
