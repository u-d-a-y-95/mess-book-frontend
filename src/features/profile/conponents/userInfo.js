import TableRow from "../tableRow";

const UserInfo = ({ data, changeEditState, editedKey, setLoading, setData }) => {
  return (
    <div className="sm:w-1/2">
      <table className="w-full">
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
  );
};

export default UserInfo
