import "./Auth.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Register() {
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    const success = register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if(!success){
        alert("Email already exists");
        return;
    }

    navigate("/profile");
  };

  return (
    <>
  <Helmet>
    <title>Register | Jai Chamunda Furniture</title>
    <meta
      name="description"
      content="Create your Jai Chamunda Furniture account."
    />
  </Helmet>

  {/* Existing Register JSX */}
  <div className="auth">
      <form
        className="auth-card"
        onSubmit={handleSubmit}
      >
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value,
            })
          }
          required
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have account?
          <a href="/#/login">
            {" "}Login
          </a>
        </p>
      </form>
    </div>
</>
    
  );
}

export default Register;