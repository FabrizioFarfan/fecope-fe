import React, { useEffect, useRef, useState } from "react";
import { Fotos } from "../Fotos";
import { useParams } from "react-router-dom";

export const Album = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const albumRef = useRef();
  useEffect(() => {
    async function fetchAlbum(albumId) {
      try {
        const response = await fetch(
          `http://localhost:8081/v0/album/${albumId}`
        );
        if (response.ok) {
          const data = await response.json();
          setAlbum(data);
          console.log(data);
        } else {
          console.error("Error al obtener el album:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }

    fetchAlbum(albumId);
    if (albumRef.current) {
      albumRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      albumRef.current.focus();
    }
  }, [albumId]); // Añade eventoId como dependencia

  if (!album) {
    return (
      <div
        className="text-dark-red italic text-2xl flex justify-center pt-80 pb-80"
        ref={albumRef}
      >
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div ref={albumRef}>
      <Fotos data={album.fotosBase64} titulo={album.titulo}></Fotos>
    </div>
  );
};
