import * as mysql from "mysql";

import chirpr from './chirpr'
import { resolveModuleName, resolveProjectReferencePath } from "typescript";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "chirpr",
},
);
export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};






export default {
    chirpr,
    
};
