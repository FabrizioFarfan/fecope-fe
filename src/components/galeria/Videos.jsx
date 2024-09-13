import React from "react";
import { InicioPagina } from "../InicioPagina";
import { extravideos, videos } from "../../constants";
import { SeccionVideo } from "../SeccionVideo";
import ReactPlayer from "react-player";
import video from "../../assets/vid1.png";

export const Videos = () => {
  return (
    <>
      <InicioPagina
        text={"Videos"}
        imagen={video}
        contain="bg-cover"
      ></InicioPagina>

      <div className="flex justify-center text-dark-red lg:text-4xl text-2xl italic mt-16 underline">
        <h1>Nuestros videos</h1>
      </div>
      <div className="mt-10 xl:mt-16 mb-10 xl:mx-40 mx-10">
        {videos.map((video) => (
          <div key={video.id}>
            <SeccionVideo
              bg={video.bg}
              titulo={video.titulo}
              descripcion={video.descripcion}
              url={video.url}
              opacity={video.opacity}
              cuenta={video.cuenta}
              link={video.link}
            ></SeccionVideo>
          </div>
        ))}

        <hr className="text-dark-red mx-16"></hr>
        <div className="flex justify-center text-dark-red lg:text-4xl text-2xl italic mt-16 underline">
          <h1>Más videos de nosotros</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-10">
          {extravideos.map((vid) => (
            <div key={vid.link} className="flex justify-center">
              <ReactPlayer
                url={vid.link} // Reemplaza con el ID de tu video de YouTube
                width="70%"
                height="100%"
                className="rounded-xl shadow-2xl overflow-hidden"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
