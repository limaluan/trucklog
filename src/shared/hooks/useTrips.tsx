import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";
import { AuthContext } from "../context/AuthContext";

interface ITripProviderProps {
  children: ReactNode;
}

interface ITrip {
  descricao: string;
  dataInicio: string;
  dataFim: string;
  idCaminhao: number;
  idRota: number;
  idViagem: number;
  statusViagem: "FINALIZADA" | "EM_ANDAMENTO";
  idUsuario: number;
}

interface ITripsContextData {
  trips: ITrip[];
}

const TripsContext = createContext({} as ITripsContextData);

export function TripsProvider({ children }: ITripProviderProps): JSX.Element {
  const [trips, setTrips] = useState<ITrip[]>([]);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetch(api + "viagem", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <TripsContext.Provider value={{ trips: trips }}>
      {children}
    </TripsContext.Provider>
  );
}

export function useTrips(): ITripsContextData {
  const context = useContext(TripsContext);

  return context;
}
