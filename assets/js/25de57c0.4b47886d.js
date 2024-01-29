"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[4924],{3988:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var s=n(5893),r=n(1151);const i={},l="Guia instalacion Linux+Valet",o={id:"Tutorial-Script-Instalacion/Guide3",title:"Guia instalacion Linux+Valet",description:"Linux | Valet",source:"@site/docs/Tutorial-Script-Instalacion/Guide3.md",sourceDirName:"Tutorial-Script-Instalacion",slug:"/Tutorial-Script-Instalacion/Guide3",permalink:"/guide/docs/Tutorial-Script-Instalacion/Guide3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial-Script-Instalacion/Guide3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guia instalacion Docker+Gitlab+SSL",permalink:"/guide/docs/Tutorial-Script-Instalacion/Guide2"},next:{title:"Guia instalacion Docker+Linux+SSL externo",permalink:"/guide/docs/Tutorial-Script-Instalacion/Guide4"}},c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Requisitos previos",id:"requisitos-previos",level:3},{value:"Pasos",id:"pasos",level:3}];function d(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"guia-instalacion-linuxvalet",children:"Guia instalacion Linux+Valet"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.code,{children:"Linux | Valet"})}),"\n",(0,s.jsx)(a.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"Esta gu\xeda proporciona una secuencia de pasos detallados para instalar y configurar un servidor local Linux para un proyecto Laravel, junto con la configuraci\xf3n de la base de datos y otras herramientas necesarias. Aseg\xfarate de seguir cada paso con cuidado y de ajustar las configuraciones seg\xfan tus necesidades espec\xedficas."}),"\n",(0,s.jsx)(a.h3,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,s.jsx)(a.p,{children:"Si desea implementar sobre un servidor local Linux \u201cdesde cero\u201d debe:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Contar con acceso root"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Instalar php 7.2 y todas las librer\xedas requeridas por el aplicativo y Laravel"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Instalar Git, Curl, Composer"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"pasos",children:"Pasos"}),"\n",(0,s.jsx)(a.admonition,{title:"tip",type:"tip",children:(0,s.jsx)(a.p,{children:"Ubuntu no cuenta con la versi\xf3n 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalaci\xf3n, ellos son:"})}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root."}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    apt-get update\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"2",children:["\n",(0,s.jsx)(a.li,{children:"Para poder agregar un PPA, ejecute los siguientes:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    apt-get install software-properties-common\r\n    apt-get install python-software-properties\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"3",children:["\n",(0,s.jsx)(a.li,{children:"Para agregar el PPA, en algunos casos solicitar\xe1 confirmar con enter"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    add-apt-repository ppa:ondrej/php\r\n    apt-get update\r\n\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"4",children:["\n",(0,s.jsx)(a.li,{children:"Procedemos a Instalar PHP, aunque se instalar algunas librer\xedas junto con PHP, se agregan para asegurar la instalaci\xf3n"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"5",children:["\n",(0,s.jsx)(a.li,{children:"Instalamos Mysql, phpmyadmin opcional"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin\n"})}),"\n",(0,s.jsx)(a.admonition,{title:"advertencia",type:"danger",children:(0,s.jsx)(a.p,{children:"Se le solicitara contrase\xf1a dos veces, con su confirmaci\xf3n, tanto para mysql como para phpmyadmin"})}),"\n",(0,s.jsxs)(a.ol,{start:"6",children:["\n",(0,s.jsx)(a.li,{children:"Instalamos Curl y Git"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    apt-get install git\r\n    apt-get install curl\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"7",children:["\n",(0,s.jsx)(a.li,{children:"Luego se procede a instalar Composer"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    apt-get install composer\r\n\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"8",children:["\n",(0,s.jsx)(a.li,{children:"Dar permisos de lectura y escritura a la carpeta composer"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    Chmod \u2013R 777 ~/.composer\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"9",children:["\n",(0,s.jsx)(a.li,{children:"Instalar librerias cpriego de Valet"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    composer global require cpriego/valet-linux\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"10",children:["\n",(0,s.jsx)(a.li,{children:"Ir a carpeta home /.profile y a\xf1adir la siguiente linea al final del documento y guardar"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    Nano ~/.profile\r\n    PATH= \u201cHOME/.composer/vendor/bin:$PATH\u201d\n"})}),"\n",(0,s.jsx)(a.p,{children:"Luego ejecutar en terminal:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    source ~/.profile\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"11",children:["\n",(0,s.jsx)(a.li,{children:"Instalar las siguientes librer\xedas"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    apt install network-maneger libnss3-tools jq xsel\n"})}),"\n",(0,s.jsx)(a.admonition,{title:"tip",type:"tip",children:(0,s.jsx)(a.p,{children:"Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el puerto :80 . Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto."})}),"\n",(0,s.jsxs)(a.ol,{start:"12",children:["\n",(0,s.jsx)(a.li,{children:"Detener servicios de apache2 si lo tienes instalado."}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    services apache2 stop\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"13",children:["\n",(0,s.jsx)(a.li,{children:"Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet."}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    Apt install nginx\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"14",children:["\n",(0,s.jsx)(a.li,{children:"Verificar que el servidor de nginx se est\xe1 ejecutando correctamente"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    Systemctl status nginx\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"15",children:["\n",(0,s.jsx)(a.li,{children:"Si todo est\xe1 ok instalar valet"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    Valet install\n"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Con valet podemos tener nuestro c\xf3digo en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo."}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    Mkdir ~/code\r\n    cd code\r\n    valet park\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"16",children:["\n",(0,s.jsx)(a.li,{children:"Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    git clone https://gitlab.com/b.mendoza/facturadorpro3.git\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"17",children:["\n",(0,s.jsx)(a.li,{children:"Esto crear\xe1 una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    cp .env.example .env\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"18",children:["\n",(0,s.jsx)(a.li,{children:"Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE ser\xe1 el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalaci\xf3n de mysql."}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Seguidamente:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    php artisan key:generate\r\n    composer dump-autoload\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"19",children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Luego deber\xe1 registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contrase\xf1a agregada en la instalaci\xf3n."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    composer install\r\n    php artisan migrate --seed\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"21",children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrar\xe1 la base de datos creada y la derecha las tablas generadas."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Con estos pasos podr\xe1 observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    chmod -R 755 storage\r\n    chmod -R 755 bootstrap/cache\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"23",children:["\n",(0,s.jsx)(a.li,{children:"Tambi\xe9n es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"    php artisan storage:link\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"24",children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Si todo se realiz\xf3 correctamente, ya tendr\xe1 las tablas del usuario principal creadas, y podr\xe1 acceder mediante la web, al proyecto."}),"\n",(0,s.jsx)(a.p,{children:"Accesos:"}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Facturadorpro3.test"}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["usuario: ",(0,s.jsx)(a.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"})]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"contrase\xf1a: 123456"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.hr,{})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>l});var s=n(7294);const r={},i=s.createContext(r);function l(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);