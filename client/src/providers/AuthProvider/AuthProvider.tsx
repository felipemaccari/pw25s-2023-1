import jwtDecode from "jwt-decode";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextData {
  name: string | null;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken: AuthContextData = jwtDecode(token);

      setUser(decodedToken.name);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    const decodedToken: AuthContextData = jwtDecode(token);

    setUser(decodedToken.name);
    window.location.href = "/";
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ name: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
