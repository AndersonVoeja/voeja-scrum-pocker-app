import { Table } from "@/interface/table";
import { tableSchemaProps } from "@/schemas/table.schema";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
export const createTable = async (
  payload: tableSchemaProps
): Promise<Table> => {
  const { data } = await api.post("/table", payload);
  return data;
};
