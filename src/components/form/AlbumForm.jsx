import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../util";

const token = localStorage.getItem("token");
export const AlbumForm = () => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [fotos, setFotos] = useState([]);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const handleFotoChange = (e) => {
    const files = Array.from(e.target.files);
    const newFotos = files.map((file, index) => ({
      id: Date.now() + index,
      file: file,
      preview: URL.createObjectURL(file),
    }));
    setFotos((prevFotos) => [...prevFotos, ...newFotos]);

    if (newFotos.length > 0) {
      setPreview(newFotos[0].preview);
    }
  };

  const handleFotoRemove = (id) => {
    setFotos((prevFotos) => prevFotos.filter((foto) => foto.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("fecha", fecha);

    fotos.forEach((foto) => {
      formData.append("fotos", foto.file);
    });

    try {
      const response = await fetch("http://api.fecope.eu/v1/create-album", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Añade el token aquí si es necesario
          "X-XSRF-TOKEN": getCookie(),
        },
        credentials: "include",
        body: formData,
      });

      if (response.ok) {
        alert("Álbum creado con éxito");
        // Reinicia el formulario o navega a otra página si es necesario
        navigate(-1);
      } else {
        const errorData = await response.json();
        console.error("Error al crear el álbum:", errorData);
        alert("Hubo un problema al crear el álbum");
      }
    } catch (error) {
      console.error("Error al crear el álbum:", error);
      alert("Hubo un problema al crear el álbum");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg text-dark-red">
      <h2 className="text-xl font-bold mb-4">Crear un Nuevo Álbum</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Título del Álbum(Máx. 70 letras)
          </label>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha del Álbum
          </label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fotos del Álbum ({fotos.length})
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFotoChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Vista previa:</p>
              <img
                src={preview}
                alt="Vista previa"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {fotos.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">Fotos Subidas:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {fotos.map((foto) => (
                <li key={foto.id} className="flex items-center">
                  <div className="relative">
                    <img
                      src={foto.preview}
                      alt={`Foto ${foto.id}`}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleFotoRemove(foto.id)}
                      className="absolute top-0 right-0 bg-white rounded-full p-1 text-red-600 hover:text-true-red"
                    >
                      {/* Aquí asumo que tienes un componente X para el icono de cerrar */}
                      <X />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300"
          >
            Crear Álbum
          </button>
        </div>
      </form>
    </div>
  );
};
