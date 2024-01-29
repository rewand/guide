# Guia instalacion Linux+Valet

`Linux | Valet`

### Descripción

Esta guía proporciona una secuencia de pasos detallados para instalar y configurar un servidor local Linux para un proyecto Laravel, junto con la configuración de la base de datos y otras herramientas necesarias. Asegúrate de seguir cada paso con cuidado y de ajustar las configuraciones según tus necesidades específicas.

### Requisitos previos

Si desea implementar sobre un servidor local Linux “desde cero” debe:

1.  Contar con acceso root

2.  Instalar php 7.2 y todas las librerías requeridas por el aplicativo y Laravel

3.  Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos

4.  Instalar Git, Curl, Composer

### Pasos

:::tip[tip]
Ubuntu no cuenta con la versión 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalación, ellos son:
:::

1.  Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root.

```bash
    apt-get update
```

2.  Para poder agregar un PPA, ejecute los siguientes:

```bash
    apt-get install software-properties-common
    apt-get install python-software-properties
```

3.  Para agregar el PPA, en algunos casos solicitará confirmar con enter

```bash
    add-apt-repository ppa:ondrej/php
    apt-get update

```

4.  Procedemos a Instalar PHP, aunque se instalar algunas librerías junto con PHP, se agregan para asegurar la instalación

```bash
    apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt
```

5.  Instalamos Mysql, phpmyadmin opcional

```bash
    apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin
```

:::danger[advertencia]
Se le solicitara contraseña dos veces, con su confirmación, tanto para mysql como para phpmyadmin
:::

6.  Instalamos Curl y Git

```bash
    apt-get install git
    apt-get install curl
```

7.  Luego se procede a instalar Composer

```bash
    apt-get install composer

```

8.  Dar permisos de lectura y escritura a la carpeta composer

```bash
    Chmod –R 777 ~/.composer
```

9. Instalar librerias cpriego de Valet

```bash
    composer global require cpriego/valet-linux
```

10. Ir a carpeta home /.profile y añadir la siguiente linea al final del documento y guardar

```bash
    Nano ~/.profile
    PATH= “HOME/.composer/vendor/bin:$PATH”
```

Luego ejecutar en terminal:

```bash
    source ~/.profile
```

11. Instalar las siguientes librerías

```bash
    apt install network-maneger libnss3-tools jq xsel
```

:::tip[tip]
Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el puerto :80 . Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto.
:::

12. Detener servicios de apache2 si lo tienes instalado.

```bash
    services apache2 stop
```

13. Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet.

```bash
    Apt install nginx
```

14. Verificar que el servidor de nginx se está ejecutando correctamente

```bash
    Systemctl status nginx
```

15. Si todo está ok instalar valet

```bash
    Valet install
```

> Con valet podemos tener nuestro código en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo.

```bash
    Mkdir ~/code
    cd code
    valet park
```

16. Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:

```bash
    git clone https://gitlab.com/b.mendoza/facturadorpro3.git
```

17. Esto creará una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env

```bash
    cp .env.example .env
```

18. Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE será el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalación de mysql.

> Seguidamente:

```bash
    php artisan key:generate
    composer dump-autoload
```

19. Luego deberá registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contraseña agregada en la instalación.

20. Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones.

```bash
    composer install
    php artisan migrate --seed
```

21. Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrará la base de datos creada y la derecha las tablas generadas.

22. Con estos pasos podrá observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando

```bash
    chmod -R 755 storage
    chmod -R 755 bootstrap/cache
```

23. También es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa

```bash
    php artisan storage:link
```

24. Si todo se realizó correctamente, ya tendrá las tablas del usuario principal creadas, y podrá acceder mediante la web, al proyecto.

        Accesos:

            > Facturadorpro3.test

            > usuario: admin@gmail.com

            > contraseña: 123456

---
