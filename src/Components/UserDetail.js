import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserDetail() {
    let { id } = useParams();
    const navigate = useNavigate();

    const initialUserState = {
        id: 0,
        name: "",
        email: ""
    };

    const [currentUser, setCurrentUser] = useState(initialUserState);

    const getUser = () => {
        axios.get("http://localhost:3002/users/" + id)
            .then(result => {
                setCurrentUser(result.data);
                console.log(result);
            })
            .catch(error => { console.log(error); }
            )
    }

    useEffect(() => {
        if (id)
            getUser();
    }, [id]);

    const deleteUser = () => {
        axios.delete("http://localhost:3002/users/" + currentUser.id)
            .then(result => {
                console.log(result);
                console.log('Deleted Successfully.');
                navigate("/users");
            })
            .catch(error => { console.log(error); })
    }

    return (
        <div>

            <div class="card">
                <div class="card-header">
                    Details of <b>{currentUser.name}</b>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">User Id: {currentUser.id}</li>
                    <li class="list-group-item">User Name: {currentUser.name}</li>
                    <li class="list-group-item">User Email: {currentUser.email}</li>
                </ul>
                <div class="card-footer">
                    <button onClick={deleteUser} className="btn btn-danger">Delete</button>
                    <Link to="/users" className="btn btn-secondary">User List</Link>
                </div>
            </div>


        </div>
    )
}

export default UserDetail;