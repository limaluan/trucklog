import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

interface IChildren {
  children: React.ReactNode;
}

interface IAuthContext {
  handleLogin: (user: IUser) => Promise<void>;
  handleLogout: () => void;
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
        const userLogin = user.login;
        localStorage.setItem("token", token);
        setToken(token);

        setUserLogin(userLogin);

        navigate("/usuario/");
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
      value={{ handleLogin, handleLogout, token, userLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
