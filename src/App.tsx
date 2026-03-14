import React, { useState, useEffect } from 'react';
import { m, LazyMotion, domAnimation } from 'motion/react';
import { 
  CheckCircle2, 
  Circle,
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  AlertCircle, 
  Brain, 
  Heart, 
  Wallet, 
  DoorOpen, 
  Compass, 
  BookOpen, 
  PenTool, 
  ListChecks, 
  Gift, 
  ShieldCheck,
  Rocket,
  Sparkles,
  CircleHelp,
  ArrowRight,
  Target,
  CheckSquare,
  CreditCard,
  Utensils,
  Armchair,
  Laptop,
  Fuel
} from 'lucide-react';

// --- Shared Components ---

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </m.div>
);

const HeroFadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </m.div>
);

const CTAButton = ({ children, href = "#", className = "" }: { children: React.ReactNode, href?: string, className?: string }) => (
  <a 
    href={href}
    className={`inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 bg-ink rounded-full hover:bg-ink/80 hover:scale-105 shadow-xl hover:shadow-2xl ${className}`}
  >
    {children}
  </a>
);

const SectionHeading = ({ title, subtitle }: { title: React.ReactNode, subtitle?: React.ReactNode }) => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-ink/70 font-sans">{subtitle}</p>}
  </div>
);

// --- Sections ---

