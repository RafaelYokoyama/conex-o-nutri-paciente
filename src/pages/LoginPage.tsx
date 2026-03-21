import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState<"paciente" | "nutricionista">("paciente");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setRole, setUserName } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRole(selectedRole);
    setUserName(selectedRole === "nutricionista" ? "Dra. Helena" : "João");
    navigate(selectedRole === "nutricionista" ? "/nutricionista/dashboard" : "/paciente/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-surface">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl h-screen md:h-[850px] overflow-hidden md:rounded-[2rem] bg-surface-low shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
        {/* Hero Section */}
        <div className="hidden md:flex relative w-1/2 h-full overflow-hidden animate-fade-in-blur">
          <img
            alt="Premium healthy food bowl"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 z-10 text-primary-foreground animate-slide-up">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight mb-4">Alpha Nutri</h1>
            <p className="text-primary-foreground/80 text-lg font-light leading-relaxed max-w-sm">
              Sua jornada para o bem-estar começa com escolhas conscientes. O santuário da sua nutrição.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-20 bg-surface-lowest overflow-y-auto">
          <div className="w-full max-w-md py-12">
            <div className="md:hidden flex justify-center mb-8 animate-scale-in">
              <span className="text-primary text-3xl font-black tracking-tight">Alpha Nutri</span>
            </div>

            <header className="mb-8 animate-slide-up">
              <h2 className="font-headline text-3xl font-bold tracking-tight mb-2 text-foreground">Bem-vindo de volta</h2>
              <p className="text-muted-foreground text-sm">Escolha seu perfil e entre com seus dados.</p>
            </header>

            {/* Role Selector */}
            <div className="flex p-1 bg-surface-container rounded-2xl mb-8 animate-slide-up-delay-1">
              <button
                type="button"
                onClick={() => setSelectedRole("paciente")}
                className={`flex-1 text-center py-3 text-sm font-semibold cursor-pointer rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
                  selectedRole === "paciente"
                    ? "bg-surface-lowest text-primary shadow-md"
                    : "text-muted-foreground"
                }`}
              >
                <span className="material-symbols-outlined text-lg">person</span>
                Sou Paciente
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("nutricionista")}
                className={`flex-1 text-center py-3 text-sm font-semibold cursor-pointer rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
                  selectedRole === "nutricionista"
                    ? "bg-surface-lowest text-primary shadow-md"
                    : "text-muted-foreground"
                }`}
              >
                <span className="material-symbols-outlined text-lg">medical_services</span>
                Sou Nutricionista
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up-delay-2">
              <div className="space-y-1.5">
                <label className="text-foreground font-label text-sm font-semibold px-1">Email</label>
                <input
                  className="w-full h-14 px-5 bg-surface-low border-none rounded-xl text-foreground placeholder:text-outline-variant focus:ring-1 focus:ring-primary/40 focus:bg-surface-lowest transition-all outline-none"
                  placeholder="nome@exemplo.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-foreground font-label text-sm font-semibold">Senha</label>
                  <a className="text-primary font-label text-xs font-bold hover:underline" href="#">Esqueceu a senha?</a>
                </div>
                <div className="relative">
                  <input
                    className="w-full h-14 px-5 bg-surface-low border-none rounded-xl text-foreground placeholder:text-outline-variant focus:ring-1 focus:ring-primary/40 focus:bg-surface-lowest transition-all outline-none"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-xl">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-organic-gradient text-primary-foreground font-label font-bold text-base rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Entrar
              </button>
            </form>

            <div className="relative my-8 flex items-center animate-slide-up-delay-3">
              <div className="flex-grow border-t border-outline-variant/30" />
              <span className="flex-shrink mx-4 text-outline font-label text-xs font-medium uppercase tracking-widest">ou entre com</span>
              <div className="flex-grow border-t border-outline-variant/30" />
            </div>

            <button className="w-full h-14 border border-outline-variant/30 bg-surface-lowest text-foreground font-label font-semibold text-sm rounded-xl flex items-center justify-center gap-3 hover:bg-surface-container transition-colors active:scale-[0.98] animate-slide-up-delay-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>

            <footer className="mt-8 text-center animate-slide-up-delay-4">
              <p className="text-muted-foreground text-sm font-medium">
                Ainda não tem conta?{" "}
                <a className="text-primary font-bold hover:underline" href="#">Criar conta</a>
              </p>
            </footer>
          </div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-tertiary/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default LoginPage;
