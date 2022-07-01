import { useContext } from "react"
import { Context } from "./index"

export const useDispatch = ()=>{
    return useContext(Context).dispatch
}
export const useSelector = ()=>{
    return useContext(Context).state
}