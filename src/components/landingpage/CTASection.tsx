import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Rocket, CheckCircle, Clock, Gift } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "Setup completo em 30 minutos",
    "Suporte premium 24/7",
    "Treinamento personalizado",
    "Garantia de 30 dias",
    "ROI garantido em 90 dias"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-slate-800/80 to-green-900/40 border border-green-700/50 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              {/* Urgency Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-full mb-8">
                <Clock className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm font-medium">
                  Oferta por Tempo Limitado
                </span>
              </div>

              {/* Main CTA */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Pronto Para
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}10x{" "}
                </span>
                Suas Vendas?
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Junte-se a mais de 2.800 empresários que já transformaram seus negócios com o DigitalFlow
              </p>

              {/* Special Offer */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl p-6 mb-8 border border-yellow-400/30">
                <div className="flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-semibold">OFERTA ESPECIAL</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Setup Gratuito + 30 Dias de Teste
                </h3>
                <p className="text-gray-300">
                  Valor normal R$ 2.997 - <span className="text-green-400 font-bold">GRÁTIS por tempo limitado</span>
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-10 py-6 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  COMEÇAR AGORA GRÁTIS
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-4">
                  ✅ Sem compromisso • ✅ Cancele quando quiser • ✅ Suporte 24/7
                </p>
                <div className="flex justify-center items-center space-x-8 text-gray-500">
                  <span>🔒 Dados 100% Seguros</span>
                  <span>💳 Pagamento Protegido</span>
                  <span>🎯 Resultados Garantidos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}