import axios from 'axios';
class TaskService {

    getTodos = (page, limit) => {
        return axios.get(`http://localhost:8080/task/page/${page}/limit/${limit}`)
            .then((response) => {
                if (response.data.success) {
                    return {
                        tasks: response.data.data
                    }
                } else {
                    return {
                        tasks: []
                    }
                }
            }).catch((err) => {
                console.log("error", err)
                return {
                    error: err
                }
            })
    }

    addTodos = (data) => {
        return axios.post('http://localhost:8080/task', { ...data })
            .then((response) => {
                if (response.data.success) {
                    return {
                        success: true
                    }
                } else {
                    return {
                        success: false
                    }
                }
            })
            .catch((err) => {
                console.log(err)
                return {
                    success: false
                }
            })
    }
    updateTodo = (id,data) => {
        return axios.patch(`http://localhost:8080/task/${id}`, { ...data })
            .then((response) => {
                if (response.data.success) {
                    return {
                        success: true
                    }
                } else {
                    return {
                        success: false
                    }
                }
            })
            .catch((err) => {
                console.log(err)
                return {
                    success: false
                }
            })
    }
}
const taskService = new TaskService();
export default taskService;