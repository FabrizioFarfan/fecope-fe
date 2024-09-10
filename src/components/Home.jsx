import React from "react";
import { InicioPagina } from "./InicioPagina";
import { Caracteristicas } from "./Caracteristicas";
import { CheckList } from "./CheckList";
import { Cargos } from "./Cargos";
import { AcordionHome } from "./AcordionHome";
import { Contactanos } from "./Contactanos";
import { DiasporaPeruana } from "./DiasporaPeruana";
import { LastNews } from "./LastNews";
import { SeccionVideo } from "./SeccionVideo";
import { Networking } from "./Networking";
import { videos } from "../constants";

export const Home = () => {
  return (
    <>
      <InicioPagina
        imagen={"logo2.jpg"}
        text={""}
        opacity="bg-opacity-0"
        opacityText="bg-opacity-0"
        contain="bg-contain"
      ></InicioPagina>
      <div className="relative flex justify-center items-center bg-true-red text-true-white py-16   mt-2 rounded-3xl bg-opacity-75 mx-14">
        <h2 className="text-4xl lg:text-7xl lobster-regular w-full px-5 lg:px-20 text-center">
          Bienvenido a la Página Oficial de FECOPE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {" "}
        <hr className="text-true-red mt-20"></hr>
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <DiasporaPeruana></DiasporaPeruana>
          <SeccionVideo
            bg={videos[0].bg}
            descripcion={videos[0].descripcion}
            url={videos[0].url}
            cuenta={videos[0].cuenta}
            link={videos[0].link}
          ></SeccionVideo>
          <div className="flex items-start border-t-2 border-b-2 border-true-red mb-10">
            <div>
              <div className="flex-1 p-4">
                <LastNews titulo="Últimos Eventos" />
              </div>
              <div className="border-r-2 border-true-red h-full"></div>
              <div className="flex-1 p-4">
                <LastNews titulo="Últimas Noticias" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-true-red italic">
            Federaciòn de la Comunidad Peruana en Europa
          </h1>
          <p className="mt-20 text-2xl text-center font-extralight text-dark-red max-w-4xl">
            Somos una organización que busca promover la integración y el
            desarrollo de la comunidad peruana en Europa a continuaciòn les
            proporcionaremos información valiosa sobre nosotros.
          </p>
          <div className="flex justify-center ">
            <AcordionHome></AcordionHome>
          </div>
          <Contactanos></Contactanos>
        </div>
        <Caracteristicas></Caracteristicas>
        <CheckList></CheckList>
        <Cargos></Cargos>
      </div>
    </>
  );
};
