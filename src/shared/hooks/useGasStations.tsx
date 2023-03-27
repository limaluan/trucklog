import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IApiError } from "../../@types/api";
import { AuthContext } from "../context/AuthContext";

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

interface IRemoveGasStationData {
  idPosto: number;
}

interface IGasStationContextData {
  gasStations: IGasStations[];
  addNewGasStation: (gasStationdata: IGasStationData) => Promise<boolean>;
  editGasStation: (
    gasStationdata: IGasStationData,
    idPosto: number
  ) => Promise<boolean>;
  removeGasStation: (idPosto: number) => Promise<boolean>;
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
  const { token } = useContext(AuthContext);

  const getGasStations = () => {
    fetch(api + "posto", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setGasStations(data));
  };
  useEffect(() => {
    getGasStations();
  }, []);

  const addNewGasStation = async (gasStationdata: IGasStationData) => {
    // console.log("entrou", gasStationdata);
    try {
      const response = await fetch(api + `/posto?idColaborador=42`, {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(gasStationdata),
      });

      const data = await response.json();

      if (!response.ok) {
        const error = data as IApiError;
        error?.errors
          ? error.errors.forEach((errorMsg) => {
              return toast.error(errorMsg);
            })
          : toast.error(error.message);
      } else {
        toast.success("Posto Cadastrado!");
      }

      getGasStations();
      return response.ok;
    } catch (error) {
      toast.error("Ocorreu um erro inesperado!");
      return false;
    }
  };

  const editGasStation = async (
    gasStationdata: IGasStationData,
    idPosto: number
  ) => {
    // gasStationdata.valorCombustivel = parseInt(gasStationdata.valorCombustivel, 10);
    console.log(idPosto);
    try {
      const response = await fetch(
        api + `/posto?idColaborador=42&idPosto=${idPosto}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify(gasStationdata),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const error = data as IApiError;
        error?.errors
          ? error.errors.forEach((errorMsg) => {
              return toast.error(errorMsg);
            })
          : toast.error(error.message);
      } else {
        toast.success("Posto Alterado!");
      }

      getGasStations();
      return response.ok;
    } catch (error) {
      toast.error("Ocorreu um erro inesperado!");
      return false;
    }
  };

  const removeGasStation = async (idPosto: number) => {
    try {
      await fetch(api + `/posto?idPosto=${idPosto}`, {
        method: "DELETE",
        headers: {
          Authorization:
            `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });

      toast.success("Posto Desativado!");
      getGasStations();
      return true;
    } catch (error) {
      toast.error("Houve um erro inesperado!");
      return false;
    }
  };

  return (
    <GasStationsContext.Provider
      value={{
        gasStations,
        addNewGasStation,
        editGasStation,
        removeGasStation,
      }}
    >
      <ToastContainer style={{ zIndex: 999999 }} />
      {children}
    </GasStationsContext.Provider>
  );
}

export function useGasStations(): IGasStationContextData {
  const context = useContext(GasStationsContext);

  return context;
}
