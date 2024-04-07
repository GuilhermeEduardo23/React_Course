import "./App.css";

import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Context
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App