import { useState } from "react";
import userService from "../services/UserService";

const Signup = () => {
    const defaultFormData  = {
        firstName : '', 
        lastName: '',
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(defaultFormData)

    const [alerMessage, setAlerMessage] = useState('');

    const onSetFormData = (key, value) => {
        const newFormdata = {...formData, [key]: value}
        setFormData(newFormdata);
    }
    const handleSumbit = async (event) => {
        event.preventDefault()
        const {success, error} =   await userService.signup(formData)
        if(success){
            setAlerMessage("Account has been created")
        }else {
            setAlerMessage(error)
        }
        
    }
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card p-5">
                        <h3 className="text-success">Welcome to Shop App</h3>
                        <hr></hr>
                        <p>{alerMessage}</p>
                        <form onSubmit={handleSumbit}>
                            <div className="form-grpup my-2">
                                <label>First Name</label>
                                <input type="text" className="form-control" value={formData.firstName} onChange={(event) => onSetFormData('firstName', event.target.value)} name="firstName" />
                            </div>
                            <div className="form-grpup my-2">
                                <label>Last Name</label>
                                <input type="text" className="form-control" value={formData.lastName} onChange={(event) => onSetFormData('lastName', event.target.value)}  name="lastName" />
                            </div>
                            <div className="form-grpup my-2">
                                <label>Email Name</label>
                                <input type="text" className="form-control" value={formData.email} onChange={(event) => onSetFormData('email', event.target.value)}  name="email" />
                            </div>
                            <div className="form-grpup my-2">
                                <label>Password</label>
                                <input type="password" className="form-control" value={formData.password} onChange={(event) => onSetFormData('password', event.target.value)}  name="password" />
                            </div>
                            <button className="btn btn-primary w-100 mt-3" >Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;