const HeroSection = () => (
  <section className="relative pb-16 md:pb-24 overflow-hidden bg-[#0c100d]">
    {/* Top Banner */}
    <div className="w-full bg-[#e8e3d3] py-2 text-center px-4 border-b border-white/5">
      <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#0c100d]">
        MÉTODO EXCLUSIVO
      </p>
    </div>

    <div className="pt-6 md:pt-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center z-10">
        <div>
          <img 
            src="https://i.postimg.cc/hSNsp4Q6/logocodigo-copiar2-2.webp" 
            alt="Logo Código Emocional" 
            className="h-20 md:h-28 mb-6 object-contain mx-auto"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-serif leading-[1.1] mb-6 text-[#f4f1e1]">
            Cansado(a) de ver o <span className="italic text-accent">dinheiro escorrer pelas mãos</span>?
          </h1>
        </div>

        <div>
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/5 mb-8">
            <img 
              src="https://i.imgur.com/K7nMEWh.jpg" 
              alt="Casal preocupado com finanças" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
        
        <HeroFadeIn delay={0.4}>
          <p className="text-lg md:text-xl font-serif text-[#e8e3d3] mb-4 leading-relaxed max-w-xl">
            Desvende o <span className="italic">Código Emocional</span> que te impede de prosperar e transforme sua realidade financeira em 7 dias.
          </p>
          <p className="text-base md:text-lg font-sans text-[#a8a497] mb-12 leading-relaxed max-w-xl">
            Descubra os bloqueios emocionais escondidos que sabotam sua riqueza e aprenda a reprogramá-los em apenas 10 minutos por dia.
          </p>
        </HeroFadeIn>
        
        <HeroFadeIn delay={0.6}>
          <a 
            href="#identification"
            className="group inline-flex items-center gap-4 pr-8 pl-2 py-2 max-w-md w-full md:w-auto text-xs md:text-sm font-bold tracking-widest text-[#0c100d] uppercase transition-all duration-300 bg-[#e8e3d3] rounded-full hover:bg-white hover:scale-105"
          >
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#4a544a] text-[#e8e3d3] group-hover:bg-[#0c100d] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </span>
            <span className="flex-1 text-center leading-tight">
              Quero Desbloquear Minha<br className="hidden md:block" /> Riqueza Agora!
            </span>
          </a>
        </HeroFadeIn>
      </div>
    </div>
    </div>
  </section>
);

const IdentificationSection = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const items = [
    "Você trabalha duro, mas sente que o dinheiro nunca é suficiente ou que ele 'some' antes do fim do mês?",
    "Sente-se bloqueado(a) ou com um 'teto de vidro' invisível que impede seu crescimento financeiro?",
    "Experimenta culpa ou medo ao gastar consigo mesmo(a) e com quem ama?",
    "Sabe que merece mais, mas algo dentro de você sabota cada tentativa de prosperar?",
    "Tem medo de dar o próximo passo rumo ao sucesso, como se algo ruim pudesse acontecer?",
    "Sente que o dinheiro é algo distante, como se não fosse 'para você'?",
    "Mesmo ganhando mais, nunca sente que é o suficiente ou que está realmente seguro(a)?",
    "Repete padrões financeiros que te frustram, mas não consegue entender o porquê?"
  ];

  const toggleItem = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  return (
    <section id="identification" className="py-24 px-6 bg-[#faf9f6]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Responda com sinceridade:</h2>
            <p className="text-lg text-ink/60 font-medium">Toque nas frases que descrevem sua situação atual</p>
          </div>
        </FadeIn>

        <div className="grid gap-4 mb-12">
          {items.map((item, index) => {
            const isSelected = selectedItems.includes(index);
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleItem(index)}
                className={`
                  relative flex items-center gap-6 p-6 md:p-8 rounded-xl cursor-pointer transition-all duration-300 border-2
                  ${isSelected 
                    ? "bg-[#0c100d] border-[#0c100d] shadow-xl -translate-y-1" 
                    : "bg-white border-transparent hover:border-gray-200 shadow-sm hover:shadow-md"
                  }
                `}
              >
                <div className={`shrink-0 transition-all duration-300 ${isSelected ? "text-[#e8e3d3]" : "text-gray-300"}`}>
                  {isSelected ? (
                    <CheckCircle2 className="w-8 h-8 fill-[#e8e3d3] text-[#0c100d]" />
                  ) : (
                    <Circle className="w-8 h-8 stroke-1" />
                  )}
                </div>
                
                <p className={`text-lg md:text-xl font-medium leading-relaxed transition-colors duration-300 ${isSelected ? "text-[#e8e3d3]" : "text-gray-600"}`}>
                  {item}
                </p>
              </m.div>
            );
          })}
        </div>

        <FadeIn>
          <div className="text-center p-8 border-y border-ink/10 bg-gray-50/50 rounded-xl">
            <p className="text-xl font-serif italic text-ink/90">
              Se você se identificou com pelo menos 3 dessas situações, continue lendo. Você está prestes a descobrir a verdadeira razão por trás de tudo isso.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const ProblemRevealSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <SectionHeading 
          title={<>A Verdade Que Ninguém Te Contou <span className="italic">Sobre Dinheiro</span></>} 
        />
      </FadeIn>
      <div className="prose prose-lg mx-auto text-ink/80">
        <FadeIn delay={0.2}>
          <p>O problema não é falta de informação. Não é falta de esforço. E definitivamente não é porque você "não é bom(boa) o suficiente".</p>
          <p className="text-2xl font-serif text-ink my-8">
            O verdadeiro bloqueio está em um lugar que você nunca imaginou: <br/>
            <span className="italic text-accent">No seu código emocional interno.</span>
          </p>
          <p>Dentro de você existe um sistema invisível — formado por crenças da infância, emoções não processadas, medos inconscientes e padrões sabotadores — que determina TUDO sobre sua relação com o dinheiro.</p>
          <p>Esse código emocional funciona como um termostato financeiro: Toda vez que você tenta subir de patamar, ele te puxa de volta para a "temperatura" que você conhece (e que, subconscientemente, considera "segura").</p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="my-12 p-8 bg-white rounded-3xl shadow-sm border border-ink/5 text-left">
            <h3 className="text-xl font-serif mb-6 text-center">É por isso que:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-accent" /> Você ganha mais, mas o dinheiro não fica</li>
              <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-accent" /> Sente culpa ao investir em si mesmo(a)</li>
              <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-accent" /> Sabota oportunidades sem entender por quê</li>
              <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-accent" /> Repete os mesmos padrões financeiros dos seus pais</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-xl font-serif italic mb-10">
            A boa notícia? Você pode reprogramar esse código. E é exatamente isso que você vai aprender nos próximos 7 dias.
          </p>
          <CTAButton href="#pricing"><Rocket className="w-5 h-5 mr-2" /> QUERO REPROGRAMAR MEU CÓDIGO EMOCIONAL AGORA!</CTAButton>
        </FadeIn>
      </div>
    </div>
  </section>
);

