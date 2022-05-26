import mysql from "mysql2/promise";
import { config } from "../src/config";

export const connect = async () => {
  return await mysql.createConnection(config);
};

connect();
