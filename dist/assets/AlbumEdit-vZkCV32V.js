import{d as w,r,u as y,j as e,M as k,X as F,h as E,g as S}from"./index-BkvH5lNM.js";const $=localStorage.getItem("token");function T(){const{albumId:i}=w(),[d,u]=r.useState(""),[m,h]=r.useState(""),[o,n]=r.useState([]),[b,g]=r.useState(null),x=y(),f=a=>{const t=Array.from(a.target.files).map((s,c)=>({id:`new-${Date.now()}-${c}`,file:s,preview:URL.createObjectURL(s)}));n(s=>[...s,...t]),t.length>0&&g(t[0].preview)},j=async a=>{n(l=>l.filter(t=>t.id!==a))};r.useEffect(()=>{async function a(l){try{const t=await fetch(`http://localhost:8081/v0/album/${l}`);if(t.ok){const s=await t.json();console.log(s);const c=s.fotosBase64.map((p,N)=>({id:`server-${N}`,preview:`data:image/jpeg;base64,${p}`,file:E(`data:image/jpeg;base64,${p}`,"imagen.jpg")}));u(s.titulo),h(s.fecha),n(c)}else console.error("Error al obtener el album:",t.statusText)}catch(t){console.error("Network error:",t)}}a(i)},[i]);const v=async a=>{a.preventDefault();const l=new FormData;l.append("titulo",d),l.append("fecha",m),o.forEach(t=>{t.file&&(l.append("fotos",t.file),console.log(t.file))});try{const t=await fetch(`http://localhost:8081/v1/album/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${$}`,"X-XSRF-TOKEN":S()},credentials:"include",body:l});if(t.ok)alert("Álbum editado con éxito"),x(-1);else{const s=await t.json();console.error("Error al editar el álbum:",s),alert("Hubo un problema al editar el álbum")}}catch(t){console.error("Error al editar el álbum:",t),alert("Hubo un problema al editar el álbum")}};return e.jsxs("div",{className:"max-w-lg mx-auto p-6 bg-white rounded-lg text-dark-red",children:[e.jsxs("div",{className:"flex justify-start gap-20",children:[e.jsx(k,{className:"h-8 w-8 hover:text-dark-red text-true-red cursor-pointer",onClick:()=>x(-1)}),e.jsx("h2",{className:"text-xl font-bold my-4",children:"Edita Álbum"})]}),e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Título del Álbum(Máx. 70 letras)"}),e.jsx("input",{type:"text",placeholder:"Título",value:d,onChange:a=>u(a.target.value),className:"w-full px-3 py-2 border rounded-lg",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Fecha del Álbum"}),e.jsx("input",{type:"date",value:m,onChange:a=>h(a.target.value),className:"w-full px-3 py-2 border rounded-lg",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:["Fotos del Álbum (",o.length,")"]}),e.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:f,className:"w-full px-3 py-2 border rounded-lg"}),b&&e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Vista previa:"}),e.jsx("img",{src:b,alt:"Vista previa",className:"w-full h-full object-cover rounded-lg"})]})]}),o.length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-bold mb-2",children:"Fotos Subidas:"}),e.jsx("ul",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:o.map(a=>e.jsx("li",{className:"flex items-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:a.preview,alt:`Foto ${a.id}`,className:"w-24 h-24 object-cover rounded-lg"}),e.jsx("button",{type:"button",onClick:()=>j(a.id),className:"absolute top-0 right-0 bg-white rounded-full p-1 text-red-600 hover:text-true-red",children:e.jsx(F,{})})]})},a.id))})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300",children:"Editar Álbum"})})]})]})}export{T as default};
