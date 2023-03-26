import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../utils/api";

interface IUserProps {
  children: ReactNode;
}

export interface IAdminUser {
  login: string;
  senha: string;
  nome: string;
  email: string;
  documento: string;
  idUsuario: number;
  status: "ATIVO" | "INATIVO";
  //statusMotorista: "DISPONIVEL" | "EM_ESTRADA"; removido do backend
}

export interface iUserComplete {
  idUsuario: number;
  login: string;
  nomeUsuario: string;
  email: string;
  documento: string;
  statusUsuario: "INATIVO" | "ATIVO";
  idCargo: number;
  nome: string;
  idCaminhao: number;
  modelo: string;
  placa: string;
  nivelCombustivel: number;
  statusCaminhao: "ESTACIONADO" | "EM_VIAGEM";
  statusGeralCaminhao: "INATIVO" | "ATIVO";
  idRota: number;
  descricaoRota: string;
  localPartida: string;
  localDestino: string;
  statusRota: "INATIVO" | "ATIVO";
  idPosto: number;
  nomePosto: string;
  valorCombustivel: number;
  statusPosto: "INATIVO" | "ATIVO";
  idViagem: number;
  descricaoViagem: number;
  dataInicio: string;
  dataFim: string;
  statusViagem: "EM_ANDAMENTO" | "FINALIZADA";
}
