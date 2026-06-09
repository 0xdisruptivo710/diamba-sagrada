/* ==========================================================================
   Diamba Sagrada — Conteúdo legal dos documentos da associação
   --------------------------------------------------------------------------
   Texto transcrito dos documentos oficiais (.pages) entregues pela Jéssica:
   Termo de Adesão, Termo de Responsabilidade e Regulamento Interno.
   Mantido como dado para que o fluxo de associação e as páginas de leitura
   usem exatamente a mesma fonte.

   ⚠ A versão PT é a oficial/vinculante (transcrição dos documentos assinados).
     A tradução EN é de cortesia — termos jurídicos devem ser revisados por
     advogado antes de qualquer uso vinculante.
   ========================================================================== */

import type { Locale } from "@/lib/i18n";

type DocTermo = {
  titulo: string;
  intro: string;
  declaracoes: string[];
  fecho: string;
};

/* ---- Termo de Adesão à Associação ---------------------------------------- */
export const termoAdesao: Record<Locale, DocTermo> = {
  pt: {
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
  },
  en: {
    titulo: "Membership Agreement",
    intro:
      "By this instrument, the applicant requests admission as a member of the Diamba Sagrada Association, declaring that they:",
    declaracoes: [
      "Know and fully agree with the association's Bylaws and Internal Regulations;",
      "Are aware that the association is a non-profit entity;",
      "Are aware that any financial contribution is exclusively associative in nature, intended for the upkeep of activities;",
      "Undertake to respect the internal rules as well as the decisions of the board;",
      "Declare that their participation is tied to personal, therapeutic, scientific or support purposes aligned with the association's aims;",
      "Are aware that failure to comply with the rules may result in warning, suspension or exclusion;",
      "Declare that their participation is free and voluntary.",
    ],
    fecho:
      "The member further declares that they will not use the association for unlawful purposes.",
  },
};

/* ---- Termo de Responsabilidade (uso de cannabis medicinal) --------------- */
type DocResponsabilidade = DocTermo & { anexosObrigatorios: string[] };

export const termoResponsabilidade: Record<Locale, DocResponsabilidade> = {
  pt: {
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
  },
  en: {
    titulo: "Statement of Responsibility for the Use of Medical Cannabis",
    intro: "I declare, for all due purposes, that:",
    declaracoes: [
      "I am a patient under treatment and hold a medical recommendation/prescription for the use of medical cannabis, which is attached;",
      "I am aware that cannabis use must be carried out under medical guidance, and that following the recommendations correctly is my sole responsibility;",
      "I declare that my membership in the Association is for therapeutic, scientific and health-treatment support purposes, within the context of the fundamental right to health;",
      "I declare that any products eventually made available by the association are intended exclusively for my personal and therapeutic use;",
      "I undertake to use such products exclusively for personal use; their sale, donation or sharing with third parties is prohibited;",
      "I assume full responsibility for any misuse, contrary to medical guidance or to applicable law;",
      "I declare that I am aware of the legal aspects related to cannabis use in Brazil, including possible legal risks;",
      "I acknowledge that the Association acts based on the principles of harm reduction, human dignity and the right to health;",
      "I release the association, its officers and staff from any liability for improper or irregular use.",
    ],
    anexosObrigatorios: ["Medical prescription", "Medical report"],
    fecho:
      "I further declare that all information provided is true and I sign this statement of my own free and spontaneous will.",
  },
};

/* ---- Regulamento Interno (somente leitura/ciência) ----------------------- */
type DocRegulamento = {
  titulo: string;
  capitulos: { titulo: string; artigos: string[] }[];
  notaIntegral: string;
};

export const regulamentoInterno: Record<Locale, DocRegulamento> = {
  pt: {
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
    notaIntegral:
      "Este é um resumo das disposições principais. O Regulamento Interno e o Estatuto Social completos são os documentos oficiais da associação.",
  },
  en: {
    titulo: "Internal Regulations",
    capitulos: [
      {
        titulo: "Chapter I — General Provisions",
        artigos: [
          "Art. 1 — These Internal Regulations govern the operation of Diamba Sagrada Associação dos Pacientes de Fitoterápicos — Tratamentos Medicinais e Espirituais de São Tomé das Letras — MG, complementing the Bylaws.",
          "Art. 2 — The association is a civil, non-profit entity whose purpose is to support patients, promote health, and research and develop therapies, including the use of cannabis for medicinal purposes.",
          "Art. 3 — All of the association's activities shall be guided by the principles of legality, ethics, human dignity, harm reduction and the fundamental right to health.",
        ],
      },
      {
        titulo: "Chapter II — Members",
        artigos: [
          "Art. 4 — The association may admit the following categories of members: I – Patients; II – Supporters; III – Researchers.",
          "Art. 5 — Admission shall occur through: I – Completion of the membership form; II – Signing of the membership agreement; III – Signing of the statement of responsibility; IV – Review and approval by the board.",
          "Art. 6 — Members have the right to: I – Take part in the association's institutional activities; II – Receive institutional support within the entity's purposes; III – Participate in assemblies (as per the bylaws).",
          "Art. 7 — Members have the duty to: I – Comply with the Bylaws and these Regulations; II – Respect the board's decisions; III – Not use the association for unlawful purposes; IV – Keep their data up to date.",
        ],
      },
      {
        titulo: "Chapter III — Therapeutic Use of Cannabis",
        artigos: [
          "Art. 8 — Within the association, the use of cannabis shall be exclusively for therapeutic purposes, upon medical recommendation.",
          "Art. 9 — The patient member must mandatorily present a medical prescription and/or report proving the therapeutic indication.",
        ],
      },
    ],
    notaIntegral:
      "This is a summary of the main provisions. The complete Internal Regulations and Bylaws are the association's official documents.",
  },
};
