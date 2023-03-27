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
  createTruck: (truckData: ICreateTruckDTO) => Promise<boolean>;
  editTruck: (id: number, nivelGasolina: number) => Promise<boolean>;
  deleteTruck: (truckId: number) => Promise<boolean>;
}

export type ICreateTruckDTO = Pick<
  ITruck,
  "modelo" | "placa" | "nivelCombustivel"
>;

const TrucksContext = createContext({} as ITruckContextData);

export function TrucksProvider({ children }: ITruckProviderProps): JSX.Element {
  const [trucks, setTrucks] = useState<ITruck[]>([]);
  const { token } = useContext(AuthContext);

  const getTrucks = () => {
    fetch(api + "caminhao", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(truckData),
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
        toast.success("Caminhão Cadastrado!");
      }

      getTrucks();
      return response.ok;
    } catch (e) {
      // console.log(e);
      return false;
    }
  };

  const editTruck = async (id: number, gas: number) => {
    try {
      const response = await fetch(
        api +
          `/caminhao/abastecer?idCaminhao=${id}&Quantidade%20de%20gasolina=${gas}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );

      !response.ok
        ? toast.error("Quantidade de gasolina inválida.")
        : toast.success("Caminhão abastecido!");

      getTrucks();
      return response.ok;
    } catch (e) {
      toast.error("Quantidade de gasolina inválida.");
      return false;
    }
  };

  const deleteTruck = async (truckId: number) => {
    try {
      const response = await fetch(api + `/caminhao?idCaminhao=${truckId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        toast.warning("Caminhão deletado com sucesso!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível deletar!");
      return false;
    }

    getTrucks();
    return true;
  };

  return (
    <TrucksContext.Provider
      value={{ trucks, createTruck, editTruck, deleteTruck }}
    >
      {children}
      <ToastContainer style={{ zIndex: 9999999 }} />
    </TrucksContext.Provider>
  );
}

export function useTrucks(): ITruckContextData {
  const context = useContext(TrucksContext);

  return context;
}
