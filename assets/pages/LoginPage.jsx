import React, { useState } from "react";

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
      const value = event.currentTarget.value;
      const name = event.currentTarget.name;

      setCredentials({...credentials, [name]: value});
  }

  const handleSubmit = event => {
      event.preventDefault();
      console.log(credentials);
  }
  return (
    <>
      <h1>Connexion à l'application</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Adresse email</label>
          <input
            value={credentials.username}
            onChange={handleChange}
            type="email"
            placeholder="Adresse email de connexion"
            name="username"
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            value={credentials.password}
            type="password"
            placeholder="Mot de passe"
            name="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Je me connecte
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
