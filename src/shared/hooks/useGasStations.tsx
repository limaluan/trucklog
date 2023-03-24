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
  addNewGasStation: (gasStationdata: IGasStationData) => Promise<void>;
  editGasStation: (
    gasStationdata: IGasStationData,
    idPosto: number
  ) => Promise<void>;
}

interface IGasStationData {
  nome: string;
  valorCombustivel: number;
}

const GasStationsContext = createContext({} as IGasStationContextData);

export function GasStationProvider({
  children,
}: IGasStationProviderProps): JSX.Element {
  const [gasStations, setGasStations] = useState<IGasStations[]>([]);

  const getGasStations = () => {
    fetch(api + "posto")
      .then((response) => response.json())
      .then((data) => setGasStations(data));
  };
  useEffect(() => {
    getGasStations();
  }, []);

  const addNewGasStation = async (gasStationdata: IGasStationData) => {
    console.log("entrou", gasStationdata);
    try {
      const response = await fetch(api + `/posto?idColaborador=42`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(gasStationdata),
      });

      if (response.ok) {
        alert("Posto cadastrado");
        getGasStations();
      } else {
        alert("Ocorreu um erro ao cadastrar um posto");
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editGasStation = async (
    gasStationdata: IGasStationData,
    idPosto: number
  ) => {
    console.log("entrou", gasStationdata);
    try {
      const response = await fetch(
        api + `/posto?idColaborador=42&idPosto=${idPosto}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(gasStationdata),
        }
      );
    } catch (error) {}
  };

  return (
    <GasStationsContext.Provider
      value={{ gasStations, addNewGasStation, editGasStation }}
    >
      {children}
    </GasStationsContext.Provider>
  );
}

export function useGasStations(): IGasStationContextData {
  const context = useContext(GasStationsContext);

  return context;
}
