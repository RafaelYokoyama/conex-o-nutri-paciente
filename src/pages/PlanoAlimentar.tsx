import { AppLayout } from "@/components/layout/AppLayout";
import { useState } from "react";

const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

const mealsData = [
  { label: "Desjejum", title: "Café da manhã", kcal: 420, protein: "22g", desc: "Pão integral com ovos mexidos, abacate e frutas vermelhas. Café preto sem açúcar.", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80" },
  { label: "Almoço", title: "Almoço", kcal: 680, protein: "45g", desc: "Salmão grelhado com quinoa, brócolis e batata doce.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" },
  { label: "Lanche", title: "Lanche da Tarde", kcal: 280, protein: "18g", desc: "Iogurte grego com granola e mel. Banana com pasta de amendoim.", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
  { label: "Jantar", title: "Jantar", kcal: 520, protein: "38g", desc: "Frango grelhado com arroz integral e salada verde.", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80" },
];

const PlanoAlimentar = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <AppLayout>
      <div className="px-6 pb-20 max-w-5xl mx-auto">
        {/* Header Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <div className="md:col-span-2 bg-surface-lowest rounded-3xl p-8 ambient-shadow flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Meta Diária</span>
              <h1 className="text-4xl font-black tracking-tighter text-foreground mb-1">Energia & Vitalidade</h1>
              <p className="text-muted-foreground text-sm max-w-xs">Seu plano focado em ganho de massa magra e performance.</p>
            </div>
            <div className="mt-8 flex items-end justify-between relative z-10">
              <div className="flex gap-8">
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Meta Kcal</p>
                  <p className="text-2xl font-bold text-primary">2.450</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Proteína</p>
                  <p className="text-2xl font-bold text-primary">180g</p>
                </div>
              </div>
              <div className="w-16 h-16">
                <svg className="w-full h-full -rotate-90">
                  <circle className="text-surface-highest" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6" />
                  <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="176" strokeDashoffset="44" strokeLinecap="round" strokeWidth="6" />
                </svg>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-50" />
          </div>
          <div className="bg-organic-gradient rounded-3xl p-8 text-primary-foreground flex flex-col justify-between shadow-lg animate-slide-up-delay-1">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <div>
              <p className="text-primary-foreground/80 text-sm font-medium">Consumido hoje</p>
              <h3 className="text-4xl font-black">1.120 <span className="text-sm font-normal">kcal</span></h3>
            </div>
            <div className="h-1.5 w-full bg-primary-foreground/20 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-primary-foreground w-1/2 rounded-full" />
            </div>
          </div>
        </section>

        {/* Day Tabs */}
        <div className="mb-10 overflow-x-auto no-scrollbar animate-slide-up-delay-2">
          <div className="flex gap-3 min-w-max pb-4">
            {days.map((day, i) => (
              <button
                key={day}
                onClick={() => setActiveDay(i)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  i === activeDay
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-surface-lowest text-muted-foreground hover:bg-surface-container"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Meals List */}
        <div className="space-y-8 animate-slide-up-delay-3">
          {mealsData.map((meal, i) => (
            <article key={i} className="group relative bg-surface-low rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:bg-surface-lowest">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-full md:w-48 h-36 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                  <img alt={meal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={meal.img} />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-tertiary-container uppercase tracking-widest bg-tertiary/10 px-2 py-1 rounded">{meal.label}</span>
                      <h3 className="text-xl font-bold mt-2 text-foreground">{meal.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-primary">{meal.kcal} <span className="text-xs font-normal text-muted-foreground">kcal</span></p>
                      <p className="text-xs font-medium text-primary">{meal.protein} Proteína</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{meal.desc}</p>
                  <div className="pt-2 flex justify-end">
                    <button className="px-6 py-2.5 bg-surface-high text-foreground font-bold text-sm rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2">
                      Escolher refeição
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default PlanoAlimentar;
