import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:6060/api/v1/admin/login", {
                username: username,
                password: password,
            });

            if (response.data.message === "Login Success") {
                navigate('/dashboard');
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            console.error("Error during login:", err);
            alert("An error occurred during login. Please try again.");
        }
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <h2>Login</h2>
                <hr />
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <form>
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

                        <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
                        <Link to="/register" className="btn btn-link ms-3">New Admin? Register here</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
