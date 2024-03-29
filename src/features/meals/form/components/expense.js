import moment from "moment";

import { formatMoney } from "../../../../utils/pipes/formatMoney";
const Expense = ({ expenses, changeExpense, aggrigateValue }) => {
  let remaining = aggrigateValue?.totalBalance;

  return (
    <>
      <div className="flex ">
        <div className="border p-2 text-sm w-1/3 sm:w-24 ">Day / Name</div>
        <div className="border p-2 text-sm w-1/3 sm:w-24 ">Amount</div>
        <div className="border p-2 text-sm w-1/3 sm:w-24 ">Remaining</div>
      </div>
      <div className="overflow-auto">
        {expenses?.map((item, index) => {
          item["remaining"] = remaining - item?.expense;
          remaining = item["remaining"];
          return (
            <div key={index} className="flex">
              <div className="border text-center text-sm px-2 py-1 w-1/3 sm:w-24">
                {moment(item?.date).format("DD/MM/YYYY")}
              </div>
              <div className="border text-center text-sm w-1/3 sm:w-24">
                <input
                  className="w-full h-full text-center"
                  type="number"
                  value={item?.expense}
                  onChange={(e) => {
                    changeExpense(e?.target?.value, index);
                  }}
                />
              </div>
              <div className="border text-center text-sm px-2 py-1 w-1/3 sm:w-24">
                {item?.remaining}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <div className="border text-center text-sm p-2 bg-gray-500 text-white w-1/3 sm:w-24 ">
          Total
        </div>
        <div className="border text-center text-sm p-2 bg-gray-500 text-white w-1/3 sm:w-24 ">
          {aggrigateValue?.totalExpense}
        </div>
        <div className="border text-center text-sm p-2 bg-gray-500 text-white w-1/3 sm:w-24 ">
          {formatMoney(
            aggrigateValue?.totalBalance - aggrigateValue?.totalExpense,
            2
          )}
        </div>
      </div>
    </>
  );
};

export default Expense;
