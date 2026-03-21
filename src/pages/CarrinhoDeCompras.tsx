import { AppLayout } from "@/components/layout/AppLayout";

const cartItems = [
  { name: "Bowl de Salmão & Quinoa", details: "450g • 520 kcal • Rico em Ômega 3", qty: 2, price: 79.80, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80" },
  { name: "Salada Mediterrânea", details: "380g • 310 kcal • Vegano", qty: 1, price: 34.90, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80" },
];

const CarrinhoDeCompras = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = subtotal * 0.15;
  const total = subtotal - discount;

  return (
    <AppLayout>
      <div className="px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 pb-20">
        {/* Items */}
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl font-black text-foreground tracking-tight animate-slide-up">Seu Carrinho</h1>
          <div className="space-y-4 animate-slide-up-delay-1">
            {cartItems.map((item, i) => (
              <div key={i} className="bg-surface-lowest p-5 rounded-3xl ambient-shadow flex items-center gap-6 group transition-all">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img alt={item.name} className="w-full h-full object-cover" src={item.img} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center bg-surface-low rounded-full px-2 py-1">
                      <button className="material-symbols-outlined text-sm p-1 hover:text-primary transition-colors">remove</button>
                      <span className="px-3 font-semibold text-sm">{item.qty}</span>
                      <button className="material-symbols-outlined text-sm p-1 hover:text-primary transition-colors">add</button>
                    </div>
                    <span className="font-bold text-lg">R$ {item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up-delay-2">
            <div className="bg-surface-low p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <span className="material-symbols-outlined">location_on</span>
                <h4 className="font-bold">Endereço de Entrega</h4>
              </div>
              <div className="bg-surface-lowest p-4 rounded-xl border border-outline-variant/20">
                <p className="text-sm font-medium text-foreground">Av. Faria Lima, 1234</p>
                <p className="text-xs text-muted-foreground">Apto 42 - Itaim Bibi, São Paulo</p>
                <button className="text-primary text-xs font-bold mt-2 uppercase tracking-wider">Alterar</button>
              </div>
            </div>
            <div className="bg-surface-low p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <span className="material-symbols-outlined">schedule</span>
                <h4 className="font-bold">Horário de Entrega</h4>
              </div>
              <div className="bg-surface-lowest p-4 rounded-xl border border-outline-variant/20">
                <p className="text-sm font-medium text-foreground">Hoje, 19:30 - 20:00</p>
                <p className="text-xs text-muted-foreground">Tempo estimado: 45 min</p>
                <button className="text-primary text-xs font-bold mt-2 uppercase tracking-wider">Agendar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <aside className="w-full lg:w-96 animate-slide-in-right">
          <div className="bg-surface-low p-8 rounded-3xl sticky top-24">
            <h2 className="text-xl font-bold mb-8">Resumo do Pedido</h2>

            <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl mb-8 border border-primary/10">
              <div className="flex flex-col">
                <span className="font-bold text-primary text-sm">Assinatura semanal</span>
                <span className="text-xs text-primary/80">Ganhe 15% de desconto</span>
              </div>
              <div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute top-[2px] right-[2px] w-5 h-5 bg-primary-foreground rounded-full" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-muted-foreground"><span>Frete</span><span className="text-primary font-medium">Grátis</span></div>
              <div className="flex justify-between text-primary font-medium"><span>Desconto (15%)</span><span>- R$ {discount.toFixed(2)}</span></div>
              <div className="pt-4 mt-4 border-t border-outline-variant/20 flex justify-between items-end">
                <span className="text-lg font-bold">Total</span>
                <div className="text-right">
                  <span className="block text-2xl font-black text-primary">R$ {total.toFixed(2)}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">ou 3x R$ {(total / 3).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-organic-gradient text-primary-foreground font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Finalizar pedido
            </button>
            <p className="text-center text-[10px] text-muted-foreground mt-6 px-4">
              Ao finalizar, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </p>
          </div>
        </aside>
      </div>
    </AppLayout>
  );
};

export default CarrinhoDeCompras;
