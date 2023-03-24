import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";

interface IGasStationProviderProps {
  children: ReactNode;
}

interface IGasStations {
  nome: string;
  valorCombustivel: number;
  idPosto: number;
  status: string;
  idUsuario: string;
}

interface IGasStationContextData {
  gasStations: IGasStations[];
}

const GasStationsContext = createContext({} as IGasStationContextData);

export function GasStationProvider({
  children,
}: IGasStationProviderProps): JSX.Element {
  const [gasStations, setGasStations] = useState<IGasStations[]>([]);

  useEffect(() => {
    fetch(api + "posto")
      .then((response) => response.json())
      .then((data) => setGasStations(data));
  }, []);

  return (
    <GasStationsContext.Provider value={{ gasStations }}>
      {children}
    </GasStationsContext.Provider>
  );
}

export function useGasStations(): IGasStationContextData {
  const context = useContext(GasStationsContext);

  return context;
}
