import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import NotFound from './routes/NotFound'
import Home from './routes/Home/Home'
import About from './routes/About'
import Login from './routes/Login/Login'
import MovieDetail from './routes/MovieDetail'
import { AuthProvider } from './context/AuthContext'
import NewMovieForm from './routes/NewMovieForm/NewMovieForm'
import ProtectedRoutes from './routes/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "",
        element: <Navigate replace to="home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetail />,
      },
      {
        path: 'new-movie',
        element: 
        <ProtectedRoutes>
          <NewMovieForm />
        </ProtectedRoutes>
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
