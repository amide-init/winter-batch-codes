const Task = ({title, description, taskId, setData, setIsEdit, setTaskId, onDelete}) => {
     const onEdit = () => {
        setData({title: title, description: description})
        setTaskId(taskId)
        setIsEdit(true);
     }
    return (
        <div className="border  p-3 my-2">
            <h3>{title}</h3>
            <p>{description}</p>
            <hr></hr>
            <p className="text-end">
                <button className="btn btn-outline-primary mx-2" onClick={onEdit}>Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => onDelete(taskId)} >Delete</button>
            </p>
        </div>
    )
}

export default Task;