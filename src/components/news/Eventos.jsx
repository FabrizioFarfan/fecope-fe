import React, { useEffect, useRef, useState } from "react";
import { Cards } from "../Cards";
import { InicioPagina } from "../InicioPagina";
import { Pagination } from "../Pagination";
import evento from "../../../dist/assets/evento.png";

export const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 9;
  const eventoRef = useRef();

  useEffect(() => {
    async function fetchEventos() {
      let url = `http://api.fecope.eu/v0/all-eventos?pageNumber=${currentPage}&pageSize=${pageSize}`;
      setCurrentPage(currentPage);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.eventos && data.eventos.length > 0) {
          setEventos((prevEventos) => [
            ...prevEventos.slice(0, currentPage * pageSize),
            ...data.eventos,
          ]);
        }
        setTotalElements(data.totalEventos);
      } catch (error) {
        console.error("Error fetching eventos:", error);
      }
      if (eventoRef.current) {
        eventoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        eventoRef.current.focus();
      }
    }

    fetchEventos();
  }, [currentPage, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (totalElements < 0) {
    return (
      <div
        className="text-dark-red italic text-2xl flex justify-center pt-80 pb-80"
        ref={eventoRef}
      >
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      {/* Inicio */}
      <InicioPagina
        text={"Bienvenido a los Eventos"}
        imagen={evento}
      ></InicioPagina>
      {/* Eventos Card */}
      <div className="mt-10 xl:mt-16 mb-10 xl:mx-40" ref={eventoRef}>
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
