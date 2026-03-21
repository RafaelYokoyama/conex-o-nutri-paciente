import { AppLayout } from "@/components/layout/AppLayout";

const PacienteDashboard = () => {
  return (
    <AppLayout>
      <div className="px-6 pb-8 max-w-7xl mx-auto space-y-8">
        {/* Welcome */}
        <section className="space-y-1 animate-slide-up">
          <h3 className="text-4xl font-extrabold text-foreground tracking-tighter">Olá, João!</h3>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
            Meta: Ganho de massa
          </span>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Progress Card */}
          <div className="md:col-span-8 bg-surface-lowest p-8 rounded-[2rem] ambient-shadow relative overflow-hidden group animate-slide-up-delay-1">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-foreground">Seu Progresso Semanal</h4>
                <p className="text-muted-foreground font-medium">Você está indo bem! Faltam apenas 3 refeições para fechar o ciclo.</p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black text-primary tracking-tighter">70%</span>
                  <span className="text-xs font-bold text-outline uppercase tracking-widest">Concluído</span>
                </div>
                <div className="w-full h-4 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-organic-gradient rounded-full transition-all duration-1000" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
          </div>

          {/* Macro Summary */}
          <div className="md:col-span-4 bg-primary text-primary-foreground p-8 rounded-[2rem] flex flex-col justify-between shadow-xl animate-slide-up-delay-2">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Hoje</span>
            </div>
            <div className="mt-10">
              <p className="text-sm font-medium opacity-80">Calorias Restantes</p>
              <h5 className="text-5xl font-black tracking-tighter">1.240 <span className="text-xl font-medium opacity-60">kcal</span></h5>
            </div>
            <div className="mt-6 flex gap-4 border-t border-primary-foreground/10 pt-6">
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold opacity-60">Prot</p>
                <p className="font-bold">145g</p>
              </div>
              <div className="flex-1 border-x border-primary-foreground/10 px-4">
                <p className="text-[10px] uppercase font-bold opacity-60">Carb</p>
                <p className="font-bold">210g</p>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold opacity-60">Gord</p>
                <p className="font-bold">58g</p>
              </div>
            </div>
          </div>

          {/* Next Meal */}
          <div className="md:col-span-12 lg:col-span-7 bg-surface-low p-2 rounded-[2.5rem] flex flex-col md:flex-row gap-2 animate-slide-up-delay-3">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden rounded-[2rem]">
              <img
                className="w-full h-full object-cover"
                alt="Refeição saudável"
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  Próxima refeição • 12:30
                </div>
                <h4 className="text-2xl font-black tracking-tight text-foreground">Salmão com Crosta de Ervas e Quinoa</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Alta densidade calórica ideal para sua meta de ganho de massa.</p>
              </div>
              <button className="w-fit px-8 py-3 bg-surface-lowest text-foreground font-bold rounded-xl shadow-sm hover:bg-surface-highest transition-all active:scale-95 flex items-center gap-2">
                Ver opções
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up-delay-4">
            {[
              { icon: "menu_book", title: "Plano alimentar", desc: "Veja sua rotina completa", color: "primary" },
              { icon: "local_mall", title: "Marmitas", desc: "Peça refeições prontas", color: "tertiary" },
              { icon: "person_search", title: "Nutricionista", desc: "Fale com seu profissional", color: "secondary" },
              { icon: "trending_up", title: "Progresso", desc: "Acompanhe sua evolução", color: "primary" },
            ].map((action, i) => (
              <div key={i} className="bg-surface-lowest p-6 rounded-[2rem] flex flex-col justify-between hover:bg-primary/5 transition-colors cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                  action.color === "primary" ? "bg-primary/10 text-primary" :
                  action.color === "tertiary" ? "bg-tertiary/10 text-tertiary" :
                  "bg-secondary/10 text-secondary"
                }`}>
                  <span className="material-symbols-outlined">{action.icon}</span>
                </div>
                <div className="mt-4">
                  <h5 className="font-bold text-foreground">{action.title}</h5>
                  <p className="text-xs text-muted-foreground">{action.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PacienteDashboard;
