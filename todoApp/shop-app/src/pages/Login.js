const Login = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card p-5">
                        <h3 className="text-success">Welcome to Back</h3>
                        <hr></hr>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                        }}>
                            
                            <div className="form-grpup my-2">
                                <label>Email Name</label>
                                <input type="text" className="form-control" name="email" />
                            </div>
                            <div className="form-grpup my-2">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" />
                            </div>
                            <button className="btn btn-primary w-100 mt-3" >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;