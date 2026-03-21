import { AppLayout } from "@/components/layout/AppLayout";

const nutritionists = [
  { name: "Dra. Beatriz Santos", spec: "Nutrição Esportiva", desc: "Especialista em alto rendimento e hipertrofia. Focada em atletas e entusiastas do fitness.", rating: 4.9, price: "R$ 250" },
  { name: "Dr. Ricardo Mendes", spec: "Nutrição Clínica", desc: "Foco em reeducação alimentar e tratamento de doenças metabólicas como diabetes e hipertensão.", rating: 4.8, price: "R$ 220" },
  { name: "Dra. Camila Ferreira", spec: "Nutrição Funcional", desc: "Abordagem integrativa com foco em saúde intestinal, imunidade e bem-estar geral.", rating: 4.7, price: "R$ 280" },
  { name: "Dr. Lucas Almeida", spec: "Emagrecimento", desc: "Especialista em perda de peso saudável com planos individualizados e acompanhamento semanal.", rating: 4.9, price: "R$ 200" },
  { name: "Dra. Marina Costa", spec: "Nutrição Materno-Infantil", desc: "Cuidados nutricionais para gestantes, lactantes e primeiros anos de vida da criança.", rating: 4.8, price: "R$ 260" },
  { name: "Dr. Paulo Ribeiro", spec: "Nutrição Vegana", desc: "Planejamento nutricional completo para dietas plant-based, garantindo todos os micronutrientes.", rating: 4.6, price: "R$ 230" },
];

const SelecionarNutricionista = () => {
  return (
    <AppLayout>
      <div className="px-6 pb-20 max-w-7xl mx-auto">
        <header className="mb-10 animate-slide-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">Encontre seu Nutricionista</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Escolha o profissional ideal para guiar sua jornada de saúde.</p>
        </header>

        {/* Search */}
        <section className="mb-12 sticky top-20 z-40 animate-slide-up-delay-1">
          <div className="bg-surface-lowest rounded-2xl p-4 ambient-shadow flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-12 pr-4 py-4 bg-surface-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-lowest transition-all text-foreground outline-none" placeholder="Buscar por nome ou especialidade..." type="text" />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-4 bg-surface-high text-muted-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-surface-highest transition-colors">
                <span className="material-symbols-outlined">filter_list</span>
                Filtros
              </button>
              <button className="flex-1 md:flex-none px-8 py-4 bg-organic-gradient text-primary-foreground rounded-xl font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                Buscar
              </button>
            </div>
          </div>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nutritionists.map((n, i) => (
            <div
              key={i}
              className={`group bg-surface-lowest rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_32px_48px_-12px_rgba(0,110,28,0.1)] border border-transparent hover:border-primary/10 animate-slide-up-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="relative h-48 bg-organic-gradient flex items-center justify-center">
                <span className="text-primary-foreground/20 material-symbols-outlined text-[80px]">person</span>
                <div className="absolute top-4 right-4 bg-surface-lowest/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-amber-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold text-foreground">{n.rating}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">{n.spec}</span>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{n.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{n.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-surface-container">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline font-bold uppercase tracking-tighter">Consultas a partir de</span>
                    <span className="text-lg font-bold text-foreground">{n.price}</span>
                  </div>
                  <button className="px-6 py-3 bg-secondary-container text-accent-foreground rounded-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Selecionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default SelecionarNutricionista;
