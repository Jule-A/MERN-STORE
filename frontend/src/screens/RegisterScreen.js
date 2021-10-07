import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = () => {
    return (
        <div className="registerscreen">
            <form className="registerscreen-form">
                <div className="registerscreen-icon">
                    <i className="fa-solid fa-user-plus"></i>
                    <h3 className="registerscreen-title">Registro</h3>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nombre de usuario:</label>
                    <input
                        type="text"
                        required
                        id="name"
                        placeholder="Ingresa un nombre de usuario"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        required
                        id="email"
                        placeholder="Dirección de correo electrónico"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        required
                        id="password"
                        autoComplete="true"
                        placeholder="Ingresa la contraseña"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirmar la contraseña:</label>
                    <input
                        type="password"
                        required
                        id="confirmpassword"
                        autoComplete="true"
                        placeholder="Confirma la contraseña"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrarse
                </button>

                <span className="registerscreen-subtext">
                    ¿Ya tienes una cuenta? <Link to="/login" className="registerscreen-link">Inicia sesión</Link>
                </span>
            </form>
        </div>
    );
};

export default RegisterScreen;