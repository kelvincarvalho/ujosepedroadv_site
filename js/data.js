/**
 * José Queiroz — Advocacia & Consultoria Jurídica
 * data.js — Fonte única de conteúdo editável
 *
 * COMO EDITAR:
 *  • Depoimentos  → adicione objetos em SITE.testimonials
 *  • Artigos      → adicione objetos em SITE.blog
 *  • Serviços     → edite SITE.services
 *  • Contato      → edite SITE.owner (telefone, e-mail, redes)
 *  • Formação     → edite SITE.owner.education
 */

'use strict';

/* eslint-disable no-unused-vars */
const SITE = {

  /* ── Informações do advogado ─────────────────────────────────── */
  owner: {
    name:           'José Pedro Queiroz',
    oab:            'OAB/PR 116.683',
    phone:          '41988855715',           // apenas dígitos (usado nos links wa.me)
    phoneFormatted: '(41) 98885-5715',       // exibido na tela
    email:          'ujose.adv@gmail.com',
    instagram: {
      handle: '@jose.queirozadv',
      url:    'https://www.instagram.com/jose.queirozadv',
    },
    linkedin: {
      handle: '/in/ujosepedro',
      url:    'https://www.linkedin.com/in/ujosepedro',
    },
    calendly: 'ujose-adv/30min',             // caminho após calendly.com/
    photo:    'assets/jose-queiroz.jpg',
    location: {
      city:   'Curitiba, Paraná',
      detail: 'São José dos Pinhais · Araucária<br>Pinhais · Campo Largo · Região Metropolitana',
    },
    hours: 'Segunda a Sexta — 08h às 18h',

    /* Bullets da seção Sobre */
    highlights: [
      'Base em <strong>Curitiba e região metropolitana</strong>',
      'Atendimento digital para todo o Brasil',
      'Reuniões por Google Meet e Zoom',
      'Rede de parceiros em diversas especialidades',
    ],

    /* Formação acadêmica */
    education: [
      { type: 'Bacharelado',   name: 'Direito — UniBrasil' },
      { type: 'Pós-graduação', name: 'Compliance e Direito Digital — UniAmérica' },
      { type: 'Pós-graduação', name: 'Direito Empresarial Consultivo — Legale Educacional' },
      { type: 'Pós-graduação', name: 'Gestão de Escritórios e Depts. Jurídicos — Legale Educacional' },
      { type: 'MBA',           name: 'Gestão de Projetos — Unicuritiba' },
      { type: 'Cursos',        name: 'Legal Operations & Gestão de Contencioso 4.0 — Future Law' },
    ],

    /* Números de destaque (seção Sobre) */
    stats: [
      { value: '100%',    label: 'Digital nacional' },
      { value: 'Curitiba', label: '& Região',       valueStyle: 'font-size:1.55rem;letter-spacing:-.02em' },
      { value: '+6',      label: 'Áreas via parceiros' },
      { value: '116.683', label: 'OAB/PR',          valueStyle: 'font-size:1.25rem' },
    ],
  },

  /* ── Marquee ─────────────────────────────────────────────────── */
  marquee: [
    'Curitiba e Região',
    'Direito Civil',
    'Direito de Família',
    'Direito Empresarial',
    'Atendimento Digital',
    'Legal Operations',
    'OAB/PR 116.683',
    'Planejamento Patrimonial',
  ],

  /* ── Serviços ────────────────────────────────────────────────── */
  services: [
    {
      title:       'Direito Civil',
      description: 'Contratos, responsabilidade civil, cobranças, posse e propriedade. Soluções para conflitos em Curitiba e região.',
    },
    {
      title:       'Direito de Família',
      description: 'Divórcio, guarda, pensão alimentícia, inventário e herança. Atendimento humanizado para famílias de Curitiba.',
    },
    {
      title:       'Direito Empresarial',
      description: 'Constituição de empresas, contratos comerciais, fusões e compliance. Assessoria para negócios em Curitiba.',
    },
    {
      title:       'Direito Imobiliário',
      description: 'Compra, venda e locação de imóveis, usucapião e regularização fundiária. Expertise em Curitiba.',
    },
    {
      title:       'Consultoria Estratégica',
      description: 'Assessoria preventiva, análise de contratos e pareceres com visão de negócios para empresas curitibanas.',
    },
    {
      title:       'Planejamento Patrimonial',
      description: 'Proteção do patrimônio familiar e empresarial, holdings e blindagem para Curitiba e região metropolitana.',
    },
  ],

  /* ── Depoimentos — ADICIONE AQUI ────────────────────────────── */
  testimonials: [
    {
      text:     'Dr. José é um profissional extremamente dedicado e competente. Desde o primeiro atendimento mostrou atenção aos detalhes e clareza nas explicações. Transmite segurança, confiança e trabalha com seriedade e ética. Recomendo muito!',
      author:   'Sara Antunes',
      role:     'Studio Ohana Beauty · Curitiba',
      initials: 'SA',
      stars:    5,
    },
    // Exemplo — copie e preencha para adicionar:
    // {
    //   text:     'Texto do depoimento aqui...',
    //   author:   'Nome Sobrenome',
    //   role:     'Empresa ou Cargo · Cidade',
    //   initials: 'NS',   // 2 letras do nome
    //   stars:    5,
    // },
  ],

  /* ── Blog — ADICIONE ARTIGOS AQUI ───────────────────────────── */
  blog: [
    {
      tag:    'Gestão Jurídica · Legal Ops',
      title:  'Controladoria Jurídica e Legal Ops',
      author: 'José Pedro Queiroz',
      excerpt: 'A advocacia brasileira está passando por uma transformação silenciosa, mas profunda. As áreas de Controladoria Jurídica e Legal Operations ganham protagonismo como pilares de eficiência, segurança e previsibilidade.',
      paragraphs: [
        'A advocacia brasileira está passando por uma transformação silenciosa, mas profunda. Se antes o foco estava quase exclusivamente no raciocínio jurídico, hoje as áreas de <strong>Controladoria Jurídica</strong> e <strong>Legal Operations (Legal Ops)</strong> ganham protagonismo na gestão estratégica de escritórios e departamentos jurídicos.',
        'Por muito tempo, a controladoria jurídica foi vista apenas como um "cartório interno": cuidava de prazos, organização de processos e alimentação de sistemas. Com uma estrutura bem desenhada, a controladoria assume papel estratégico: gera indicadores, antecipa riscos, padroniza rotinas e libera o advogado para focar na parte intelectual e técnica.',
        'Já o movimento de Legal Ops, originado nos EUA e em expansão no Brasil, amplia esse horizonte ao aplicar conceitos de gestão empresarial, tecnologia e inovação na rotina jurídica. Não se trata apenas de fazer mais com menos, mas de alinhar o jurídico às necessidades do negócio.',
        'Para alcançar esse patamar estratégico, a tecnologia se torna aliada indispensável. Ferramentas de automação, jurimetria, dashboards de performance e sistemas de workflow não são luxo, mas necessidade. O uso inteligente da tecnologia permite que o advogado tome decisões com base em dados, não apenas em intuição.',
        'O cliente não quer apenas uma boa tese jurídica. Ele espera previsibilidade de custos, eficiência na execução e clareza na comunicação. É aqui que controladoria e Legal Ops se encontram: transformando o jurídico em setor que agrega valor mensurável e estratégico.',
      ],
      conclusion: 'Controladoria Jurídica e Legal Ops não são modismos. São respostas concretas às novas demandas do mercado. Escritórios e departamentos jurídicos que investem nessas áreas se posicionam como verdadeiros parceiros estratégicos de negócios.',
    },
    // Exemplo — copie e preencha para adicionar:
    // {
    //   tag:    'Categoria do artigo',
    //   title:  'Título do artigo',
    //   author: 'José Pedro Queiroz',
    //   excerpt: 'Resumo exibido na listagem...',
    //   paragraphs: [
    //     'Primeiro parágrafo. Pode usar <strong>negrito</strong>.',
    //     'Segundo parágrafo.',
    //   ],
    //   conclusion: 'Texto da conclusão.',
    // },
  ],

  /* ── Áreas do formulário de contato ─────────────────────────── */
  contactAreas: [
    'Direito Civil',
    'Direito de Família',
    'Direito Empresarial',
    'Direito Imobiliário',
    'Consultoria Estratégica',
    'Planejamento Patrimonial',
    'Outro',
  ],
};