const ProductPresentationSection = () => (
  <section className="py-24 px-6 bg-ink text-paper">
    <div className="max-w-4xl mx-auto text-center">
      <FadeIn>
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-paper/60 mb-4">Apresento</p>
        <h2 className="text-5xl md:text-6xl font-serif mb-8 text-accent italic">Código Emocional da Riqueza</h2>
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          O método de transformação profunda em 7 dias que vai te ajudar a identificar, compreender e reprogramar os bloqueios emocionais que impedem sua prosperidade.
        </p>
        
        <FadeIn delay={0.1}>
           <img 
            src="https://i.imgur.com/fof8HB8.png" 
            alt="Mockup Código Emocional da Riqueza" 
            className="w-full max-w-md md:max-w-2xl mx-auto mb-12 object-contain hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <p className="text-lg text-paper/80 max-w-3xl mx-auto mb-16">
          Este não é mais um curso sobre orçamentos, planilhas ou investimentos. Este é um mergulho profundo na RAIZ do problema: suas emoções, crenças e padrões inconscientes com o dinheiro.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        {[
          "Para você que está cansado(a) de lutar sozinho(a) contra forças invisíveis que sabotam seu crescimento financeiro",
          "Para você que quer entender de uma vez por todas POR QUE repete padrões financeiros que te frustram",
          "Para você que sente que merece mais, mas algo interno sempre te puxa de volta",
          "Para você que está pronto(a) para fazer as pazes com o dinheiro e construir uma relação saudável, abundante e consciente"
        ].map((item, i) => (
          <FadeIn key={i} delay={0.3 + (i * 0.1)}>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <p className="text-paper/90">{item}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <SectionHeading title="Como Funciona o Código Emocional da Riqueza?" />
        <p className="text-center text-lg text-ink/80 mb-16 max-w-2xl mx-auto">
          Durante 7 dias, você vai embarcar em uma jornada de autoconhecimento profundo e transformação emocional. Cada dia é estruturado para:
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
        {[
          { num: "01", text: "Identificar seus bloqueios emocionais ocultos com o dinheiro (aqueles que você nem sabia que existiam)" },
          { num: "02", text: "Compreender a origem dessas crenças e padrões sabotadores (muitas vezes vindos da infância ou de experiências traumáticas)" },
          { num: "03", text: "Desenvolver uma mentalidade de abundância inabalável que te permite prosperar sem culpa, medo ou autossabotagem" },
          { num: "04", text: "Reprogramar seu 'termostato financeiro' interno para um novo patamar de riqueza e bem-estar" },
          { num: "05", text: "Tomar ações práticas imediatas que vão começar a mudar sua realidade financeira a partir do Dia 1" },
          { num: "06", text: "Criar uma nova identidade financeira alinhada com a prosperidade e a riqueza que você realmente merece" }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex gap-6 items-start">
              <span className="text-4xl font-serif text-accent font-bold">{item.num}</span>
              <p className="text-ink/80 pt-2">{item.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <div className="text-center p-6 md:p-8 bg-white rounded-3xl shadow-sm border border-ink/5">
          <p className="text-lg md:text-2xl font-serif italic mb-6 md:mb-8">
            Tudo isso em apenas <span className="text-accent font-bold">10 minutos por dia</span>. Sim, você leu certo: <span className="text-accent font-bold">10 minutos</span>. Porque transformação <span className="text-accent">não precisa ser complicada</span>. Só precisa ser <span className="text-accent font-bold">profunda</span>.
          </p>
          <CTAButton href="#pricing"><Rocket className="w-5 h-5 mr-2" /> QUERO COMEÇAR MINHA TRANSFORMAÇÃO HOJE!</CTAButton>
        </div>
      </FadeIn>
    </div>
  </section>
);

const StructureSection = () => {
  const days = [
    {
      day: 1,
      icon: <Lock className="w-6 h-6" />,
      title: "O Cofre das Crenças Financeiras",
      discover: "As memórias e crenças da infância que moldaram sua relação com o dinheiro",
      unlock: "A consciência sobre padrões herdados que você repete sem perceber",
      action: "Identificar as 3 principais crenças limitantes que você carrega sobre dinheiro desde criança"
    },
    {
      day: 2,
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Ladrões Invisíveis (Emoções Gatilho)",
      discover: "As emoções sabotadoras (ansiedade, carência, comparação) que drenam sua energia financeira",
      unlock: "A capacidade de reconhecer e neutralizar esses 'ladrões emocionais' antes que eles te dominem",
      action: "Mapear suas 3 principais emoções gatilho e criar estratégias para lidar com elas"
    },
    {
      day: 3,
      icon: <Brain className="w-6 h-6" />,
      title: "O Poder das Crenças Sabotadoras",
      discover: "O 'sistema de crenças' inconsciente que controla suas decisões financeiras",
      unlock: "A clareza sobre quais crenças precisam ser eliminadas e substituídas",
      action: "Reescrever 3 crenças sabotadoras em crenças empoderadoras"
    },
    {
      day: 4,
      icon: <Heart className="w-6 h-6" />,
      title: "Soltando as Pedras (Culpa e Vergonha)",
      discover: "Como a culpa e a vergonha funcionam como 'pedras pesadas' que te impedem de voar financeiramente",
      unlock: "A liberdade emocional para gastar, investir e prosperar sem remorso",
      action: "Um exercício de liberação emocional para soltar culpas e vergonhas relacionadas ao dinheiro"
    },
    {
      day: 5,
      icon: <Wallet className="w-6 h-6" />,
      title: "Dinheiro à Mesa (Seu Relacionamento com o Dinheiro)",
      discover: "Como você realmente se relaciona com o dinheiro — e o que isso revela sobre você",
      unlock: "Um novo tipo de relação: consciente, saudável, respeitosa e abundante",
      action: "Escrever uma 'carta ao dinheiro' e estabelecer novos acordos internos"
    },
    {
      day: 6,
      icon: <DoorOpen className="w-6 h-6" />,
      title: "O Portão que Assusta (Medo de Crescer)",
      discover: "Por que você tem medo de prosperar — e o que esse medo está tentando te proteger",
      unlock: "A coragem de atravessar o 'portão' e abraçar a abundância sem autossabotagem",
      action: "Confrontar seus medos inconscientes e criar um plano de ação para superá-los"
    },
    {
      day: 7,
      icon: <Compass className="w-6 h-6" />,
      title: "A Bússola da Riqueza (Riqueza É Um Estado Interno)",
      discover: "Que riqueza não é algo que você busca 'lá fora' — é um estado interno que você cultiva",
      unlock: "A sua nova identidade financeira: próspero(a), confiante, merecedor(a)",
      action: "Declarar sua nova realidade financeira e se comprometer com sua prosperidade"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading title="O Que Acontece em Cada Um dos 7 Dias?" />
        </FadeIn>

        <div className="space-y-8 mb-20">
          {days.map((d, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-paper border border-ink/5 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-accent">Dia {d.day}</span>
                    <h3 className="text-2xl font-serif">{d.title}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <strong className="block text-ink mb-2 uppercase tracking-wider text-xs">O que você vai descobrir:</strong>
                    <p className="text-ink/70">{d.discover}</p>
                  </div>
                  <div>
                    <strong className="block text-ink mb-2 uppercase tracking-wider text-xs">O que será destravado:</strong>
                    <p className="text-ink/70">{d.unlock}</p>
                  </div>
                  <div>
                    <strong className="block text-ink mb-2 uppercase tracking-wider text-xs">O que você vai fazer:</strong>
                    <p className="text-ink/70">{d.action}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-ink/5 text-sm text-ink/80 flex flex-wrap gap-4">
                  <span className="flex items-center"><Sparkles className="w-4 h-4 mr-1 text-accent" /> Reflexão profunda</span>
                  <span className="flex items-center"><BookOpen className="w-4 h-4 mr-1 text-accent" /> Mini história</span>
                  <span className="flex items-center"><CircleHelp className="w-4 h-4 mr-1 text-accent" /> Pergunta poderosa</span>
                  <span className="flex items-center"><Target className="w-4 h-4 mr-1 text-accent" /> Ação prática</span>
                  <span className="flex items-center"><CheckSquare className="w-4 h-4 mr-1 text-accent" /> Checklist</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-8">Tudo em um formato simples, direto e fácil de seguir.</h3>
            <CTAButton href="#pricing"><Rocket className="w-5 h-5 mr-2" /> QUERO COMEÇAR MINHA JORNADA DE 7 DIAS AGORA!</CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const WhyItsDifferentSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <SectionHeading title="Por Que o Código Emocional da Riqueza É Diferente?" />
      </FadeIn>
      
      <div className="prose prose-lg mx-auto text-ink/80 text-center mb-16">
        <FadeIn delay={0.2}>
          <p>
            Enquanto muitos métodos focam apenas em números, planilhas e orçamentos, o Código Emocional da Riqueza vai além. Ele mergulha na raiz do problema: suas emoções, crenças e padrões inconscientes.
          </p>
          <p className="font-serif italic text-2xl text-ink my-8">Porque a verdade é:</p>
        </FadeIn>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto mb-16">
        {[
          "Você pode ter o melhor planejamento financeiro do mundo, mas se seu código emocional estiver programado para a escassez, você vai sabotar seus próprios resultados.",
          "Você pode ganhar mais dinheiro, mas se sua identidade interna ainda for de 'alguém que não merece', você vai encontrar formas de perder tudo.",
          "Você pode seguir todas as estratégias, mas se suas emoções estiverem no comando, você vai repetir os mesmos padrões que te frustraram no passado."
        ].map((item, i) => (
          <FadeIn key={i} delay={0.3 + (i * 0.1)}>
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-ink/5">
              <ArrowRight className="w-6 h-6 text-accent shrink-0 mt-1" />
              <p className="text-lg text-ink/80">{item}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <p className="text-center text-xl font-serif italic max-w-2xl mx-auto">
          O Código Emocional da Riqueza te ensina a reprogramar esse sistema interno de dentro para fora. E quando você faz isso, tudo muda. Suas decisões mudam. Suas ações mudam. Seus resultados mudam.
        </p>
      </FadeIn>
    </div>
  </section>
);

const WhatYouReceiveSection = () => (
  <section className="py-24 px-6 bg-ink text-paper">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <SectionHeading 
          title={<span className="text-paper">O Que Está Incluído no Código Emocional da Riqueza?</span>} 
        />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <FadeIn delay={0.1}>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 h-full">
            <BookOpen className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-xl font-serif mb-4 text-paper">E-book Completo (60+ páginas)</h3>
            <p className="text-paper/70 text-sm leading-relaxed">
              7 dias de transformação profunda, com reflexões, ações práticas, metáforas, perguntas poderosas e checklists de autoanálise. Cada página foi desenhada para facilitar sua jornada de autoconhecimento e reprogramação emocional.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 h-full">
            <PenTool className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-xl font-serif mb-4 text-paper">Espaços de Journaling</h3>
            <p className="text-paper/70 text-sm leading-relaxed">
              Espaços dedicados para você escrever suas reflexões, processar suas emoções e registrar suas descobertas ao longo dos 7 dias. O journaling potencializa a transformação e torna o processo mais profundo e duradouro.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 h-full">
            <ListChecks className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-xl font-serif mb-4 text-paper">Checklists Diários</h3>
            <p className="text-paper/70 text-sm leading-relaxed">
              Cada dia inclui um checklist prático para você avaliar seu progresso, identificar padrões e acompanhar sua evolução emocional em relação ao dinheiro.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif text-accent italic mb-4">MAIS 3 BÔNUS EXCLUSIVOS</h3>
          <p className="text-paper/60 uppercase tracking-widest text-sm">Valor Total: R$ 291,00</p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <FadeIn delay={0.5}>
          <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20 h-full flex flex-col">
            <div className="w-full aspect-video bg-black/20 rounded-xl mb-6 overflow-hidden border border-white/5">
              <img 
                src="https://i.imgur.com/9fYLAzP.png" 
                alt="Bônus Exclusivo" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <Gift className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-serif mb-2 text-paper">BÔNUS 01: 21 Coisas Que Você Precisa Desapegar Para Prosperar</h4>
            <p className="text-xs uppercase tracking-wider mb-4 flex items-center gap-2"><span className="text-accent/60 line-through">Valor: R$ 97,00</span> <span className="text-white font-bold bg-accent px-2 py-0.5 rounded text-[10px]">GRÁTIS</span></p>
            <p className="text-paper/80 text-sm mb-4 flex-grow">
              Um guia direto e prático com as 21 coisas (físicas, emocionais e mentais) que você precisa desapegar para abrir espaço para a abundância fluir livremente em sua vida.
            </p>
            <p className="text-paper/60 text-xs italic mt-auto">Como usar: Leia e aplique as dicas para fazer uma "limpeza" energética e material, criando espaço para a prosperidade entrar.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.6}>
          <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20 h-full flex flex-col">
            <div className="w-full aspect-video bg-black/20 rounded-xl mb-6 overflow-hidden border border-white/5">
              <img 
                src="https://i.imgur.com/ocTi3iG.png" 
                alt="Bônus Exclusivo" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <Gift className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-serif mb-2 text-paper">BÔNUS 02: Guia Rápido: Hábitos de Quem Desbloqueia a Riqueza</h4>
            <p className="text-xs uppercase tracking-wider mb-4 flex items-center gap-2"><span className="text-accent/60 line-through">Valor: R$ 97,00</span> <span className="text-white font-bold bg-accent px-2 py-0.5 rounded text-[10px]">GRÁTIS</span></p>
            <p className="text-paper/80 text-sm mb-4 flex-grow">
              Um checklist prático com os principais hábitos diários das pessoas que têm uma relação saudável e próspera com o dinheiro.
            </p>
            <p className="text-paper/60 text-xs italic mt-auto">Como usar: Use como um guia de referência rápida para implementar hábitos poderosos no seu dia a dia, começando hoje mesmo.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.7}>
          <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20 h-full flex flex-col">
            <div className="w-full aspect-video bg-black/20 rounded-xl mb-6 overflow-hidden border border-white/5">
              <img 
                src="https://i.imgur.com/uTFMaGI.png"  
                alt="Bônus Exclusivo" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <Gift className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-serif mb-2 text-paper">BÔNUS 03: Ativação Matinal da Prosperidade e Riqueza: 50 Afirmações Poderosas</h4>
            <p className="text-xs uppercase tracking-wider mb-4 flex items-center gap-2"><span className="text-accent/60 line-through">Valor: R$ 97,00</span> <span className="text-white font-bold bg-accent px-2 py-0.5 rounded text-[10px]">GRÁTIS</span></p>
            <p className="text-paper/80 text-sm mb-4 flex-grow">
              50 afirmações cuidadosamente selecionadas para reprogramar sua mente subconsciente para a abundância, prosperidade e riqueza.
            </p>
            <p className="text-paper/60 text-xs italic mt-auto">Como usar: Leia em voz alta todas as manhãs (leva 5 minutos) para condicionar sua mente para a mentalidade de abundância.</p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.7}>
        <div id="pricing" className="relative max-w-md mx-auto bg-[#F5F5F0] text-ink rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
          {/* Header Strip */}
          <div className="bg-accent/10 py-4 text-center border-b border-accent/10">
            <span className="text-accent font-bold tracking-widest text-sm uppercase">Oferta Exclusiva</span>
          </div>

          <div className="p-8 md:p-10 flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-serif text-center mb-6 leading-tight">
              Quanto Custa Transformar Sua Vida Financeira?
            </h3>
            
            <div className="space-y-4 mb-8 text-sm text-ink/70 leading-relaxed">
              <p className="font-medium text-ink">Pense por um momento:</p>
              <p>Quanto você já perdeu por decisões emocionais? Quanto deixou de ganhar por medo? Quanto gastou sem resolver a raiz do problema?</p>
              <p>O Código Emocional da Riqueza vale <span className="line-through">R$ 297,00</span> (só os bônus).</p>
            </div>

            <div className="bg-accent/5 rounded-2xl p-6 mb-8 border border-accent/20">
              <p className="text-sm font-bold text-ink mb-4 text-center uppercase tracking-widest">O que você vai receber:</p>
              <ul className="space-y-3 text-sm text-ink/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>E-book Completo:</strong> O Código Emocional da Riqueza</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Bônus 1:</strong> 21 Coisas Que Você Precisa Desapegar Para Prosperar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Bônus 2:</strong> Guia Rápido: Hábitos de Quem Desbloqueia a Riqueza</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span><strong>Bônus 3:</strong> Ativação Matinal: 50 Afirmações Poderosas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-accent/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent mb-2">Investimento Único</p>
              <div className="text-center flex items-center justify-center gap-1">
                <span className="text-2xl text-accent/60 font-serif mt-2">R$</span>
                <span className="text-6xl md:text-7xl font-serif text-accent">69,99</span>
              </div>
              <p className="text-center text-xs text-ink/40 mt-3 font-medium">Acesso Vitalício + 3 Bônus</p>
            </div>

            <div className="mb-8">
              <p className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-4 text-center">Isso é menos que:</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white/40 p-3 rounded-xl flex items-center gap-4 border border-accent/5 hover:bg-white/60 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-ink/80 font-medium">Um jantar fora</span>
                </div>
                <div className="bg-white/40 p-3 rounded-xl flex items-center gap-4 border border-accent/5 hover:bg-white/60 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Armchair className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-ink/80 font-medium">Uma sessão de terapia</span>
                </div>
                <div className="bg-white/40 p-3 rounded-xl flex items-center gap-4 border border-accent/5 hover:bg-white/60 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-ink/80 font-medium">Um curso online básico</span>
                </div>
                <div className="bg-white/40 p-3 rounded-xl flex items-center gap-4 border border-accent/5 hover:bg-white/60 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Fuel className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-ink/80 font-medium">Um tanque de gasolina</span>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <CTAButton href="https://pay.kiwify.com.br/0TJIXnC" className="w-full py-4 text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                <span className="flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" /> 
                  QUERO MEU ACESSO AGORA
                </span>
              </CTAButton>
              
              <div className="flex justify-center opacity-60 hover:opacity-100 transition-opacity">
              <img 
                src="https://i.imgur.com/8ypyhmQ.png" 
                alt="Formas de Pagamento" 
                className="h-8 object-contain" 
                referrerPolicy="no-referrer" 
                loading="lazy"
                decoding="async"
              />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);



const ForWhomSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <FadeIn>
          <div className="p-10 rounded-3xl bg-white shadow-sm border border-ink/5 h-full">
            <h3 className="text-2xl font-serif mb-8 text-center">Para Quem É?</h3>
            <ul className="space-y-6">
              {[
                "Para quem está cansado(a) de repetir padrões financeiros que não funcionam",
                "Para quem sente que 'algo interno' bloqueia sua prosperidade",
                "Para quem quer fazer as pazes com o dinheiro de uma vez por todas",
                "Para quem está disposto(a) a olhar para dentro com honestidade e coragem",
                "Para quem quer transformação real (não só informação)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="p-10 rounded-3xl bg-white shadow-sm border border-ink/5 h-full">
            <h3 className="text-2xl font-serif mb-8 text-center">Para Quem NÃO É?</h3>
            <ul className="space-y-6">
              {[
                "Para quem busca fórmulas mágicas ou enriquecimento rápido",
                "Para quem não está disposto(a) a fazer um trabalho interno profundo",
                "Para quem quer apenas estratégias técnicas de investimento ou orçamento",
                "Para quem não está pronto(a) para assumir responsabilidade pela própria vida financeira"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const faqs = [
    {
      q: "Quanto tempo por dia eu preciso dedicar?",
      a: "Apenas 10 minutos por dia. Você pode fazer pela manhã, antes de dormir, ou no horário que funcionar melhor para você. O importante é a consistência, não a quantidade de tempo."
    },
    {
      q: "Funciona para qualquer nível de renda?",
      a: "Sim! Os bloqueios emocionais afetam pessoas de todos os níveis de renda. Você pode ganhar muito ou pouco — se o código emocional estiver programado para a escassez, você vai sabotar seus resultados. Este método funciona para QUALQUER pessoa que queira reprogramar sua relação interna com o dinheiro."
    },
    {
      q: "Eu já tentei muita coisa e não funcionou. Por que isso seria diferente?",
      a: "Porque a maioria dos métodos foca apenas no comportamento externo (poupar, investir, fazer orçamento). O Código Emocional da Riqueza vai na RAIZ: suas emoções, crenças e padrões inconscientes. Quando você muda isso, tudo muda."
    },
    {
      q: "Preciso ter conhecimento prévio sobre finanças ou psicologia?",
      a: "Não! O método foi criado para ser acessível a qualquer pessoa. Usamos linguagem simples, metáforas práticas e exercícios guiados. Você só precisa de disposição para olhar para dentro com honestidade."
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Muitas pessoas relatam mudanças significativas na forma como se sentem em relação ao dinheiro já nos primeiros 3 dias. Transformações mais profundas e duradouras acontecem ao longo das semanas seguintes, conforme você aplica o que aprendeu."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionHeading title="Perguntas Frequentes" />
        </FadeIn>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className="border border-ink/10 rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-paper/50"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center gap-4">
                  <h4 className="font-serif text-lg">{faq.q}</h4>
                  {openIndex === i ? <ChevronUp className="w-5 h-5 text-ink/50 shrink-0" /> : <ChevronDown className="w-5 h-5 text-ink/50 shrink-0" />}
                </div>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-ink/70">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Eu sempre achei que era desorganizada com dinheiro. Depois do Código Emocional, percebi que era medo de ter. Medo de ser vista, medo de crescer. Hoje eu encaro o dinheiro de forma completamente diferente.",
      author: "Ana Paula",
      info: "42 anos, Terapeuta"
    },
    {
      text: "Cara, eu não sabia que carregava tanta culpa sobre ganhar dinheiro. Vinha da minha família, sabe? 'Rico é ladrão', essas coisas. O método me ajudou a me libertar disso. Hoje eu prospero sem peso na consciência.",
      author: "Rafael",
      info: "35 anos, Empreendedor"
    },
    {
      text: "O Dia 4 foi o mais impactante para mim. Quando soltei as 'pedras' da vergonha e da culpa, senti um alívio físico. Parecia que eu estava carregando um peso nas costas há anos. Hoje eu invisto em mim sem remorso.",
      author: "Juliana",
      info: "29 anos, Designer"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading title="O Que Mudou na Vida de Quem Já Aplicou o Código Emocional?" />
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="p-8 rounded-3xl bg-white shadow-sm border border-ink/5 h-full flex flex-col">
                <p className="text-ink/80 italic mb-8 flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-ink/10 flex items-center justify-center text-ink/50 font-serif text-xl">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <strong className="block font-serif text-lg">{t.author}</strong>
                    <span className="text-xs text-ink/50 uppercase tracking-wider">{t.info}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};



const FinalCTASection = () => (
  <section className="py-32 px-6 bg-ink text-paper text-center">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-paper">
          Última Chance: Não Deixe Seus Bloqueios Emocionais Decidirem Seu Futuro Financeiro
        </h2>
        <p className="text-xl text-paper/70 mb-16">Você tem duas opções agora:</p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
        <FadeIn delay={0.2}>
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 opacity-70">
            <h3 className="text-2xl font-serif mb-4 text-white/50">OPÇÃO 1: Continuar como está</h3>
            <p className="text-paper/70">Repetir os mesmos padrões. Sentir a mesma frustração. Ver o dinheiro escorrer. Carregar as mesmas culpas, medos e autossabotagens. E daqui a 6 meses, 1 ano, 5 anos... estar exatamente no mesmo lugar (ou pior).</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="p-8 rounded-3xl border border-accent bg-accent/10">
            <h3 className="text-2xl font-serif mb-4 text-accent">OPÇÃO 2: Escolher a transformação</h3>
            <p className="text-paper/90">Investir 10 minutos por dia durante 7 dias para reprogramar seu código emocional. Libertar-se das crenças que te prendem. Construir uma relação saudável, abundante e consciente com o dinheiro. E finalmente experimentar a prosperidade que você merece.</p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.6}>
        <p className="text-lg text-paper/80 max-w-2xl mx-auto mb-12">
          A escolha é sua. Mas saiba disso: continuar fazendo o que sempre fez vai te dar os mesmos resultados que sempre teve. Se você quer resultados diferentes, precisa fazer algo diferente. E esse "algo diferente" começa AGORA.
        </p>
        <div className="mb-8">
          <a 
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-5 text-sm font-bold tracking-widest text-ink uppercase transition-all duration-300 bg-accent rounded-full hover:bg-white hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Rocket className="w-6 h-6 mr-2 text-accent" /> SIM! Eu Escolho a Transformação — Quero Meu Acesso Agora por R$ 69,99!
          </a>
        </div>
        <p className="text-paper/60 text-sm max-w-xl mx-auto">
          Chega de viver com a sensação de escassez, medo ou culpa em relação ao dinheiro. A hora de assumir o controle total da sua vida financeira e experimentar a abundância que você realmente merece é AGORA. Nos vemos do outro lado. 💰✨
        </p>
      </FadeIn>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-paper border-t border-ink/10 text-center text-sm text-ink/60">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p>© 2026 Código Emocional da Riqueza - Todos os direitos reservados</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-ink transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-ink transition-colors">Termos de Uso</a>
      </div>
      <p>Dúvidas? <a href="mailto:contato@exemplo.com" className="underline hover:text-ink">contato@exemplo.com</a></p>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    // ===== RASTREAMENTO DE UTM NA PÁGINA =====

    // 1. Captura os parâmetros UTM da URL
    function capturarUTM() {
      const params = new URLSearchParams(window.location.search);
      return {
        source: params.get('utm_source') || 'direto',
        medium: params.get('utm_medium') || 'direto',
        campaign: params.get('utm_campaign') || 'sem_campanha',
        content: params.get('utm_content') || 'sem_conteudo'
      };
    }

    // 2. Armazena no localStorage do navegador
    function armazenarUTM() {
      const utm = capturarUTM();
      localStorage.setItem('utm_rastreamento', JSON.stringify(utm));
      console.log('UTM armazenado:', utm);
    }

    // 3. Passa o UTM para o checkout da Kiwify
    function passarUTMparaCheckout() {
      const utmStr = localStorage.getItem('utm_rastreamento');
      if (!utmStr) return;
      
      const utm = JSON.parse(utmStr);
      
      // Encontra TODOS os botões de compra
      const botoesCompra = document.querySelectorAll('a[href*="kiwify"], button[data-kiwify]');
      
      botoesCompra.forEach((botaoCompra) => {
        if (botaoCompra instanceof HTMLAnchorElement) {
          const urlCheckout = botaoCompra.href;
          
          // Evita adicionar duplicado se o React re-renderizar
          if (!urlCheckout.includes('utm_source')) {
            const separador = urlCheckout.includes('?') ? '&' : '?';
            botaoCompra.href = `${urlCheckout}${separador}utm_source=${utm.source}&utm_medium=${utm.medium}&utm_campaign=${utm.campaign}&utm_content=${utm.content}`;
            console.log('URL do checkout atualizada:', botaoCompra.href);
          }
        }
      });
    }

    // 4. Registra quando o usuário clica no botão de compra
    function rastrearClique() {
      const botoesCompra = document.querySelectorAll('a[href*="kiwify"], button[data-kiwify]');
      
      botoesCompra.forEach((botaoCompra) => {
        botaoCompra.addEventListener('click', function() {
          const utmStr = localStorage.getItem('utm_rastreamento');
          if (!utmStr) return;
          
          const utm = JSON.parse(utmStr);
          
          // Envia dados para o Google Analytics (opcional)
          if ((window as any).gtag) {
            (window as any).gtag('event', 'clique_compra', {
              utm_source: utm.source,
              utm_medium: utm.medium,
              utm_campaign: utm.campaign
            });
          }
          
          console.log('Clique registrado com UTM:', utm);
        });
      });
    }

    // 5. Executa tudo quando o componente monta
    armazenarUTM();
    
    // Usamos um pequeno delay para garantir que todos os botões foram renderizados no DOM
    const timer = setTimeout(() => {
      passarUTMparaCheckout();
      rastrearClique();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen selection:bg-accent/30 selection:text-ink">
        <HeroSection />
        <IdentificationSection />
        <ProblemRevealSection />
        <ProductPresentationSection />
        <HowItWorksSection />
        <StructureSection />
        <WhyItsDifferentSection />
        <WhatYouReceiveSection />
        <ForWhomSection />
        <FAQSection />
        <TestimonialsSection />
        <FinalCTASection />
        <Footer />
      </div>
    </LazyMotion>
  );
}
