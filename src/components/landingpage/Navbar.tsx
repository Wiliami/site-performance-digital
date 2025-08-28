import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-green-800/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Performance Digital</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300"
            >
              Login
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-black-400 to-black-500 text-black font-semibold hover:from-black-500 hover:to-black-600 transition-all duration-300"
            >
              Criar conta
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/98 border-t border-green-800/30"
        >
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors font-medium py-2"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors font-medium py-2"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors font-medium py-2"
            >
              Depoimentos
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-600"
            >
              ...
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-600"
            >
              Criar conta
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}