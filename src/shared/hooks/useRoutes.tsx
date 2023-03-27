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

export interface IRoutesData {
  descricao: string;
  localPartida: string;
  localDestino: string;
}

export interface IRoutes {
  descricao: string;
  localPartida: string;
  localDestino: string;
  idRota: number;
  idUsuario: number;
  status: string;
}

interface IRoutesContextData {
  getRoutes: () => void;
  createRoute: (route: IRoutesData) => Promise<void>;
  editRoute: (route: IRoutesData, idRota: number) => Promise<void>;
  deleteRoute: (idRota: number) => Promise<void>;
  routes: IRoutes[];
}

const RouteContext = createContext({} as IRoutesContextData);

export function RouteProvider({ children }: IRoutesProviderProps): JSX.Element {
  const [routes, setRoutes] = useState<IRoutes[]>([]);
  const { token } = useContext(AuthContext);

  const getRoutes = () => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  const createRoute = async (route: IRoutesData) => {
    try {
      const response = await fetch(`${api}rota`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(route),
      });

      if (response.ok) {
        alert("Rota criada com sucesso!");
        getRoutes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editRoute = async (route: IRoutesData, idRota: number) => {
    try {
      const response = await fetch(`${api}rota?idRota=${idRota}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(route),
      });

      if (response.ok) {
        alert("Rota editada com sucesso!");
        getRoutes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRoute = async (idRota: number) => {
    try {
      const response = await fetch(`${api}rota?idRota=${idRota}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });

      if (response.ok) {
        alert("Rota deletada com sucesso!");
        getRoutes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RouteContext.Provider
      value={{ getRoutes, createRoute, editRoute, deleteRoute, routes }}
    >
      {children}
    </RouteContext.Provider>
  );
}

export function useRoutes(): IRoutesContextData {
  const context = useContext(RouteContext);

  return context;
}
