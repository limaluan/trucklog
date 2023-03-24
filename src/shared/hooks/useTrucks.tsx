import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";

interface ITruckProviderProps {
  children: ReactNode;
}

interface ITruck {
  modelo: string;
  placa: string;
  nivelCombustivel: number;
  idCaminhao: number;
  statusCaminhao: "ESTACIONADO" | "EM_VIAGEM";
  status: "ATIVO" | "INATIVO";
  idUsuario: number;
}

interface ITruckContextData {
  trucks: ITruck[];
}

const TrucksContext = createContext({} as ITruckContextData);

export function TrucksProvider({ children }: ITruckProviderProps): JSX.Element {
  const [trucks, setTrucks] = useState<ITruck[]>([]);

  useEffect(() => {
    fetch(api + "caminhao")
      .then((response) => response.json())
      .then((data) => setTrucks(data));
  }, []);

  return (
    <TrucksContext.Provider value={{ trucks: trucks }}>
      {children}
    </TrucksContext.Provider>
  );
}

export function useTrucks(): ITruckContextData {
  const context = useContext(TrucksContext);

  return context;
}
