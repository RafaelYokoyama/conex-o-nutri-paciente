import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const nutricionistaLinks = [
  { icon: "dashboard", label: "Dashboard", path: "/nutricionista/dashboard" },
  { icon: "restaurant_menu", label: "Criar Plano", path: "/nutricionista/criar-plano" },
  { icon: "assignment", label: "Acompanhamento", path: "/nutricionista/acompanhamento" },
  { icon: "inventory_2", label: "Marmitas", path: "/marmitas" },
  { icon: "local_shipping", label: "Fornecedores", path: "/fornecedores" },
];

const pacienteLinks = [
  { icon: "dashboard", label: "Dashboard", path: "/paciente/dashboard" },
  { icon: "restaurant_menu", label: "Plano Alimentar", path: "/paciente/plano-alimentar" },
  { icon: "trending_up", label: "Progresso", path: "/paciente/progresso" },
  { icon: "person_search", label: "Nutricionistas", path: "/paciente/selecionar-nutricionista" },
  { icon: "inventory_2", label: "Marmitas", path: "/marmitas" },
  { icon: "shopping_cart", label: "Carrinho", path: "/carrinho" },
];

export const Sidebar = () => {
  const location = useLocation();
  const { role } = useAuth();
  const links = role === "nutricionista" ? nutricionistaLinks : pacienteLinks;

  return (
    <aside className="hidden md:flex flex-col py-6 bg-surface-low h-screen w-64 shrink-0 fixed left-0 top-0 z-40 animate-slide-in-left">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-primary">Alpha Nutri</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">The Living Sanctuary</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`mx-2 px-4 py-3 mb-1 flex items-center gap-3 rounded-xl transition-all duration-300 text-sm font-medium ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-surface-high"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 mt-auto">
        <div className="bg-organic-gradient p-4 rounded-2xl text-primary-foreground">
          <p className="text-xs font-bold uppercase tracking-wider opacity-80">Alpha Nutri Pro</p>
          <p className="text-sm font-bold mb-3 leading-tight">Melhore seus resultados</p>
          <button className="w-full bg-surface-lowest text-primary py-2 rounded-xl text-xs font-bold transition-all active:scale-95">
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
};
