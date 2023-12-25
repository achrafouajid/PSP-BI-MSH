import { styled } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };
  const handleChange = (event) => {};
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src="doctordash.png" alt="" />
            <h1>Créer un compte</h1>
          </div>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Adresse Mail"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirmer Mot de passe"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Créer Compte</button>
          <span>
            Vous avez déjà un compte ? <Link to="/login">Connectez vous !</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 1rem;
  align-items: center;

  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 1px;
      text-align: center;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
        transition: 0.2s ease-in-out;
      }
    }
    button {
      background-color: #4e0eff;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export default Register;
