import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Planos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Nossos Planos Dentários
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-up">
            Escolha o plano ideal para você, sua família ou sua empresa.
            Cobertura completa com a qualidade do Odonto Prime.
          </p>
        </div>
      </section>

      {/* Planos Familiares */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Plano Familiar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Segurança, qualidade e economia para toda a família
            </p>
          </div>

          <div className="max-w-md ml-auto">
            <Card className="hover:shadow-card-hover transition-shadow duration-300  border-accent border-2">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <CardTitle className="text-2xl">Plano Familiar</CardTitle>
                <CardDescription className="text-lg">
                  Até 5 pessoas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6 pb-6 border-b">
                  <span className="text-5xl font-bold text-primary">
                    R$ 269.90
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 mb-6"></ul>
                <Link to="/compra">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Assinar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos individuais */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Plano Individual
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Economia com pagamento anual e benefícios exclusivos
            </p>
          </div>

          <div className="max-w-2xl mr-auto">
            <Card className="hover:shadow-card-hover transition-shadow duration-300 border-accent border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Plano individual</CardTitle>
                <CardDescription className="text-lg">
                  Individual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6 pb-6 border-b">
                  <div className="text-5xl font-bold text-primary mb-2">
                    R$ 99.90
                  </div>
                  <div className="text-muted-foreground text-sm">/mês</div>
                  <div className="text-sm text-accent mt-2"></div>
                </div>
                <ul className="space-y-3 mb-6"></ul>
                <Link to="/compra">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Assinar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plano Empresarial */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Plano Empresarial
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cuide da saúde bucal dos seus colaboradores com benefícios
              exclusivos
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-card-hover transition-shadow duration-300 border-accent border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Empresarial</CardTitle>
                <CardDescription className="text-lg">
                  10 a 30 colaboradores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6 pb-6 border-b">
                  <span className="text-4xl font-bold text-primary">
                    R$ 119
                  </span>
                  <span className="text-muted-foreground">/pessoa</span>
                </div>
                <ul className="space-y-3 mb-6"></ul>
                <Link to="/compra">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Solicitar Proposta
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Planos;
