import { useState } from "react";
import Loader from "./Loader";
import Task from "./Task";
import useTaskHook from "./useTaskHook";

const Main = () => {
    const [currenPage, setCurrenPage] = useState(0);
    const [currentLimit] = useState(2);
    const { todos, error, loading } = useTaskHook(currenPage, currentLimit);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg my-5 p-3">
                        <h2 className="text-primary">Task List</h2>
                        {loading ? <Loader /> : null}
                        {todos.length < 1 ? 'No Data Found' : null}
                        {todos.map((todo) => {
                            return <Task key={todo.id} title={todo.title} description={todo.description} />
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