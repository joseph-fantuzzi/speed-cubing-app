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
    <div className="container">
      <div className="inner">
        <header>
          <p>Speed Cubing App</p>
        </header>
        <form className="form" onSubmit={handleSubmit}>
          <p>Please sign in.</p>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              disabled={disabled}
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button>Log in / Sign up</button>
        </form>
      </div>
      <style jsx>{`
        .container {
          min-height: calc(100vh - 164px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .inner {
          width: 100%;
          margin-bottom: 8em;
        }
        header {
          text-align: center;
          margin-bottom: 2em;
        }
        header p {
          font-size: 1.3em;
          font-weight: 700;
        }
        .form {
          box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
          border-radius: 13px;
          padding: 2em;
          width: 90%;
          margin: 0 auto;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 1.5em;
        }
        .form p {
          align-self: center;
          font-size: 1.1em;
          font-weight: 500;
        }
        .email {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 0.5em;
          color: #fd2bc2;
        }
        input {
          outline: none;
          border: 2px solid white;
          border-radius: 25px;
          padding: 0.5em 1em;
        }
        input:focus {
          border: 2px solid #fd2bc2;
        }
        button {
          border: 2px solid #fd2bc2;
          background-color: #fd2bc2;
          border-radius: 25px;
          padding: 0.8em 00;
          color: white;
          font-size: 1em;
          font-weight: 700;
          box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        button:hover {
          background-color: #fd2bc25f;
          box-shadow: none;
        }
        @media (min-width: 800px) {
          .form {
            width: 70%;
          }
        }
      `}</style>
    </div>
  );
}
