import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const pacienteLinks = [
  { icon: "dashboard", label: "Início", path: "/paciente/dashboard" },
  { icon: "restaurant_menu", label: "Dieta", path: "/paciente/plano-alimentar" },
  { icon: "inventory_2", label: "Marmitas", path: "/marmitas" },
  { icon: "shopping_cart", label: "Carrinho", path: "/carrinho" },
  { icon: "trending_up", label: "Progresso", path: "/paciente/progresso" },
];

const nutricionistaLinks = [
  { icon: "dashboard", label: "Início", path: "/nutricionista/dashboard" },
  { icon: "restaurant_menu", label: "Planos", path: "/nutricionista/criar-plano" },
  { icon: "assignment", label: "Gestão", path: "/nutricionista/acompanhamento" },
  { icon: "inventory_2", label: "Marmitas", path: "/marmitas" },
  { icon: "local_shipping", label: "Fornec.", path: "/fornecedores" },
];

export const BottomNav = () => {
  const location = useLocation();
  const { role } = useAuth();
  const links = role === "nutricionista" ? nutricionistaLinks : pacienteLinks;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full glass-effect flex justify-around py-3 z-50 border-t border-border/30 animate-slide-up">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {link.icon}
            </span>
            <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
