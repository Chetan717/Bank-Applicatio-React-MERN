import React, { Component } from "react";
import Detail from "./Detail";
import { Route } from "react-router-dom";

class Deposit extends Component {
  state = {
    accountNumber: "",
    depositAmount: "",
    accountInfo: null,
    messageData: null,
  };

  depositFund = () => {
    const request = new Request(
      "https://bankserver.vercel.app/account/deposit/" +
        this.state.accountNumber,
      {
        crossDomain: true,
        method: "PUT",
        redirect: "follow",
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
        body: JSON.stringify({
          amount: this.state.depositAmount,
        }),
      }
    );

    fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res.type === "success") {
          this.setState({ accountInfo: res.data });
        } else {
          this.setState({ messageData: res });
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  render() {
    var errorMessage = "";

    if (
      this.state.messageData !== null &&
      this.state.messageData.type === "danger"
    ) {
      errorMessage = (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ marginTop: "15px" }}
        >
          {this.state.messageData.message}
        </div>
      );
    }

    let detailHtml = "";
    if (this.state.accountInfo !== null) {
      detailHtml = <Detail accountInfo={this.state.accountInfo} />;
    }

    return (
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
          </nav>
      <div className="container bg-white">
        <div className="col-md-offset-1 col-md-10">
          <h2>Deposit from account</h2>
          <div className="form-group">
            <label htmlFor="exampleInputAddress">
              Please enter your account number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Account Number"
              style={{ width: "300px" }}
              value={this.state.accountNumber}
              onChange={(e) => this.setState({ accountNumber: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputAddress">
              Please enter deposit amount
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              style={{ width: "300px" }}
              value={this.state.depositAmount}
              onChange={(e) => this.setState({ depositAmount: e.target.value })}
            />
          </div>
          <Route
            render={({ history }) => (
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginRight: "15px" }}
                onClick={() => {
                  history.push("/");
                }}
              >
                Cancel
              </button>
            )}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.depositFund}
          >
            Submit
          </button>
          {errorMessage}
          {detailHtml}
        </div>
      </div>
      </>
    );
  }
}

export default Deposit;
