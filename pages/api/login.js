import { Magic } from "@magic-sdk/admin";
import { setLoginSession } from "../../lib/auth";

export default async function login(req, res) {
  const magic = new Magic(process.env.MAGIC_SECRET_KEY);
  const didToken = req.headers.authorization.substr(7);
  const metaData = await magic.users.getMetadataByToken(didToken);
  const token = await setLoginSession(res, metaData);
  res.send({ done: true, token: token });
}
