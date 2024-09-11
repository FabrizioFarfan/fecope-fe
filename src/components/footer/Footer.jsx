import React from "react";
import instagram from "../../../dist/assets/instagram.svg";
import facebook from "../../../dist/assets/facebook.svg";
import tiktok from "../../../dist/assets/tiktok.svg";
import { Link, useRouteLoaderData } from "react-router-dom";
import { Networking } from "../Networking";

export const Footer = () => {
  const token = useRouteLoaderData("root");
  return (
    <footer className="bg-true-red text-true-white py-8 mt-20">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sección de descripción */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold">FECOPE</h3>
          <p className="mt-2">Federación de Peruanos en Europa</p>
        </div>

        {/* Sección de enlaces */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold mb-2">Enlaces Adicionales</h4>
          <ul className="font-extralight">
            <li className="mb-1">
              <Link to="/contactanos" className="hover:underline">
                Contàctanos
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/nuestra-privacy" className="hover:underline">
                Nuestra Privacy
              </Link>
            </li>
            {!token && (
              <li className="mb-1">
                <Link to="/login" className="hover:underline">
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold mb-2">Síguenos</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.tiktok.com/@fecopeoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <img src={tiktok} alt="tiktok" className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/reel/C_sPanriu_m/?igsh=MWNlYWNzanM1aGVibw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/fecope.federacionpex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            {/* Agrega más íconos de redes sociales aquí si es necesario */}
          </div>
        </div>

        {/* Sección de suscripción */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold mb-2">Socios</h4>
          <Networking></Networking>
        </div>
      </div>

      {/* Sección de derechos reservados */}
      <div className="text-center mt-8 border-t  border-white pt-4 mx-16">
        <p>
          &copy; {new Date().getFullYear()} FECOPE. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
