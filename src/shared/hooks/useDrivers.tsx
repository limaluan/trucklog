import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";

interface IDriverProviderProps {
  children: ReactNode;
}

export interface IDriver {
  nome: string;
  usuario: string;
  senha: string;
  email: string;
  cnh: number;
  idUsuario: number;
  status: "ATIVO" | "INATIVO";
  statusMotorista: "DISPONIVEL" | "EM_ESTRADA";
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

  async function createDriver(data: IDriver) {
    try {
      const response = await fetch(api + "motorista", {
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
    console.log(idUsuario);
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
      const response = await fetch(
        `${api}/motorista?idMotorista=${idUsuario}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    fetch(api + "motorista")
      .then((response) => response.json())
      .then((data) => setDrivers(data));
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
