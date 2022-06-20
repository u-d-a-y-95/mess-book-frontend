import { Fragment } from "react";
import moment from "moment";

const Meal = ({pipelineDetails,changeMealCount,getTotalMeal}) => {
  return (
    <>
      <div className="flex ">
        <div className="border p-2 break-all text-sm w-24">Day / Name</div>
        {pipelineDetails?.users?.map((item, index) => (
          <div key={item?._id} className="border w-16 p-2 break-all text-sm">
            {item?.user?.name}
          </div>
        ))}
      </div>
      <div className="h-full overflow-auto">
        {pipelineDetails?.meals?.map((item, index) => (
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
        {pipelineDetails?.users?.map((item, index) => (
          <div
            key={item?._id}
            className="border text-center text-sm p-2 bg-gray-500 text-white w-16 "
          >
            {getTotalMeal(index + 1, pipelineDetails?.meals)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal
