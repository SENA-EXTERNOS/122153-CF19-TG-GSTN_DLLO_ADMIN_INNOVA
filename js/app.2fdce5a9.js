(function(e){function a(a){for(var o,i,r=a[0],d=a[1],s=a[2],u=0,l=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);f&&f(a);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,a=0;a<c.length;a++){for(var n=c[a],o=!0,i=1;i<n.length;i++){var r=n[i];0!==t[r]&&(o=!1)}o&&(c.splice(a--,1),e=d(d.s=n[0]))}return e}var o={},i={app:0},t={app:0},c=[];function r(e){return d.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"7cc4a866","chunk-0206bfa0":"11c12f23","chunk-0c047e41":"9b730591","chunk-13a6037e":"0fbff896","chunk-18f95272":"34fb31dc","chunk-25b302c8":"0a420748","chunk-26fc7596":"2347838b","chunk-2c06842c":"a29bc870","chunk-2d0e96ec":"65505e80","chunk-2d208d90":"eb996404","chunk-2d21d0e2":"1ab74ebb","chunk-2d22c123":"957807a0","chunk-2d2747e2":"de6324bf","chunk-2e80bb9a":"dc71a32a","chunk-319206de":"99d92fe0","chunk-32334cb6":"f0e7c2d9","chunk-3c57cd7b":"6592ece9","chunk-3d6834f6":"c3a93b0d","chunk-4cdd78c0":"bc153de4","chunk-4f2d402a":"f0ebb1ef","chunk-4fde0a08":"70c3987a","chunk-515a8379":"6b9c7ce5","chunk-53ccb27e":"0d179b97","chunk-55d286b8":"67f6cc05","chunk-59974754":"b01e77da","chunk-6e1e538a":"c4004571","chunk-766a929b":"03246b37","chunk-c796899c":"3d5d552c","chunk-e8a7823a":"23d7b9af","chunk-f2df7d2c":"1a87ef66","chunk-fde47172":"f0f9429b",comple:"d9c3c806",creditos:"c0b20c7c",glosario:"82cda119",intro:"a58cf3be",referencias:"4ee36aed",sintesis:"c1cec013",tema1:"3acbd0a9",tema2:"5933c0ec",tema3:"7d9a900c",tema4:"5289b00e"}[e]+".js"}function d(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"fef54ca8","chunk-515a8379":"fcef2197","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"5b08dbe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"cb84b683","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"bfff5dee",creditos:"b6e74207",glosario:"50b77f6c",intro:"31d6cfe0",referencias:"2ff3aa21",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=d.p+o,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var s=c[r],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===t))return a()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){s=l[r],u=s.getAttribute("data-href");if(u===o||u===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete i[e],f.parentNode.removeChild(f),n(c)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var c=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.src=r(e);var l=new Error;s=function(a){u.onerror=u.onload=null,clearTimeout(f);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}t[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(a)},d.m=e,d.c=o,d.d=function(e,a,n){d.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,a){if(1&a&&(e=d(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)d.d(n,o,function(a){return e[a]}.bind(null,o));return n},d.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(a,"a",a),a},d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d.p="",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],c={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},r=c,d=n("2877"),s=Object(d["a"])(r,i,t,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");l["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,v=n("1c2c"),g=(n("a3a0"),{global:{componenteFormativo:"Evaluación, capacitación y permanencia de talento humano",descripcionCurso:"La gestión del talento humano es la encargada de las etapas o procesos que generan o influyen en los comportamientos y en las actitudes de los empleados, condicionando sus resultados en la productividad, la satisfacción laboral, la rotación o permanencia y, por ende, en los resultados acertados de la organización.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Evaluación y capacitación del talento humano",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Evaluación de desempeño",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Capacitación",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Bienestar y calidad de vida",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Salud ocupacional",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Comunicación empresarial",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Evaluación de desempeño",referencia:"QuestionPro. (s.f.). <i>11 métodos de evaluación de desempeño para alcanzar tus objetivos</i>.",tipo:"Artículo",link:"https://www.questionpro.com/blog/es/metodos-de-evaluacion-de-desempeno-mas-importantes/#:~:text=Evaluaci%C3%B3n%20360%20%E2%80%8B%E2%80%8Bgrados,obtener%20retroalimentaci%C3%B3n%20de%20fuentes%20externas."},{tema:"Capacitación",referencia:"INFO G-TALENT. (2021). <i>Tutorial – Tipos de capacitación</i>.",tipo:"Video",link:"https://www.youtube.com/watch?v=HgvcR67fjgI"},{tema:"Salud ocupacional",referencia:"Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012. ",tipo:"Documento legal",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201562%20de%202012.pdf"},{tema:"Comunicación empresarial",referencia:"GCFAprendeLibre. (2022).<em> Tipo de comunicación organizacional Comunicación empresarial </em>(Video). ",tipo:"Video",link:"https://youtu.be/eb0kP8iMpWI"}],glosario:[{termino:"Ambiente laboral",significado:"situación intangible que se identifica y percibe dentro de las organizaciones. Situación de agrado o desagrado al estar o laborar en un ambiente determinado."},{termino:"Capacitación",significado:"conjunto de actividades didácticas para ampliar y mejorar conocimientos, habilidades y aptitudes de una persona."},{termino:"Competencias",significado:"son destrezas, habilidades y conocimientos que tiene el trabajador para desempeñar sus funciones. "},{termino:"Desarrollo de habilidades",significado:"perfeccionamiento o crecimiento en los aspectos motrices o cognitivos del ser humano."},{termino:"Desempeño",significado:"acción de desarrollar o ejercer determinada labor o función."},{termino:"Evaluación",significado:"valoración de conocimientos, actitud y rendimiento de una persona, un empleado, un bien o un servicio."},{termino:"Factores de riesgo",significado:"son todas aquellas situaciones o elementos que pueden causar daños, accidentes o enfermedades a las personas."},{termino:"Habilidades",significado:"capacidades para realizar determinadas acciones o tareas de forma efectiva."},{termino:"Plan de mejoramiento",significado:"acciones encaminadas al mejoramiento de una actividad, o proceso."},{termino:"Salud mental",significado:"es un estado de bienestar y tranquilidad, donde el individuo es consciente de su calidad de vida."},{termino:"Talento humano",significado:"capacidad especial o facilidad de una persona para aprender o ejecutar una determinada tarea."}],referencias:[{referencia:"Boada, R. (2015). <i>Identificando el talento humano</i>. McGraw-Hill Interamericana.",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7452"},{referencia:"Chiavenato, I. (2009). <i>Gestión del talento humano</i>. McGraw-Hill.",link:"http://repositorio.uasb.edu.bo:8080/bitstream/54000/1143/1/Chiavenato-Talento%20humano%203ra%20ed.pdf "},{referencia:"Chiavenato, I. (2017). <i>Administración de recursos humanos. El capital humano de las organizaciones</i>. McGraw-Hill.",link:"https://www.sijufor.org/uploads/1/2/0/5/120589378/administracion_de_recursos_humanos_-_chiavenato.pdf "},{referencia:"Cuesta Santos, A. (2010). <i>Gestión del talento humano y el conocimiento</i>. Ecoe Ediciones.",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=110 "},{referencia:"Louffat, E. (2017). <i>Reclutando y seleccionando al personal</i>. Pearson Educación.",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10379"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=g;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:v["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.f4afa9b4.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.2f82ed4a.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.b58017b7.svg"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.978dcd81.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.32228650.png"}});
//# sourceMappingURL=app.2fdce5a9.js.map