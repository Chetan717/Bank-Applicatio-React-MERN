import React, { useState } from "react";
import { Route } from "react-router-dom";
import LoginForm from "./Login";

const Landing = () => {
  const [sahi, setSahi] = useState(false);
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
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand" href="#">
              <h1 class="fw-bold text-white">EASYBANK</h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div> */}
          </nav>
          <LoginForm setSahi={setSahi} />
        </>
      ) : (
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand" href="#">
              <h1 class="fw-bold text-white">EASYBANK</h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div> */}
          </nav>
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
        </>
      )}
    </>
  );
};

export default Landing;
