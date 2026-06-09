"use client";

import { useState, useTransition, type ReactNode } from "react";
import { Button } from "@/components/ui";
import { SectionOverline, Marginalia } from "@/components/ornaments";
import {
  type FichaAssociado,
  type AceiteTermos,
  CATEGORIAS,
  categoriaLabels,
  fichaVazia,
  aceiteVazio,
} from "@/lib/associado";
import { termoAdesao, termoResponsabilidade, regulamentoInterno } from "@/lib/documentos";
import { type Locale } from "@/lib/i18n";
import { criarAssociacao } from "./actions";

const inputClass =
  "w-full bg-paper-deep/60 border border-[var(--rule-strong)] " +
  "px-4 py-3 font-body text-ink text-[1rem] " +
  "transition-colors focus:border-forest focus:outline-none " +
  "placeholder:text-ink-soft/60";

const labelClass =
  "font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]";

const ROMANOS = ["I", "II", "III", "IV", "V"] as const;

const copy = {
  pt: {
    etapas: [
      "Regulamento",
      "Ficha de Associado",
      "Termo de Adesão",
      "Responsabilidade",
      "Revisão e Pagamento",
    ],
    val: {
      regulamento: "Confirme que leu e está ciente do Regulamento Interno.",
      nome: "Informe o nome completo.",
      cpf: "Informe o CPF.",
      email: "Informe o e-mail.",
      telefone: "Informe o telefone.",
      categoria: "Selecione a categoria de associado.",
      adesao: "Aceite e assine o Termo de Adesão (digite seu nome completo).",
      responsabilidade:
        "Aceite e assine o Termo de Responsabilidade (digite seu nome completo).",
      lgpd: "É necessário autorizar o tratamento de dados (LGPD).",
    },
    s1: {
      overline: "Articulus Primus — Ciência das normas",
      check: "Li e estou ciente do Regulamento Interno da associação.",
    },
    s2: {
      overline: "Articulus Secundus — Ficha de Associado",
      heading: "Seus dados",
      legendPessoais: "Dados pessoais",
      nome: "Nome completo",
      nascimento: "Data de nascimento",
      cpf: "CPF",
      rg: "RG",
      estadoCivil: "Estado civil",
      profissao: "Profissão",
      legendResponsavel: "Responsável legal (se houver)",
      nomeSimples: "Nome",
      parentesco: "Grau de parentesco",
      legendEndereco: "Endereço",
      rua: "Rua",
      numero: "Número",
      complemento: "Complemento",
      bairro: "Bairro",
      cidade: "Cidade",
      uf: "UF",
      cep: "CEP",
      legendContato: "Contato",
      telefone: "Telefone / WhatsApp",
      email: "E-mail",
      legendCategoria: "Categoria de associado",
      legendSaude: "Dados de saúde (opcional / confidencial)",
      prescricao: "Possui prescrição médica para uso de cannabis?",
      selecione: "Selecione",
      sim: "Sim",
      nao: "Não",
      patologia: "Patologia / condição tratada",
      medico: "Médico prescritor",
      crm: "CRM",
      legendDocumentos: "Documentos a anexar",
      docsIntroA: "Após o cadastro, envie os documentos abaixo para",
      docsIntroEmail: "nosso e-mail",
      docsIntroB: ". Marque o que pretende enviar:",
      docReceita: "Receita médica",
      docLaudo: "Laudo médico",
      docDocumento: "Documento pessoal",
    },
    s3: {
      overline: "Articulus Tertius — Adesão",
      check: "Li e concordo integralmente com o Termo de Adesão.",
    },
    s4: {
      overline: "Articulus Quartus — Responsabilidade",
      anexosLabel: "Anexos obrigatórios",
      anexosSuffix: "— a serem enviados por e-mail.",
      check: "Li, compreendo e assumo o Termo de Responsabilidade.",
    },
    sign: "Assinatura (digite seu nome completo)",
    signPlaceholder: "Seu nome completo",
    s5: {
      overline: "Articulus Quintus — Conclusão",
      heading: "Revisão e pagamento",
      nome: "Nome",
      categoria: "Categoria",
      email: "E-mail",
      telefone: "Telefone",
      voucherWant: "Quero receber meu",
      voucherLabel: (p: number) => `voucher de ${p}%`,
      fee: "Taxa de associação",
      lgpdLabel: "Consentimento — LGPD",
      lgpdText:
        "Nos termos da Lei nº 13.709/2018, autorizo o tratamento dos meus dados pessoais e sensíveis pela Associação, exclusivamente para fins de cadastro, controle interno e acompanhamento terapêutico.",
    },
    nav: { back: "← Voltar", next: "Próximo →", processing: "Processando…", finish: "Concluir e pagar" },
    none: "—",
  },
  en: {
    etapas: [
      "Regulations",
      "Membership Form",
      "Membership Agreement",
      "Responsibility",
      "Review & Payment",
    ],
    val: {
      regulamento: "Please confirm you have read and acknowledge the Internal Regulations.",
      nome: "Please enter your full name.",
      cpf: "Please enter your CPF.",
      email: "Please enter your email.",
      telefone: "Please enter your phone number.",
      categoria: "Please select the membership category.",
      adesao: "Accept and sign the Membership Agreement (type your full name).",
      responsabilidade:
        "Accept and sign the Statement of Responsibility (type your full name).",
      lgpd: "You must authorize the processing of your data (LGPD).",
    },
    s1: {
      overline: "Articulus Primus — Acknowledging the rules",
      check: "I have read and acknowledge the association's Internal Regulations.",
    },
    s2: {
      overline: "Articulus Secundus — Membership Form",
      heading: "Your details",
      legendPessoais: "Personal details",
      nome: "Full name",
      nascimento: "Date of birth",
      cpf: "CPF",
      rg: "RG",
      estadoCivil: "Marital status",
      profissao: "Occupation",
      legendResponsavel: "Legal guardian (if any)",
      nomeSimples: "Name",
      parentesco: "Relationship",
      legendEndereco: "Address",
      rua: "Street",
      numero: "Number",
      complemento: "Complement",
      bairro: "Neighborhood",
      cidade: "City",
      uf: "State",
      cep: "Postal code",
      legendContato: "Contact",
      telefone: "Phone / WhatsApp",
      email: "Email",
      legendCategoria: "Membership category",
      legendSaude: "Health details (optional / confidential)",
      prescricao: "Do you have a medical prescription for cannabis use?",
      selecione: "Select",
      sim: "Yes",
      nao: "No",
      patologia: "Condition / pathology treated",
      medico: "Prescribing physician",
      crm: "CRM",
      legendDocumentos: "Documents to attach",
      docsIntroA: "After registering, send the documents below to",
      docsIntroEmail: "our email",
      docsIntroB: ". Check what you intend to send:",
      docReceita: "Medical prescription",
      docLaudo: "Medical report",
      docDocumento: "Personal ID",
    },
    s3: {
      overline: "Articulus Tertius — Agreement",
      check: "I have read and fully agree with the Membership Agreement.",
    },
    s4: {
      overline: "Articulus Quartus — Responsibility",
      anexosLabel: "Required attachments",
      anexosSuffix: "— to be sent by email.",
      check: "I have read, understand and accept the Statement of Responsibility.",
    },
    sign: "Signature (type your full name)",
    signPlaceholder: "Your full name",
    s5: {
      overline: "Articulus Quintus — Completion",
      heading: "Review and payment",
      nome: "Name",
      categoria: "Category",
      email: "Email",
      telefone: "Phone",
      voucherWant: "I want to receive my",
      voucherLabel: (p: number) => `${p}% voucher`,
      fee: "Membership fee",
      lgpdLabel: "Consent — LGPD",
      lgpdText:
        "Under Law No. 13.709/2018 (LGPD), I authorize the Association to process my personal and sensitive data, exclusively for registration, internal control and therapeutic follow-up.",
    },
    nav: { back: "← Back", next: "Next →", processing: "Processing…", finish: "Complete and pay" },
    none: "—",
  },
};

