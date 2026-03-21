import { AppLayout } from "@/components/layout/AppLayout";

const meals = [
  { name: "Frango Grelhado com Mix de Vegetais", kcal: 450, protein: "32g", carbs: "25g", fiber: "8g", price: "R$ 28,90", tag: "Hipertrofia", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80" },
  { name: "Salada Power com Grão-de-Bico", kcal: 380, protein: "24g", carbs: "30g", fiber: "12g", price: "R$ 24,90", tag: "Vegano", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
  { name: "Bowl Proteico de Carne", kcal: 580, protein: "42g", carbs: "35g", fiber: "6g", price: "R$ 34,90", tag: "Proteico", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" },
  { name: "Salmão com Legumes Assados", kcal: 520, protein: "38g", carbs: "20g", fiber: "9g", price: "R$ 39,90", tag: "Low Carb", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80" },
  { name: "Wrap Integral de Frango", kcal: 420, protein: "28g", carbs: "40g", fiber: "7g", price: "R$ 22,90", tag: "Equilibrada", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80" },
  { name: "Açaí Bowl Proteico", kcal: 350, protein: "20g", carbs: "45g", fiber: "10g", price: "R$ 26,90", tag: "Pré-treino", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
];

const RefeicoesMarmitas = () => {
  return (
    <AppLayout>
      <div className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="mb-10 animate-slide-up">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">Cardápio de Marmitas</h1>
          <p className="text-muted-foreground max-w-2xl">Refeições balanceadas preparadas por nutricionistas, prontas para aquecer e servir.</p>
        </div>

        {/* Filters */}
        <section className="flex flex-col md:flex-row gap-4 mb-12 items-end animate-slide-up-delay-1">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Faixa de Preço</label>
              <select className="w-full bg-surface-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 text-sm text-foreground outline-none">
                <option>Todos os preços</option>
                <option>Até R$ 25,00</option>
                <option>R$ 25,00 - R$ 35,00</option>
                <option>Acima de R$ 35,00</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Tipo de Dieta</label>
              <select className="w-full bg-surface-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/40 text-sm text-foreground outline-none">
                <option>Qualquer dieta</option>
                <option>Hipertrofia</option>
                <option>Low Carb</option>
                <option>Vegana</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Buscar</label>
              <div className="relative">
                <input className="w-full bg-surface-low border-none rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/40 text-sm text-foreground outline-none" placeholder="Ex: Frango Grelhado..." type="text" />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">search</span>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {meals.map((meal, i) => (
            <article key={i} className={`bg-surface-lowest rounded-3xl overflow-hidden ambient-shadow group transition-all hover:-translate-y-1 animate-slide-up-delay-${Math.min(i + 1, 4)}`}>
              <div className="relative h-56">
                <img alt={meal.name} className="w-full h-full object-cover" src={meal.img} />
                <div className="absolute top-3 right-3 bg-surface-lowest/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                  <span className="text-primary font-bold text-sm">{meal.kcal} kcal</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-primary/10 text-primary text-[10px] font-black uppercase px-2 py-1 rounded-md">{meal.tag}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">{meal.name}</h3>
                <div className="flex items-center gap-4 mb-6">
                  {[
                    { label: "Proteína", value: meal.protein },
                    { label: "Carbos", value: meal.carbs },
                    { label: "Fibras", value: meal.fiber },
                  ].map((m, j) => (
                    <div key={j} className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">{m.label}</span>
                      <span className="text-sm font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-foreground">{meal.price}</span>
                  <button className="bg-organic-gradient text-primary-foreground px-5 py-2.5 rounded-xl font-bold text-sm active:scale-95 transition-all">
                    Selecionar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default RefeicoesMarmitas;
