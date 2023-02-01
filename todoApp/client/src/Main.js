import { useState } from "react";
import AddandEdit from "./Add";
import Loader from "./Loader";
import taskService from "./service";
import Task from "./Task";
import useTaskHook from "./useTaskHook";

const Main = () => {
    const [currenPage, setCurrenPage] = useState(0);
    const [currentLimit] = useState(20);
    const [update, setUpadate] = useState(false);
    const { todos, error, loading } = useTaskHook(currenPage, currentLimit, update);
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
                if(success){
                    setUpadate(!update)
                }
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
                if(success){
                    setUpadate(!update)
                }
            }
            setLoadingButton(false);
        } else {
            alert("Please enter the details")
        }
    }

    const  onDelete = async(id) => {
        const {success} = await taskService.deleteTodo(id);
        if(success){
            setUpadate(!update)
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
                                onDelete={onDelete}
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