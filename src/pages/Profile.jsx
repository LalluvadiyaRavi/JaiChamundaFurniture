import "./Profile.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Profile() {
  const { user, logout } =
    useAuth();

  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="profile">
        <h2>Please login first.</h2>
      </div>
    );
  }

  return (
    <>
  <Helmet>
    <title>Profile | Jai Chamunda Furniture</title>
    <meta
      name="description"
      content="Manage your Jai Chamunda Furniture profile."
    />
  </Helmet>

  {/* Existing Profile JSX */}
  <div className="profile">
      <div className="profile-card">

        <div className="avatar">
          {user?.name[0] || "U"}
        </div>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>

      </div>
    </div>
</>
    
  );
}

export default Profile;