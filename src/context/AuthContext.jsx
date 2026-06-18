import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (email, password) => {
    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = savedUsers.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return true;
    }

    return false;
  };

  const register = (newUser) => {
    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];
    
    const exists = savedUsers.find(
      (u) => u.email === newUser.email
    );
    if(exists){
      return false;
    }
    savedUsers.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(savedUsers)
    );

    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}