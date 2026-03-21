import { AppLayout } from "@/components/layout/AppLayout";
import { useState } from "react";

const CriarPlanoAlimentar = () => {
  const [meals, setMeals] = useState(3);

  return (
    <AppLayout>
      <div className="px-6 pb-20 max-w-5xl mx-auto w-full">
        <header className="mb-10 animate-slide-up">
          <div className="flex items-center gap-2 text-primary font-medium mb-2 cursor-pointer hover:underline">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span className="text-sm">Voltar aos Pacientes</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">Novo Plano Alimentar</h2>
          <p className="text-muted-foreground mt-2">Personalize as metas nutricionais e a estrutura de refeições para o paciente.</p>
        </header>

        <form className="space-y-12">
          {/* Macros Section */}
          <section className="animate-slide-up-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="text-xl font-bold">Metas de Macronutrientes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 bg-surface-lowest p-8 rounded-3xl ambient-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">local_fire_department</span>
                </div>
                <label className="block text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Calorias Totais (kcal)</label>
                <input
                  className="text-5xl font-black text-foreground bg-transparent border-none p-0 focus:ring-0 focus:outline-none w-full placeholder:text-surface-high"
                  placeholder="2400"
                  type="number"
                />
                <div className="mt-4 h-1 w-24 bg-primary rounded-full" />
              </div>
              {[
                { label: "Proteínas", placeholder: "180", unit: "g", tip: "Sugestão: 2.2g/kg" },
                { label: "Carboidratos", placeholder: "250", unit: "g", tip: "Sugestão: 45-65%" },
                { label: "Gorduras", placeholder: "70", unit: "g", tip: "Sugestão: 0.8g/kg" },
              ].map((macro, i) => (
                <div key={i} className="bg-surface-low p-6 rounded-3xl border border-transparent hover:border-primary/20 transition-all">
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">{macro.label}</label>
                  <div className="flex items-baseline gap-2">
                    <input className="text-3xl font-bold text-foreground bg-transparent border-none p-0 focus:ring-0 focus:outline-none w-20 placeholder:text-surface-high" placeholder={macro.placeholder} type="number" />
                    <span className="text-muted-foreground font-bold">{macro.unit}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2">{macro.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Meal Structure */}
          <section className="bg-surface-low p-8 rounded-[2rem] animate-slide-up-delay-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-lowest flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Estrutura de Refeições</h3>
                  <p className="text-sm text-muted-foreground">Defina quantas vezes o paciente irá comer por dia.</p>
                </div>
              </div>
              <div className="flex bg-surface-lowest p-1 rounded-2xl shadow-sm">
                {[3, 4, 5, 6].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setMeals(n)}
                    className={`px-6 py-3 rounded-xl transition-all text-sm font-bold ${
                      meals === n ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Café da Manhã", "Almoço", "Lanche da Tarde", "Jantar", "Ceia", "Pré-treino"].slice(0, meals).map((meal, i) => (
                <div key={i} className="bg-surface-lowest/50 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-lowest rounded-full flex items-center justify-center text-muted-foreground font-bold">{i + 1}</div>
                  <div className="flex-1">
                    <input className="w-full bg-transparent border-none p-0 focus:ring-0 focus:outline-none font-bold text-foreground" defaultValue={meal} type="text" />
                    <p className="text-[10px] text-muted-foreground uppercase">Horário sugerido: {["07:30", "12:30", "15:30", "19:30", "21:00", "17:00"][i]}</p>
                  </div>
                  <span className="material-symbols-outlined text-surface-high">drag_indicator</span>
                </div>
              ))}
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end gap-4 animate-slide-up-delay-3">
            <button type="button" className="px-8 py-4 bg-surface-low text-foreground rounded-xl font-bold hover:bg-surface-container transition-colors">
              Salvar Rascunho
            </button>
            <button type="submit" className="px-8 py-4 bg-organic-gradient text-primary-foreground rounded-xl font-bold shadow-lg active:scale-95 transition-all">
              Publicar Plano
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default CriarPlanoAlimentar;
