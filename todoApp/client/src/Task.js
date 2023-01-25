const Task = (props) => {
    return (
        <div className="border  p-3 my-2">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <hr></hr>
            <p className="text-end">
                <button className="btn btn-outline-primary mx-2">Edit</button>
                <button className="btn btn-danger mx-2">Delete</button>
            </p>
        </div>
    )
}

export default Task;