import axios from "axios";
import toast from "react-hot-toast";

export const getUsersDDL = async (setter) => {
  try {
    const result = await axios.get("/users/ddl");
    setter(result?.data);
  } catch (error) {
    setter([]);
  }
};
export const getPipeline = async (setter,setLoading) => {
  try {
    setLoading(true)
    const result = await axios.get("/meals/pipeline");
    setter(result?.data);
    setLoading(false)
  } catch (error) {
    setter([]);
    setLoading(false)
  }
};
export const savePipeline = async (payload,setLoading,cb) => {
  try {
    setLoading(true)
    const result = await axios.post("/meals/pipeline",payload,cb);
    cb(result?.data);
    setLoading(false)
    toast.success("Meal Pipeline created")
  } catch (error) {
    setLoading(false)
    toast.error(error)
  }
};
