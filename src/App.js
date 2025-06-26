import React from 'react';

// -------------------------------------------------------------------------
// Componente Principal da Aplicação (App)
// Contém todos os componentes da landing page e seus estilos CSS agrupados.
// -------------------------------------------------------------------------

const App = () => {
  return (
    <>
      {/* Link para a fonte Inter do Google Fonts (carregado uma única vez) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ------------------------------------------------------------------------- */}
      {/* 1. SecaoHeroi: Seção Principal do Produto */}
      {/* ------------------------------------------------------------------------- */}
      <SecaoHeroi />

      {/* ------------------------------------------------------------------------- */}
      {/* 2. SecaoChamadaParaAcao: Seção de Call to Action */}
      {/* ------------------------------------------------------------------------- */}
      <SecaoChamadaParaAcao />

      {/* ------------------------------------------------------------------------- */}
      {/* 3. Rodape: Rodapé da Página */}
      {/* ------------------------------------------------------------------------- */}
      <Rodape />
    </>
  );
};

export default App;

/* === SecaoHeroi: Componente da Seção Principal do Produto === */
// Este componente exibe o título principal, a descrição e o espaço para a mídia do produto.
const SecaoHeroi = () => (
  <>
    {/* Bloco de estilos CSS específico para a Hero Section */}
    <style>
      {`
        /* Keyframe para animação de fade-in */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Estilos para o container principal da seção Hero */
        .hero-section {
          background: linear-gradient(to right, #3b82f6, #6366f1); /* Gradiente azul para índigo */
          color: white;
          padding: 5rem 1rem;
          text-align: center;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        @media (min-width: 768px) {
          .hero-section {
            padding: 8rem 1rem; /* Aumenta o padding em telas maiores */
          }
        }

        /* Estilos para o conteúdo dentro da seção Hero (para centralizar e limitar a largura) */
        .hero-content {
          max-width: 64rem; /* Largura máxima para o conteúdo */
          margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
        }

        /* Estilos para o título principal da seção Hero */
        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          animation: fadeIn 0.8s ease-out forwards; /* Aplica animação de fade-in */
          opacity: 0; /* Inicia com opacidade 0 para a animação */
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem; /* Aumenta o tamanho da fonte em telas maiores */
          }
        }

        /* Estilos para o texto de destaque dentro do título */
        .hero-highlight {
          color: #fcd34d; /* Cor amarela para destaque */
        }

        /* Estilos para a descrição breve do produto na seção Hero */
        .hero-description {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          animation: fadeIn 0.8s ease-out 0.2s forwards; /* Animação com um pequeno atraso */
          opacity: 0; /* Inicia com opacidade 0 para a animação */
        }
        @media (min-width: 768px) {
          .hero-description {
            font-size: 1.25rem; /* Aumenta o tamanho da fonte em telas maiores */
          }
        }

        /* Estilos para o botão de Call to Action na seção Hero */
        .hero-button {
          background-color: #facc15; /* Fundo amarelo */
          color: #3730a3; /* Cor do texto índigo escuro */
          font-weight: 700;
          padding: 1rem 2rem;
          border-radius: 9999px; /* Totalmente arredondado */
          display: inline-block; /* Permite aplicar transformações e padding */
          transition: all 0.3s ease; /* Transição suave para hover */
          text-decoration: none; /* Remove sublinhado padrão do link */
        }
        .hero-button:hover {
          background-color: #fcd34d; /* Amarelo mais claro no hover */
          transform: scale(1.05); /* Aumenta ligeiramente no hover */
        }

        /* Estilos para o container da imagem ou vídeo do produto */
        .product-media-container {
          margin-top: 3rem;
          max-width: 100%;
          display: flex;
          flex-direction: column; /* Organiza os itens verticalmente */
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.1); /* Fundo sutil para o placeholder */
          border-radius: 1rem;
          padding: 1.5rem;
          min-height: 250px; /* Altura mínima para o placeholder */
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          border: 2px dashed rgba(255, 255, 255, 0.3); /* Borda tracejada */
          gap: 1rem; /* Espaçamento entre os elementos internos */
        }
        .product-media-container img,
        .product-media-container video {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            display: block; /* Garante que a imagem/vídeo não tem espaços indesejados abaixo */
        }
        @media (min-width: 768px) {
          .product-media-container {
            min-height: 400px; /* Aumenta a altura mínima em telas maiores */
          }
        }
      `}
    </style>
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Descubra o Futuro com <span className="hero-highlight">[Nome do Seu Produto]!</span>
        </h1>
        <p className="hero-description">
          A solução inovadora que você esperava. Simples de usar, resultados garantidos.
        </p>
        <a href="#secao-chamada-para-acao" className="hero-button">
          Quero Saber Mais!
        </a>

        <div className="product-media-container">
          {/*
            INSERIR AQUI A SUA IMAGEM OU VÍDEO DO PRODUTO
            Use a tag <img> para imagens ou <video> para vídeos.
            Aponte para uma URL pública da sua imagem ou vídeo.
          */}
          <p>Insira aqui o link público da sua imagem ou vídeo.</p>
          <p>
            Exemplo de imagem: <br/>
            `&lt;img src="https://via.placeholder.com/600x400?text=Seu+Produto+Aqui" alt="Seu Produto" /&gt;`
          </p>
          <p>
            Exemplo de vídeo: <br/>
            `&lt;video src="https://www.w3schools.com/html/mov_bbb.mp4" controls /&gt;`
          </p>
        </div>
      </div>
    </section>
  </>
);

