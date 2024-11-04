import React from "react";
import '../styles/loginForms.css';
import carLogo from '../assets/images/logo.png';
import Carroussel from '../componentes/carrossel';


function LoginForm() {
    return(
        <div className="login-container">
            <div className="logo">
                <img src={carLogo} alt="Logo"/>
            </div>
            <form className="login-form">
                <input type="text" placeholder="login" className="login-input"/>
                <input type="password" placeholder="Senha" className="login-input"/>
                <button type="submit" className="login-button">Entrar</button>
            </form>
            <div className="carousel-wrapper">
        <Carroussel /> {/* Carrossel aparece abaixo do formulário */}
            </div>
        </div>
    );
}

export default LoginForm;


