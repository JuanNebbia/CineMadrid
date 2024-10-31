# CINEMADRID
Este proyecto forma parte del contenido de las clases prácticas del Bootcamp de desarrollo Full-stack brindado por la UNTREF en el partido de La Madrid. Es un proyecto elaborado en React, y simula la plataforma web de una sala de Cine. Dentro del mismo vas a encontrar avances sobre los temas que se fueron poniendo en práctica durante las clases, y tendrás la oportunidad de hacer uso del mismo en tu entorno local para poner a prueba algunos conceptos trabajados.


## 📖 Tabla de contenidos

- [CINEMADRID](#cinemadrid)
  - [📖 Tabla de contenidos](#-tabla-de-contenidos)
  - [🔧 Instalación](#-instalación)
  - [📂 Estructura de carpetas](#-estructura-de-carpetas)
  - [📖 Avance de cada clase](#-avance-de-cada-clase)
    - [Clase 25/09: Organización de equipos y proyecto base](#clase-2509-organización-de-equipos-y-proyecto-base)
    - [Clase 02/10: React Router](#clase-0210-react-router)
    - [Clase 09/10: Formularios y Contextos](#clase-0910-formularios-y-contextos)
    - [Clase 23/10: Consumo de API externa](#clase-2310-consumo-de-api-externa)
    - [Clase 30/10: Variables de entorno y peticiones POST](#clase-3010-variables-de-entorno-y-peticiones-post)


## 🔧 Instalación

Sigue estos pasos para clonar e instalar el proyecto:

**1.  Clona el repositorio:**

```bash
git clone https://github.com/JuanNebbia/CineMadrid
```
**2. Instala las dependencias:**

Asegúrate de tener instalado Node.js y luego ejecuta:

```bash
cd CineMadrid
npm install
```

**3. Ejecuta el servidor de desarrollo:**

Una vez instaladas las dependencias, inicia el proyecto con:

```bash
npm run dev
```
Esto iniciará la aplicación en http://localhost:5173.

## 📂 Estructura de carpetas

```plaintext
CineMadrid/
├── public/
│   src
│   ├── assets/
│   ├── components/
│   ├── mocks/
│   ├── routes/
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── index.html
├── README.md    # Usted está aquí
└── vite.config.js                          
```

## 📖 Avance de cada clase

### Clase 25/09: Organización de equipos y proyecto base 
* **Objetivos:**
  * Crear un proyecto React base sobre el cual comenzar a construir
  * Añadir las carpetas y componentes básicos
  * Crear un repositorio en Github y distribuir al resto del equipo
  * Organizar tareas con Trello
  * Comenzar a maquetar diseños en Figma
  * Analizar los requerimientos, el alcance y limitaciones del proyecto a llevar a cabo
* **Avances**
  * Se crea el proyecto con Vite y se añadieron los componentes básicos Main, Header, Navbar, Footer y Card.
  * Se simulan datos en un archivo json que son mapeados para renderizar el componente Card con la información de cada elemento.
  * Se aplican estilos elementales utilizando CSS "vanilla"

### Clase 02/10: React Router
* **Objetivos:**
  * Incorporar un sistema de rutas por medio de la librería react-router-dom
  * Diseñar una vista para rutas inexistentes
  * Utilizar parámetros de ruta para mostrar información de un elemento particular
  * Incluir elementos Link para manejo de enlaces
* **Avances**
  * Se configura el archivo main.jsx para la creación de un router básico, por medio de la función **createBrowserRouter()** y el componente **RouterProvider**
  * Se reemplaza el uso del componente App por el componente Root
  * Se crea la carpeta *routes/* que cuenta con aquellos componentes que representan una vista y están asociados a una ruta.
  * Se crea el componente **NotFound** para mostrar un mensaje de error cuando se trata de acceder a una ruta inexistente. 
  * Se suma el componente **About** para la ruta */about* 
  * Se suma el componente **MovieDetail** para la ruta */movies/:movieId*, que cuenta con un parámetro de ruta. Este parámetro es obtenido con el uso del hook **useParams**  para encontrar los detalles de la película que cuenta con el id especificado
  * Se utiliza el componente **Link** para trabajar con enlaces, tanto en el navbar como para enlazar las tarjetas a sus vistas de detalle

### Clase 09/10: Formularios y Contextos
* **Objetivos:**
  * Practicar la utilización de formularios
  * Crear un contexto que gestione los datos del usuario autenticado
  * Consumir el contexto en los diferentes componentes para renderizar contenido diferencial
  * Controlar el acceso a rutas según el rol del usuario
* **Avances**
  * Se incorpora el componente **Login** con un formulario básico de ingreso, y validación de los datos del usuario.
  * Se agregan los datos de usuarios ficticios con roles diferenciados en *mocks/users.json*
  * Se crea el contexto **AuthContext**  en */context/AuthContext.jsx* para proveer a los demás componentes los datos del usuario y funciones de manejo de sesión.
  * Se persisten datos en localStorage con los datos del usuario.
  * Se suma la vista de **NewMovieForm** renderizado en la ruta */new-movie*
  * Se crea el componente **ProtectedRoutes** para gestionar el acceso a vistas del administrador  

  ### Clase 23/10: Consumo de API externa
* **Objetivos:**
  * Obtener datos mediante peticiones a APIs de terceros.
  * Realizar peticiones fetch, configurando las opciones y controlando los errores.
  * Controlar la asincronía mediante el estado de carga.

* **Avances**
  * Se incluye el componente **MoviesList** para desacoplar lógica de obtención y renderizado de datos.
  * Se cambia la lectura de datos ficticios en json por la obtención de lista de películas mediante petición a la [API de The Movie Database](https://developer.themoviedb.org/).
  * Se obtienen detalles de la pelicula mediante otra petición a la API.
  * Se genera un estado *loading* para controlar la renderización asíncrona de elementos en los componentes que realizan peticiones: **MoviesList** y **MovieDetail**.
  
  ### Clase 30/10: Variables de entorno y peticiones POST
* **Objetivos:**
  * Añadir una capa de seguridad al sistema mediante la integración de variables de entorno.
  * Realizar la carga de datos a una API externa a través de peticiones POST

* **Avances**
  * Se incluye un archivo *.env* que contiene las diferentes variables de entorno:
    * **VITE_MOVIES_URL**: La ruta base a la que se realizan las peticiones
    * **VITE_MOVIES_API_KEY**: El Bearer Token requerido para la autenticación con la API
    * **VITE_MOVIES_LIST_ID**: El id de la lista personalizada del sitio
  * Se crea el achivo *.env.example* para compartir los nombres de las variables de entorno requeridas de sistema
  * Se añade el archivo *.env* dentro del archivo *.gitignore* a modo de evitar que se comparta información sensible por el repositorio remoto
  * El listado de peliculas a mostrar ahora es consumido a partir de una lista personalizada, creada en la API.
  * Se crea un formulario de búsqueda en el componente **NewMovieForm** que obtiene las películas por nombre, renderiza los resultados, y permite añadirlas a la lista personalizada al hacer doble-clic