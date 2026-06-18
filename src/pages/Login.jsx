import "./Auth.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(
      email,
      password
    );

    if (success) {
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
  <Helmet>
    <title>Login | Jai Chamunda Furniture</title>
    <meta
      name="description"
      content="Login to your Jai Chamunda Furniture account."
    />
  </Helmet>

  {/* Existing Login JSX */}
  <div className="auth">
      <form
        className="auth-card"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have account?
          <a href="/#/register">
            {" "}Register
          </a>
        </p>
      </form>
    </div>
</>
    
  );
}

export default Login;