import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";

interface IUserProps {
  children: ReactNode;
}

export interface IUser {
  login: string;
  senha: string;
  nome: string;
  email: string;
  documento: string;
  idUsuario: number;
  status: "ATIVO" | "INATIVO";
  idCargo: number;
  //statusMotorista: "DISPONIVEL" | "EM_ESTRADA"; removido do backend
}

export interface IUserComplete {
  idUsuario: number;
  login: string;
  nomeUsuario: string;
  email: string;
  documento: string;
  statusUsuario: "INATIVO" | "ATIVO";
  idCargo: number;
  nome: string;
  idCaminhao: number;
  modelo: string;
  placa: string;
  nivelCombustivel: number;
  statusCaminhao: "ESTACIONADO" | "EM_VIAGEM";
  statusGeralCaminhao: "INATIVO" | "ATIVO";
  idRota: number;
  descricaoRota: string;
  localPartida: string;
  localDestino: string;
  statusRota: "INATIVO" | "ATIVO";
  idPosto: number;
  nomePosto: string;
  valorCombustivel: number;
  statusPosto: "INATIVO" | "ATIVO";
  idViagem: number;
  descricaoViagem: number;
  dataInicio: string;
  dataFim: string;
  statusViagem: "EM_ANDAMENTO" | "FINALIZADA";
}

interface IRemoveUserData {
  idUsuario: number;
}
interface IUserData {
  nome: string;
  valorCombustivel: number;
}

interface IUserContextData {
  users: IUser[];
  addNewUser: (userData: IUserData) => Promise<void>;
  editUser: (user: IUserData, idUsuario: number) => Promise<void>;
  removeUser: (idPosto: number) => Promise<void>;
}

const UsersContext = createContext({} as IUserContextData);

export function UserProvider({ children }: IUserProps): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = () => {
    fetch(api + "usuario", {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOjUsImxvZ2luIjoiZnJvbnQiLCJjYXJnb3MgIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNjc5NzAyNDAwLCJleHAiOjE2Nzk4NTMzODd9.aEXfZK3omL8ejmsROX69PS7L2nFxEgzdWvNzYmk1lSs`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const addNewUser = async (userData: IUserData) => {
    console.log("entrou", userData);
    try {
      const response = await fetch(api + `/usuario`, {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOjUsImxvZ2luIjoiZnJvbnQiLCJjYXJnb3MgIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNjc5NzAyNDAwLCJleHAiOjE2Nzk4NTMzODd9.aEXfZK3omL8ejmsROX69PS7L2nFxEgzdWvNzYmk1lSs`,

          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (userData: IUserData, idUsuario: number) => {
    console.log("entrou", userData);
    try {
      const response = await fetch(api + `/usuario/${idUsuario}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOjUsImxvZ2luIjoiZnJvbnQiLCJjYXJnb3MgIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNjc5NzAyNDAwLCJleHAiOjE2Nzk4NTMzODd9.aEXfZK3omL8ejmsROX69PS7L2nFxEgzdWvNzYmk1lSs`,

          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async (idUsuario: number) => {
    try {
      const response = await fetch(api + `/usuario/${idUsuario}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOjUsImxvZ2luIjoiZnJvbnQiLCJjYXJnb3MgIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNjc5NzAyNDAwLCJleHAiOjE2Nzk4NTMzODd9.aEXfZK3omL8ejmsROX69PS7L2nFxEgzdWvNzYmk1lSs`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContext.Provider value={{ users, addNewUser, editUser, removeUser }}>
      {children}
    </UsersContext.Provider>
  );
}
export function useUsers(): IUserContextData {
  const context = useContext(UsersContext);

  return context;
}
