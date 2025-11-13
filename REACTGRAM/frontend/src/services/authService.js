import { api, requestConfig } from "../utils/config";

// Register an user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    // Realiza a solicitação e aguarda a resposta
    const res = await fetch(api + "/users/register", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) localStorage.setItem("user", JSON.stringify(res));

    return res;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

// Logout an user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register, logout
};

export default authService;
