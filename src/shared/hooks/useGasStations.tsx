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
  addNewGasStation: (gasStationdata: ICreateGasStation) => void;
}

interface ICreateGasStation {
  nome: string;
  valorCombustivel: number;
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

  const addNewGasStation = async (gasStationdata: ICreateGasStation) => {
    console.log("entrou", gasStationdata);
    try {
      const response = await fetch(api + `/posto?$idColaborador=${42}`, {
        method: "POST",
        headers: {
          Authorization: "41",
          "Content-type": "application/json",
        },
        body: JSON.stringify(gasStationdata),
      });

      if (response.ok) {
        alert("Posto cadastrado");
      } else {
        alert("Ocorreu um erro ao cadastrar um posto");
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GasStationsContext.Provider value={{ gasStations, addNewGasStation }}>
      {children}
    </GasStationsContext.Provider>
  );
}

export function useGasStations(): IGasStationContextData {
  const context = useContext(GasStationsContext);

  return context;
}
