import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Building,
  Users,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    monthlyRevenue: "",
    challenge: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-green-800/80 to-emerald-900/60 border border-green-600/50">
              <CardContent className="p-12">
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  Mensagem Enviada com Sucesso! 🎉
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Nossa equipe entrará em contato em até 2 horas para agendar sua consultoria gratuita.
                </p>
                <div className="bg-green-900/30 rounded-lg p-4 border border-green-600/30">
                  <p className="text-green-300">
                    📧 Verifique seu email - enviamos um guia gratuito com as 7 estratégias mais eficazes de marketing digital!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">
              Consultoria Gratuita
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comece Sua
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}Transformação{" "}
            </span>
            Hoje
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agende uma consultoria gratuita de 30 minutos e descubra como podemos multiplicar suas vendas online
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Preencha os Dados e Receba Sua Proposta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">WhatsApp *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-300">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Número de Funcionários</Label>
                      <Select 
                        value={formData.employees} 
                        onValueChange={(value) => handleInputChange('employees', value)}
                      >
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Apenas eu</SelectItem>
                          <SelectItem value="2-10">2-10 funcionários</SelectItem>
                          <SelectItem value="11-50">11-50 funcionários</SelectItem>
                          <SelectItem value="51-200">51-200 funcionários</SelectItem>
                          <SelectItem value="200+">Mais de 200</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Faturamento Mensal</Label>
                      <Select 
                        value={formData.monthlyRevenue} 
                        onValueChange={(value) => handleInputChange('monthlyRevenue', value)}
                      >
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-10k">R$ 0 - 10k</SelectItem>
                          <SelectItem value="10-50k">R$ 10k - 50k</SelectItem>
                          <SelectItem value="50-100k">R$ 50k - 100k</SelectItem>
                          <SelectItem value="100-500k">R$ 100k - 500k</SelectItem>
                          <SelectItem value="500k+">R$ 500k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">Principal Desafio</Label>
                    <Select 
                      value={formData.challenge} 
                      onValueChange={(value) => handleInputChange('challenge', value)}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Qual seu maior desafio hoje?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leads">Gerar mais leads qualificados</SelectItem>
                        <SelectItem value="conversion">Aumentar taxa de conversão</SelectItem>
                        <SelectItem value="automation">Automatizar processos</SelectItem>
                        <SelectItem value="sales">Aumentar vendas online</SelectItem>
                        <SelectItem value="retention">Reter mais clientes</SelectItem>
                        <SelectItem value="other">Outro desafio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Mensagem Adicional</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white h-24"
                      placeholder="Conte-nos mais sobre seus objetivos e desafios..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        RECEBER PROPOSTA GRATUITA
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    🔒 Seus dados estão 100% seguros • Resposta em até 2 horas
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-green-900/20 border border-green-700/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Outras Formas de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-400">contato@digitalflow.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-medium">WhatsApp</div>
                      <div className="text-gray-400">(11) 99999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-medium">Chat Online</div>
                      <div className="text-gray-400">Disponível 24/7</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You Get */}
            <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-700/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  O Que Você Recebe Gratuitamente:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <span className="text-gray-300">Análise completa do seu negócio atual</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <span className="text-gray-300">Estratégia personalizada de crescimento</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <span className="text-gray-300">Projeção de resultados em 90 dias</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <span className="text-gray-300">Guia exclusivo com 7 estratégias comprovadas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700/30 text-center">
              <h4 className="text-lg font-bold text-white mb-2">⚡ Resposta Rápida</h4>
              <p className="text-gray-300">
                Nossa equipe responde em até <span className="text-green-400 font-bold">2 horas</span> nos dias úteis
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}