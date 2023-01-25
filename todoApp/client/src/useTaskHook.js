import { useEffect, useState } from "react"
import taskService from "./service";

const useTaskHook = (page, limit) => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState()
    const [loading, setLoading] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const {tasks, error} = await taskService.getTodos(page, limit);
                setTodos(tasks)
                setError(error)
            }catch(err) {
                setError(err)
            }finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [page])
    return {todos, error, loading}
}
export default useTaskHook;