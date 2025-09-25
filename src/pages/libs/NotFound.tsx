import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={{ color: '#2c3e50', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </div>
  )
}
