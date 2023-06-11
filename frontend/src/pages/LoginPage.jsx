import TextField from "@mui/material/TextField";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast.success("Logged In.");
  const dangerNotify = () => toast.error("Invalid Credentials");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin111") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      notify();
      navigate("/");
    } else {
      dangerNotify();
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="ggg">
        <div className="loginPage">
          <div className="loginbox">
            <h2>Login</h2>
            <TextField
              type="text"
              name="username"
              size="small"
              label="USERNAME"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              type="password"
              name="password"
              size="small"
              label="PASSWORD"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} className="loginbtn">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
