import Iron from "@hapi/iron";
import { MAX_AGE, setTokenCookie } from "./auth-cookie";

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const setLoginSession = async (res, metaData) => {
  const session = {
    ...metaData,
    createdAt: Date.now(),
    maxAge: MAX_AGE,
  };

  const token = await Iron.seal(session, TOKEN_SECRET, Iron.defaults);
  setTokenCookie(res, token);
  return token;
};