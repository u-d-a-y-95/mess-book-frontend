import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import ConfirmationModal from "../../components/confirmationModal";
import Loader from "../../components/loader";
import Modal from "../../components/modal";
import { useSelector } from "../../state/stateHooks";
import CreateMealSchidulePipeline from "./form";
import EditViewMealSchidulePipeline from "./form/editView";
import {
  changeStatusPipelineById,
  deletePipelineById,
  getPipeline,
} from "./helper";
import { MealActionBtn } from "./actionBtn";
import SummaryMealSchidulePipeline from "./form/summary";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const TableHeader = ({ label }) => {
  return (
    <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
      {label}
    </th>
  );
};

const Meals = () => {
  const [page, setPage] = useState(1);
  const { profile } = useSelector();
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

  const setPipelineData = () => getPipeline(page, setTableData, setLoading);

  useEffect(() => {
    setPipelineData();
  }, [page]);

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
            disabled={profile.role !== "ADMIN"}
          />
        </div>
      </div>
      <div>
        <table className="table sm:hidden w-full">
          <thead>
            <tr className="">
              <TableHeader label="SL" />
              <TableHeader label="Information" />
            </tr>
          </thead>
          <tbody>
            {tableData?.data?.map((item, index) => (
              <tr className="text-center" key={item?.id}>
                <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                  {index + 1}
                </td>
                <td className="border text-sm p-2 text-gray-600 text-left">
                  <p>
                    Date : {moment(item?.startDate).format("DD/MM/YYYY")} -{" "}
                    {moment(item?.endDate).format("DD/MM/YYYY")}
                  </p>
                  <p>Users : {item?.users?.length}</p>
                  <p>Total Meal : {item?.totalMeals}</p>
                  <div className="mt-2">
                    <MealActionBtn
                      navigate={navigate}
                      profile={profile}
                      item={item}
                      index={index}
                      setModal={setModal}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="hidden sm:table w-full">
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
            {tableData?.data?.map((item, index) => (
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
                <td className="border text-sm py-1 px-2 text-gray-600 w-[400px]">
                  <MealActionBtn
                    navigate={navigate}
                    profile={profile}
                    item={item}
                    index={index}
                    setModal={setModal}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center mt-4 justify-end">
          <button
            className="hover:text-sky-500 disabled:cursor-not-allowed disabled:text-gray-500"
            onClick={(e) => setPage((page) => page - 1)}
            disabled={page <= 1}
          >
            <ChevronLeftIcon className="w-6" />
          </button>
          <button className="border  px-2 mx-2 ">{page}</button>
          <button
            className="hover:text-sky-500 disabled:cursor-not-allowed disabled:text-gray-500"
            disabled={page * 5 >= tableData.count}
            onClick={(e) => setPage((page) => page + 1)}
          >
            <ChevronRightIcon className="w-6" />
          </button>
        </div>
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
        {modal.type === "changestatus" && (
          <ConfirmationModal
            status="danger"
            title="Change Pipeline Status"
            body=" Are you sure you want open/close the pipeline ? This action can not be
          revert."
            yesBtnClicked={(e) => {
              const { data: obj } = { ...modal };
              setLoading(true);
              setModal({
                isOpen: false,
                data: null,
              });
              changeStatusPipelineById(
                obj?.id,
                { status: !obj.closed },
                setLoading,
                setPipelineData
              );
            }}
            noBtnClicked={() => {
              setModal({
                isOpen: false,
                data: null,
              });
            }}
          />
        )}
        {["create"].includes(modal.type) && (
          <CreateMealSchidulePipeline
            setModal={setModal}
            setPipelineData={setPipelineData}
            modal={modal}
          />
        )}
        {["summary"].includes(modal.type) && (
          <SummaryMealSchidulePipeline
            setModal={setModal}
            setPipelineData={setPipelineData}
            modal={modal}
          />
        )}
        {["edit", "view"].includes(modal.type) && (
          <EditViewMealSchidulePipeline
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
