import { AppLayout } from "@/components/layout/AppLayout";

const suppliers = [
  { name: "Purely Plant", type: "Vegano • Low Carb", rating: 4.9, time: "25 min" },
  { name: "Alpha Grill", type: "Proteico • Funcional", rating: 4.7, time: "35 min" },
  { name: "Nutri Express", type: "Hipertrofia • Equilibrada", rating: 4.8, time: "20 min" },
  { name: "Sabor Natural", type: "Orgânico • Detox", rating: 4.6, time: "40 min" },
];

const Fornecedores = () => {
  return (
    <AppLayout>
      <div className="px-6 pb-24 max-w-7xl mx-auto w-full">
        {/* Hero Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <div className="md:col-span-2 bg-organic-gradient rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end min-h-[240px]">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
            </div>
            <div className="relative z-10">
              <span className="bg-primary-foreground/20 text-primary-foreground text-[10px] uppercase tracking-widest font-bold py-1 px-3 rounded-full">Destaque do Mês</span>
              <h3 className="text-3xl font-black text-primary-foreground mt-4 mb-2 tracking-tight">Fit & Fresh Co.</h3>
              <p className="text-primary-foreground/80 text-sm max-w-md">Ingredientes orgânicos e preparo artesanal para quem não abre mão da saúde e do sabor.</p>
              <button className="mt-6 bg-surface-lowest text-primary font-bold px-6 py-3 rounded-2xl text-sm active:scale-95 transition-transform">Explorar Cardápio</button>
            </div>
          </div>
          <div className="bg-surface-low rounded-3xl p-6 flex flex-col justify-center text-center animate-slide-up-delay-1">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">local_shipping</span>
            <h4 className="text-lg font-bold text-foreground">Entrega Turbo</h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Parceiros com tempo de entrega inferior a 30 minutos em sua região.</p>
          </div>
        </div>

        {/* Suppliers Grid */}
        <div className="flex items-baseline justify-between mb-8 animate-slide-up-delay-2">
          <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Cozinhas Parceiras</h3>
          <button className="text-sm font-bold text-primary flex items-center gap-1">
            Filtrar por dieta
            <span className="material-symbols-outlined text-sm">filter_list</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {suppliers.map((s, i) => (
            <div key={i} className={`group bg-surface-lowest rounded-3xl overflow-hidden ambient-shadow hover:-translate-y-1 transition-all duration-300 animate-slide-up-delay-${Math.min(i + 1, 4)}`}>
              <div className="h-40 relative bg-organic-gradient flex items-center justify-center">
                <span className="text-primary-foreground/20 material-symbols-outlined text-[60px]">storefront</span>
                <div className="absolute top-3 left-3 bg-surface-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-500 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold text-foreground">{s.rating}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{s.name}</h4>
                    <p className="text-xs text-muted-foreground">{s.type}</p>
                  </div>
                  <div className="bg-surface-low px-3 py-2 rounded-xl text-center">
                    <span className="block text-[10px] text-muted-foreground font-bold uppercase">Tempo</span>
                    <span className="text-xs font-black text-foreground">{s.time}</span>
                  </div>
                </div>
                <button className="w-full bg-organic-gradient text-primary-foreground font-bold py-4 rounded-2xl active:scale-95 transition-all text-sm shadow-lg shadow-primary/20">
                  Escolher
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Fornecedores;
