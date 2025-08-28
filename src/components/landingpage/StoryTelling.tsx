import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function StorytellingSection() {
  const scrollToDemo = () => {
    document.getElementById('demo-fluxo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-900/30 border border-red-700/50 rounded-full">
                <Quote className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm font-medium">
                  O Problema Real
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Você Está Perdendo
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Vendas{" "}
                </span>
                Todos os Dias
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Milhares de visitantes chegam ao seu site, mas apenas 2-3% se convertem em clientes. 
                Os outros 97% simplesmente desaparecem... para sempre.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Leads que escapam</h4>
                  <p className="text-gray-400">Visitantes interessados que nunca voltam</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Vendas perdidas</h4>
                  <p className="text-gray-400">Oportunidades de receita que se desvanecem</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Concorrência ganha</h4>
                  <p className="text-gray-400">Seus competidores capturam esses clientes</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800/50 to-green-900/30 rounded-xl p-6 border border-green-700/30">
              <p className="text-lg text-gray-200 italic">
                "Não é sua culpa. Você só não tem o sistema certo para capturar, nutrir e converter esses leads em vendas."
              </p>
            </div>
          </motion.div>

          {/* Solution Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-4">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 text-sm font-medium">
                  A Solução
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Transformamos Visitantes em
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}Clientes Fiéis
                </span>
              </h3>
            </div>

            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Captura automática de leads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Nutrição inteligente por email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Follow-ups personalizados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Conversão otimizada</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700/30 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Resultado:</h4>
              <p className="text-xl text-green-400 font-semibold">
                De 2% para 15-25% de conversão
              </p>
              <p className="text-gray-300 mt-2">
                Aumento de 10x na taxa de conversão
              </p>
            </div>

            <Button 
              onClick={scrollToDemo}
              size="lg"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Como Funciona na Prática
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}