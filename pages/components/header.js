import { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { magic } from "../../lib/magic";
import { UserContext } from "../../lib/UserContext";

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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
