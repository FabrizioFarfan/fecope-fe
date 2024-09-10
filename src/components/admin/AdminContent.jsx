import { MoveLeft, NotebookPen } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { form, titulo } from "../../util";
import { ListaItemsEdit } from "../edit/ListaItemsEdit";

export const AdminContent = () => {
  const navigate = useNavigate();
  const { adminContent } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <MoveLeft
        className="h-10 w-10 hover:text-dark-red text-true-red m-5 md:ml-14 cursor-pointer"
        onClick={() => navigate(-1)}
      ></MoveLeft>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Botones Modifica y Crea */}
        <div className="flex justify-between mb-4 ml-5">
          <button
            onClick={() => handleClick("modifica")}
            className="text-dark-red border   bg-true-white px-3 py-1 rounded-lg mr-2 hover:bg-dark-red hover:bg-opacity-85 hover:text-true-white transition duration-300"
          >
            Modifica
          </button>
          <div>
            <h1 className=" lg:text-3xl sm:lg text-dark-red font-bold">
              {titulo(adminContent)}
            </h1>
          </div>
          <button
            onClick={() => handleClick("crea")}
            className="text-dark-red border   bg-true-white px-3 py-1 rounded-lg mr-2 hover:bg-dark-red hover:bg-opacity-85 hover:text-true-white transition duration-300"
          >
            Crea
          </button>
        </div>

        {/* Div con contenido dinámico */}
        <div className="border-2 border-dark-red p-6 rounded-lg shadow-lg">
          {selectedOption === "modifica" && (
            <ListaItemsEdit param={adminContent}></ListaItemsEdit>
          )}
          {selectedOption === "crea" && form(adminContent)}
          {!selectedOption && (
            <div className=" m-32   text-dark-red justify-center grid gap-5 ">
              <div className="flex justify-center">
                <NotebookPen className="h-10 w-10"></NotebookPen>
              </div>
              <p className="text-center text-gray-600 text-4xl font-thin">
                Modifica o crea aqui
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
