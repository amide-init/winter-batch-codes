const AddandEdit = ({data, setData,  uploadData, editData, loading, isEdit}) => {
    return (
        <div className="row justify-content-center">
            <div className="border py-3 mx-3">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={data.title} placeholder="write title here" onChange={(event) => {
                        setData({ ...data, title: event.target.value })
                    }} className="form-control " />
                </div>
                <div className="form-group my-3">
                    <label>Description</label>
                    <input type="text" value={data.description} placeholder="write description here" onChange={(event) => {
                        setData({ ...data, description: event.target.value })
                    }} className="form-control " />
                </div>
                {!isEdit ? 
                <button className="btn btn-success w-100" onClick={() => uploadData()}>{loading ? 'Adding ...' : 'Add'}</button> 
                : <button className="btn btn-success w-100" onClick={() => editData()}>{loading ? 'Editting ...' : 'Edit'}</button> 
                }
            </div>
        </div>
    )
}

export default AddandEdit;