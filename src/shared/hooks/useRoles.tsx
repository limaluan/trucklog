import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";
import { AuthContext } from "../context/AuthContext";

interface IRolesProviderProps {
  children: ReactNode;
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
//statusMotorista: "DISPONIVEL" | "EM_ESTRADA"; removido do backend

export interface IEditByRole extends IUserComplete {
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

interface IRolesContextData {
  users: IUserComplete[];
  createWithRole(data: IUserComplete): Promise<void>;
  editUserByRole: (editDriver: IEditByRole, IdUsuario: number) => Promise<void>;
  deleteUserByRole: (idUsuario: number) => Promise<void>;
  getAllUsers: () => Promise<void>;
}

const RolesContext = createContext({} as IRolesContextData);

export function RolesProvider({ children }: IRolesProviderProps): JSX.Element {
  const { token } = useContext(AuthContext);
  const [allUsers, setAllUsersInfo] = useState<IUserComplete[]>([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch(
        api + "usuario/relatorio-completo?page=0&size=75",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.elementos);
        setAllUsersInfo(data.elementos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  async function createWithRole(data: IUserComplete) {
    try {
      const response = await fetch(
        api + "usuario/relatorio-completo?page=0&size=100",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,

            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("Cadastrado com sucesso!");
      } else {
        console.log("Erro ao cadastrar!");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const editUserByRole = async (edit: IEditByRole, idUsuario: number) => {
    try {
      const response = await fetch(
        `${api}/motorista?idMotorista=${idUsuario}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,

            "Content-Type": "application/json",
          },
          body: JSON.stringify(edit),
        }
      );
      console.log();
      if (response.ok) {
        getAllUsers();
        console.log("Editado com sucesso");
      } else {
        console.log("Erro ao editar usuario");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserByRole = async (idUsuario: number) => {
    console.log(idUsuario);
    try {
      const response = await fetch(`${api}/usuario?idUsuario=${idUsuario}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log();
      if (response.ok) {
        console.log("Usuario removido com sucesso!");
        getAllUsers();
      } else {
        console.log("Erro ao remover usuario!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RolesContext.Provider
      value={{
        users: allUsers,
        getAllUsers,
        createWithRole,
        editUserByRole,
        deleteUserByRole,
      }}
    >
      {children}
    </RolesContext.Provider>
  );
}

export function useRoles(): IRolesContextData {
  const context = useContext(RolesContext);

  return context;
}
