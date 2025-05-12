import Image from './src/images/img-cadastro.png'
import './style.css'
export default function Cadastro(){
 return(
    <>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Estocaê - Cadastro</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    {/* css */}
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/cadastro.css"/>
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png"/>
    <link rel="manifest" href="./favicon/site.webmanifest"/>
    {/* FONT LOGO */}
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
     <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    <div className="cadastro-container">
        {/* LADO ESQUERDO */}
        <div className="image-side">
           <img src={Image} alt='logo'/>
        </div>
        
        {/* LADO DIREITO */}
        <div className="form-side">
            <div className="form-header">
                <h1 className="form-title">Crie sua conta</h1>
                <p className="form-subtitle">Preencha os campos abaixo para se registrar</p>
            </div>
            {/* FORMULÁRIO CADASTRO */}
            <div className="form-body">
                <form id="cadastroForm">
                    <div className="form-row">
                        <div className="input-group">
                            <input type="text" id="nome" placeholder="Nome" required/>
                        </div>
                        <div className="input-group">
                            <input type="text" id="sobrenome" placeholder="Sobrenome" required/>
                        </div>
                    </div>
                    
                    <div className="input-group">
                        <input type="email" id="email" placeholder="seu@email.com" required/>
                    </div>
                    
                    <div className="input-group">
                        <input type="text" id="empresa" placeholder="Empresa" required/>
                    </div>
                    
                    <div className="input-group password-field">
                        <input type="password" id="senha" placeholder="Senha" required/>
                    </div>
                    
                    <div className="password-requirements">
                        <div className="requirement">
                            <i className="far fa-circle"></i> Mínimo de 8 caracteres
                        </div>
                        <div className="requirement">
                            <i className="far fa-circle"></i> Letras e números
                        </div>
                    </div>
                    
                    <div className="input-group password-field">
                        <input type="password" id="confirmacao" placeholder="Confirmação" required/>
                    </div>
                    
                    <div className="terms">
                        <input type="checkbox" id="termos" required/>
                        <label for="termos">Eu li e concordo com os <a href="/termos">Termos de Serviço</a> e <a href="/politicas">Política de Privacidade</a></label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Criar conta</button>
                </form>
                
                <div className="login-link">
                    Já possui uma conta? <a href="login.html">Faça login</a>
                </div>
            </div>
        </div>
    </div>
    </>
 )
}