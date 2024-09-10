import{u as f,r as s,d as g,j as e,M as h,e as b,h as j,g as N}from"./index-BkvH5lNM.js";const y=localStorage.getItem("token");function w(){const d=f(),n=s.useRef(),o=s.useRef(),l=s.useRef(),{partnerId:u}=g(),[i,m]=s.useState(null);s.useEffect(()=>{async function c(r){try{const t=await fetch(`http://localhost:8081/v0/partner/${r}`);if(t.ok){const a=await t.json();if(console.log(a),a.imagen){const x=`data:${b(a.imageType||"image/jpeg")};base64,${a.imagen}`;m(x)}o.current&&(o.current.value=a.titulo),l.current&&(l.current.value=a.link)}else console.error("Error al obtener el partner:",t.statusText)}catch(t){console.error("Network error:",t)}}c(u)},[]);async function p(c){c.preventDefault();const r=new FormData;if(r.append("titulo",o.current.value),r.append("link",l.current.value),n.current.files.length===0){const a=j(i,"imagen.jpg");r.append("imagen",a)}else r.append("imagen",n.current.files[0]);r.append("diaspora",!1),console.log(r),fetch(`http://localhost:8081/v1/partner/${u}`,{method:"PUT",headers:{Authorization:`Bearer ${y}`,"X-XSRF-TOKEN":N()},credentials:"include",body:r}).then(t=>{t.status===200?(alert("Socio editado con éxito"),d(-1)):alert("Ha occurrido un error")}).catch(t=>{alert("Ha occurrido un error"),console.error("Network error:",t)})}return e.jsxs("div",{className:"text-dark-red max-w-lg mx-auto p-6 bg-white  rounded-lg",children:[e.jsxs("div",{className:"flex justify-start gap-20",children:[e.jsx(h,{className:"h-8 w-8 hover:text-dark-red text-true-red cursor-pointer",onClick:()=>d(-1)}),e.jsx("h2",{className:"text-xl font-bold my-4",children:"Edita Socio"})]}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Nombre(Máx. 100 letras)"}),e.jsx("input",{type:"text",placeholder:"Nombre",className:"w-full px-3 py-2 border rounded-lg",ref:o,required:!0})]})," ",e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Link"}),e.jsx("input",{type:"text",placeholder:"Link",className:"w-full px-3 py-2 border rounded-lg",ref:l,required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Logo"}),e.jsx("input",{type:"file",className:"w-full px-3 py-2 border rounded-lg",accept:"image/*",ref:n})]}),i&&e.jsxs("div",{className:"mb-4 grid",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:i,alt:" Noticia Imagen",className:"rounded-lg h-[150px] w-[150-px]"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("p",{className:"text-xs font-extralight",children:"Imagen actual del logo(si desea puede modificarla)"})})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300",children:"Edita Socio"})})]})]})}export{w as default};