/* === SecaoChamadaParaAcao: Componente da Seção de Call to Action === */
// Este componente contém o apelo final para o utilizador tomar uma ação (comprar o produto).
const SecaoChamadaParaAcao = () => (
  <>
    {/* Bloco de estilos CSS específico para a Call to Action Section */}
    <style>
      {`
        /* Keyframe para animação de salto */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Estilos para o container principal da seção de Call to Action */
        .cta-section {
          background: linear-gradient(to right, #14b8a6, #059669); /* Gradiente azul-petróleo para verde escuro */
          padding: 5rem 1rem;
          text-align: center;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
        @media (min-width: 768px) {
          .cta-section {
            padding: 7rem 1rem; /* Aumenta o padding em telas maiores */
          }
        }

        /* Estilos para o título da seção de Call to Action */
        .cta-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .cta-title {
            font-size: 3rem; /* Aumenta o tamanho da fonte em telas maiores */
          }
        }

        /* Estilos para a descrição da seção de Call to Action */
        .cta-description {
          font-size: 1.125rem;
          color: white;
          opacity: 0.9;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 768px) {
          .cta-description {
            font-size: 1.25rem; /* Aumenta o tamanho da fonte em telas maiores */
          }
        }

        /* Estilos para o botão principal de Call to Action */
        .cta-button {
          background-color: white;
          color: #047857; /* Cor do texto verde-azulado escuro */
          font-weight: 700;
          padding: 1.25rem 3rem;
          border-radius: 9999px; /* Totalmente arredondado */
          font-size: 1.25rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); /* Sombra proeminente */
          transition: all 0.3s ease; /* Transição suave para hover */
          display: inline-block; /* Permite aplicar animações e transformações */
          animation: bounce 1.5s infinite ease-in-out; /* Aplica animação de salto */
          text-decoration: none; /* Remove sublinhado padrão do link */
        }
        .cta-button:hover {
          background-color: #f3f4f6; /* Branco mais claro no hover */
          transform: scale(1.05); /* Aumenta ligeiramente no hover */
        }
      `}
    </style>
    <section id="secao-chamada-para-acao" className="cta-section">
      <h2 className="cta-title">Pronto para Transformar Sua Realidade?</h2>
      <p className="cta-description">
        Clique no botão abaixo para adquirir o produto e começar sua jornada de sucesso hoje mesmo!
      </p>
      <a
        href="https://pay.kiwify.com.br/SEU_LINK_KIWIFY_AQUI"
        target="_blank"
        rel="noopener noreferrer" /* Melhor prática de segurança para links externos */
        className="cta-button"
      >
        Garanta Já o Seu Pela Kiwify!
      </a>
    </section>
  </>
);

/* === Rodape: Componente do Rodapé da Página === */
// Este componente exibe informações de copyright e links de política.
const Rodape = () => (
  <>
    {/* Bloco de estilos CSS específico para o Rodapé */}
    <style>
      {`
        /* Estilos para o container principal do rodapé */
        .footer {
          background-color: #1f2937; /* Fundo cinza escuro */
          color: white;
          padding: 2.5rem 1rem;
        }

        /* Estilos para o conteúdo dentro do rodapé (para centralizar e limitar a largura) */
        .footer-container {
          max-width: 64rem; /* Largura máxima para o conteúdo */
          margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
          text-align: center;
          font-size: 0.875rem;
        }

        /* Estilos para os links no rodapé */
        .footer-link {
          color: #93c5fd; /* Cor do link azul claro */
          text-decoration: none; /* Remove sublinhado padrão */
        }
        .footer-link:hover {
          text-decoration: underline; /* Adiciona sublinhado no hover */
        }
      `}
    </style>
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Minha Landing Page. Todos os direitos reservados.</p>
        <p style={{ marginTop: '0.5rem' }}>
          <a href="#" className="footer-link">Política de Privacidade</a>{' '}
          | <a href="#" className="footer-link">Termos de Serviço</a>
        </p>
      </div>
    </footer>
  </>
);
