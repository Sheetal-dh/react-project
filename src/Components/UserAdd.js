import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserAdd() {

    const initialUserState = {
        id: 0,
        name: "",
        email: ""
    };

    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const navigate = useNavigate();

    const saveUser = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3002/users", user)
            .then(result => {
                console.log(result);
                setSubmitted(true);
                newUser();
                navigate("/users");

            })
            .catch(error => { console.log(error); })
    }

    const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);
    }

    return (
        <div>
            <form onSubmit={saveUser}>
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        placeholder="John Smith" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com" />
                </div>
                <div>
                    <Link to="/users" className="btn btn-secondary">User List</Link> &nbsp;| &nbsp;
                    <button className="btn btn-success">Add New User</button> &nbsp;| &nbsp;
                    <button type="reset" className="btn btn-danger">Clear</button>
                </div>
            </form>


        </div>
    )
}

export default UserAdd;