import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "80px" }}>
        404
      </h1>

      <h2>
        Page Not Found
      </h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#b07b4f",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;