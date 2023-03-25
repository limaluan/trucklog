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

interface ICreateTruckErrors {
  message?: string;
  errors?: string[];
}

interface ITruckContextData {
  trucks: ITruck[];
  createTruck: (truckData: ICreateTruckDTO) => Promise<boolean>;
}

export type ICreateTruckDTO = Pick<
  ITruck,
  "modelo" | "placa" | "nivelCombustivel"
>;

const TrucksContext = createContext({} as ITruckContextData);

export function TrucksProvider({ children }: ITruckProviderProps): JSX.Element {
  const [trucks, setTrucks] = useState<ITruck[]>([]);

  const getTrucks = () => {
    fetch(api + "caminhao")
      .then((response) => response.json())
      .then((data) => setTrucks(data));
  };

  useEffect(() => {
    getTrucks();
  }, []);

  const createTruck = async (truckData: ICreateTruckDTO) => {
    try {
      const response = await fetch(api + `caminhao?idColaborador=42`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(truckData),
      });

      const data = await response.json();

      if (!response.ok) {
        const error = data as ICreateTruckErrors;
        error?.errors
          ? error.errors.forEach((errorMsg) => {
              return toast.error(errorMsg);
            })
          : toast.error(error.message);
      } else {
        toast.success("Caminhão Cadastrado!");
      }

      getTrucks();
      return response.ok;
    } catch (e) {
      // console.log(e);
      return false;
    }
  };

  return (
    <TrucksContext.Provider value={{ trucks, createTruck }}>
      {children}
      <ToastContainer style={{ zIndex: 9999999 }} />
    </TrucksContext.Provider>
  );
}

export function useTrucks(): ITruckContextData {
  const context = useContext(TrucksContext);

  return context;
}
