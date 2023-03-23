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

interface IDriver {
  nome: string;
  usuario: string;
  senha: string;
  email: string;
  cnh: number;
  idUsuario: number;
  status: "FINALIZADA" | "EM_ANDAMENTO";
  statusMotorista: "DISPONIVEL" | "EM_ESTRADA";
}

interface IDriverContextData {
  drivers: IDriver[];
}

const DriversContext = createContext({} as IDriverContextData);

export function DriversProvider({
  children,
}: IDriverProviderProps): JSX.Element {
  const [driver, setDrivers] = useState<IDriver[]>([]);

  useEffect(() => {
    fetch(api + "motorista")
      .then((response) => response.json())
      .then((data) => setDrivers(data));
  }, []);

  return (
    <DriversContext.Provider value={{ drivers: driver }}>
      {children}
    </DriversContext.Provider>
  );
}

export function useDrivers(): IDriverContextData {
  const context = useContext(DriversContext);

  return context;
}
