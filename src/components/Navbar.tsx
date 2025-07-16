
import { useState } from 'react';
import { Moon, Sun, Menu, X, BarChart3, TrendingUp } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Mercado', href: '#market' },
    { name: 'Análises', href: '#analytics' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0 w-72">
            <div className="relative">
              <div className="w-10 h-10 crypto-gradient rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-crypto-red-medium rounded-full flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gradient leading-none">CryptoHub</span>
              <span className="text-xs text-foreground/60 leading-none">Plataforma Analytics</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-crypto-red-dark/20 to-crypto-red-medium/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0 w-72 justify-end">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl glass hover:bg-white/20 transition-all duration-300 group overflow-hidden"
              aria-label="Alternar tema"
            >
              <div className="relative z-10">
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                ) : (
                  <Moon className="h-4 w-4 text-crypto-red-medium group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-crypto-red-medium/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl glass hover:bg-white/20 transition-all duration-300"
                aria-label="Menu"
              >
                {isOpen ? (
                  <X className="h-4 w-4 text-foreground" />
                ) : (
                  <Menu className="h-4 w-4 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-dark border-t border-white/10 backdrop-blur-xl">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
