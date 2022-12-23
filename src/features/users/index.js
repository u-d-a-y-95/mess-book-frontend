import {
  EyeIcon,
  PencilAltIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import ConfirmationModal from "../../components/confirmationModal";
import Loader from "../../components/loader";
import Modal from "../../components/modal";
import { changeUserRoleByUserId, deleteUser, getUsers } from "./helper";
import { useSelector } from "../../state/stateHooks";
import { useGetUsers } from "../../hooks/useUser";

const TableHeader = ({ label }) => {
  return (
    <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
      {label}
    </th>
  );
};

const Users = () => {
  const { profile } = useSelector();
  const [modal, setModal] = useState({
    isOpen: false,
    data: null,
  });
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetUsers();
  return (
    <div>
      {(isLoading || isFetching) && <Loader />}
      <div className="flex justify-between my-2">
        <div>
          <h1 className="text-2xl text-gray-500 font-bold tracking-wide">
            User
          </h1>
        </div>
        <div>
          <Button
            label="add"
            className="ml-2 hover:bg-sky-500 hover:text-white px-4 text-sm active:bg-sky-600"
            onClick={(e) => {
              navigate("./add");
            }}
            disabled={profile?.role !== "ADMIN"}
          />
        </div>
      </div>
      <div>
        <table className="table sm:hidden">
          <thead>
            <tr className="">
              <TableHeader label="SL" />
              <TableHeader label="Data" />
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr className="text-center" key={item?._id}>
                <td className="border text-sm py-2 px-2 text-gray-600 w-[100px]">
                  {index + 1}
                </td>
                <td className="border text-sm p-2 text-gray-600 text-left w-full">
                  <p className="font-bold">{item?.name}</p>
                  <p className="text-gray-500">{item?.email}</p>
                  <p className="text-gray-500">{item?.mobile}</p>
                  <div className="mt-2">
                    <Button
                      Icon={EyeIcon}
                      tooltip="view"
                      className="w-8 h-8 flex justify-center items-center"
                      onClick={(e) => {
                        navigate(`./view/${item?._id}`);
                      }}
                    />
                    {(profile?.role === "ADMIN" ||
                      profile._id === item._id) && (
                      <Button
                        Icon={PencilAltIcon}
                        tooltip="edit"
                        className="w-8 h-8 flex justify-center items-center ml-2"
                        onClick={(e) => {
                          navigate(`./edit/${item?._id}`);
                        }}
                      />
                    )}

                    {profile?.role === "ADMIN" && item?.role !== "ADMIN" && (
                      <Button
                        Icon={TrashIcon}
                        tooltip="delete"
                        className="w-8 h-8 flex justify-center items-center ml-2"
                        onClick={(e) => {
                          setModal({
                            isOpen: true,
                            data: item,
                            index,
                          });
                        }}
                      />
                    )}
                    <Button
                      Icon={UserIcon}
                      tooltip="Moderator"
                      className={`w-8 h-8 flex justify-center items-center ml-2 ${
                        item?.role === "MODERATOR"
                          ? "bg-teal-500 text-white hover:bg-rose-500"
                          : ""
                      } ${
                        profile?.role === "ADMIN" && item?.role !== "ADMIN"
                          ? ""
                          : "invisible"
                      }`}
                      // onClick={(e) => {
                      //   changeUserRoleByUserId(
                      //     item._id,
                      //     {
                      //       role:
                      //         item?.role === "MODERATOR"
                      //           ? "GENERAL"
                      //           : "MODERATOR",
                      //     },
                      //     setLoading,
                      //     (data) => {
                      //       item.role = data.role;
                      //       setTableData([...tableData]);
                      //     }
                      //   );
                      // }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="hidden sm:table sm:w-full">
          <thead>
            <tr className="">
              <TableHeader label="SL" />
              <TableHeader label="Name" />
              <TableHeader label="Email" />
              <TableHeader label="Mobile" />
              <TableHeader label="Actions" />
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr className="text-center" key={item?._id}>
                <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                  {index + 1}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">
                  {item?.name}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">
                  {item?.email}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">
                  {item?.mobile}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600 w-[200px]">
                  <span>
                    <Button
                      Icon={EyeIcon}
                      tooltip="view"
                      onClick={(e) => {
                        navigate(`./view/${item?._id}`);
                      }}
                    />
                    <Button
                      Icon={PencilAltIcon}
                      tooltip="edit"
                      className={`mx-2 ${
                        profile?.role === "ADMIN" || profile._id === item._id
                          ? ""
                          : "invisible"
                      }`}
                      onClick={(e) => {
                        navigate(`./edit/${item?._id}`);
                      }}
                    />
                    <Button
                      Icon={TrashIcon}
                      tooltip="delete"
                      className={`${
                        profile?.role === "ADMIN" && item?.role !== "ADMIN"
                          ? ""
                          : "invisible"
                      }`}
                      onClick={(e) => {
                        setModal({
                          isOpen: true,
                          data: item,
                          index,
                        });
                      }}
                    />

                    {profile?.role === "ADMIN" && item?.role !== "ADMIN" && (
                      <Button
                        Icon={UserIcon}
                        tooltip="Moderator"
                        className={`ml-2 ${
                          item?.role === "MODERATOR"
                            ? "bg-teal-500 text-white hover:bg-rose-500"
                            : ""
                        }`}
                        // onClick={(e) => {
                        //   changeUserRoleByUserId(
                        //     item._id,
                        //     {
                        //       role:
                        //         item?.role === "MODERATOR"
                        //           ? "GENERAL"
                        //           : "MODERATOR",
                        //     },
                        //     setLoading,
                        //     (data) => {
                        //       item.role = data.role;
                        //       setTableData([...tableData]);
                        //     }
                        //   );
                        // }}
                      />
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={modal.isOpen}>
        <ConfirmationModal
          status="danger"
          title="Delete User"
          body=" Are you sure you want delete the user ? This action can not be
          revert."
          // yesBtnClicked={(e) => {
          //   const { data: obj, index } = { ...modal };
          //   setModal({
          //     isOpen: false,
          //     data: null,
          //   });
          //   deleteUser(obj?._id, setLoading, () => {
          //     tableData.splice(index, 1);
          //   });
          // }}
          noBtnClicked={() => {
            setModal({
              isOpen: false,
              data: null,
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default Users;
