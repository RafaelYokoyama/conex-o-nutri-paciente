import { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "paciente" | "nutricionista" | null;

interface AuthContextType {
  role: UserRole;
  userName: string;
  setRole: (role: UserRole) => void;
  setUserName: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  role: null,
  userName: "",
  setRole: () => {},
  setUserName: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState("");

  const logout = () => {
    setRole(null);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ role, userName, setRole, setUserName, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
