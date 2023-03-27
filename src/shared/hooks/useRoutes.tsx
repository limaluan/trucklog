import { createContext, ReactNode, useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IApiError } from "../../@types/api";

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
  createRoute: (route: IRoutesData) => Promise<boolean>;
  editRoute: (route: IRoutesData, idRota: number) => Promise<boolean>;
  deleteRoute: (idRota: number) => Promise<boolean>;
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

      const data = await response.json();

      if (!response.ok) {
        const error = data as IApiError;
        error?.errors
          ? error.errors.forEach((errorMsg) => {
              return toast.error(errorMsg);
            })
          : toast.error(error.message);
      } else {
        toast.success("Rota Cadastrada!");
      }

      getRoutes();
      return response.ok;
    } catch (e) {
      // console.log(e);
      return false;
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

      const data = await response.json();

      if (!response.ok) {
        const error = data as IApiError;
        error?.errors
          ? error.errors.forEach((errorMsg) => {
              return toast.error(errorMsg);
            })
          : toast.error(error.message);
      } else {
        toast.warning("Rota alterada!");
      }

      getRoutes();
      toast.warning("Rota alterada!");
      return response.ok;
    } catch (e) {
      // console.log(e);
      return false;
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
        toast.warning("Rota deletada com sucesso!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível deletar!");
      return false;
    }

    getRoutes();
    return true;
  };

  return (
    <RouteContext.Provider
      value={{ getRoutes, createRoute, editRoute, deleteRoute, routes }}
    >
      <ToastContainer style={{ zIndex: 9999999 }} />
      {children}
    </RouteContext.Provider>
  );
}

export function useRoutes(): IRoutesContextData {
  const context = useContext(RouteContext);

  return context;
}
