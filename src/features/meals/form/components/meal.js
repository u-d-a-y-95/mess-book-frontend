import { Fragment } from "react";
import moment from "moment";

const Meal = ({ meals, users, userWiseTotalMeal, changeMealCount }) => {
  return (
    <>
      <div className="flex ">
        <div className="border p-2 break-all text-sm w-24">Day / Name</div>
        {users?.map((item) => (
          <div key={item?._id} className="border w-16 p-2 break-all text-sm">
            {item?.user?.name}
          </div>
        ))}
      </div>
      <div className="overflow-auto">
        {meals?.map((item, index) => (
          <div key={index} className="flex">
            {item?.map((user, mealIndex) => (
              <Fragment key={mealIndex}>
                {mealIndex === 0 && (
                  <div className="border text-center text-sm flex justify-center items-center w-24 ">
                    {moment(user?.date).format("DD/MM/YYYY")}
                  </div>
                )}
                {mealIndex !== 0 && (
                  <div className="border text-center text-sm w-16 h-8">
                    <input
                      type="number"
                      className="w-full text-center h-full"
                      value={user?.noOfMeal}
                      onChange={(e) => {
                        changeMealCount(e?.target?.value, index, mealIndex);
                      }}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="border text-center text-sm p-2 bg-gray-500 text-white w-24 ">
          Total
        </div>
        {userWiseTotalMeal?.map((item, index) => (
          <div
            key={index}
            className="border text-center text-sm p-2 bg-gray-500 text-white w-16 "
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;