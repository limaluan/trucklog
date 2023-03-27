import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";
import { AuthContext } from "../context/AuthContext";

interface IRoutesProviderProps {
  children: ReactNode;
}

export interface IRoutes {
  descricao: string;
  localPartida: string;
  localDestino: string;
  idRota: string;
  idUsuario: number;
  status: "ATIVO" | "INATIVO";
}

interface IRoutesContextData {
  getRoutes: () => void;
  routes: IRoutes[];
}

const RouteContext = createContext({} as IRoutesContextData);

export function RouteProvider({ children }: IRoutesProviderProps): JSX.Element {
  const [routes, setRoutes] = useState<IRoutes[]>([]);
  const { token } = useContext(AuthContext);

  const getRoutes = () => {
    fetch(api + "rota", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRoutes(data);
        console.log(data);
      });
  };

  return (
    <RouteContext.Provider value={{ getRoutes, routes }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoutes(): IRoutesContextData {
  const context = useContext(RouteContext);

  return context;
}
