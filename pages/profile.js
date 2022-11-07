import { useContext } from "react";
import { UserContext } from "../lib/UserContext";
import Loading from "./components/loading";

const Profile = () => {
  const [user] = useContext(UserContext);

  return (
    <>
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <>
            <div className="label">Email</div>
            <div className="profile-info">{user.email}</div>

            <div className="label">User Id</div>
            <div className="profile-info">{user.issuer}</div>
          </>
        )
      )}
    </>
  );
};

export default Profile;
