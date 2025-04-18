import { useNavigate } from "react-router-dom";
import { FetchLogOut } from "../redux/Api/Actions";
import { logoutUser } from "../redux/slices/authSlice"


export const useLogOut = (dispatch, user) => {
  // Проверяем, есть ли userInfo перед доступом к его id
    const userId = user ? user.id : null
    const navigate  = useNavigate()



    const handleLogOut = async () =>{
        try {
         const response = await dispatch( FetchLogOut(userId))
         if(response){
            navigate('/')
            dispatch(logoutUser())
         }
        } catch (error) {
            console.error('Logout error:' + error);

        }
    }
  return {handleLogOut}
}