type Props = {
  feeLabel: string;
  voucher: { percent: number; description: string };
  locale: Locale;
};

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClass} style={{ fontVariant: "small-caps" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Declaracoes({ itens }: { itens: readonly string[] }) {
  return (
    <ol className="flex flex-col gap-3 font-body text-[0.96rem] text-ink-soft leading-[1.7]">
      {itens.map((d, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="font-display italic text-gold-leaf text-[0.78rem] tracking-[0.12em] mt-1 shrink-0"
            style={{ fontVariant: "small-caps" }}
          >
            §{i + 1}
          </span>
          <span>{d}</span>
        </li>
      ))}
    </ol>
  );
}

export function AssociacaoForm({ feeLabel, voucher, locale }: Props) {
  const t = copy[locale];
  const docAdesao = termoAdesao[locale];
  const docResp = termoResponsabilidade[locale];
  const docReg = regulamentoInterno[locale];
  const stepCount = t.etapas.length;

  const [step, setStep] = useState(0);
  const [ficha, setFicha] = useState<FichaAssociado>(fichaVazia);
  const [aceite, setAceite] = useState<AceiteTermos>(aceiteVazio);
  const [querVoucher, setQuerVoucher] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const setF = <K extends keyof FichaAssociado>(k: K, v: FichaAssociado[K]) =>
    setFicha((s) => ({ ...s, [k]: v }));
  const setA = <K extends keyof AceiteTermos>(k: K, v: AceiteTermos[K]) =>
    setAceite((s) => ({ ...s, [k]: v }));

  function validarEtapa(): string | null {
    if (step === 0 && !aceite.cienteRegulamento) return t.val.regulamento;
    if (step === 1) {
      if (!ficha.nomeCompleto.trim()) return t.val.nome;
      if (!ficha.cpf.trim()) return t.val.cpf;
      if (!ficha.email.trim()) return t.val.email;
      if (!ficha.telefone.trim()) return t.val.telefone;
      if (!ficha.categoria) return t.val.categoria;
    }
    if (step === 2 && (!aceite.aceiteAdesao || !aceite.assinaturaAdesao.trim()))
      return t.val.adesao;
    if (step === 3 && (!aceite.aceiteResponsabilidade || !aceite.assinaturaResponsabilidade.trim()))
      return t.val.responsabilidade;
    return null;
  }

  function avancar() {
    const e = validarEtapa();
    if (e) {
      setErro(e);
      return;
    }
    setErro(null);
    setStep((s) => Math.min(s + 1, stepCount - 1));
  }
  function voltar() {
    setErro(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  function concluir() {
    if (!aceite.consentimentoLgpd) {
      setErro(t.val.lgpd);
      return;
    }
    setErro(null);
    startTransition(async () => {
      const res = await criarAssociacao({ ficha, aceite, querVoucher });
      if (!res.ok) {
        setErro(res.error);
        return;
      }
      // Redireciona ao checkout (Abacate Pay) ou, no modo stub, à página de sucesso.
      window.location.href = res.checkoutUrl;
    });
  }

  return (
    <div>
      {/* Progresso — numerais romanos */}
      <ol className="mb-10 flex flex-wrap gap-x-6 gap-y-2">
        {t.etapas.map((nome, i) => {
          const estado = i === step ? "atual" : i < step ? "feito" : "futuro";
          return (
            <li key={nome} className="flex items-center gap-2">
              <span
                className={
                  "font-display italic text-[0.95rem] " +
                  (estado === "atual"
                    ? "text-gold-leaf"
                    : estado === "feito"
                      ? "text-ink-soft"
                      : "text-ink-soft/45")
                }
              >
                {ROMANOS[i]}.
              </span>
              <span
                className={
                  "font-display italic text-[0.92rem] " +
                  (estado === "atual"
                    ? "text-ink"
                    : estado === "feito"
                      ? "text-ink-soft"
                      : "text-ink-soft/45")
                }
              >
                {nome}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="border-t border-[var(--rule)] pt-8">
        {/* ---------- Etapa I — Regulamento ---------- */}
        {step === 0 && (
          <div>
            <SectionOverline>{t.s1.overline}</SectionOverline>
            <h2 className="mt-3 mb-5 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
              {docReg.titulo}
            </h2>
            <div className="flex flex-col gap-7 max-h-[420px] overflow-y-auto pr-4 mb-7 border-l border-[var(--rule)] pl-5">
              {docReg.capitulos.map((cap) => (
                <div key={cap.titulo}>
                  <h3
                    className="font-display italic font-semibold text-gold-leaf text-[0.92rem] tracking-[0.14em] mb-2"
                    style={{ fontVariant: "small-caps" }}
                  >
                    {cap.titulo}
                  </h3>
                  <div className="flex flex-col gap-2 font-body text-[0.95rem] text-ink-soft leading-[1.7]">
                    {cap.artigos.map((a, i) => (
                      <p key={i}>{a}</p>
                    ))}
                  </div>
                </div>
              ))}
              <p className="font-display italic text-ink-soft/80 text-[0.9rem]">
                {docReg.notaIntegral}
              </p>
            </div>
            <label className="flex items-start gap-3 font-body text-[0.95rem] text-ink leading-[1.6]">
              <input
                type="checkbox"
                className="mt-1 accent-gold-leaf"
                checked={aceite.cienteRegulamento}
                onChange={(e) => setA("cienteRegulamento", e.target.checked)}
              />
              <span>{t.s1.check}</span>
            </label>
          </div>
        )}

        {/* ---------- Etapa II — Ficha de Associado ---------- */}
        {step === 1 && (
          <div className="flex flex-col gap-7">
            <div>
              <SectionOverline>{t.s2.overline}</SectionOverline>
              <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
                {t.s2.heading}
              </h2>
            </div>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                {t.s2.legendPessoais}
              </legend>
              <Field id="nome" label={t.s2.nome}>
                <input id="nome" className={inputClass} value={ficha.nomeCompleto}
                  onChange={(e) => setF("nomeCompleto", e.target.value)} />
              </Field>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="nasc" label={t.s2.nascimento}>
                  <input id="nasc" type="date" className={inputClass} value={ficha.dataNascimento}
                    onChange={(e) => setF("dataNascimento", e.target.value)} />
                </Field>
                <Field id="cpf" label={t.s2.cpf}>
                  <input id="cpf" inputMode="numeric" className={inputClass} value={ficha.cpf}
                    onChange={(e) => setF("cpf", e.target.value)} />
                </Field>
                <Field id="rg" label={t.s2.rg}>
                  <input id="rg" className={inputClass} value={ficha.rg}
                    onChange={(e) => setF("rg", e.target.value)} />
                </Field>
                <Field id="estadocivil" label={t.s2.estadoCivil}>
                  <input id="estadocivil" className={inputClass} value={ficha.estadoCivil}
                    onChange={(e) => setF("estadoCivil", e.target.value)} />
                </Field>
              </div>
              <Field id="profissao" label={t.s2.profissao}>
                <input id="profissao" className={inputClass} value={ficha.profissao}
                  onChange={(e) => setF("profissao", e.target.value)} />
              </Field>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                {t.s2.legendResponsavel}
              </legend>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="respnome" label={t.s2.nomeSimples}>
                  <input id="respnome" className={inputClass} value={ficha.responsavelNome}
                    onChange={(e) => setF("responsavelNome", e.target.value)} />
                </Field>
                <Field id="respcpf" label={t.s2.cpf}>
                  <input id="respcpf" className={inputClass} value={ficha.responsavelCpf}
                    onChange={(e) => setF("responsavelCpf", e.target.value)} />
                </Field>
              </div>
              <Field id="respparent" label={t.s2.parentesco}>
                <input id="respparent" className={inputClass} value={ficha.responsavelParentesco}
                  onChange={(e) => setF("responsavelParentesco", e.target.value)} />
              </Field>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                {t.s2.legendEndereco}
              </legend>
              <div className="grid gap-5 md:grid-cols-[2fr_1fr]">
                <Field id="rua" label={t.s2.rua}>
                  <input id="rua" className={inputClass} value={ficha.rua}
                    onChange={(e) => setF("rua", e.target.value)} />
                </Field>
                <Field id="numero" label={t.s2.numero}>
                  <input id="numero" className={inputClass} value={ficha.numero}
                    onChange={(e) => setF("numero", e.target.value)} />
                </Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="complemento" label={t.s2.complemento}>
                  <input id="complemento" className={inputClass} value={ficha.complemento}
                    onChange={(e) => setF("complemento", e.target.value)} />
                </Field>
                <Field id="bairro" label={t.s2.bairro}>
                  <input id="bairro" className={inputClass} value={ficha.bairro}
                    onChange={(e) => setF("bairro", e.target.value)} />
                </Field>
                <Field id="cidade" label={t.s2.cidade}>
                  <input id="cidade" className={inputClass} value={ficha.cidade}
                    onChange={(e) => setF("cidade", e.target.value)} />
                </Field>
                <div className="grid grid-cols-[1fr_1.4fr] gap-5">
                  <Field id="uf" label={t.s2.uf}>
                    <input id="uf" maxLength={2} className={inputClass} value={ficha.uf}
                      onChange={(e) => setF("uf", e.target.value.toUpperCase())} />
                  </Field>
                  <Field id="cep" label={t.s2.cep}>
                    <input id="cep" inputMode="numeric" className={inputClass} value={ficha.cep}
                      onChange={(e) => setF("cep", e.target.value)} />
                  </Field>
                </div>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                {t.s2.legendContato}
              </legend>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="telefone" label={t.s2.telefone}>
                  <input id="telefone" type="tel" inputMode="tel" className={inputClass} value={ficha.telefone}
                    onChange={(e) => setF("telefone", e.target.value)} />
                </Field>
                <Field id="email" label={t.s2.email}>
                  <input id="email" type="email" className={inputClass} value={ficha.email}
                    onChange={(e) => setF("email", e.target.value)} />
                </Field>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-4 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                {t.s2.legendCategoria}
              </legend>
              <div className="flex flex-wrap gap-5">
                {CATEGORIAS.map((c) => (
                  <label key={c} className="flex items-center gap-2 font-body text-[0.96rem] text-ink">
                    <input type="radio" name="categoria" className="accent-gold-leaf"
                      checked={ficha.categoria === c}
                      onChange={() => setF("categoria", c)} />
                    {categoriaLabels[locale][c]}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                {t.s2.legendSaude}
              </legend>
              <Field id="prescricao" label={t.s2.prescricao}>
                <select id="prescricao" className={inputClass} value={ficha.possuiPrescricao}
                  onChange={(e) => setF("possuiPrescricao", e.target.value as FichaAssociado["possuiPrescricao"])}>
                  <option value="">{t.s2.selecione}</option>
                  <option value="Sim">{t.s2.sim}</option>
                  <option value="Não">{t.s2.nao}</option>
                </select>
              </Field>
              <Field id="patologia" label={t.s2.patologia}>
                <input id="patologia" className={inputClass} value={ficha.patologia}
                  onChange={(e) => setF("patologia", e.target.value)} />
              </Field>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="medico" label={t.s2.medico}>
                  <input id="medico" className={inputClass} value={ficha.medicoPrescritor}
                    onChange={(e) => setF("medicoPrescritor", e.target.value)} />
                </Field>
                <Field id="crm" label={t.s2.crm}>
                  <input id="crm" className={inputClass} value={ficha.crm}
                    onChange={(e) => setF("crm", e.target.value)} />
                </Field>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                {t.s2.legendDocumentos}
              </legend>
              <p className="font-body text-[0.9rem] text-ink-soft leading-[1.6] mb-1">
                {t.s2.docsIntroA}{" "}
                <strong className="text-ink not-italic">{t.s2.docsIntroEmail}</strong>
                {t.s2.docsIntroB}
              </p>
              {([
                ["anexaReceita", t.s2.docReceita],
                ["anexaLaudo", t.s2.docLaudo],
                ["anexaDocumento", t.s2.docDocumento],
              ] as [keyof FichaAssociado, string][]).map(([k, lbl]) => (
                <label key={k} className="flex items-center gap-3 font-body text-[0.95rem] text-ink">
                  <input type="checkbox" className="accent-gold-leaf"
                    checked={Boolean(ficha[k])}
                    onChange={(e) => setF(k, e.target.checked as never)} />
                  {lbl}
                </label>
              ))}
            </fieldset>
          </div>
        )}

        {/* ---------- Etapa III — Termo de Adesão ---------- */}
        {step === 2 && (
          <div>
            <SectionOverline>{t.s3.overline}</SectionOverline>
            <h2 className="mt-3 mb-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
              {docAdesao.titulo}
            </h2>
            <p className="font-body text-ink-soft text-[0.98rem] leading-[1.7] mb-5 max-w-[60ch]">
              {docAdesao.intro}
            </p>
            <Declaracoes itens={docAdesao.declaracoes} />
            <p className="font-display italic text-ink-soft text-[0.95rem] mt-5 mb-7">
              {docAdesao.fecho}
            </p>
            <div className="flex flex-col gap-5 border-t border-[var(--rule)] pt-6">
              <label className="flex items-start gap-3 font-body text-[0.95rem] text-ink leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={aceite.aceiteAdesao}
                  onChange={(e) => setA("aceiteAdesao", e.target.checked)} />
                <span>{t.s3.check}</span>
              </label>
              <Field id="assAdesao" label={t.sign}>
                <input id="assAdesao" className={inputClass} value={aceite.assinaturaAdesao}
                  onChange={(e) => setA("assinaturaAdesao", e.target.value)}
                  placeholder={t.signPlaceholder} />
              </Field>
            </div>
          </div>
        )}

        {/* ---------- Etapa IV — Termo de Responsabilidade ---------- */}
        {step === 3 && (
          <div>
            <SectionOverline>{t.s4.overline}</SectionOverline>
            <h2 className="mt-3 mb-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
              {docResp.titulo}
            </h2>
            <p className="font-body text-ink-soft text-[0.98rem] leading-[1.7] mb-5 max-w-[60ch]">
              {docResp.intro}
            </p>
            <Declaracoes itens={docResp.declaracoes} />
            <div className="mt-6 mb-6 border-l border-gold-leaf pl-4">
              <strong
                className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                style={{ fontVariant: "small-caps" }}
              >
                {t.s4.anexosLabel}
              </strong>
              <p className="font-body text-[0.95rem] text-ink-soft">
                {docResp.anexosObrigatorios.join(" · ")} {t.s4.anexosSuffix}
              </p>
            </div>
            <p className="font-display italic text-ink-soft text-[0.95rem] mb-7">
              {docResp.fecho}
            </p>
            <div className="flex flex-col gap-5 border-t border-[var(--rule)] pt-6">
              <label className="flex items-start gap-3 font-body text-[0.95rem] text-ink leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={aceite.aceiteResponsabilidade}
                  onChange={(e) => setA("aceiteResponsabilidade", e.target.checked)} />
                <span>{t.s4.check}</span>
              </label>
              <Field id="assResp" label={t.sign}>
                <input id="assResp" className={inputClass} value={aceite.assinaturaResponsabilidade}
                  onChange={(e) => setA("assinaturaResponsabilidade", e.target.value)}
                  placeholder={t.signPlaceholder} />
              </Field>
            </div>
          </div>
        )}

        {/* ---------- Etapa V — Revisão e Pagamento ---------- */}
        {step === 4 && (
          <div className="flex flex-col gap-7">
            <div>
              <SectionOverline>{t.s5.overline}</SectionOverline>
              <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
                {t.s5.heading}
              </h2>
            </div>

            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-body text-[0.96rem] border-t border-[var(--rule)] pt-5">
              <dt className="text-ink-soft">{t.s5.nome}</dt>
              <dd className="text-ink">{ficha.nomeCompleto || t.none}</dd>
              <dt className="text-ink-soft">{t.s5.categoria}</dt>
              <dd className="text-ink">{ficha.categoria ? categoriaLabels[locale][ficha.categoria] : t.none}</dd>
              <dt className="text-ink-soft">{t.s5.email}</dt>
              <dd className="text-ink">{ficha.email || t.none}</dd>
              <dt className="text-ink-soft">{t.s5.telefone}</dt>
              <dd className="text-ink">{ficha.telefone || t.none}</dd>
            </dl>

            <div className="border border-[var(--rule-strong)] bg-paper-deep/40 p-5">
              <label className="flex items-start gap-3 font-body text-[0.96rem] text-ink leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={querVoucher}
                  onChange={(e) => setQuerVoucher(e.target.checked)} />
                <span>
                  {t.s5.voucherWant}{" "}
                  <strong className="not-italic">{t.s5.voucherLabel(voucher.percent)}</strong> —{" "}
                  {voucher.description}.
                </span>
              </label>
            </div>

            <div className="flex items-baseline justify-between border-t border-[var(--rule)] pt-5">
              <span className="font-display italic text-ink text-[1.1rem]">{t.s5.fee}</span>
              <span className="font-display italic font-semibold text-gold-leaf text-[1.3rem]">{feeLabel}</span>
            </div>

            <Marginalia label={t.s5.lgpdLabel}>
              <label className="flex items-start gap-3 not-italic font-body text-[0.92rem] text-ink-soft leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={aceite.consentimentoLgpd}
                  onChange={(e) => setA("consentimentoLgpd", e.target.checked)} />
                <span>{t.s5.lgpdText}</span>
              </label>
            </Marginalia>
          </div>
        )}
      </div>

      {/* Erro */}
      {erro && (
        <p className="mt-6 font-display italic text-vermilion text-[0.95rem]">
          <span aria-hidden>※ </span>
          {erro}
        </p>
      )}

      {/* Navegação */}
      <div className="mt-9 flex items-center justify-between gap-4">
        {step > 0 ? (
          <Button type="button" variant="secondary" onClick={voltar} disabled={pending}>
            {t.nav.back}
          </Button>
        ) : (
          <span />
        )}

        {step < stepCount - 1 ? (
          <Button type="button" variant="primary" onClick={avancar}>
            {t.nav.next}
          </Button>
        ) : (
          <Button type="button" variant="gold" size="lg" onClick={concluir} disabled={pending}>
            {pending ? t.nav.processing : t.nav.finish}
          </Button>
        )}
      </div>
    </div>
  );
}
