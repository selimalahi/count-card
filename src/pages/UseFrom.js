import React, { useState } from "react";
import "./UseFrom.css";

const UseFrom = () => {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const data = {
        firstName,
        lasttName,
        email,
        password
    }
    console.log(data);
  };
  return (
    <div className="...">
      <form className="..." onSubmit={submit}>
        <div className="flex-card">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex-card">
          <label htmlFor="name">Last-Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="flex-card">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="flex-card">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="name"
            id="name"
            onBlur={(e) => setpassword(e.target.value)}
          />
        </div>
        <button className="..." type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseFrom;
