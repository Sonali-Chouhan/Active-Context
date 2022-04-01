import React, { useState, useEffect } from "react";
const MyComponent = () => {
  const [state, setState] = useState({ userList: [], id: 0 });

  const handleSave = (event) => {
    event.preventDefault();
    let userList = state.userList;
    userList.push({ id: state.id + 1, name: state.name,email:state.email, status: state.status });
    setState({
      ...state,
      userList,
      name: "",
      email:'',
      status: "",
      id: state.id + 1,
    });
  };

  const handleStatusChange = (id) => {
    let userList = state.userList;
    userList.forEach((item) => {
      if (item.id === id) {
        item.status = item.status === "true" ? "false" : "true";
      }
    });
    setState({ ...state, userList });
  };

  return (
    <div className="Example">
       <form className="formDiv">
       <h1>Form</h1>   
        <input
          type="text"
          value={state.name}
          placeholder="Enter Your Name"
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
         <input
          type="text"
          value={state.email}
          placeholder="Enter Your Email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <br />
        <select
          onChange={(e) => setState({ ...state, status: e.target.value })}
        >
          <option value="">Select one</option>
          <option value={true}>active</option>
          <option value={false}>Inactive</option>
        </select>
        <br />
        <button onClick={handleSave}>Save</button>
      </form>
      <div className="tableDiv">
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {state.userList
              .filter((el) => {
                return el.status === "true";
              })
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <button onClick={() => handleStatusChange(user.id)}>
                      {" "}
                      Action
                    </button>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="tableDiv">
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {state.userList
              .filter((el) => {
                return el.status === "false";
              })
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <button onClick={() => handleStatusChange(user.id)}>
                      {" "}
                      InAction
                    </button>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyComponent;
