// services/CompraService.ts
export interface Compra {
  telefone: string;
  Cpf: string;
  NomeCompleto: string;
  Nomedoplano: string;
  FormaDepagamento: string;
  tipoDepagamento: string;
}

export interface Agendamento {
  nome: string;
  email: string;
  especialidade: string;
  dataConsulta: string;
  horario: string;
  telefone: string;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
}

const API_URL = "http://localhost:3000";

class CompraService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_URL;
  }

  // Criar uma nova compra
  async criarCompra(compra: Compra): Promise<Compra> {
    try {
      const response = await fetch(`${this.baseUrl}/Compra`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(compra),
      });

      if (!response.ok) throw new Error("Erro ao criar compra");
      return await response.json();
    } catch (error) {
      console.error("Erro ao criar compra:", error);
      throw error;
    }
  }

  // Criar um novo agendamento
  async criarAgendamento(agendamento: Agendamento): Promise<Agendamento> {
    try {
      const response = await fetch(`${this.baseUrl}/Agendamento`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(agendamento),
      });

      if (!response.ok) throw new Error("Erro ao criar agendamento");
      return await response.json();
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
      throw error;
    }
  }

  // Listar todos os usuários
  async listarUsuarios(): Promise<Usuario[]> {
    try {
      const response = await fetch(`${this.baseUrl}/usuarios`, {
        method: "GET",
      });

      if (!response.ok) throw new Error("Erro ao listar usuários");
      return await response.json();
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      throw error;
    }
  }
}

export const compraService = new CompraService();
