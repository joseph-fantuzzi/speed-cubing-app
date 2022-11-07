import { useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";
import Loading from "./components/loading";

const Callback = () => {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    router.query.provider ? finishSocialLogin() : finishEmailRedirectLogin();
  }, [router.query]);

  const finishEmailRedirectLogin = () => {
    if (router.query.magic_credential)
      magic.auth.loginWithCredential().then((didToken) => authenticateWithServer(didToken));
  };

  const finishSocialLogin = async () => {
    let result = await magic.oauth.getRedirectResult();
    authenticateWithServer(result.magic.idToken);
  };

  const authenticateWithServer = async (didToken) => {
    let res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + didToken,
      },
    });

    if (res.status === 200) {
      let userMetadata = await magic.user.getMetadata();
      await setUser(userMetadata);
      Router.push("/profile");
    }
  };

  return <Loading />;
};

export default Callback;
