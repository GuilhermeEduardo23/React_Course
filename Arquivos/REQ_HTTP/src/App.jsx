import "./App.css";

import { useState, useEffect } from "react";

// 4 - import custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products/";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const product = {
    name,
    price,
  };

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  const handleRemove = (id) => {
    httpConfig(product, "DELETE");
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      {/* 6 - loading e validação de erros */}
      {loading && <p>Carregando dados...</p>}
      {error && <p style={{color: red}}>{error}</p>}
      {!error && (
        <ul>
          {items && items.map(product => (
            <li key={product.id} style={{marginBottom: 5}}>
              {product.name} - R$: {product.price}
              <button 
                style={{marginLeft: 5}} 
                onClick={() => handleRemove(product.id)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
      
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>Nome:
            <input 
              type="text" 
              value={name} 
              name="name" 
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>Preço:
            <input 
              type="number" 
              name="price" 
              value={price} 
              onChange={e => setPrice(e.target.value)}
            />
          </label>
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
    </>
  )
}

export default App