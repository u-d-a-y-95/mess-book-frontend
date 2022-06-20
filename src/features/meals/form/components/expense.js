import moment from "moment";
const Expense = ({ pipelineDetails, changeExpense,aggrigateValue }) => {
  return (
    <>
      <div className="flex ">
        <div className="border w-24 p-2 break-all text-sm ">Day / Name</div>
        <div className="border p-2 break-all text-sm w-24">Amount</div>
        <div className="border p-2 break-all text-sm w-24">Remaining</div>
      </div>
      <div className="h-full overflow-auto">
        {pipelineDetails?.expenses?.map((item, index) => (
          <div key={index} className="flex">
            <div className="border text-center text-sm w-24 px-2 py-1">
              {moment(item?.date).format("DD/MM/YYYY")}
            </div>
            <div className="border text-center text-sm w-24">
              <input
                className="w-full h-full text-center"
                type="number"
                value={item?.expense}
                onChange={(e) => {
                  changeExpense(e?.target?.value, index);
                }}
              />
            </div>
            <div className="border text-center text-sm w-24 px-2 py-1">0</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
          Total
        </td>
        <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
          {aggrigateValue?.totalExpense}
        </td>
        <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
          {/* {getTotalMeal(1, data)} */}
        </td>
      </div>
    </>
  );
};

export default Expense
