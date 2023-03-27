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
  idUsuario?: number;
  status?: "ATIVO" | "INATIVO";

  //statusMotorista: "DISPONIVEL" | "EM_ESTRADA"; removido do backend
}

export interface IUserComplete extends IUser {
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
interface IEditUserData {
  nome: string;
  email: string;
  senha: string;
  documento: string;
}

interface IUserContextData {
  users: IUserComplete[];
  addNewUser: (userData: IUser) => Promise<void>;
  editUser: (user: IEditUserData, idUsuario: number) => Promise<void>;
  removeUser: (idUsuario: number) => Promise<void>;
}

const UsersContext = createContext({} as IUserContextData);

export function UserProvider({ children }: IUserProps): JSX.Element {
  const [users, setUsers] = useState<IUserComplete[]>([]);

  const getUsers = () => {
    fetch(api + "usuario/relatorio-completo?page=0&size=71", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.elementos));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const addNewUser = async (userData: IUser) => {
    console.log("entrou", userData);
    try {
      const response = await fetch(api + `usuario`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,

          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log(response.status);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (userData: IEditUserData, idUsuario: number) => {
    console.log("entrou", userData);
    try {
      const response = await fetch(api + `usuario?idUsuario=${idUsuario}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    getUsers();
  };

  const removeUser = async (idUsuario: number) => {
    try {
      const response = await fetch(api + `/usuario?idUsuario=${idUsuario}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    getUsers();
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
