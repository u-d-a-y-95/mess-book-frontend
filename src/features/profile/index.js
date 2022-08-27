import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import UserInfo from "./conponents/userInfo";
import UserImage from "./conponents/userImage";
import { getUserById } from "./helper";

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
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        <UserImage />
        <UserInfo
          changeEditState={changeEditState}
          editedKey={editedKey}
          labelkey="name"
          setLoading={setLoading}
          setData={setData}
          data={data}
        />
      </div>
    </div>
  );
};

export default Profile;
