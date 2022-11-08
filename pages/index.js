import { useContext } from "react";
import { UserContext } from "../lib/UserContext";
import Loading from "./components/loading";
import Cube from "./components/cube";

export default function Home() {
  const [user] = useContext(UserContext);

  return <>{user?.loading ? <Loading /> : user?.issuer && <Cube />}</>;
}
