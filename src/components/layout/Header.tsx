import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-50 glass-effect h-16 flex justify-between items-center px-6 ambient-shadow animate-fade-in-blur">
      <div className="flex items-center gap-4">
        <div className="md:hidden w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
          <span className="material-symbols-outlined text-sm">restaurant</span>
        </div>
        <h2 className="text-xl font-black text-primary tracking-tight">Alpha Nutri</h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex bg-surface-low px-4 py-2 rounded-full items-center gap-2">
          <span className="material-symbols-outlined text-muted-foreground text-sm">search</span>
          <input
            className="bg-transparent border-none text-sm focus:ring-0 focus:outline-none w-40 text-foreground placeholder:text-muted-foreground"
            placeholder="Buscar..."
            type="text"
          />
        </div>
        <button className="p-2 text-muted-foreground hover:bg-surface-high rounded-full transition-colors active:scale-95 duration-200">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button
          onClick={handleLogout}
          className="p-2 text-muted-foreground hover:bg-surface-high rounded-full transition-colors active:scale-95 duration-200"
          title="Sair"
        >
          <span className="material-symbols-outlined">logout</span>
        </button>
        <div className="w-9 h-9 rounded-full bg-surface-container overflow-hidden ml-1 ring-2 ring-primary/20 flex items-center justify-center text-primary font-bold text-sm">
          {userName?.charAt(0)?.toUpperCase() || "U"}
        </div>
      </div>
    </header>
  );
};
