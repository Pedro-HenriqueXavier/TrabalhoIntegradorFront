import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

const comprasPlanos = [
  { id: 1, nome: "Plano Básico", preco: "R$ 49,90", status: "Comprado" },
  { id: 2, nome: "Plano Família", preco: "R$ 129,90", status: "Comprado" },
  { id: 3, nome: "Plano Premium", preco: "R$ 199,90", status: "Pendente" },
];

const ListaCompras = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Compras de Planos Dentários
          </h1>
          <p className="text-lg max-w-2xl mx-auto animate-slide-up">
            Veja os planos dentários adquiridos
          </p>
        </div>
      </section>

      {/* Lista */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprasPlanos.map((compra) => (
              <Card
                key={compra.id}
                className="shadow-card-hover transition-all hover:scale-[1.02]"
              >
                <CardHeader className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold">{compra.nome}</CardTitle>
                    <Badge
                      variant={compra.status === "Comprado" ? "default" : "secondary"}
                    >
                      {compra.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 text-sm text-muted-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-accent" />
                  <span>{compra.preco}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListaCompras;
