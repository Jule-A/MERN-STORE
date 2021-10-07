import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="loginscreen">
      <form className="loginscreen-form">
        <div className="loginscreen-icon">
          <i className="fa-solid fa-user-large"></i>
          <h3 className="loginscreen-title">Inicio de sesión</h3>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Dirección de correo electrónico"
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Ingresa tu contraseña"
            tabIndex={2}
          />
          <Link to="/forgotpassword" className="loginscreen-link">
            ¿Olvidaste la contraseña?
          </Link>
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>

        <span className="loginscreen-subtext">
          No tienes una cuenta? <Link to="/register" className="loginscreen-link">Registrarse</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;