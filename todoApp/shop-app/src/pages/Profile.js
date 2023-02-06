import useUserHook from "../hook/useUserHook";

const Profile = () => {
    const {user,  loading} = useUserHook();

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card p-3">
                        <h1>Hello {user?.firstName}</h1>
                        <h5>Email : {user.email}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;