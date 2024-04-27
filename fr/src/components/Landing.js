import React, { useState } from "react";
import { Route } from "react-router-dom";
import LoginForm from "./Login";

const Landing = () => {
  const [sahi, setSahi] = useState(false)
  const handleLogin = () => {
    // Check if user is logged in
    const loggedIn = sessionStorage.getItem("loggedIn") === "true";
    if (loggedIn) {
      setSahi(true); // Update state to show authenticated content
    }
  };

  // Call handleLogin when component mounts
  React.useEffect(() => {
    handleLogin();
  }, [sahi]);
  return (
    <>
      {sahi === false ? (
        <LoginForm setSahi={setSahi} />
      ) : (
        <div className="container landing">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="row">
              <div className="col-sm-4">
                <Route
                  render={({ history }) => (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        history.push("/create");
                      }}
                    >
                      Create New Account
                    </button>
                  )}
                />
              </div>
              <div className="col-sm-4">
                <Route
                  render={({ history }) => (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        history.push("/accountDetails");
                      }}
                    >
                      Get Account Details
                    </button>
                  )}
                />
              </div>
              <div className="col-sm-4">
                <Route
                  render={({ history }) => (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        history.push("/deposit");
                      }}
                    >
                      Deposite Fund
                    </button>
                  )}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-2">
                <Route
                  render={({ history }) => (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        history.push("/withdraw");
                      }}
                    >
                      Withdraw Fund
                    </button>
                  )}
                />
              </div>
              <div className="col-sm-4">
                <Route
                  render={({ history }) => (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        history.push("/trasations");
                      }}
                    >
                      Get All Trasation Details
                    </button>
                  )}
                />
              </div>
            </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Landing;
