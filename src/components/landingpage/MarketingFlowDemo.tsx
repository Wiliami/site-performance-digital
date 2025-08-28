import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MousePointer, 
  Mail, 
  MessageSquare, 
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Target,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MarketingFlowDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Visitante Chega",
      description: "Usuário visita seu site através de anúncios, SEO ou redes sociais",
      icon: MousePointer,
      color: "from-blue-500 to-cyan-400",
      metrics: "1.000 visitantes",
      details: "Tráfego qualificado direcionado para landing pages otimizadas"
    },
    {
      id: 2,
      title: "Captura de Lead",
      description: "Oferecemos conteúdo valioso em troca do email",
      icon: Mail,
      color: "from-green-500 to-emerald-400",
      metrics: "150 leads capturados",
      details: "Pop-ups inteligentes e formulários otimizados"
    },
    {
      id: 3,
      title: "Nutrição Automática",
      description: "Sequência de emails educativos automáticos",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-400",
      metrics: "120 leads engajados",
      details: "E-mail marketing automatizado personalizado"
    },
    {
      id: 4,
      title: "Conversão em Venda",
      description: "Leads recebem ofertas no momento certo",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-400",
      metrics: "30 vendas realizadas",
      details: "Ofertas baseadas no comportamento do lead"
    },
    {
      id: 5,
      title: "Cliente Fidelizado",
      description: "Relacionamento contínuo para novas vendas",
      icon: TrendingUp,
      color: "from-red-500 to-pink-400",
      metrics: "85% de retenção",
      details: "Programas de fidelidade e upsells"
    }
  ];

  React.useEffect(() => {
    let interval: any;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, steps.length]);

  const handleStepClick = (index: any) => {
    setCurrentStep(index);
    setAutoPlay(false);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setAutoPlay(false);
  };

  const currentStepData = steps[currentStep];

  return (
    <section id="demo-fluxo" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full mb-6">
            <Target className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">
              Demonstração Interativa
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veja o Fluxo Completo em Ação
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Acompanhe como transformamos visitantes em clientes pagantes
          </p>

          <div className="flex justify-center items-center gap-4 mb-12">
            <Button 
              onClick={toggleAutoPlay}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold transition-all duration-300"
            >
              {autoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {autoPlay ? 'Pausar' : 'Reproduzir'} Demo
            </Button>
            <Button 
              onClick={resetDemo}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reiniciar
            </Button>
          </div>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-4 mb-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = currentStep === index;
              const isCompleted = currentStep > index;
              
              return (
                <motion.div
                  key={step.id}
                  className="relative flex flex-col items-center cursor-pointer group"
                  onClick={() => handleStepClick(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r ' + step.color + ' scale-110 shadow-xl'
                      : isCompleted
                      ? 'bg-green-600 scale-100'
                      : 'bg-slate-700 scale-100 group-hover:bg-slate-600'
                  }`}>
                    <IconComponent className="w-7 h-7 text-white" />
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className={`font-semibold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h4>
                    <Badge variant={isActive ? "default" : "secondary"} className="mt-2">
                      Passo {index + 1}
                    </Badge>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-600" />
                  )}
                </motion.div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border border-gray-700/50 shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={'p-4 rounded-xl bg-gradient-to-r ' + currentStepData.color}>
                          <currentStepData.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {currentStepData.title}
                          </h3>
                          <Badge className={'bg-gradient-to-r ' + currentStepData.color + ' text-white mt-2'}>
                            Etapa {currentStep + 1} de {steps.length}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-lg text-gray-300 leading-relaxed">
                        {currentStepData.description}
                      </p>

                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Como funciona:</h4>
                        <p className="text-gray-300">
                          {currentStepData.details}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-6 border border-gray-600/30">
                      <h4 className="font-semibold text-white mb-4 text-center">Métricas</h4>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-2">
                          {currentStepData.metrics}
                        </div>
                        <div className="text-gray-300 text-sm">
                          Resultados desta etapa
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-700/30 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Resultado Final</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">1.000</div>
                <div className="text-gray-300">Visitantes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">30</div>
                <div className="text-gray-300">Vendas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">25x</div>
                <div className="text-gray-300">ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}