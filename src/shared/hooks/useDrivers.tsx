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
  cpf: string;
  rg: string;
  cnh: string;
  nomeMae: string;
  nomePai: string;
  tituloEleitor: string;
  sexo: "M" | "F";
}

interface IDriverContextData {
  drivers: IDriver[];
}

const DriversContext = createContext({} as IDriverContextData);

export function DriversProvider({
  children,
}: IDriverProviderProps): JSX.Element {
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  useEffect(() => {
    fetch(api + "dados-pessoais")
      .then((response) => response.json())
      .then((data) => setDrivers(data));
  }, []);

  return (
    <DriversContext.Provider value={{ drivers }}>
      {children}
    </DriversContext.Provider>
  );
}

export function useDrivers(): IDriverContextData {
  const context = useContext(DriversContext);

  return context;
}
