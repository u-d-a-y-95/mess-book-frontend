import {
  // PlusIcon,
  EyeIcon,
  PencilAltIcon,
  TrashIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import InputField from "../../components/inputField";
import Modal from "../../components/modal";
import CreateMealSchidulePipeline from "./form";

const TableHeader = ({ label }) => {
  return (
    <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
      {label}
    </th>
  );
};

const Meals = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

 

  return (
    <div>
      <div className="flex justify-between my-2">
        <div>
          <h1 className="text-2xl text-gray-500 font-bold tracking-wide">
            Meal
          </h1>
        </div>
        <div>
          <Button
            label="add"
            className="ml-2 hover:bg-sky-500 hover:text-white px-4 text-sm active:bg-sky-600"
            onClick={(e) => {
              navigate("./add");
            }}
          />
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="">
              <TableHeader label="SL" />
              <TableHeader label="Month Name" />
              <TableHeader label="Total Member" />
              <TableHeader label="Total Meal" />
              <TableHeader label="Total Cost" />
              <TableHeader label="Per Meal" />
              <TableHeader label="Actions" />
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, index) => (
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
            ))}
          </tbody>
        </table>
      </div>

      {/* <Modal isOpen="true">
      <CreateMealSchidulePipeline/>
      </Modal> */}
    </div>
  );
};

export default Meals;
