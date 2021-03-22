import { Query } from "./index";
import * as express from "express";

const all = () => Query("SELECT * FROM chirps");
const one = (id: number) => Query("select from chirps where id=?", [id]);
const post = (userid: number, content: string) =>
  Query(`INSERT INTO chirps (userid, content) VALUE (?, ?)`, [userid, content]);
const put = (content: string, chirpid: string) =>
  Query(`update chirps set content= ? where chirps.id = ?`,[content,chirpid]);

  const destroy= (chirpid:string)=>{
      Query(`DELETE FROM chirps
      WHERE chirps.id=? `,[chirpid]);
  }
  
  let router = express.Router();

  

export default {
  all,
  one,
  post,
  put,
  destroy
};
