import { useEffect, useState } from "react"
import userService from "../services/UserService";


const useUserHook = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState()
    const [loading, setLoading] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const {user, error} = await userService.getProfile();
                setUser(user)
                setError(error)
            }catch(err) {
                setError(err)
            }finally {
                setLoading(false);
            }
        }
        fetchData();
    },[])
    return {user, error, loading}
}
export default useUserHook;



