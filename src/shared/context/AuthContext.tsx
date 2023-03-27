import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IChildren {
  children: React.ReactNode;
}

interface IAuthContext {
  handleLogin: (user: IUser) => Promise<boolean>;
  handleLogout: () => void;
  getLoggedUsers: () => Promise<void>;
  token: string;
  userLogin: string;
}

interface IUser {
  login: string;
  senha: string;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const [userLogin, setUserLogin] = useState<string>("");

  const handleLogin = async (user: IUser) => {
    try {
      const response = await fetch(`${api}/auth`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/usuario/dashboard");
        return true;
      }
      
      return false;
    } catch (error) {
      console.error(error);
      toast.error("Houve um erro inesperado.")
      return false;
    }
  };

  const getLoggedUsers = async () => {
    try {
      const response = await fetch(`${api}/auth/usuario-logado`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const loggedUser = await response.json();
        setUserLogin(loggedUser.nome);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleLogout, getLoggedUsers, token, userLogin }}
    >
      <ToastContainer style={{ zIndex: 999999 }} />
      {children}
    </AuthContext.Provider>
  );
};
