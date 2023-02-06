import axios from "axios"

class UserService {
    signup = (data) => {
        return axios.post('http://localhost:8080/user/signup', {...data})
                    .then((response) => {
                        console.log(response)
                        if(response.data.success) {
                            return {
                                success: true
                            }
                        }
                        return {
                            error: response.data.error,
                        }
                    }).catch((err) => {
                        console.log(err)
                        return {
                           error: err
                        }
                    })
    }
    login = (data) => {
        return axios.post('http://localhost:8080/user/login', {...data})
                    .then((response) => {
                        if(response.data.success) {
                            return {
                                token: response.data.token
                            }
                        }
                        return {
                            error: response.data.error,
                        }
                    }).catch((err) => {
                        console.log(err)
                        return {
                            error: err
                        }
                    })
    }

    getProfile = () => {
            const headers = {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
            return axios.get('http://localhost:8080/user/profile', {headers: headers})
                        .then((response) => {
                            if(response.data.success) {
                                return {
                                    user: response.data.data
                                }
                            }
                            return {
                                user: null,
                            }
                        }).catch((err) => {
                            console.log(err)
                            return {
                               error: err
                            }
                        })
    }
}

const userService = new UserService()
export default userService;