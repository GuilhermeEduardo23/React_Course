import { useState, useEffect } from "react";

import styles from "./Register.module.css";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const options = [
    {id: "1", span: "Nome:", type: "text", name: "displayName", placeholder: "Nome do usuário", value: displayName, set: setDisplayName},
    {id: "2", span: "E-mail:", type: "email", name: "email", placeholder: "E-mail do usuário", value: email, set: setEmail},
    {id: "3", span: "Senha:", type: "password", name: "password", placeholder: "Insira sua senha", value: password, set: setPassword},
    {id: "4", span: "Confirmação de senha:", type: "password", name: "confirmPassword", placeholder: "Confirme a sua senha", value: confirmPassword, set: setConfirmPassword}
  ];

  const handleSubmit = e => {
    e.preventDefault();
    
    setError("");

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return;
    }
  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        {options.map(option => (
          <label key={option.id}>
            <span>{option.span}</span>
            <input 
              type={option.type} 
              name={option.name} 
              required 
              placeholder={option.placeholder}
              value={option.value}
              onChange={e => option.set(e.target.value)}/>
          </label>
        ))}
        <button className="btn">Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register