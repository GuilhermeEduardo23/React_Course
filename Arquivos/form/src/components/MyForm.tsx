import { FormEvent, useState } from "react";
import "./MyForm.module.css";

const MyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name);
        console.log(email);
    }

  return (
    <div>
        <h2>Formulário</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={e => setName(e.target.value)}/>
            </div>
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={e => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm