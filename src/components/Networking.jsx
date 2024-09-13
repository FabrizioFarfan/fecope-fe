import React, { useEffect, useState } from "react";
import { determineImageType } from "../util";

export const Networking = () => {
  const [partners, setPartners] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchPartners() {
      let url = "https://api.fecope.eu/v0/all-partners";
      console.log("Fetching URL:", url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPartners(data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    }
    fetchPartners();
  }, []);

  const displayedPartners = showAll ? partners : partners.slice(0, 3);

  return (
    <>
      {partners.length > 0 && (
        <div className="bg-true-red bg-opacity-95 text-true-white ">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3 items-center">
              {displayedPartners.map((partner) => {
                const imageType = determineImageType(
                  partner.imageType || "image/jpeg"
                );
                const imageSrc = `data:${imageType};base64,${partner.imagen}`;
                return (
                  <a
                    key={partner.id}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2"
                  >
                    <img
                      src={imageSrc}
                      alt={partner.titulo}
                      className="w-14 object-contain rounded-md shadow-lg"
                    />
                  </a>
                );
              })}
            </div>
            {partners.length > 3 && (
              <div className="flex justify-center hover:text-dark-red font-extralight text-xs underline">
                <button onClick={() => setShowAll(!showAll)}>
                  {showAll ? "Esconde" : "Muestra Todos"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
