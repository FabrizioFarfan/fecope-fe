import React, { useEffect, useRef, useState } from "react";
import { InicioPagina } from "../InicioPagina";
import { AlbumsCard } from "../AlbumsCard";
import { Pagination } from "../Pagination";
import album from "../../assets/album.jpg";

export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;
  const albumRef = useRef();

  useEffect(() => {
    async function fetchAlbums() {
      let url = `http://api.fecope.eu/v0/all-albums?pageNumber=${currentPage}&pageSize=${pageSize}`;
      console.log("Fetching URL:", url); // Asegúrate de que la URL es correcta
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.albums && data.albums.length > 0) {
          console.log("Albums fetched:", data.albums); // Verifica que los datos sean correctos
          setAlbums((prevAlbums) => [
            ...prevAlbums.slice(0, currentPage * pageSize),
            ...data.albums,
          ]);
        }
        setTotalElements(data.totalAlbums);
      } catch (error) {
        console.error("Error fetching eventos:", error);
      }
      if (albumRef.current) {
        albumRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        albumRef.current.focus();
      }
    }

    fetchAlbums();
  }, [currentPage, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (totalElements < 0) {
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
    <>
      {/* Inicio */}
      <InicioPagina
        text={"Álbumes de Fotos"}
        imagen={album}
      ></InicioPagina>{" "}
      <div className="mt-10 xl:mt-16 mb-10 xl:mx-40" ref={albumRef}>
        <AlbumsCard
          data={albums}
          currentPage={currentPage}
          pageSize={pageSize}
        ></AlbumsCard>
      </div>
      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          data={totalElements}
          pageSize={pageSize}
        ></Pagination>
      </div>
    </>
  );
};
