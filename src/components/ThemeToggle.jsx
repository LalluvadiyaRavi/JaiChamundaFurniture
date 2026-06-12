import "./ThemeToggle.css";
import { useState } from "react";

function ThemeToggle(){

  const [dark,setDark] = useState(false);

  const toggleTheme = () => {

    document.body.classList.toggle("dark");

    setDark(!dark);

  };

  return(

    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >

      {dark ? "☀️" : "🌙"}

    </button>

  );

}

export default ThemeToggle;