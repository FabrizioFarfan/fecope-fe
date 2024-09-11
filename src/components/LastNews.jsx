import React, { useEffect, useState } from "react";
import { LastCard } from "./LastCard";
import { Link } from "react-router-dom";
export const LastNews = ({ titulo }) => {
  const [news, setNews] = useState([]);
  const to = titulo === "Últimos Eventos" ? "eventos" : "noticias";
  useEffect(() => {
    async function fetchNews() {
      const url =
        titulo === "Últimos Eventos"
          ? "http://api.fecope.eu/v0/ultimos-tres-eventos"
          : "http://api.fecope.eu/v0/ultimas-tres-noticias";
      console.log("Fetching URL:", url); // Asegúrate de que la URL es correcta
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data) {
          setNews(data);
        }
      } catch (error) {
        console.error("Error fetching eventos:", error);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl sm:text-3xl lg:text-4xl text-center tracking-wide text-true-red font-bold underline italic mb-6">
        {titulo}
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <LastCard key={item.id + titulo + index} data={item} news={to} />
        ))}
      </div>
      <div className="flex justify-center text-true-red italic font-extralight  text-opacity-85">
        <Link
          className="mt-5 hover:scale-110 hover:text-dark-red"
          to={`/${to}`}
        >
          otros {to} aquí...
        </Link>
      </div>
    </div>
  );
};
