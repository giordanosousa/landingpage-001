import React from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { createWhatsAppUrl } from "../../config/business.config";
import bannerImage from "../../assets/hero-astromixmax.png";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F7F5]
        pt-10
        pb-8
        md:pt-14
        md:pb-10
        lg:pt-16
      "
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* CONTEÚDO PRINCIPAL */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-12
            lg:gap-16
          "
        >

          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col items-start">

            {/* IDENTIFICAÇÃO */}
            <div className="mb-7">
              <div className="w-6 h-0.75 bg-[#FFD504] mb-4" />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#333333]
                "
              >
                Personalização com propósito
              </span>
            </div>

            {/* TÍTULO */}
            <h1
              className="
                text-[clamp(2.8rem,5vw,5rem)]
                font-extrabold
                tracking-[-0.045em]
                leading-[1.05]
                text-[#202020]
              "
            >
              Sua ideia.
              <br />
              Nossa mistura.
              <br />
              <span
                className="
                  inline-block
                  bg-[#FFD504]
                  px-1
                  rounded-[3px]
                "
              >
                Algo único.
              </span>
            </h1>

            {/* DESCRIÇÃO */}
            <p
              className="
                mt-7
                max-w-md
                text-sm
                sm:text-base
                leading-relaxed
                font-normal
                text-[#6B6B6B]
              "
            >
              Presentes que surpreendem. Marcas que ficam.
              Transformamos suas ideias em produtos
              personalizados e impressos que fazem a diferença.
            </p>

            {/* BOTÕES */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                w-full
                sm:w-auto
                gap-3
                mt-8
              "
            >

              {/* EXPLORAR PRODUTOS */}
              <a
                href="#produtos"
                className="
                  inline-flex
                  items-center
                  justify-between
                  gap-8
                  px-5
                  py-4
                  rounded-lg
                  bg-[#FFD504]
                  text-[#171717]
                  text-sm
                  font-medium
                  hover:bg-[#E6BF00]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  active:scale-95
                "
              >
                <span>Explorar produtos</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              {/* SOLICITAR ORÇAMENTO */}
              <a
                href={createWhatsAppUrl(
                  "Olá! Conheci a Astro Mix Max pelo site e gostaria de solicitar um orçamento."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-between
                  gap-8
                  px-5
                  py-4
                  rounded-lg
                  border
                  border-[#D0D0D0]
                  bg-transparent
                  text-[#202020]
                  text-sm
                  font-medium
                  hover:bg-[#202020]
                  hover:text-white
                  hover:border-[#202020]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  active:scale-95
                "
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* MENSAGEM INFERIOR */}
            <div
              className="
                mt-9
                border-l-[3px]
                border-[#FFD504]
                pl-3
              "
            >
              <p className="text-xs font-semibold text-[#202020]">
                Feito para a sua marca. Pensado para encantar.
              </p>

              <p className="mt-1 text-xs text-[#777777]">
                Do primeiro esboço ao último detalhe, a gente cuida.
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="relative w-full">

            {/* IMAGEM PRINCIPAL */}
            <div
              className="
                relative
                w-full
                h-95
                sm:h-115
                lg:h-130
                rounded-[22px]
                overflow-hidden
                bg-[#E5E5E5]
              "
            >
              <img
                src={bannerImage}
                alt="Produtos personalizados Astro Mix Max"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* CARD SUPERIOR */}
            <div
              className="
                absolute
                -top-5
                right-3
                sm:-right-2
                flex
                items-center
                gap-3
                bg-[#202020]
                text-white
                px-4
                py-3
                rounded-xl
                shadow-lg
                rotate-[-4deg]
              "
            >
              <Plus className="w-5 h-5 text-[#FFD504]" />

              <p className="text-xs font-medium leading-tight">
                Sua marca em
                <br />
                boas ideias.
              </p>
            </div>

            {/* CARD INFERIOR */}
            <div
              className="
                absolute
                -bottom-4
                left-3
                sm:-left-5
                flex
                items-center
                justify-between
                gap-8
                bg-white
                px-5
                py-3
                rounded-xl
                shadow-lg
              "
            >
              <div>
                <p className="text-xs font-semibold text-[#202020]">
                  Pequenos detalhes.
                </p>

                <p className="text-xs text-[#666666] mt-1">
                  Grandes conexões.
                </p>
              </div>

              <ArrowUpRight className="w-5 h-5 text-[#202020]" />
            </div>
          </div>
        </div>

        {/* RODAPÉ DA HERO */}
        <div
          className="
            mt-16
            lg:mt-14
            pt-6
            border-t
            border-[#E0E0E0]
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-5
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              font-semibold
              tracking-[0.18em]
              text-[#777777]
            "
          >
            Muitas possibilidades. A sua identidade.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-xs
              font-medium
              text-[#202020]
            "
          >
            <span>Brindes corporativos</span>
            <span className="text-[#999999]">/</span>

            <span>Presentes criativos</span>
            <span className="text-[#999999]">/</span>

            <span>Personalizados</span>
            <span className="text-[#999999]">/</span>

            <span>Serviços gráficos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
