import { useState } from "react";
import userService from "../services/UserService";
const Login = () => {
    const defaultFormData  = {
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(defaultFormData);
    const [alerMessage, setAlerMessage] = useState('');

    const onSetFormData = (key, value) => {
        const newFormdata = {...formData, [key]: value}
        setFormData(newFormdata);
    }
    const handleSumbit = async (event) => {
        event.preventDefault()
        const {token, error} =   await userService.login(formData)
        if(token){
            //store token in browser
            console.log(token)
            await localStorage.setItem("token", token)
            setAlerMessage("Login Successfully")
            setTimeout(() => {
                window.location.replace('/profile')
            }, 3000)
        }else {
            setAlerMessage(error)
        }
        
    }
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card p-5">
                        <h3 className="text-success">Welcome to Back</h3>
                        <hr></hr>
                        <p>{alerMessage}</p>
                        <form onSubmit={handleSumbit}>
                            
                            <div className="form-grpup my-2">
                                <label>Email Name</label>
                                <input type="text" className="form-control" value={formData.email} onChange={(event) => onSetFormData('email', event.target.value)}  name="email"  />
                            </div>
                            <div className="form-grpup my-2">
                                <label>Password</label>
                                <input type="password" className="form-control"  value={formData.password} onChange={(event) => onSetFormData('password', event.target.value)}  name="password"  />
                            </div>
                            <button className="btn btn-primary w-100 mt-3" type="submit" >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;