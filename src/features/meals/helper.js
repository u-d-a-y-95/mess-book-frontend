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
export const getPipeline = async (setter) => {
  try {
    const result = await axios.get("/meals/pipeline");
    setter(result?.data);
  } catch (error) {
    setter([]);
  }
};
