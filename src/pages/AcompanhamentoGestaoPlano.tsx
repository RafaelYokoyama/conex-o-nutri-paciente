import { AppLayout } from "@/components/layout/AppLayout";

const AcompanhamentoGestaoPlano = () => {
  return (
    <AppLayout>
      <div className="px-6 pb-12 max-w-7xl mx-auto space-y-8">
        {/* Patient Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-slide-up">
          {/* Profile Summary */}
          <div className="lg:col-span-4 bg-surface-lowest p-8 rounded-3xl shadow-sm">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-5xl">person</span>
                </div>
                <div className="absolute bottom-0 right-0 bg-tertiary text-tertiary-foreground p-2 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">warning</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Maria Silva</h2>
                <p className="text-muted-foreground text-sm">Hipertrofia & Bem-estar</p>
              </div>
              <div className="w-full pt-4 space-y-2 text-left">
                {[
                  { label: "Idade", value: "28 anos" },
                  { label: "Peso Atual", value: "64.5 kg", highlight: true },
                  { label: "Meta Semanal", value: "2.200 kcal" },
                ].map((info, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-surface-container last:border-0">
                    <span className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">{info.label}</span>
                    <span className={`font-medium ${info.highlight ? "text-primary" : ""}`}>{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts & Macros */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-surface-low p-6 rounded-3xl animate-slide-up-delay-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-tertiary">report_problem</span>
                <h3 className="text-lg font-bold">Alertas de Não-Aderência</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-lowest p-5 rounded-2xl flex items-start gap-4 shadow-sm border-l-4 border-tertiary">
                  <div className="bg-tertiary/10 p-2 rounded-lg text-tertiary">
                    <span className="material-symbols-outlined">nights_stay</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Jantar Pulado</p>
                    <p className="text-xs text-muted-foreground mt-1">Maria não registrou o jantar nos últimos 2 dias.</p>
                  </div>
                </div>
                <div className="bg-surface-lowest p-5 rounded-2xl flex items-start gap-4 shadow-sm border-l-4 border-tertiary-container">
                  <div className="bg-tertiary-container/10 p-2 rounded-lg text-tertiary-container">
                    <span className="material-symbols-outlined">water_drop</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Hidratação Baixa</p>
                    <p className="text-xs text-muted-foreground mt-1">Consumo 40% abaixo da meta estabelecida.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Macros */}
            <div className="bg-surface-lowest p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 animate-slide-up-delay-2">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-surface-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8" />
                    <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="100" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-black text-foreground">72%</span>
                    <span className="text-[10px] text-muted-foreground uppercase">Aderência</span>
                  </div>
                </div>
                <p className="mt-2 text-xs font-bold text-muted-foreground">MACROS GERAIS</p>
              </div>
              <div className="flex-1 w-full space-y-4">
                {[
                  { name: "Proteína", current: "145g", goal: "180g", pct: 80, color: "bg-primary" },
                  { name: "Carboidratos", current: "210g", goal: "250g", pct: 84, color: "bg-primary-container" },
                  { name: "Gorduras", current: "55g", goal: "65g", pct: 85, color: "bg-tertiary-container" },
                ].map((macro, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span>{macro.name}</span>
                      <span className="text-primary">{macro.current} / {macro.goal}</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className={`h-full ${macro.color} rounded-full`} style={{ width: `${macro.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meal Linking */}
        <section className="space-y-6 animate-slide-up-delay-3">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-black text-foreground tracking-tighter">Vincular Marmitas ao Plano</h3>
              <p className="text-muted-foreground">Selecione as opções ideais para o metabolismo de Maria.</p>
            </div>
            <button className="px-6 py-3 bg-organic-gradient text-primary-foreground rounded-xl font-bold text-sm shadow-xl shadow-primary/20 flex items-center gap-2 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-sm">add_link</span>
              Vincular ao Plano
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Frango Grelhado Premium", kcal: 480, protein: "42g", tag: "Hipertrofia" },
              { name: "Bowl Mediterrâneo", kcal: 350, protein: "28g", tag: "Equilibrada" },
              { name: "Salmão com Quinoa", kcal: 520, protein: "38g", tag: "Low Carb" },
            ].map((meal, i) => (
              <div key={i} className="bg-surface-lowest rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-organic-gradient flex items-center justify-center">
                  <span className="text-primary-foreground/20 material-symbols-outlined text-[60px]">restaurant</span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{meal.tag}</span>
                  <h4 className="text-lg font-bold text-foreground mt-1">{meal.name}</h4>
                  <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                    <span>{meal.kcal} kcal</span>
                    <span>{meal.protein} prot</span>
                  </div>
                  <button className="w-full mt-4 py-3 bg-surface-low text-foreground rounded-xl font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all">
                    Vincular
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default AcompanhamentoGestaoPlano;
