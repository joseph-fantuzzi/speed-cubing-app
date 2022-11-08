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
          <div className="container">
            <div className="border">
              <p className="title">Account Details</p>
              <div>
                <div className="label">Email</div>
                <p>{user.email}</p>
              </div>
              <div>
                <div className="label">Decentralized ID</div>
                <p>{user.issuer.substr(4)}</p>
              </div>
            </div>
          </div>
        )
      )}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 164px);
        }
        .border {
          box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
          border-radius: 13px;
          padding: 2em;
          width: 90%;
          display: flex;
          flex-direction: column;
          gap: 2em;
          max-width: 600px;
          margin-bottom: 8em;
          overflow-wrap: break-word;
        }
        .label {
          font-weight: 700;
          margin-bottom: 0.3em;
          color: #fd2bc2;
        }
        .title {
          font-size: 1.2em;
          font-weight: 700;
        }
        @media (min-width: 800px) {
          .border {
            width: 70%;
          }
        }
      `}</style>
    </>
  );
};

export default Profile;
