import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { urlToDelete, urlToFetch, getCookie } from "../../util";

const token = localStorage.getItem("token");
export const ListaItemsEdit = ({ param }) => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const url = urlToFetch(param);
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data) {
          console.log("News fetched:", data); // Verifica que los datos sean correctos
          setNews(data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);
  const url2 = urlToDelete(param);
  async function handleEliminar(id) {
    fetch(`${url2}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-XSRF-TOKEN": getCookie(),
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          // setIsSubmitting(true);
          navigate(-1);
        } else {
          //   setIsSubmitting(false);
          alert("Ha occurrido un error");
          console.log("Error");
        }
      })
      .catch((error) => {
        alert("Ha occurrido un error");
        console.error("Network error:", error);
      });
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-true-white  text-dark-red">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-4">Título</th>
            <th className="text-left p-4">
              <div className="flex justify-center">Acciones</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-4">{item.titulo}</td>
              <td className="p-4">
                <div className="flex justify-center">
                  <Link
                    to={`edit/${item.id}`}
                    className="text-dark-red border  text-xs bg-true-white px-1 py-1 rounded-lg  hover:bg-dark-red hover:bg-opacity-85 hover:text-true-white transition  mr-3 duration-300"
                  >
                    Edita
                  </Link>
                  <button
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded-lg hover:bg-red-600 hover:text-true-red transition duration-300"
                    onClick={() => handleEliminar(item.id)}
                  >
                    <Trash2></Trash2>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
