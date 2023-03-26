import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";
import { AuthContext } from "../context/AuthContext";

interface IDriverProviderProps {
  children: ReactNode;
}

export interface IDriver {
  nome: string;
  usuario: string;
  senha: string;
  email: string;
  documento: number; // Era a CNH
  idUsuario: number;
  status: "ATIVO" | "INATIVO";
  //statusMotorista: "DISPONIVEL" | "EM_ESTRADA"; removido do backend
}

export interface IEditDriver extends IDriver {
  nome: string;
  senha: string;
}

interface IDriverContextData {
  drivers: IDriver[];
  createDriver(data: IDriver): Promise<void>;
  editDriver: (editDriver: IEditDriver, IdUsuario: number) => Promise<void>;
  deleteDriver: (idUsuario: number) => Promise<void>;
}

const DriversContext = createContext({} as IDriverContextData);

export function DriversProvider({
  children,
}: IDriverProviderProps): JSX.Element {
  const [driver, setDrivers] = useState<IDriver[]>([]);
  const { token } = useContext(AuthContext);

  async function createDriver(data: IDriver) {
    try {
      const response = await fetch(api + "motorista/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Motorista cadastrado com sucesso!");
        getDrivers();
      } else {
        console.log("Erro ao cadastrar motorista!");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const editDriver = async (editDriver: IEditDriver, idUsuario: number) => {
    try {
      const response = await fetch(
        `${api}/motorista?idMotorista=${idUsuario}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editDriver),
        }
      );
      console.log();
      if (response.ok) {
        getDrivers();

        console.log("Motorista editado com sucesso!");
      } else {
        console.log("Erro ao editar motorista!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDriver = async (idUsuario: number) => {
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
        getDrivers();
        console.log("Motorista removido com sucesso!");
      } else {
        console.log("Erro ao remover motorista!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDrivers = () => {
    fetch(
      api + "usuario/listar-por-cargo?cargo=ROLE_MOTORISTA&page=0&size=15",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOjUsImxvZ2luIjoiZnJvbnQiLCJjYXJnb3MgIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNjc5NzAyNDAwLCJleHAiOjE2Nzk4NTMzODd9.aEXfZK3omL8ejmsROX69PS7L2nFxEgzdWvNzYmk1lSs`,
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data.elementos), console.log(data.elementos);
      });
  };

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <DriversContext.Provider
      value={{ drivers: driver, createDriver, editDriver, deleteDriver }}
    >
      {children}
    </DriversContext.Provider>
  );
}

export function useDrivers(): IDriverContextData {
  const context = useContext(DriversContext);

  return context;
}
