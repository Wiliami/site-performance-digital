import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Award,
  TrendingUp,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Rocket,
      title: "Crescimento Acelerado",
      description: "Multiplique suas vendas em até 5x com funis otimizados que convertem visitantes em clientes pagantes.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Sistema que trabalha 24/7 para você. Nutrição de leads, follow-ups e fechamento automático de vendas.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Target,
      title: "Segmentação Precisa",
      description: "Identifique e alcance seu público ideal com precisão laser. Cada lead recebe a mensagem certa na hora certa.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboards em tempo real com métricas que realmente importam. Tome decisões baseadas em dados concretos.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Users,
      title: "Gestão de Leads",
      description: "CRM integrado que organiza todos os seus contatos e oportunidades em um só lugar. Nunca perca um lead novamente.",
      color: "from-indigo-400 to-blue-400"
    },
    {
      icon: Smartphone,
      title: "Multi-Canal",
      description: "Presença integrada em todos os canais: email, WhatsApp, redes sociais, anúncios pagos e muito mais.",
      color: "from-red-400 to-pink-400"
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-6">
            <Award className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">
              Resultados Comprovados
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por Que Escolher a
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}Performance Digital
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A plataforma completa que une estratégia, tecnologia e resultados para transformar seu negócio digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-green-900/20 border border-green-700/30 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105 h-full">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-700/30"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2.847</div>
              <div className="text-gray-300">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">R$ 12M+</div>
              <div className="text-gray-300">Faturamento Gerado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">350%</div>
              <div className="text-gray-300">ROI Médio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98.5%</div>
              <div className="text-gray-300">Satisfação</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}