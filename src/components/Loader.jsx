import "./Loader.css";
import logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="loader">

      <img
        src={logo}
        alt="logo"
        className="loader-logo"
      />

      <h2>Jai Chamunda Furniture</h2>

      <div className="loading-line"></div>

    </div>
  );
}

export default Loader;