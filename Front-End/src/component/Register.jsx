import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:6060/api/v1/admin/save", {
                username: username,
                password: password,
            });

            if (response.status === 200) {
                alert("Admin Registration Successful");
                setUsername("");
                setPassword("");
                navigate('/dashboard');
            } else {
                alert("Registration failed");
            }
        } catch (err) {
            console.error("Error during registration:", err);
            alert("An error occurred during registration. Please try again.");
        }
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <h1>Admin Registration</h1>
                <form onSubmit={save}>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
