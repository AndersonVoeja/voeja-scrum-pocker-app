import api from "@/helpers/api";
import { Table } from "@/interface/table";
import { tableSchemaProps } from "@/schemas/table.schema";

export const createTable = async (
  payload: tableSchemaProps
): Promise<Table> => {
  const { data } = await api.post<Table>("/rooms", payload);
  return data;
};

export const getTable = async (id: string): Promise<Table> => {
  const { data } = await api.get<Table>(`/rooms/${id}`);
  return data;
};
