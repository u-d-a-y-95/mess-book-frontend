import { formatMoney } from "../../../../utils/pipes/formatMoney";

const Summary = ({aggrigateValue}) => {
  return (
    <table className="w-full">
      <tbody>
        <tr>
          <th className="border w-32  p-2 break-words text-sm">
            Total Balance
          </th>
          <td className="border  p-2 break-words text-sm bg-green-100">
            {formatMoney(aggrigateValue?.totalBalance, 2)}
          </td>
        </tr>
        <tr>
          <th className="border w-32  p-2 break-words text-sm">
            Total Expense
          </th>
          <td className="border  p-2 break-words text-sm bg-green-100">
            {formatMoney(aggrigateValue?.totalExpense, 2)}
          </td>
        </tr>
        <tr>
          <th className="border w-32  p-2 break-words text-sm">Total Meal</th>
          <td className="border  p-2 break-words text-sm bg-green-100">
            {formatMoney(aggrigateValue?.totalMeal)}
          </td>
        </tr>
        <tr>
          <th className="border w-32 p-2 break-words text-sm">Per Meal Cost</th>
          <td className="border p-2 break-words text-sm bg-green-100">
            {formatMoney(aggrigateValue?.perMealCost, 2)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Summary;
