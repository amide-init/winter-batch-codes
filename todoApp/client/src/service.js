import axios from 'axios';
class TaskService {

    getTodos = (page, limit) => {
        return axios.get(`http://localhost:8080/task/page/${page}/limit/${limit}`)
              .then((response) => {
                if(response.data.success){
                    return {
                        tasks : response.data.data
                    }
                }else {
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
}
const taskService  = new TaskService();
export default taskService;