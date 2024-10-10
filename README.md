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