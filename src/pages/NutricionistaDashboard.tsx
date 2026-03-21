import { AppLayout } from "@/components/layout/AppLayout";

const NutricionistaDashboard = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Greeting & Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up">
          <div className="md:col-span-2 bg-organic-gradient p-8 rounded-[2rem] text-primary-foreground flex flex-col justify-between min-h-[200px] shadow-lg">
            <div>
              <h3 className="text-3xl font-black tracking-tight mb-2">Bom dia, Dra. Helena</h3>
              <p className="opacity-90 text-sm">Você tem 4 revisões de dieta pendentes para hoje.</p>
            </div>
            <button className="w-fit bg-primary-foreground/20 hover:bg-primary-foreground/30 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm transition-colors">
              Ver Agenda
            </button>
          </div>
          <div className="bg-surface-lowest p-6 rounded-[2rem] ambient-shadow flex flex-col justify-center text-center animate-slide-up-delay-1">
            <span className="text-xs uppercase tracking-widest text-outline mb-1 font-bold">Pacientes Ativos</span>
            <span className="text-4xl font-black text-foreground tracking-tighter">142</span>
            <div className="mt-2 text-primary text-xs font-bold flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +12% este mês
            </div>
          </div>
          <div className="bg-surface-lowest p-6 rounded-[2rem] ambient-shadow flex flex-col justify-center text-center animate-slide-up-delay-2">
            <span className="text-xs uppercase tracking-widest text-outline mb-1 font-bold">Média Aderência</span>
            <span className="text-4xl font-black text-foreground tracking-tighter">84%</span>
            <div className="mt-2 text-tertiary text-xs font-bold flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_down</span>
              -2% este mês
            </div>
          </div>
        </section>

        {/* Patients Table */}
        <section className="space-y-4 animate-slide-up-delay-3">
          <div className="flex justify-between items-end px-2">
            <div>
              <h4 className="text-2xl font-bold tracking-tight">Gestão de Pacientes</h4>
              <p className="text-outline text-sm">Acompanhamento em tempo real da aderência ao plano.</p>
            </div>
            <button className="bg-surface-high text-foreground px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-surface-highest transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filtros
            </button>
          </div>

          <div className="bg-surface-low rounded-[2rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-outline text-xs uppercase tracking-widest">
                    <th className="px-8 py-6 font-bold">Paciente</th>
                    <th className="px-8 py-6 font-bold">Status</th>
                    <th className="px-8 py-6 font-bold">Aderência</th>
                    <th className="px-8 py-6 font-bold">Última Refeição</th>
                    <th className="px-8 py-6 font-bold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-high">
                  {[
                    { name: "Ricardo Silva", goal: "Hipertrofia", status: "Ativo", adherence: 92, time: "Há 2 horas", color: "primary" },
                    { name: "Ana Martins", goal: "Emagrecimento", status: "Em risco", adherence: 45, time: "Há 2 dias", color: "tertiary" },
                    { name: "Carlos Oliveira", goal: "Manutenção", status: "Ativo", adherence: 78, time: "Há 5 horas", color: "primary" },
                    { name: "Fernanda Costa", goal: "Ganho de massa", status: "Ativo", adherence: 88, time: "Há 1 hora", color: "primary" },
                  ].map((patient, i) => (
                    <tr key={i} className="hover:bg-surface-lowest/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-sm">
                            {patient.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{patient.name}</p>
                            <p className="text-xs text-outline">Meta: {patient.goal}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          patient.color === "primary" ? "bg-primary/10 text-primary" : "bg-tertiary/10 text-tertiary"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${patient.color === "primary" ? "bg-primary" : "bg-tertiary"}`} />
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="w-full max-w-[100px] h-2 bg-surface-highest rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${patient.adherence}%` }} />
                        </div>
                        <span className="text-[10px] font-bold text-primary mt-1 block">{patient.adherence}% aderência</span>
                      </td>
                      <td className="px-8 py-5 text-sm text-outline">{patient.time}</td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-outline group-hover:text-primary transition-colors p-2">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default NutricionistaDashboard;
