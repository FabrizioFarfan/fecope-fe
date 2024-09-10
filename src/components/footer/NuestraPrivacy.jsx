export const NuestraPrivacy = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20 text-dark-red ">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 bg-true-red bg-opacity-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Política de Privacidad
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          En <strong>Fecope</strong>, valoramos tu privacidad y queremos
          asegurarte que no recopilamos ningún tipo de información personal ni
          utilizamos cookies mientras navegas por nuestro sitio web.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          1. Información que no recopilamos
        </h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>
            <strong>Datos personales:</strong> No solicitamos ni recopilamos
            información personal como nombres, correos electrónicos o cualquier
            otra información de contacto.
          </li>
          <li>
            <strong>Cookies:</strong> No utilizamos cookies ni otras tecnologías
            de seguimiento en nuestro sitio.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          2. Navegación segura
        </h2>
        <p className="mb-6 text-gray-700">
          Aunque no recopilamos datos personales ni usamos cookies, te
          recomendamos que sigas las buenas prácticas de navegación segura, como
          mantener tu navegador actualizado y utilizar medidas de seguridad
          adecuadas.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          3. Cambios en la Política de Privacidad
        </h2>
        <p className="mb-6 text-gray-700">
          Nos reservamos el derecho de modificar esta Política de Privacidad en
          cualquier momento. Cualquier actualización será publicada en esta
          página.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          4. Contacto
        </h2>
        <p className="text-gray-700 mb-6">
          Si tienes alguna duda sobre esta política, puedes ponerte en contacto
          con nosotros a través de{" "}
          <a
            href="mailto:fecope@libero.it"
            className="text-blue-600 hover:underline"
          >
            fecope@libero.it
          </a>
          .
        </p>

        <div className="text-center">
          <a href="/" className="text-blue-500 font-semibold hover:underline">
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};
