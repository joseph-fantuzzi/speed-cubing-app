import { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { magic } from "../../lib/magic";
import { UserContext } from "../../lib/UserContext";
import Logo from "./logo";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push("/login");
    });
  };

  return (
    <header>
      <nav>
        <ul>
          {user?.loading ? (
            <div style={{ height: "38px" }}></div>
          ) : user?.issuer ? (
            <>
              <Logo />
              <div className="link-container">
                <li className="link">
                  <Link href="/">Home</Link>
                </li>
                <li className="link">
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="btn" onClick={logout}>
                  Logout
                </li>
              </div>
            </>
          ) : (
            <li className="btn">
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <style jsx>{`
        header {
          margin: 2em 0;
        }
        nav {
          width: 90%;
          margin: 0 auto;
        }
        ul {
          list-style-type: none;
          display: flex;
          justify-content: space-between;
          padding: 0;
        }
        .link-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 3em;
        }
        li {
          font-size: 1.1em;
          font-weight: 700;
        }
        .link {
          transition: all 0.3s ease;
        }
        .link:hover {
          color: #fd2bc2;
        }
        .btn {
          background-color: #fd2bc2;
          border: 2px solid #fd2bc2;
          border-radius: 10px;
          padding: 0.5em 1em;
          color: white;
          box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn:hover {
          background-color: #fd2bc25f;
          box-shadow: none;
        }

        @media (min-width: 800px) {
          nav {
            width: 70%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
