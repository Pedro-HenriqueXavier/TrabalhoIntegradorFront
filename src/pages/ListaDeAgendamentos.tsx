import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail, Phone, User, Stethoscope } from "lucide-react";

const agendamentos = [
  {
    id: 1,
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    telefone: "(11) 99999-1111",
    consulta: "Primeira Consulta",
    especialidade: "Clínico Geral",
    data: "2025-11-02",
    horario: "09:00",
    status: "Confirmado",
  },
  {
    id: 2,
    nome: "João Santos",
    email: "joao.santos@email.com",
    telefone: "(11) 98888-2222",
    consulta: "Retorno",
    especialidade: "Ortodontia",
    data: "2025-11-05",
    horario: "14:00",
    status: "Pendente",
  },
  {
    id: 3,
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    telefone: "(11) 97777-3333",
    consulta: "Emergência",
    especialidade: "Endodontia",
    data: "2025-11-06",
    horario: "10:00",
    status: "Cancelado",
  },
];

const ListaAgendamento = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Lista de Agendamentos
          </h1>
          <p className="text-lg max-w-2xl mx-auto animate-slide-up">
            Visualize abaixo todos os agendamentos realizados recentemente
          </p>
        </div>
      </section>

      {/* Lista */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agendamentos.map((item) => (
              <Card
                key={item.id}
                className="shadow-card-hover transition-all hover:scale-[1.02]"
              >
                <CardHeader className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold">
                      {item.nome}
                    </CardTitle>
                    <Badge
                      variant={
                        item.status === "Confirmado"
                          ? "default"
                          : item.status === "Pendente"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>{item.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>{item.telefone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-accent" />
                    <span>{item.consulta}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-accent" />
                    <span>{item.especialidade}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>
                      {new Date(item.data).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{item.horario}</span>
                  </div>
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

export default ListaAgendamento;
