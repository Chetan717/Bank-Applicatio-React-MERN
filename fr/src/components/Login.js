import React, { useState } from "react";

const LoginForm = ({setSahi}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your login logic, for simplicity, let's just check if the id and password are not empty
    if (id.trim() === "test" && password.trim() === "test123") {
      alert("Login successful!");
      setSahi(true);
    } else {
      alert("Please fill corrrect  both ID and password.");
    }
  };

  return (
    <div    style={{
        width: "300px",
        height:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
      }} className="container">
      <div className="col-md-offset-1 col-md-10">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              style={{ width: "300px" }}
              placeholder="Login ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              style={{ width: "300px" }}
              id="password"
              placeholder="Initial Deposit"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            style={{ marginRight: "15px", width: "300px"  }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
