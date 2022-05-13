import { useState } from "react";
import { CalendarIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/solid'
import { ClipBoardIcon } from '@heroicons/react/solid'

const Mess =()=>{
    const users = [
        {
          id: 1,
          name: "Jenith",
        },
        {
          id: 2,
          name: "Fahim",
        },
        {
          id: 3,
          name: "Rizvy",
        },
        {
          id: 4,
          name: "Shibly",
        },
        {
          id: 5,
          name: "Soumittra",
        },
        {
          id: 6,
          name: "Uday",
        },
      ];
      const [data, setData] = useState([
        {
          day: 1,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 2,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 3,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 4,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 5,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 6,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 7,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 8,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 9,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 10,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 11,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 12,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 13,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 14,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 15,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 16,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 17,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 18,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 19,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 20,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 21,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 22,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 23,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 24,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 25,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 26,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 27,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 28,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 29,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 30,
          meals: [3, 2, 1, 4, 2, 4],
        },
        {
          day: 31,
          meals: [3, 2, 1, 4, 2, 4],
        },
      ]);
    
      const [userBalance, setUserBalance] = useState([
        {
          name: "Jenith",
          currentAddAmount: 2400,
          previousBalance: -200,
          totalAmount: 2200,
          spentAmount: 1000,
          remainingAmount: 1200,
        },
        {
          name: "Fahim",
          currentAddAmount: 1600,
          previousBalance: 100,
          totalAmount: 1700,
          spentAmount: 1000,
          remainingAmount: 700,
        },
        {
          name: "Fahim",
          currentAddAmount: 1600,
          previousBalance: 100,
          totalAmount: 1700,
          spentAmount: 1000,
          remainingAmount: 700,
        },
        {
          name: "Soumittra",
          currentAddAmount: 1600,
          previousBalance: 100,
          totalAmount: 1700,
          spentAmount: 1000,
          remainingAmount: 700,
        },
        {
          name: "Fahim",
          currentAddAmount: 1600,
          previousBalance: 100,
          totalAmount: 1700,
          spentAmount: 1000,
          remainingAmount: 700,
        },
        {
          name: "Fahim",
          currentAddAmount: 1600,
          previousBalance: 100,
          totalAmount: 1700,
          spentAmount: 1000,
          remainingAmount: 700,
        },
      ]);
    
      const changeMealCount = (value, index, mealIndex) => {
        data[index].meals[mealIndex] = +value;
        setData([...data]);
      };
    
      const getTotalMeal = (index, data) => {
        return data?.reduce((acc, item) => acc + +item?.meals[index], 0);
      };
    
      const getTotal = (key, data) => {
        return data?.reduce((acc, item) => acc + +item?.[key], 0);
      };
    
      return (
        <div className="flex flex-col h-screen bg-gray-100">
          <div className="border-sky-500 border-b-2 h-20 shadow-lg bg-white">
    
          </div>
          <div className="mt-4 flex h-full">
            <div className="w-72 h-full shadow-lg bg-white">
              <ul className="">
                <li className="border-b-2 border-gray-200"><a className="inline-block w-full text-gray-600 hover:bg-sky-400 py-3 px-4 hover:text-white flex justify-start items-center"><CalendarIcon className="h-5"/><span className="ml-2">Mess</span></a></li>
                <li className="border-b-2 border-gray-200"><a className="inline-block w-full text-gray-600 hover:bg-sky-400 py-3 px-4 hover:text-white flex justify-start items-center"><UserGroupIcon className="h-5"/><span className="ml-2">Users</span></a></li>
                <li className="border-b-2 border-gray-200"><a className="inline-block w-full text-gray-600 hover:bg-sky-400 py-3 px-4 hover:text-white flex justify-start items-center"><UserGroupIcon className="h-5"/><span className="ml-2">Notes</span></a></li>
                <li className="border-b-2 border-gray-200"><a className="inline-block w-full text-gray-600 hover:bg-sky-400 py-3 px-4 hover:text-white flex justify-start items-center"><CalendarIcon className="h-5"/><span className="ml-2">Profile</span></a></li>
       
    
              </ul>
            </div>
            <div className="ml-4 w-full h-full bg-white p-8 rounded">
              <div className="flex bg-white justify-between">
                <div className="flex flex-col" style={{ height: "80vh" }}>
                  <div className="flex ">
                    <div className="border w-16 p-2 break-all text-sm">
                      Day / Name
                    </div>
                    {users?.map((user, index) => (
                      <div
                        key={user?.id}
                        className="border w-16 p-2 break-all text-sm"
                      >
                        {user?.name}
                      </div>
                    ))}
                  </div>
                  <div className="h-full overflow-auto">
                    {data?.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="border text-center text-sm w-16 flex justify-center items-center ">
                          {item?.day}
                        </div>
                        {item?.meals?.map((meal, mealIndex) => (
                          <div
                            key={mealIndex}
                            className="border text-center text-sm w-16 h-8"
                          >
                            <input
                              type="number"
                              className="w-full text-center h-full"
                              value={meal}
                              onChange={(e) =>
                                changeMealCount(e?.target?.value, index, mealIndex)
                              }
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      Total
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      {getTotalMeal(0, data)}
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      {getTotalMeal(1, data)}
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      {getTotalMeal(2, data)}
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      {getTotalMeal(3, data)}
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      {getTotalMeal(4, data)}
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      {getTotalMeal(5, data)}
                    </td>
                  </div>
                </div>
                <div className="">
                  <table className="w-full">
                    <tr>
                      <th className="border w-32  p-2 break-words text-sm">
                        Total Balance
                      </th>
                      <td className="border  p-2 break-words text-sm bg-green-100">
                        12000
                      </td>
                    </tr>
                    <tr>
                      <th className="border w-32  p-2 break-words text-sm">
                        Total Meal
                      </th>
                      <td className="border  p-2 break-words text-sm bg-green-100">
                        200
                      </td>
                    </tr>
                    <tr>
                      <th className="border w-32 p-2 break-words text-sm">
                        Per Meal Cost
                      </th>
                      <td className="border p-2 break-words text-sm bg-green-100">
                        60
                      </td>
                    </tr>
                  </table>
                  <table className="mt-4">
                    <thead>
                      <tr>
                        <th className="border w-16 p-2 break-words text-sm">
                          Name
                        </th>
                        <th className="border w-16 p-2 break-words text-sm">
                          Current Amount
                        </th>
                        <th className="border w-16 p-2 break-words text-sm">
                          Previous Amount
                        </th>
                        <th className="border w-16 p-2 break-words text-sm">
                          Total Amount
                        </th>
                        <th className="border w-16 p-2 break-words text-sm">
                          Spent Amount
                        </th>
                        <th className="border w-16 p-2 break-words text-sm">
                          Remaining Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userBalance?.map((user, index) => (
                        <tr>
                          <td className="border text-center text-sm py-1 h-8">
                            {user?.name}
                          </td>
                          <td className="border text-sm h-8">
                            <input
                              className="w-full h-full text-center"
                              value={user?.currentAddAmount}
                            />
                          </td>
                          <td className="border text-center text-sm py-1 h-8 ">
                            {user?.previousBalance}
                          </td>
                          <td className="border text-center text-sm py-1 h-8 ">
                            {user?.totalAmount}
                          </td>
                          <td className="border text-center text-sm py-1 h-8 ">
                            {user?.spentAmount}
                          </td>
                          <td className="border text-center text-sm py-1 h-8 ">
                            {user?.remainingAmount}
                          </td>
                        </tr>
                      ))}
    
                      <tr>
                        <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                          Total
                        </td>
                        <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                          {getTotal("currentAddAmount", userBalance)}
                        </td>
                        <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                          {getTotal("previousBalance", userBalance)}
                        </td>
                        <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                          {getTotal("totalAmount", userBalance)}
                        </td>
                        <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                          {getTotal("spentAmount", userBalance)}
                        </td>
                        <td className="border text-center text-sm p-2 bg-gray-500 text-white">
                          {getTotal("remainingAmount", userBalance)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col" style={{ height: "80vh" }}>
                  <div className="flex ">
                    <div className="border w-16 p-2 break-all text-sm ">
                      Day / Name
                    </div>
                    <div className="border p-2 break-all text-sm w-24">Amount</div>
                    <div className="border p-2 break-all text-sm w-24">Remaining</div>
                  </div>
                  <div className="h-full overflow-auto">
                    {data?.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="border text-center text-sm w-16 px-2 py-1">
                          {item?.day}
                        </div>
                        <div className="border text-center text-sm w-24 px-2 py-1 ">
                          {20}
                        </div>
                        <div className="border text-center text-sm w-24 px-2 py-1">
                          {"nothing"}
                        </div>
                   
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-16 ">
                      Total
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
                      {getTotalMeal(0, data)}
                    </td>
                    <td className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
                      {getTotalMeal(1, data)}
                    </td>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}