import React, { useEffect, useState } from "react";
import { paisesEuropeos } from "../constants";
import instagram from "../../dist/assets/instagram.svg";
import facebook from "../../dist/assets/facebook.svg";
import { Globe } from "lucide-react";

export const AsociacionesList = () => {
  const [asociaciones, setAsociaciones] = useState([]);

  useEffect(() => {
    async function fetchAsociaciones() {
      let url = "http://api.fecope.eu/v0/all-asociaciones";
      console.log("Fetching URL:", url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAsociaciones((prevData) => [...data]);
      } catch (error) {
        console.error("Error fetching asociaciones:", error);
      }
    }

    fetchAsociaciones();
  }, []);

  const asociacionesPorPais = asociaciones.reduce((acc, asociacion) => {
    const { pais } = asociacion;
    if (!acc[pais]) {
      acc[pais] = [];
    }
    acc[pais].push(asociacion);
    return acc;
  }, {});

  const obtenerNombrePais = (acronimo) => {
    const pais = paisesEuropeos.find((p) => p.acronimo === acronimo);
    return pais ? pais.nombre : acronimo;
  };

  return (
    <div className="container mx-auto p-4 mt-8">
      {Object.keys(asociacionesPorPais).map((pais) => (
        <div key={pais} className="mb-8">
          {/* Header for each country */}
          <div className="flex items-center mb-4 ml-4">
            <img
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${pais}.svg`}
              alt={`${pais} flag`}
              className="w-12 h-8 rounded-lg shadow-lg mr-3"
            />
            <h2 className="text-4xl font-semibold text-dark-red">
              {obtenerNombrePais(pais)}
            </h2>
          </div>

          {/* Associations for each country */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {asociacionesPorPais[pais].map((asociacion) => (
              <div
                key={asociacion.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow bg-true-red bg-opacity-10"
              >
                <div className="flex justify-center">
                  <h3 className="text-3xl font-light mb-2 text-dark-red">
                    {asociacion.titulo}
                  </h3>
                </div>
                <div className="flex justify-around space-x-4">
                  {/* Redes Sociales */}
                  {asociacion.linkInstagram && (
                    <a
                      href={asociacion.linkInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition transform hover:scale-110"
                    >
                      <img
                        src={instagram}
                        alt="instagram"
                        className="w-8 h-8"
                      />
                    </a>
                  )}
                  {asociacion.linkFacebook && (
                    <a
                      href={asociacion.linkFacebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition transform hover:scale-110"
                    >
                      <img src={facebook} alt="facebook" className="w-8 h-8" />
                    </a>
                  )}
                  {asociacion.linkWebSite && (
                    <a
                      href={asociacion.linkWebSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 transition transform hover:scale-110"
                    >
                      <Globe className="w-8 h-8     opacity-55" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
