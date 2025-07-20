// Importa ícones da biblioteca lucide-react para redes sociais
import { Github, Linkedin, Mail } from 'lucide-react';

// Componente funcional Footer para o rodapé da aplicação
const Footer = () => {
  // Array com informações dos links de redes sociais
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/devAndreotti',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ricardo-andreotti-gon%C3%A7alves-0b5785283/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:OrlaEK@proton.me',
      color: 'hover:text-crypto-red-light'
    }
  ];

  return (
    // Elemento footer com borda superior e gradiente de fundo
    <footer className="relative border-t border-white/10 bg-gradient-to-t from-crypto-red-dark/10 to-transparent">
      {/* Contêiner principal do footer com padding responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid responsivo com 3 colunas no desktop e 1 no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primeira coluna: Logo e descrição */}
          <div className="space-y-4">
            {/* Logo e nome da aplicação */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 crypto-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">₿</span>
              </div>
              <span className="text-xl font-bold text-gradient">CryptoHub</span>
            </div>
            {/* Descrição da aplicação */}
            <p className="text-foreground/60 max-w-sm">
              Um portfólio moderno para explorar o universo das criptomoedas 
              com dados em tempo real e design glassmorphism.
            </p>
          </div>

          {/* Segunda coluna: Links rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <div className="space-y-2">
              {/* Mapeia e renderiza os links de navegação */}
              {['Home', 'Mercado', 'Sobre', 'Contato'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`} // Cria âncoras para navegação interna
                  className="block text-foreground/60 hover:text-crypto-red-light transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Terceira coluna: Links de redes sociais */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Conecte-se</h3>
            <div className="flex space-x-4">
              {/* Mapeia e renderiza os ícones de redes sociais */}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank" // Abre em nova aba
                  rel="noopener noreferrer" // Segurança para links externos
                  className={`p-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name} // Acessibilidade
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Seção inferior do footer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Mensagem personalizada com emoji animado */}
          <div className="flex items-center space-x-2 text-foreground/60">
            <span>Feito com</span>
            <span className="text-crypto-red-medium animate-pulse-glow">☕</span>
            <span>e tecnologia moderna</span>
          </div>
          
          {/* Copyright */}
          <div className="text-foreground/60 text-sm">
            © 2025 CryptoHub. Todos os direitos reservados.
          </div>
        </div>
      </div>

      {/* Decoração de fundo: linha gradiente na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crypto-red-medium to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;