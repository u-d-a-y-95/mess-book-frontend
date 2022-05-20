import {
  PlusIcon,
  EyeIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { getUsers } from "./helper";

const Users = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUsers(setTableData);
  }, []);
  return (
    <div>
      <div className="flex justify-between my-2">
        <div>
          <h1 className="text-2xl text-sky-500 font-bold tracking-wide">
            Users
          </h1>
        </div>
        <div>
          <button className="text-white bg-sky-500 px-2 py-1 rounded flex justify-center items-center">
            <PlusIcon className="h-5" />
            <span className="ml-1 capitalize">Add</span>
          </button>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
                SL
              </th>
              <th className="border border-gray-400 text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Name
              </th>
              <th className="border border-gray-400 text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Mail
              </th>
              <th className="border border-gray-400 text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Mobile
              </th>
              <th className="border border-gray-400 text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                1
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600">
                Saiful Islam UDay
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600">
                uday.dev.bd@gmail.com
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600">
                01830546042
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600 w-[200px]">
                <span>
                  <Button Icon={EyeIcon} tooltip="view" />
                  <Button
                    Icon={PencilAltIcon}
                    tooltip="edit"
                    className="mx-2"
                  />
                  <Button Icon={TrashIcon} tooltip="delete" />
                </span>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                2
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600">
                Fahim Hasan
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600">
                fahim@gmail.com
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600">
                01830546042
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600 w-[200px]">
                <span>
                  <Button Icon={EyeIcon} tooltip="view" />
                  <Button
                    Icon={PencilAltIcon}
                    tooltip="edit"
                    className="mx-2"
                  />
                  <Button Icon={TrashIcon} tooltip="delete" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
