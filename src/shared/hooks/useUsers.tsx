import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../../utils/api";
import { AuthContext } from "../context/AuthContext";

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
  status?: "ATIVO" | "INATIVO";
  idCargo?: number;
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
  login: string;
}

interface IEditUser {
  nome: string;
  email: string;
  senha: string;
  documento: string;
  idUsuario: number;
}

export interface IUserContextData {
  users: IUser[];
  addNewUser: (userData: IEditUserData) => Promise<void>;
  editUser: (user: IEditUser) => Promise<void>;
  removeUser: (idUsuario: number) => Promise<void>;
  setCargo: (userId: number, idCargo: number) => Promise<void>;
}

const UsersContext = createContext({} as IUserContextData);

export function UserProvider({ children }: IUserProps): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);
  const { token } = useContext(AuthContext);

  const getUsers = async () => {
    await fetch(api + "usuario", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const addNewUser = async (userData: IEditUserData) => {
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
      if (response.ok) {
        toast.success("Usuário cadastrado com sucesso!");
        getUsers();
      }
      console.log(response.status);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const setCargo = async (userId: number, idCargo: number) => {
    try {
      const response = await fetch(
        api + `cargo/cadastrar-usuario?idCargo=${idCargo}&idUsuario=${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log(response.status);
        console.log("cargo alterado");
      } else {
        console.log("erro no cargo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (userData: IEditUser) => {
    console.log("entrou", userData);
    try {
      const response = await fetch(
        api + `usuario?idUsuario=${userData.idUsuario}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: userData.nome,
            senha: userData.senha,
            email: userData.email,
            documento: userData.documento,
          }),
        }
      );
      if (response.ok) {
        toast.success("Usuário alterado com sucesso!");
        console.log("usuario alterado");
      } else {
        console.log("erro ao alterar usuario");
      }
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

      if (response.ok) {
        toast.success("Usuário Removido com sucesso!");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    getUsers();
  };

  return (
    <UsersContext.Provider
      value={{ users, addNewUser, editUser, removeUser, setCargo }}
    >
      {children}
    </UsersContext.Provider>
  );
}
export function useUsers(): IUserContextData {
  const context = useContext(UsersContext);

  return context;
}
