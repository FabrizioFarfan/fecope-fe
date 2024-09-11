import React from "react";
import { InicioPagina } from "./InicioPagina";
import sello from "../../dist/assets/sello.png";
import linea from "../../dist/assets/linea.png";
import historia from "../../dist/assets/historia.jpg";

export const Historia = () => {
  return (
    <>
      <InicioPagina imagen={historia} text="Historia"></InicioPagina>
      <div className="scroll-container p-6">
        <div className="relative p-6 bg-cover bg-center rounded-sm shadow-2xl text-dark-red  xl:mx-36 xl:my-16 bg-gradient-to-b from-[#f4f2e7d0] to-[#f4f2e7c0]">
          <img src={sello} alt="sello" className="m-3 xl:size-40 size-20"></img>
          <h2 className="xl:text-4xl text-2xl underline font-bold xl:mb-20 mb-10 oleo text-center ">
            La Historia de FECOPE
          </h2>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <p className="relative text-white font-light xl:text-xl leading-relaxed xl:mx-56 z-10 mx-10 text-base italic">
            El 15 de marzo del 2009 en la ciudad de Turín, se desarrolló una
            asamblea general de peruanos emigrantes, en la Sala de Convenciones
            de la Región Piemonte - Turín / Italia, con la asistencia de las
            delegaciones del Reino Unido, Barcelona, Alemania, Francia, Grecia e
            Italia. El plenario de la I Convención de Turín decidió formar una
            Comisión Preparatoria a efectos de organizar una entidad de carácter
            europeo que actúe a nivel local en los países de acogida y ante el
            Gobierno Peruano. La Comisión quedó integrada por seis miembros;
            representando a los países europeos participantes a este evento: Por
            España Sr. Roxana Montalván Por Inglaterra Sr. Miguel Boris Koseleff
            Por Grecia Srta. Sofia Salinas Cancio Por Alemania Sr. Tomàs
            Inderique Por Francia Sr. Osler Amaro Por Italia Sr. Martín López
            Como consecuencia del acuerdo de la COMISION DE TRABAJO y cumpliendo
            con los lineamientos emanados en esa oportunidad; el Coordinador por
            Italia, Sr. Martin López, luego de una serie de conversaciones y
            reuniones con diferentes grupos, personas y asociaciones de peruanos
            en Italia, realizó un llamado invitando a todas las Instituciones,
            Organizaciones, Asociaciones, Coordinamientos, Clubes, Círculos,
            Hermandades y peruanos en general residentes en Italia a la: I
            CONVOCATORIA GENERAL DE LA COMUNIDAD PERUANA RESIDENTE EN ITALIA que
            se llevó a cabo en la Ciudad de Millán (Italia), el Sábado 12 y
            Domingo 13 de Setiembre del 2009, en el Complejo Oasis di San
            Francesco, en Via Arzaga, 24. Milán-Italia. La Mesa directiva estuvo
            compuesta por los Srs. Eduardo Icochea Palomino, José Cruz Chamorro,
            Fernando González Espinoza, Atilio Montesinos y Sra. Rosario de Zela
            Ana maría. La Asamblea propuso dos mociones para decidir la futura
            Organización: Federación de Peruanos residentes en Italia y en
            Europa Frente Único de la Comunidad Peruana en Italia y Europa Luego
            de las votaciones se optó por la creación de una Organización
            Federativa, confirmando al Sr. Martín López Chávez como Coordinador
            Nacional hasta la siguiente Asamblea. La segunda Asamblea Nacional
            de Asociaciones Peruanas se llevó a cabo el 15 de noviembre del 2009
            en la ciudad de Florencia, en la cual nace La Federación de la
            Comunidad Peruana en Europa con la sigla FECOPE, resultando elegido
            Presidente Fundador al Sr. Martín López Chávez. La Federación de la
            Comunidad Peruana en Europa – FECOPE, se inscribió en los Registros
            Públicos Italianos (Agenzia delle Entrate) el 27 de Enero del 2010,
          </p>
          <div className="flex justify-center">
            <img
              className="opacity-90  h-40 w-2/3"
              src={linea}
              alt="linea"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
