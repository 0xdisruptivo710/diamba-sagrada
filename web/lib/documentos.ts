/* ==========================================================================
   Diamba Sagrada — Conteúdo legal dos documentos da associação
   --------------------------------------------------------------------------
   Texto transcrito dos documentos oficiais (.pages) entregues pela Jéssica:
   Termo de Adesão, Termo de Responsabilidade e Regulamento Interno.
   Mantido como dado para que o fluxo de associação e as páginas de leitura
   usem exatamente a mesma fonte.
   ========================================================================== */

/* ---- Termo de Adesão à Associação ---------------------------------------- */
export const termoAdesao = {
  titulo: "Termo de Adesão à Associação",
  intro:
    "Pelo presente instrumento, o(a) solicitante requer sua adesão como associado(a) da Associação Diamba Sagrada, declarando que:",
  declaracoes: [
    "Conhece e concorda integralmente com o Estatuto Social e o Regulamento Interno da associação;",
    "Tem ciência de que a associação é uma entidade sem fins lucrativos;",
    "Está ciente de que eventual contribuição financeira possui caráter exclusivamente associativo, destinada à manutenção das atividades;",
    "Compromete-se a respeitar as normas internas, bem como as decisões da diretoria;",
    "Declara que sua participação está vinculada a fins pessoais, terapêuticos, científicos ou de apoio às finalidades da associação;",
    "Está ciente de que o descumprimento das normas poderá resultar em advertência, suspensão ou exclusão;",
    "Declara que sua participação ocorre de forma livre e voluntária.",
  ],
  fecho:
    "O(a) associado(a) declara ainda que não irá utilizar a associação para fins ilícitos.",
} as const;

/* ---- Termo de Responsabilidade (uso de cannabis medicinal) --------------- */
export const termoResponsabilidade = {
  titulo: "Termo de Responsabilidade para Uso de Cannabis Medicinal",
  intro: "Declaro, para os devidos fins, que:",
  declaracoes: [
    "Sou paciente em tratamento e possuo recomendação/prescrição médica para uso de cannabis medicinal, que se encontra anexada;",
    "Estou ciente de que o uso da cannabis deve ser realizado sob orientação médica, sendo de minha exclusiva responsabilidade seguir corretamente as recomendações;",
    "Declaro que minha vinculação à Associação ocorre para fins terapêuticos, científicos e de apoio ao tratamento de saúde, no contexto do direito fundamental à saúde;",
    "Declaro que os produtos eventualmente disponibilizados pela associação destinam-se exclusivamente ao meu uso pessoal e terapêutico;",
    "Comprometo-me a utilizar tais produtos exclusivamente para uso pessoal, sendo vedada a venda, doação ou compartilhamento a terceiros;",
    "Assumo integral responsabilidade pelo uso indevido, em desacordo com a orientação médica ou com a legislação vigente;",
    "Declaro estar ciente dos aspectos legais relacionados ao uso de cannabis no Brasil, incluindo eventuais riscos jurídicos;",
    "Reconheço que a Associação atua com base em princípios de redução de danos, dignidade da pessoa humana e direito à saúde;",
    "Isento a associação, seus dirigentes e colaboradores de qualquer responsabilidade por uso indevido ou irregular.",
  ],
  anexosObrigatorios: ["Receita médica", "Laudo médico"],
  fecho:
    "Declaro ainda que todas as informações prestadas são verdadeiras e firmo o presente termo de livre e espontânea vontade.",
} as const;

/* ---- Regulamento Interno (somente leitura/ciência) ----------------------- */
export const regulamentoInterno = {
  titulo: "Regulamento Interno",
  capitulos: [
    {
      titulo: "Capítulo I — Disposições Gerais",
      artigos: [
        "Art. 1º — O presente Regulamento Interno disciplina o funcionamento da Diamba Sagrada Associação dos Pacientes de Fitoterápicos — Tratamentos Medicinais e Espirituais de São Tomé das Letras — MG, complementando o Estatuto Social.",
        "Art. 2º — A associação é uma entidade civil, sem fins lucrativos, com finalidade de apoio a pacientes, promoção da saúde, pesquisa e desenvolvimento de terapias, incluindo o uso de cannabis para fins medicinais.",
        "Art. 3º — Todas as atividades da associação serão pautadas pelos princípios da legalidade, ética, dignidade da pessoa humana, redução de danos e direito fundamental à saúde.",
      ],
    },
    {
      titulo: "Capítulo II — Dos Associados",
      artigos: [
        "Art. 4º — A associação poderá admitir as seguintes categorias de associados: I – Pacientes; II – Apoiadores; III – Pesquisadores.",
        "Art. 5º — A admissão ocorrerá mediante: I – Preenchimento da ficha de associado; II – Assinatura do termo de adesão; III – Assinatura do termo de responsabilidade; IV – Análise e aprovação pela diretoria.",
        "Art. 6º — São direitos dos associados: I – Participar das atividades institucionais da associação; II – Receber apoio institucional dentro das finalidades da entidade; III – Participar de assembleias (conforme estatuto).",
        "Art. 7º — São deveres dos associados: I – Cumprir o Estatuto e este Regulamento; II – Respeitar as decisões da diretoria; III – Não utilizar a associação para fins ilícitos; IV – Manter seus dados atualizados.",
      ],
    },
    {
      titulo: "Capítulo III — Do Uso Terapêutico da Cannabis",
      artigos: [
        "Art. 8º — O uso de cannabis no âmbito da associação será exclusivamente para fins terapêuticos, mediante recomendação médica.",
        "Art. 9º — O associado paciente deverá obrigatoriamente apresentar receita e/ou laudo médico que comprove a indicação terapêutica.",
      ],
    },
  ],
  // O documento oficial completo continua em cláusulas adicionais; a versão
  // integral assinada é o .pages entregue pela associação.
  notaIntegral:
    "Este é um resumo das disposições principais. O Regulamento Interno e o Estatuto Social completos são os documentos oficiais da associação.",
} as const;
