"use client";

import { useState, useTransition, type ReactNode } from "react";
import { Button } from "@/components/ui";
import { SectionOverline, Marginalia } from "@/components/ornaments";
import {
  type FichaAssociado,
  type AceiteTermos,
  type CategoriaAssociado,
  fichaVazia,
  aceiteVazio,
} from "@/lib/associado";
import { termoAdesao, termoResponsabilidade, regulamentoInterno } from "@/lib/documentos";
import { criarAssociacao } from "./actions";

const inputClass =
  "w-full bg-paper-deep/60 border border-[var(--rule-strong)] " +
  "px-4 py-3 font-body text-ink text-[1rem] " +
  "transition-colors focus:border-forest focus:outline-none " +
  "placeholder:text-ink-soft/60";

const labelClass =
  "font-display italic text-[0.85rem] text-gold-leaf tracking-[0.18em]";

const ETAPAS = [
  "Regulamento",
  "Ficha de Associado",
  "Termo de Adesão",
  "Responsabilidade",
  "Revisão e Pagamento",
] as const;

const ROMANOS = ["I", "II", "III", "IV", "V"] as const;

type Props = {
  feeLabel: string;
  voucher: { percent: number; description: string };
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

export function AssociacaoForm({ feeLabel, voucher }: Props) {
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
    if (step === 0 && !aceite.cienteRegulamento)
      return "Confirme que leu e está ciente do Regulamento Interno.";
    if (step === 1) {
      if (!ficha.nomeCompleto.trim()) return "Informe o nome completo.";
      if (!ficha.cpf.trim()) return "Informe o CPF.";
      if (!ficha.email.trim()) return "Informe o e-mail.";
      if (!ficha.telefone.trim()) return "Informe o telefone.";
      if (!ficha.categoria) return "Selecione a categoria de associado.";
    }
    if (step === 2 && (!aceite.aceiteAdesao || !aceite.assinaturaAdesao.trim()))
      return "Aceite e assine o Termo de Adesão (digite seu nome completo).";
    if (step === 3 && (!aceite.aceiteResponsabilidade || !aceite.assinaturaResponsabilidade.trim()))
      return "Aceite e assine o Termo de Responsabilidade (digite seu nome completo).";
    return null;
  }

  function avancar() {
    const e = validarEtapa();
    if (e) {
      setErro(e);
      return;
    }
    setErro(null);
    setStep((s) => Math.min(s + 1, ETAPAS.length - 1));
  }
  function voltar() {
    setErro(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  function concluir() {
    if (!aceite.consentimentoLgpd) {
      setErro("É necessário autorizar o tratamento de dados (LGPD).");
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
        {ETAPAS.map((nome, i) => {
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
            <SectionOverline>Articulus Primus — Ciência das normas</SectionOverline>
            <h2 className="mt-3 mb-5 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
              {regulamentoInterno.titulo}
            </h2>
            <div className="flex flex-col gap-7 max-h-[420px] overflow-y-auto pr-4 mb-7 border-l border-[var(--rule)] pl-5">
              {regulamentoInterno.capitulos.map((cap) => (
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
                {regulamentoInterno.notaIntegral}
              </p>
            </div>
            <label className="flex items-start gap-3 font-body text-[0.95rem] text-ink leading-[1.6]">
              <input
                type="checkbox"
                className="mt-1 accent-gold-leaf"
                checked={aceite.cienteRegulamento}
                onChange={(e) => setA("cienteRegulamento", e.target.checked)}
              />
              <span>Li e estou ciente do Regulamento Interno da associação.</span>
            </label>
          </div>
        )}

        {/* ---------- Etapa II — Ficha de Associado ---------- */}
        {step === 1 && (
          <div className="flex flex-col gap-7">
            <div>
              <SectionOverline>Articulus Secundus — Ficha de Associado</SectionOverline>
              <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
                Seus dados
              </h2>
            </div>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                Dados pessoais
              </legend>
              <Field id="nome" label="Nome completo">
                <input id="nome" className={inputClass} value={ficha.nomeCompleto}
                  onChange={(e) => setF("nomeCompleto", e.target.value)} />
              </Field>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="nasc" label="Data de nascimento">
                  <input id="nasc" type="date" className={inputClass} value={ficha.dataNascimento}
                    onChange={(e) => setF("dataNascimento", e.target.value)} />
                </Field>
                <Field id="cpf" label="CPF">
                  <input id="cpf" inputMode="numeric" className={inputClass} value={ficha.cpf}
                    onChange={(e) => setF("cpf", e.target.value)} />
                </Field>
                <Field id="rg" label="RG">
                  <input id="rg" className={inputClass} value={ficha.rg}
                    onChange={(e) => setF("rg", e.target.value)} />
                </Field>
                <Field id="estadocivil" label="Estado civil">
                  <input id="estadocivil" className={inputClass} value={ficha.estadoCivil}
                    onChange={(e) => setF("estadoCivil", e.target.value)} />
                </Field>
              </div>
              <Field id="profissao" label="Profissão">
                <input id="profissao" className={inputClass} value={ficha.profissao}
                  onChange={(e) => setF("profissao", e.target.value)} />
              </Field>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                Responsável legal (se houver)
              </legend>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="respnome" label="Nome">
                  <input id="respnome" className={inputClass} value={ficha.responsavelNome}
                    onChange={(e) => setF("responsavelNome", e.target.value)} />
                </Field>
                <Field id="respcpf" label="CPF">
                  <input id="respcpf" className={inputClass} value={ficha.responsavelCpf}
                    onChange={(e) => setF("responsavelCpf", e.target.value)} />
                </Field>
              </div>
              <Field id="respparent" label="Grau de parentesco">
                <input id="respparent" className={inputClass} value={ficha.responsavelParentesco}
                  onChange={(e) => setF("responsavelParentesco", e.target.value)} />
              </Field>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                Endereço
              </legend>
              <div className="grid gap-5 md:grid-cols-[2fr_1fr]">
                <Field id="rua" label="Rua">
                  <input id="rua" className={inputClass} value={ficha.rua}
                    onChange={(e) => setF("rua", e.target.value)} />
                </Field>
                <Field id="numero" label="Número">
                  <input id="numero" className={inputClass} value={ficha.numero}
                    onChange={(e) => setF("numero", e.target.value)} />
                </Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="complemento" label="Complemento">
                  <input id="complemento" className={inputClass} value={ficha.complemento}
                    onChange={(e) => setF("complemento", e.target.value)} />
                </Field>
                <Field id="bairro" label="Bairro">
                  <input id="bairro" className={inputClass} value={ficha.bairro}
                    onChange={(e) => setF("bairro", e.target.value)} />
                </Field>
                <Field id="cidade" label="Cidade">
                  <input id="cidade" className={inputClass} value={ficha.cidade}
                    onChange={(e) => setF("cidade", e.target.value)} />
                </Field>
                <div className="grid grid-cols-[1fr_1.4fr] gap-5">
                  <Field id="uf" label="UF">
                    <input id="uf" maxLength={2} className={inputClass} value={ficha.uf}
                      onChange={(e) => setF("uf", e.target.value.toUpperCase())} />
                  </Field>
                  <Field id="cep" label="CEP">
                    <input id="cep" inputMode="numeric" className={inputClass} value={ficha.cep}
                      onChange={(e) => setF("cep", e.target.value)} />
                  </Field>
                </div>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                Contato
              </legend>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="telefone" label="Telefone / WhatsApp">
                  <input id="telefone" type="tel" inputMode="tel" className={inputClass} value={ficha.telefone}
                    onChange={(e) => setF("telefone", e.target.value)} />
                </Field>
                <Field id="email" label="E-mail">
                  <input id="email" type="email" className={inputClass} value={ficha.email}
                    onChange={(e) => setF("email", e.target.value)} />
                </Field>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-4 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                Categoria de associado
              </legend>
              <div className="flex flex-wrap gap-5">
                {(["Paciente", "Apoiador", "Pesquisador"] as CategoriaAssociado[]).map((c) => (
                  <label key={c} className="flex items-center gap-2 font-body text-[0.96rem] text-ink">
                    <input type="radio" name="categoria" className="accent-gold-leaf"
                      checked={ficha.categoria === c}
                      onChange={() => setF("categoria", c)} />
                    {c}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                Dados de saúde (opcional / confidencial)
              </legend>
              <Field id="prescricao" label="Possui prescrição médica para uso de cannabis?">
                <select id="prescricao" className={inputClass} value={ficha.possuiPrescricao}
                  onChange={(e) => setF("possuiPrescricao", e.target.value as FichaAssociado["possuiPrescricao"])}>
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </Field>
              <Field id="patologia" label="Patologia / condição tratada">
                <input id="patologia" className={inputClass} value={ficha.patologia}
                  onChange={(e) => setF("patologia", e.target.value)} />
              </Field>
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="medico" label="Médico prescritor">
                  <input id="medico" className={inputClass} value={ficha.medicoPrescritor}
                    onChange={(e) => setF("medicoPrescritor", e.target.value)} />
                </Field>
                <Field id="crm" label="CRM">
                  <input id="crm" className={inputClass} value={ficha.crm}
                    onChange={(e) => setF("crm", e.target.value)} />
                </Field>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3 border-t border-[var(--rule)] pt-5">
              <legend className={labelClass} style={{ fontVariant: "small-caps" }}>
                Documentos a anexar
              </legend>
              <p className="font-body text-[0.9rem] text-ink-soft leading-[1.6] mb-1">
                Após o cadastro, envie os documentos abaixo para{" "}
                <strong className="text-ink not-italic">nosso e-mail</strong>. Marque o que pretende enviar:
              </p>
              {([
                ["anexaReceita", "Receita médica"],
                ["anexaLaudo", "Laudo médico"],
                ["anexaDocumento", "Documento pessoal"],
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
            <SectionOverline>Articulus Tertius — Adesão</SectionOverline>
            <h2 className="mt-3 mb-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
              {termoAdesao.titulo}
            </h2>
            <p className="font-body text-ink-soft text-[0.98rem] leading-[1.7] mb-5 max-w-[60ch]">
              {termoAdesao.intro}
            </p>
            <Declaracoes itens={termoAdesao.declaracoes} />
            <p className="font-display italic text-ink-soft text-[0.95rem] mt-5 mb-7">
              {termoAdesao.fecho}
            </p>
            <div className="flex flex-col gap-5 border-t border-[var(--rule)] pt-6">
              <label className="flex items-start gap-3 font-body text-[0.95rem] text-ink leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={aceite.aceiteAdesao}
                  onChange={(e) => setA("aceiteAdesao", e.target.checked)} />
                <span>Li e concordo integralmente com o Termo de Adesão.</span>
              </label>
              <Field id="assAdesao" label="Assinatura (digite seu nome completo)">
                <input id="assAdesao" className={inputClass} value={aceite.assinaturaAdesao}
                  onChange={(e) => setA("assinaturaAdesao", e.target.value)}
                  placeholder="Seu nome completo" />
              </Field>
            </div>
          </div>
        )}

        {/* ---------- Etapa IV — Termo de Responsabilidade ---------- */}
        {step === 3 && (
          <div>
            <SectionOverline>Articulus Quartus — Responsabilidade</SectionOverline>
            <h2 className="mt-3 mb-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
              {termoResponsabilidade.titulo}
            </h2>
            <p className="font-body text-ink-soft text-[0.98rem] leading-[1.7] mb-5 max-w-[60ch]">
              {termoResponsabilidade.intro}
            </p>
            <Declaracoes itens={termoResponsabilidade.declaracoes} />
            <div className="mt-6 mb-6 border-l border-gold-leaf pl-4">
              <strong
                className="block not-italic font-semibold text-[0.78rem] tracking-[0.2em] text-gold-leaf mb-1"
                style={{ fontVariant: "small-caps" }}
              >
                Anexos obrigatórios
              </strong>
              <p className="font-body text-[0.95rem] text-ink-soft">
                {termoResponsabilidade.anexosObrigatorios.join(" · ")} — a serem enviados por e-mail.
              </p>
            </div>
            <p className="font-display italic text-ink-soft text-[0.95rem] mb-7">
              {termoResponsabilidade.fecho}
            </p>
            <div className="flex flex-col gap-5 border-t border-[var(--rule)] pt-6">
              <label className="flex items-start gap-3 font-body text-[0.95rem] text-ink leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={aceite.aceiteResponsabilidade}
                  onChange={(e) => setA("aceiteResponsabilidade", e.target.checked)} />
                <span>Li, compreendo e assumo o Termo de Responsabilidade.</span>
              </label>
              <Field id="assResp" label="Assinatura (digite seu nome completo)">
                <input id="assResp" className={inputClass} value={aceite.assinaturaResponsabilidade}
                  onChange={(e) => setA("assinaturaResponsabilidade", e.target.value)}
                  placeholder="Seu nome completo" />
              </Field>
            </div>
          </div>
        )}

        {/* ---------- Etapa V — Revisão e Pagamento ---------- */}
        {step === 4 && (
          <div className="flex flex-col gap-7">
            <div>
              <SectionOverline>Articulus Quintus — Conclusão</SectionOverline>
              <h2 className="mt-3 font-display italic font-medium text-ink text-[clamp(1.6rem,3vw,2.1rem)] leading-tight">
                Revisão e pagamento
              </h2>
            </div>

            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-body text-[0.96rem] border-t border-[var(--rule)] pt-5">
              <dt className="text-ink-soft">Nome</dt>
              <dd className="text-ink">{ficha.nomeCompleto || "—"}</dd>
              <dt className="text-ink-soft">Categoria</dt>
              <dd className="text-ink">{ficha.categoria || "—"}</dd>
              <dt className="text-ink-soft">E-mail</dt>
              <dd className="text-ink">{ficha.email || "—"}</dd>
              <dt className="text-ink-soft">Telefone</dt>
              <dd className="text-ink">{ficha.telefone || "—"}</dd>
            </dl>

            <div className="border border-[var(--rule-strong)] bg-paper-deep/40 p-5">
              <label className="flex items-start gap-3 font-body text-[0.96rem] text-ink leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={querVoucher}
                  onChange={(e) => setQuerVoucher(e.target.checked)} />
                <span>
                  Quero receber meu <strong className="not-italic">voucher de {voucher.percent}%</strong> —{" "}
                  {voucher.description}.
                </span>
              </label>
            </div>

            <div className="flex items-baseline justify-between border-t border-[var(--rule)] pt-5">
              <span className="font-display italic text-ink text-[1.1rem]">Taxa de associação</span>
              <span className="font-display italic font-semibold text-gold-leaf text-[1.3rem]">{feeLabel}</span>
            </div>

            <Marginalia label="Consentimento — LGPD">
              <label className="flex items-start gap-3 not-italic font-body text-[0.92rem] text-ink-soft leading-[1.6]">
                <input type="checkbox" className="mt-1 accent-gold-leaf"
                  checked={aceite.consentimentoLgpd}
                  onChange={(e) => setA("consentimentoLgpd", e.target.checked)} />
                <span>
                  Nos termos da Lei nº 13.709/2018, autorizo o tratamento dos meus dados pessoais e sensíveis
                  pela Associação, exclusivamente para fins de cadastro, controle interno e acompanhamento terapêutico.
                </span>
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
            ← Voltar
          </Button>
        ) : (
          <span />
        )}

        {step < ETAPAS.length - 1 ? (
          <Button type="button" variant="primary" onClick={avancar}>
            Próximo →
          </Button>
        ) : (
          <Button type="button" variant="gold" size="lg" onClick={concluir} disabled={pending}>
            {pending ? "Processando…" : "Concluir e pagar"}
          </Button>
        )}
      </div>
    </div>
  );
}
