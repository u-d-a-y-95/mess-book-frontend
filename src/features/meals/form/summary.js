import { useEffect, useMemo, useState } from "react";
import Button from "../../../components/button";
import { getPipelineSummaryById } from "../helper";
import Loader from "../../../components/loader";
import moment from "moment";

const TableHeader = ({ label }) => {
  return (
    <th className="border border-gray-400 text-sm py-2 px-2 bg-gray-200 text-gray-600">
      {label}
    </th>
  );
};
const SummaryMealSchidulePipeline = ({ setModal, setPipelineData, modal }) => {
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPipelineSummaryById(modal.data.id, setSummary);
  }, [modal.data.id]);

  const totalMeal = useMemo(() => {
    if (!summary.users) return 0;
    return summary?.users.reduce((acc, item) => acc + item.meals, 0);
  }, [summary]);
  const mealRate = Number((summary.totalExpenses / totalMeal).toFixed(2));
  return (
    <div className="w-96">
      {loading && <Loader />}
      <div className="flex justify-between items-center border-b-2 pb-2 border-teal-500">
        <h1 className="text-teal-500 font-bold">Summary</h1>
        <div className="flex gap-1">
          <Button
            type="button"
            label="Close"
            className="hover:bg-gray-500 hover:text-white px-4 text-sm active:bg-gray-600"
            onClick={(e) => {
              setModal({
                isOpen: false,
                data: null,
              });
            }}
          />
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-cols-1  bg-gray-100 rounded p-5 text-sm mt-2">
          <span className="">
            Time : {moment(summary.startDate).format("DD MMM YYYY")} -{" "}
            {moment(summary.endDate).format("DD MMM YYYY")}
          </span>
          <span>Total Meal : {totalMeal}</span>
          <span>Total Cost : {summary.totalExpenses}</span>
          <span className="text-rose-500 font-bold">
            Meal Rate : {mealRate}
          </span>
        </div>
        <div className="mt-2">
          <table className="w-full">
            <thead>
              <tr className="">
                <TableHeader label="SL" />
                <TableHeader label="Name" />
                <TableHeader label="Deposit" />
                <TableHeader label="Meal" />
                <TableHeader label="Total" />
              </tr>
            </thead>
            <tbody>
              {summary?.users?.map((user, index) => (
                <tr className="text-center" key={index}>
                  <td className="border text-sm py-2 px-2 text-gray-600 w-[20px]">
                    {index + 1}
                  </td>
                  <td className="border text-sm py-1 px-2 text-gray-600">
                    {user.displayName}
                  </td>
                  <td className="border text-sm py-1 px-2 text-gray-600">
                    {user.initialBalance + user.depositAmount}
                  </td>
                  <td className="border text-sm py-1 px-2 text-gray-600 w-[50px]">
                    {user.meals}
                  </td>
                  <td className="border text-sm py-1 px-2 text-gray-600 w-[50px]">
                    {(user.meals * mealRate).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummaryMealSchidulePipeline;
