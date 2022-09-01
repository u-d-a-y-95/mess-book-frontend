import { Fragment } from "react";
import moment from "moment";
import { useSelector } from "../../../../state/stateHooks";

const Meal = ({ meals, users, userWiseTotalMeal, changeMealCount }) => {
  const { profile } = useSelector();
  return (
    <div className="overflow-scroll">
      <table className="table-auto border-separate border-spacing-0">
        <thead className="">
          <tr>
            <th className=" p-2 text-sm sticky left-0 top-0 z-20 bg-sky-500 text-white">
              Day / Name
            </th>
            {users?.map((item) => (
              <th
                key={item?._id}
                className=" p-2 text-sm text-center sticky top-0 z-10 bg-sky-500 text-white"
              >
                {item?.user?.displayName || item?.user?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {meals?.map((item, index) => (
            <tr key={index} className="">
              {item?.map((user, mealIndex) => (
                <Fragment key={mealIndex}>
                  {mealIndex === 0 && (
                    <td className="border border-sky-400 text-center text-sm sticky left-0 bg-sky-100 z-10">
                      <span className="w-24 inline-block">
                        {moment(user?.date).format("DD/MM/YYYY")}
                      </span>
                    </td>
                  )}
                  {mealIndex !== 0 && (
                    <td className="border text-center text-sm h-8">
                      <input
                        type="number"
                        className={`w-16 text-center h-full ${
                          ["GENERAL"].includes(profile?.role) &&
                          profile?._id !== user?.user?._id
                            ? "bg-yellow-100"
                            : ""
                        }`}
                        value={user?.noOfMeal}
                        onChange={(e) => {
                          if (e?.target.value > -1)
                            changeMealCount(e?.target?.value, index, mealIndex);
                        }}
                        disabled={
                          ["GENERAL"].includes(profile?.role) &&
                          profile?._id !== user?.user?._id
                        }
                      />
                    </td>
                  )}
                </Fragment>
              ))}
            </tr>
          ))}
        </tbody>
        <tr className="">
          <td className="border text-center text-sm p-2 bg-sky-500 text-white sticky left-0">
            Total
          </td>
          {userWiseTotalMeal?.map((item, index) => (
            <td
              key={index}
              className="border text-center text-sm p-2 bg-sky-500 text-white"
            >
              {item}
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Meal;
