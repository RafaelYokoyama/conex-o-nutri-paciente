import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import NutricionistaDashboard from "./pages/NutricionistaDashboard";
import PacienteDashboard from "./pages/PacienteDashboard";
import CriarPlanoAlimentar from "./pages/CriarPlanoAlimentar";
import PlanoAlimentar from "./pages/PlanoAlimentar";
import SelecionarNutricionista from "./pages/SelecionarNutricionista";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";
import RefeicoesMarmitas from "./pages/RefeicoesMarmitas";
import Fornecedores from "./pages/Fornecedores";
import AcompanhamentoGestaoPlano from "./pages/AcompanhamentoGestaoPlano";
import AcompanhamentoProgresso from "./pages/AcompanhamentoProgresso";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/nutricionista/dashboard" element={<NutricionistaDashboard />} />
            <Route path="/nutricionista/criar-plano" element={<CriarPlanoAlimentar />} />
            <Route path="/nutricionista/acompanhamento" element={<AcompanhamentoGestaoPlano />} />
            <Route path="/paciente/dashboard" element={<PacienteDashboard />} />
            <Route path="/paciente/plano-alimentar" element={<PlanoAlimentar />} />
            <Route path="/paciente/progresso" element={<AcompanhamentoProgresso />} />
            <Route path="/paciente/selecionar-nutricionista" element={<SelecionarNutricionista />} />
            <Route path="/marmitas" element={<RefeicoesMarmitas />} />
            <Route path="/carrinho" element={<CarrinhoDeCompras />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
