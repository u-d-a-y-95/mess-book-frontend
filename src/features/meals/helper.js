import axios from "axios";
import moment from "moment";
import toast from "react-hot-toast";

export const getUsersDDL = async (setter) => {
  try {
    const result = await axios.get("/users/ddl");
    setter(result?.data);
  } catch (error) {
    setter([]);
  }
};
export const getPipeline = async (setter, setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get("/meals/pipeline");
    setter(result?.data);
    setLoading(false);
  } catch (error) {
    setter([]);
    setLoading(false);
  }
};
export const savePipeline = async (payload, setLoading, cb) => {
  try {
    setLoading(true);
    const result = await axios.post("/meals/pipeline", payload, cb);
    cb(result?.data);
    setLoading(false);
    toast.success("Meal Pipeline created");
  } catch (error) {
    setLoading(false);
    toast.error(error);
  }
};
export const deletePipelineById = async (id, setLoading, cb) => {
  try {
    await axios.delete(`/meals/pipeline/${id}`);
    setLoading(false);
    cb();
    toast.success("Pipeline is deleted");
  } catch (error) {
    setLoading(false);
    toast.error(error);
  }
};
export const getPipelineById = async (id, setter) => {
  try {
    const result = await axios.get(`/meals/pipeline/${id}`);

    const startDate = moment(result?.data?.startDate);
    const endDate = moment(result?.data?.endDate);
    const diff = endDate.diff(startDate, "days");
    const data = [];
    let count = 0;
    for (let i = 0; i < result.data.meals?.length; i++) {
      if (!data[count]) {
        data[count] = [
          {
            date: result.data.meals[i].date,
          },
        ];
      }
      data[count].push(result.data.meals[i]);
      count++;
      if (count === diff + 1) {
        count = 0;
      }
    }
    
    // console.log(data);
    setter({
      meals: data,
      users: result?.data?.users?.map((item) => ({
        ...item,
        totalAmount: +item?.depositAmount + +item?.initialBalance,
      })),
      expenses:result?.data?.expenses
    });
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};
