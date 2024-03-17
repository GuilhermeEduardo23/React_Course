import { useState, useEffect } from "react";

import styles from "./Register.module.css";

const Register = () => {
  const options = [
    {id: "1", span: "Nome:", type: "text", name: "displayName", placeholder: "Nome do usuário"},
    {id: "2", span: "E-mail:", type: "email", name: "email", placeholder: "E-mail do usuário"},
    {id: "3", span: "Senha:", type: "password", name: "password", placeholder: "Insira sua senha"},
    {id: "4", span: "Confirmação de senha:", type: "password", name: "confirmPassword", placeholder: "Confirme a sua senha"}
  ]

  return (
    <div>
      <h1>Cadastr-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        {options.map(option => (
          <label key={option.id}>
            <span>{option.span}</span>
            <input type={option.type} name={option.name} required placeholder={option.placeholder}/>
          </label>
        ))}
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register