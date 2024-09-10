import { Link } from "react-router-dom";

import React from "react";

export const Panel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 text-dark-red">
      {/* Columna 1: News */}
      <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-300 pb-6 md:pb-0 md:pr-6">
        <h1 className="text-xl font-bold mb-4 underline">News</h1>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-true-red">
            <Link to="eventos">Eventos</Link>
          </li>
          <li className="cursor-pointer hover:text-true-red">
            <Link to="noticias">Noticias</Link>
          </li>
        </ul>
      </div>

      {/* Columna 2: Asociaciones */}
      <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-300 pb-6 md:pb-0 md:px-6">
        <h1 className="text-xl font-bold mb-4 underline">Asociaciones</h1>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-true-red">
            <Link to="asociaciones-fecope">Asociaciones con Fecope</Link>
          </li>
          <li className="cursor-pointer hover:text-true-red">
            <Link to="partners">Socios</Link>
          </li>
        </ul>
      </div>

      {/* Columna 3: Galeria */}
      <div className="pt-6 md:pt-0 md:pl-6">
        <h1 className="text-xl font-bold mb-4 underline">Galeria</h1>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-true-red">
            <Link to="albums-fotos">Álbumes</Link>
          </li>
          <li className="cursor-pointer hover:text-true-red">
            <Link to="diaspora">Diáspora</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
