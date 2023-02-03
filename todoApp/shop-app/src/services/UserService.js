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
                            token: null,
                        }
                    }).catch((err) => {
                        console.log(err)
                        return {
                            error: err
                        }
                    })
    }

    getProfile = () => {
            // const headers = {
            //     'Authorization' : 'Bearer ' + token
            // }
            return axios.get('http://localhost:8080/user/profile')
                        .then((response) => {
                            if(response.data.success) {
                                return {
                                    data: response.data.data
                                }
                            }
                            return {
                                data: null,
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