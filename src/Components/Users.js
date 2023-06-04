import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        axios.get("http://localhost:3002/users")
            .then((result) => {
                if (result.status === 200) {
                    setUsers(result?.data);
                    console.log(users);
                }
            }) // Fulfilled
            .catch((error) => {
                console.log('Rejected');
                console.log(error);
            }) // Rejected
    }



    return (
        <div>
            <br />
            <Link to="/useradd" className="btn btn-secondary">Add New User</Link>
            <br /><br />
            <h3>List of Users</h3> <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={"/userdetail/" + user.id} className="btn btn-secondary">View Detail</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    );
}

export default Users;