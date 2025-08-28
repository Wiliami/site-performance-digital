// import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart Solutions",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Aumentamos nosso faturamento em 340% em apenas 6 meses. O sistema de automação é impressionante e nos economizou centenas de horas de trabalho manual.",
      results: { revenue: "+340%", leads: "+580%", conversion: "23.5%" },
      rating: 5
    },
    {
      name: "Marina Oliveira",
      company: "BellaVida Cosméticos",
      role: "Diretora de Marketing",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "A plataforma transformou completamente nossa estratégia digital. De 50 leads por mês para mais de 800. O ROI foi de 450% no primeiro trimestre.",
      results: { leads: "+1500%", roi: "450%", customers: "+280%" },
      rating: 5
    },
    {
      name: "João Santos",
      company: "EduFuture",
      role: "Fundador",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Nunca imaginei que seria possível automatizar tanto do nosso processo de vendas. Hoje vendemos 24/7 sem nossa intervenção direta. Revolucionário!",
      results: { automation: "95%", sales: "+220%", time: "80h/mês" },
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-900/30 border border-yellow-700/50 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">
              Casos de Sucesso Reais
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seus negócios com o DigitalFlow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-yellow-400/30 absolute -top-2 -left-2" />
                    <p className="text-gray-300 leading-relaxed pl-4 italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {Object.entries(testimonial.results).map(([key, value]) => (
                      <div key={key} className="bg-slate-700/50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-green-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Profile */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-700">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-yellow-400">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/50 to-green-900/30 rounded-2xl p-8 border border-green-700/30"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto" />
              <div className="text-3xl font-bold text-white">98.5%</div>
              <div className="text-gray-300">Taxa de Satisfação</div>
            </div>
            <div className="space-y-2">
              <Users className="w-8 h-8 text-blue-400 mx-auto" />
              <div className="text-3xl font-bold text-white">2,847+</div>
              <div className="text-gray-300">Clientes Ativos</div>
            </div>
            <div className="space-y-2">
              <Star className="w-8 h-8 text-yellow-400 mx-auto" />
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
            <div className="space-y-2">
              <Quote className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="text-3xl font-bold text-white">1,200+</div>
              <div className="text-gray-300">Depoimentos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}