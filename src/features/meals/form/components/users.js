import { formatMoney } from "../../../../utils/pipes/formatMoney";

const User = ({
  users,
  changeUserDepositAmount,
  getTotal,
  userWiseTotalMeal,
  aggrigateValue,
}) => {
  const getTotalSpent = (data) => {
    return data?.reduce(
      (acc, user, index) =>
        acc + userWiseTotalMeal[index] * aggrigateValue?.perMealCost
    );
  };
  return (
    <table className="mt-4">
      <thead>
        <tr>
          <th className="border w-16 p-2 break-words text-sm">Name</th>
          <th className="border w-16 p-2 break-words text-sm">
            Current Amount
          </th>
          <th className="border w-16 p-2 break-words text-sm">
            Previous Amount
          </th>
          <th className="border w-16 p-2 break-words text-sm">Total Amount</th>
          <th className="border w-16 p-2 break-words text-sm">Spent Amount</th>
          <th className="border w-16 p-2 break-words text-sm">
            Remaining Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((item, index) => (
          <tr key={item?._id}>
            <td className="border text-center text-sm py-1 h-8">
              {item?.user?.name}
            </td>
            <td className="border text-sm h-8">
              <input
                className="w-full h-full text-center"
                value={item?.depositAmount ||""}
                type="number"
                onChange={(e) => {
                  changeUserDepositAmount(e?.target?.value, index);
                }}
              />
            </td>
            <td className="border text-center text-sm py-1 h-8 ">
              {formatMoney(item?.initialBalance, 2)}
            </td>
            <td className="border text-center text-sm py-1 h-8 ">
              {formatMoney(item?.totalAmount, 2)}
            </td>
            <td className="border text-center text-sm py-1 h-8 ">
              {formatMoney(
                userWiseTotalMeal[index] * aggrigateValue?.perMealCost,
                2
              )}
            </td>
            <td className="border text-center text-sm py-1 h-8 ">
              {formatMoney(
                item?.totalAmount -
                  userWiseTotalMeal[index] * aggrigateValue?.perMealCost,
                2
              )}
            </td>
          </tr>
        ))}

        <tr>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white">
            Total
          </td>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white">
            {formatMoney(getTotal("depositAmount", users), 2)}
          </td>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white">
            {formatMoney(getTotal("initialBalance", users), 2)}
          </td>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white">
            {formatMoney(getTotal("totalAmount", users), 2)}
          </td>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white">
            {formatMoney(aggrigateValue.totalExpense, 2)}
          </td>
          <td className="border text-center text-sm p-2 bg-gray-500 text-white">
            {formatMoney(
              aggrigateValue.totalBalance - aggrigateValue.totalExpense,
              2
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default User;
