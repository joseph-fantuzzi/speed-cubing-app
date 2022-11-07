import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    user?.issuer && Router.push("/profile");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true);
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href,
      });

      const res = await fetch("/api/login", {
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
    } catch (error) {
      setDisabled(false);
      console.log(error);
    }
  };

  return (
    <div>
      <header>
        <h1>Speed Cubing App</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <p>Please sign in.</p>
        <div>
          <label htmlFor="email">Email</label>
          <input
            disabled={disabled}
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Login in/Sign up</button>
      </form>
    </div>
  );
}
