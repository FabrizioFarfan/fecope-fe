import { MoveLeft } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export const ContactanosForm = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Aquí puedes manejar el envío del formulario (por ejemplo, enviar datos a un servidor)

    emailjs
      .sendForm("service_7uhsotc", "template_3ucbudk", form.current, {
        publicKey: "VLQCE9kkyMBWlIThL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEnviado(true);
          setNombre("");
          setEmail("");
          setMensaje("");
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "Error intente de nuevo o mande directamente la mail a fecope@libero.it  "
          );
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg bg-true-red bg-opacity-10">
      <div className="flex justify-start gap-10">
        <MoveLeft
          className="h-8 w-8 hover:text-dark-red text-true-red cursor-pointer"
          onClick={() => navigate(-1)}
        ></MoveLeft>
        <h2 className="text-xl font-bold my-4 underline  text-dark-red">
          Contàctanos:
        </h2>
      </div>
      {enviado && (
        <div className="text-dark-red border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
          <strong className="font-bold">¡Mensaje enviado!</strong>
          <span className="block sm:inline">
            {"   "}
            Gracias por ponerte en contacto con nosotros.
          </span>
          <a
            href="/"
            className="font-bold italic underline hover:text-true-red"
          >
            {"  "}
            Regresa
          </a>
        </div>
      )}

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6 text-dark-red"
      >
        {/* Campo de Nombre */}
        <div>
          <label
            htmlFor="nombre"
            className="block text-gray-700 font-medium mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="user_name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-true-red focus:border-transparent"
          />
        </div>

        {/* Campo de Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-true-red focus:border-transparent"
          />
        </div>

        {/* Campo de Mensaje */}
        <div>
          <label
            htmlFor="mensaje"
            className="block text-gray-700 font-medium mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            name="message"
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-true-red focus:border-transparent"
          ></textarea>
        </div>

        {/* Botón de Enviar */}
        <div className="text-center">
          <button
            type="submit"
            className={`px-6 py-3   text-dark-red border font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-true-red hover:bg-dark-red hover:text-true-white focus:ring-opacity-50 ${
              isSubmitting ? "bg-dark-red" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};
