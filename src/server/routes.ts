import * as express from "express";
import db from "./db";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  const id = Number(req.params.id);
  if (id) {
    try {
    } catch (error) {}
  } else {
    try {
      res.send(await db.chirpr.all());
    } catch (error) {
      next(error);
    }
  }
});

router.post("/", async (req, res) => {
  try {
    const userId = parseInt(req.body.userid);
    const content = req.body.content;

    let dbRes = await db.chirpr.post(userId, content);
    res.send(dbRes);
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const chirpid = req.params.id;
    const content = req.body.content;

    let dbRes = await db.chirpr.put(content, chirpid);
    res.send(dbRes);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let chirpid = req.params.id;
    const content = req.body.content;

    let dbRes = await db.chirpr.destroy(chirpid);
    res.send(dbRes);
  } catch (error) {
    console.error(error);
  }
});

export default router;
