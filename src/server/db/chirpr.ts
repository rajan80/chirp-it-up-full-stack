import { Query } from "./index";

const all = () => Query("SELECT * FROM chirps");
const one = (id: number) => Query("select from chirps where id=?", [id]);
const post = (userid: number, content: string) =>
  Query(`INSERT INTO chirps (userid, content) VALUE (?, ?)`, [userid, content]);

export default {
  all,
  one,
  post,
};
