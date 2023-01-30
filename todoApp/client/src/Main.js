import { useState } from "react";
import AddandEdit from "./Add";
import Loader from "./Loader";
import taskService from "./service";
import Task from "./Task";
import useTaskHook from "./useTaskHook";

const Main = () => {
    const [currenPage, setCurrenPage] = useState(0);
    const [currentLimit] = useState(2);
    const { todos, error, loading } = useTaskHook(currenPage, currentLimit);
    const [loadingButton, setLoadingButton] = useState(false);
    const [data, setData] = useState({
        title: '',
        description: ''
    })
    const [isEdit, setIsEdit] = useState(false);
    const [taskId, setTaskId] = useState();
    const uploadData = async () => {
        if (data.title !== '') {
            setLoadingButton(true);
            const { success } = await taskService.addTodos(data);
            if (success) {
                setData({ title: '', description: '' })
            }
            setLoadingButton(false);
        } else {
            alert("Please enter the details")
        }
    }
   
    const editData = async () => {
        if (data.title !== '') {
            setLoadingButton(true);
            const { success } = await taskService.updateTodo(taskId, data);
            if (success) {
                setData({ title: '', description: '' })
            }
            setLoadingButton(false);
        } else {
            alert("Please enter the details")
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg my-5 p-3">
                        <h2 className="text-primary">Task List : {currenPage}</h2>
                        <AddandEdit data={data} setData={setData} uploadData={uploadData} editData={editData} loading={loadingButton} isEdit={isEdit} />
                        {loading ? <Loader /> : null}
                        {todos.length < 1 ? 'No Data Found' : null}
                        {todos.map((todo) => {
                            return <Task key={todo.id}
                                title={todo.title}
                                description={todo.description}
                                taskId={todo.id}
                                setIsEdit={setIsEdit}
                                setTaskId={setTaskId}
                                setData={setData} />
                        })}
                    </div>
                </div>
            </div>
            <div className="row">
                <p className="text-center">
                    <button className="btn btn-primary mx-2" onClick={
                        () => {
                            setCurrenPage(currenPage - 1)
                        }
                    }>Prev</button>
                    <button className="btn btn-primary mx-2" onClick={
                        () => {
                            setCurrenPage(currenPage + 1)
                        }
                    }>Next</button>
                </p>
            </div>
        </div>
    )
}

export default Main;