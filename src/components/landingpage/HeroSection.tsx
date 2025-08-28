import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, BarChart3, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToDemo = () => {
    document.getElementById('demo-fluxo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/50 border border-green-700/50 rounded-full">
              <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">
                +350% ROI em 90 dias
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transforme
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                {" "}Leads{" "}
              </span>
              em Vendas
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Sistema completo de marketing digital que converte visitantes em clientes pagantes através de funis otimizados e automação inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-green-400 to-green-500 text-black font-bold px-8 py-4 text-lg hover:from-green-500 hover:to-green-50-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Quero diagnóstico gratutito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={scrollToDemo}
                variant="outline"
                size="lg"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 text-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2.5x</div>
                <div className="text-sm text-gray-400">Mais Conversões</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">85%</div>
                <div className="text-sm text-gray-400">Automação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30min</div>
                <div className="text-sm text-gray-400">Setup Rápido</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-gradient-to-br from-slate-800/80 to-green-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-700/30 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Dashboard de Performance</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Leads Capturados</span>
                  <span className="text-2xl font-bold text-green-400">1,247</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-4/5" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Taxa de Conversão</span>
                  <span className="text-2xl font-bold text-yellow-400">23.5%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full w-1/4" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <Target className="w-6 h-6 text-green-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">89%</div>
                    <div className="text-xs text-gray-400">Precisão</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <BarChart3 className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">R$ 45k</div>
                    <div className="text-xs text-gray-400">Receita</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl p-3 shadow-xl"
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-3 shadow-xl"
            >
              <Target className="w-6 h-6 text-black" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}