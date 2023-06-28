import jwtDecode from "jwt-decode";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export interface UserInformationProps {
  username: string;
  userId: number;
}

interface AuthContextData {
  token: UserInformationProps | null;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface UserObjectProps {
  exp: number;
  sub: string;
  userInfo: number;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<UserInformationProps | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("userInformation");

    if (token) {
      const parsedToken = JSON.parse(token);

      setToken(parsedToken);
    }
  }, []);

  const login = (token: string) => {
    const userObject: UserObjectProps = jwtDecode(token);

    const userInformation: UserInformationProps = {
      username: userObject.sub,
      userId: userObject.userInfo,
    };

    const stringfyJson = JSON.stringify(userInformation);
    localStorage.setItem("userInformation", stringfyJson);
    localStorage.setItem("token", token);

    setToken(userInformation);

    window.location.href = "/";
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInformation");
    setToken(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
