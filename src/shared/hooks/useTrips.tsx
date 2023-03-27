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

interface ITripData {
  descricao: string;
  dataInicio: string;
  dataFim: string;
  idMotorista: number;
  idCaminhao: number;
  idRota: number;
}

interface ITripsContextData {
  trips: ITrip[];
  createTrip: (data: ITripData) => Promise<void>;
  editTrip: (
    idMotorista: number,
    idViagem: number,
    descricao: string,
    dataInicio: string,
    dataFim: string
  ) => Promise<void>;
}

const TripsContext = createContext({} as ITripsContextData);

export function TripsProvider({ children }: ITripProviderProps): JSX.Element {
  const [trips, setTrips] = useState<ITrip[]>([]);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    getTrip();
  }, []);

  const getTrip = async () => {
    try {
      await fetch(api + "viagem", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setTrips(data));
    } catch (error) {
      console.error(error);
    }
  };

  const createTrip = async (data: ITripData) => {
    console.log(data);
    try {
      const response = await fetch(
        api + `viagem?idMotorista=${data.idMotorista}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            descricao: data.descricao,
            dataInicio: data.dataInicio,
            dataFim: data.dataFim,
            idCaminhao: data.idCaminhao,
            idRota: data.idRota,
          }),
        }
      );

      if (response.ok) {
        alert("Viagem cadastrada com sucesso");
        getTrip();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editTrip = async (
    idMotorista: number,
    idViagem: number,
    descricao: string,
    dataInicio: string,
    dataFim: string
  ) => {
    console.log(descricao, dataInicio, dataFim);
    try {
      const response = await fetch(
        api + `viagem?idMotorista=${idMotorista}&idViagem=${idViagem}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            descricao: descricao,
            dataInicio: dataInicio,
            dataFim: dataFim,
          }),
        }
      );

      if (response.ok) {
        alert("Viagem editada com sucesso");
        getTrip();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TripsContext.Provider value={{ trips: trips, createTrip, editTrip }}>
      {children}
    </TripsContext.Provider>
  );
}

export function useTrips(): ITripsContextData {
  const context = useContext(TripsContext);

  return context;
}
