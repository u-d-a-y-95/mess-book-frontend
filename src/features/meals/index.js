import {
  ClipboardCheckIcon,
  EyeIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import ConfirmationModal from "../../components/confirmationModal";
import Loader from "../../components/loader";
import Modal from "../../components/modal";
import CreateMealSchidulePipeline from "./form";
import { deletePipelineById, getPipeline } from "./helper";

const TableHeader = ({ label }) => {
  return (
    <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
      {label}
    </th>
  );
};

const Meals = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    data: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    setPipelineData();
  }, []);

  const setPipelineData = () => getPipeline(setTableData, setLoading);

  return (
    <div>
      {loading && <Loader />}
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
              setModal({
                isOpen: true,
                type: "create",
              });
            }}
          />
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="">
              <TableHeader label="SL" />
              <TableHeader label="Start Date" />
              <TableHeader label="End Date" />
              <TableHeader label="Total Member" />
              <TableHeader label="Total Meal" />
              <TableHeader label="Total Cost" />
              <TableHeader label="Per Meal" />
              <TableHeader label="Actions" />
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, index) => (
              <tr className="text-center" key={item?.id}>
                <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                  {index + 1}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">
                  {moment(item?.startDate).format("DD/MM/YYYY")}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">
                  {moment(item?.endDate).format("DD/MM/YYYY")}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">
                  {item?.users?.length}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">
                  {item?.totalMeals}
                </td>
                <td className="border text-sm py-1 px-2 text-gray-600">{}</td>
                <td className="border text-sm py-1 px-2 text-gray-600">{}</td>
                <td className="border text-sm py-1 px-2 text-gray-600 w-[200px]">
                  <span>
                    <Button
                      Icon={EyeIcon}
                      tooltip="view"
                      className="mr-2"
                      onClick={(e) => {
                        setModal({
                          isOpen: true,
                          type: "view",
                          item,
                        });
                      }}
                    />
                    <Button
                      Icon={PencilAltIcon}
                      tooltip="edit"
                      className="mr-2"
                      onClick={(e) => {
                        setModal({
                          isOpen: true,
                          type: "edit",
                          item,
                        });
                      }}
                    />
                    <Button
                      Icon={TrashIcon}
                      tooltip="delete"
                      className="mr-2"
                      onClick={(e) => {
                        setModal({
                          isOpen: true,
                          data: item,
                          index,
                          type: "delete",
                        });
                      }}
                    />
                    <Button
                      Icon={ClipboardCheckIcon}
                      tooltip="Extend"
                      onClick={(e) => {
                        navigate(`./${item?.id}/extend`);
                      }}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={modal?.isOpen}>
        {modal.type === "delete" && (
          <ConfirmationModal
            status="danger"
            title="Delete Pipeline"
            body=" Are you sure you want delete the pipeline ? This action can not be
          revert."
            yesBtnClicked={(e) => {
              const { data: obj, index } = { ...modal };
              setLoading(true);
              setModal({
                isOpen: false,
                data: null,
              });
              deletePipelineById(obj?.id, setLoading, () => {
                tableData.splice(index, 1);
              });
            }}
            noBtnClicked={() => {
              setModal({
                isOpen: false,
                data: null,
              });
            }}
          />
        )}
        {["create", "edit", "view"].includes(modal.type) && (
          <CreateMealSchidulePipeline
            setModal={setModal}
            setPipelineData={setPipelineData}
            modal={modal}
          />
        )}
      </Modal>
    </div>
  );
};

export default Meals;
