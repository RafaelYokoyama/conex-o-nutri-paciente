import { AppLayout } from "@/components/layout/AppLayout";

const AcompanhamentoProgresso = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Motivational */}
        <div className="mb-12 relative animate-slide-up">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Relatório de Evolução</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4 leading-tight">Você seguiu 80% da dieta</h2>
              <p className="text-muted-foreground max-w-xl text-lg font-medium leading-relaxed">Excelente progresso, João! Sua consistência está acima da média. Mantenha o ritmo para alcançar sua meta em 12 dias.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-surface-lowest text-primary border border-primary/20 rounded-xl font-bold hover:bg-surface-low transition-colors shadow-sm">Compartilhar</button>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">Ver Detalhes</button>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Adherence Circle */}
          <div className="md:col-span-1 bg-surface-lowest p-8 rounded-[2rem] ambient-shadow flex flex-col items-center justify-center text-center relative overflow-hidden group animate-slide-up-delay-1">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">verified</span>
            </div>
            <div className="relative w-48 h-48 mb-6">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-surface-highest stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8" />
                <circle className="text-primary stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="50.24" strokeLinecap="round" strokeWidth="8" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-foreground">80%</span>
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Aderência</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">Aderência Semanal</h3>
            <p className="text-muted-foreground text-sm">Baseado em 21/28 refeições registradas</p>
          </div>

          {/* Calorie Counter */}
          <div className="md:col-span-2 bg-surface-lowest p-8 rounded-[2rem] ambient-shadow animate-slide-up-delay-2">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Consumo vs Meta</h3>
                <p className="text-muted-foreground text-sm">Médias diárias da última semana</p>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">+120 kcal saldo</div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-foreground">Consumido</span>
                  <span className="text-lg font-black text-foreground">2.150 <span className="text-xs font-medium text-muted-foreground">kcal</span></span>
                </div>
                <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-organic-gradient w-[85%] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-foreground">Meta</span>
                  <span className="text-lg font-black text-foreground">2.400 <span className="text-xs font-medium text-muted-foreground">kcal</span></span>
                </div>
                <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-surface-high w-full rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Proteína", value: "165g", color: "text-primary" },
                  { label: "Carbos", value: "210g", color: "text-amber-600" },
                  { label: "Gorduras", value: "55g", color: "text-foreground" },
                ].map((m, i) => (
                  <div key={i} className="bg-surface-low p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter block mb-1">{m.label}</span>
                    <p className={`text-xl font-black ${m.color}`}>{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress Chart */}
        <div className="mb-12 animate-slide-up-delay-3">
          <h3 className="text-2xl font-bold text-foreground mb-6 px-2">Progresso Semanal</h3>
          <div className="bg-surface-low p-8 rounded-[2rem]">
            <div className="flex items-end justify-between h-48 gap-4">
              {[
                { day: "Seg", pct: 90 },
                { day: "Ter", pct: 75 },
                { day: "Qua", pct: 85 },
                { day: "Qui", pct: 60 },
                { day: "Sex", pct: 95 },
                { day: "Sáb", pct: 70 },
                { day: "Dom", pct: 80 },
              ].map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-surface-container rounded-xl overflow-hidden" style={{ height: "160px" }}>
                    <div
                      className="w-full bg-organic-gradient rounded-xl transition-all duration-1000"
                      style={{ height: `${d.pct}%`, marginTop: `${100 - d.pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meal History */}
        <section className="animate-slide-up-delay-4">
          <h3 className="text-2xl font-bold text-foreground mb-6 px-2">Refeições Recentes</h3>
          <div className="space-y-4">
            {[
              { name: "Café da Manhã", time: "07:45", kcal: 420, status: "Registrada" },
              { name: "Almoço", time: "12:30", kcal: 680, status: "Registrada" },
              { name: "Lanche da Tarde", time: "15:00", kcal: 280, status: "Registrada" },
              { name: "Jantar", time: "—", kcal: 0, status: "Não registrada" },
            ].map((meal, i) => (
              <div key={i} className="bg-surface-lowest p-5 rounded-2xl ambient-shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    meal.status === "Registrada" ? "bg-primary/10 text-primary" : "bg-tertiary/10 text-tertiary"
                  }`}>
                    <span className="material-symbols-outlined text-sm">
                      {meal.status === "Registrada" ? "check_circle" : "cancel"}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{meal.name}</p>
                    <p className="text-xs text-muted-foreground">{meal.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{meal.kcal > 0 ? `${meal.kcal} kcal` : "—"}</p>
                  <p className={`text-xs font-bold ${meal.status === "Registrada" ? "text-primary" : "text-tertiary"}`}>{meal.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default AcompanhamentoProgresso;
