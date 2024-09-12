import React, { useEffect, useRef, useState } from "react";
import { Cards } from "../Cards";
import { InicioPagina } from "../InicioPagina";
import { Pagination } from "../Pagination";
import noticia from "../../../dist/assets/noticia.jpg";

export const Noticias = () => {
  const [eventos, setEventos] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 9;
  const noticiaRef = useRef();

  useEffect(() => {
    async function fetchNoticias() {
      let url = `http://api.fecope.eu/v0/all-noticias?pageNumber=${currentPage}&pageSize=${pageSize}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.noticias && data.noticias.length > 0) {
          setEventos((prevEventos) => [
            ...prevEventos.slice(0, currentPage * pageSize),
            ...data.noticias,
          ]);
        }
        setTotalElements(data.totalNoticias);
      } catch (error) {
        console.error("Error fetching noticias:", error);
      }
      if (noticiaRef.current) {
        noticiaRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        noticiaRef.current.focus();
      }
    }

    fetchNoticias();
  }, [currentPage, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (totalElements < 0) {
    return (
      <div
        className="text-dark-red italic text-2xl flex justify-center pt-80 pb-80"
        ref={noticiaRef}
      >
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <>
      <InicioPagina
        text={"Bienvenido a las Noticias"}
        imagen={noticia}
      ></InicioPagina>
      <div className="mt-10 xl:mt-16 mb-10 xl:mx-40 sm:mx-20">
        <Cards
          data={eventos}
          currentPage={currentPage}
          pageSize={pageSize}
        ></Cards>
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
