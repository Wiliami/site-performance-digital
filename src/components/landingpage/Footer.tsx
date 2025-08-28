import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/95 border-t border-green-800/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Performance Digital</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformamos visitantes em clientes através de funis de marketing digital otimizados e automação inteligente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-900/30 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-900/30 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-900/30 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-900/30 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('demo-fluxo')}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Demonstração
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">
                Funis de Vendas
              </a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">
                Email Marketing
              </a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">
                Automação
              </a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">
                CRM Integrado
              </a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">
                Analytics
              </a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">
                Consultoria
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">contato@digitalflow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-700/30">
              <p className="text-green-400 font-medium text-sm">
                🎯 Consultoria Gratuita Disponível
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Agende sua sessão de 30 minutos
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DigitalFlow. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-green-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}