 import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 //https://create-react-app.dev/docs/adding-images-fonts-and-files/
 import logo from './statics/logo.svg'
 import {faGoogle, faFacebook, faMicrosoft} from '@fortawesome/free-brands-svg-icons'
//  https://www.reddit.com/r/reactjs/comments/ui4zmx/cant_play_video_file/
 import {VideoPlayer} from './src/VideoPlayer'
 import Video from './video/video-login.mp4'
 import './style.css'
export default function Login(){
    return(
        <>
        <title>Estocaê</title>
        <div className="login-container">
    
        <div className="image-side">
            <VideoPlayer src = {Video}/>
        </div>
        <div className="form-side">
            <div class="logo">
                <img src={logo} alt=""/>
                <div className="logo-text">Estocaê</div>
            </div>
            <div className="subtitle">Controle de Estoque Inteligente</div>

            <form className="form-side form" action="/submit" method="POST">
                <div className="input-group">
                    <input type="email" name="email" placeholder="E-mail" required/>
                </div>

                <div className="input-group">
                    <input type="password" name="senha" placeholder="Senha" required/>
                </div>

                <div className="remember-forgot">
                    <div className="remember">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label for="remember">Lembrar-me</label>
                    </div>

                    <div className="forgot">
                        <a href="#" id="forgotPasswordLink">Esqueceu a senha?</a>
                    </div>

                </div>
                <button className="login-btn">Entrar</button>
            </form>
            <div className="divider">Ou entre com</div>
            <div className="social-login">
                {/* https://docs.fontawesome.com/v5/web/use-with/react */}
                <button className="social-btn"><FontAwesomeIcon icon={faGoogle} /></button>
                <button className="social-btn"><FontAwesomeIcon icon={faFacebook} /></button>
                <button className="social-btn"><FontAwesomeIcon icon={faMicrosoft} /></button>

            </div>
            <div className="register">
                Não tem uma conta? <a href="cadastro.html">Cadastre-se</a>
            </div>
        </div>
    </div>
    <div className="modal" id="forgotPasswordModal">
        <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">Recuperar Senha</h3>
                <p className="modal-subtitle">Informe seu e-mail para receber o link de recuperação</p>
            </div>
            <div className="modal-body">
                <div className="input-group">
                    <input type="email" id="recoveryEmail" placeholder="Seu e-mail cadastrado" required/>
                </div>
                <p id="info-login">
                    Você receberá um link para redefinir sua senha. Verifique sua caixa de entrada e spam.
                </p>
            </div>
            <div className="modal-footer">
                <button className="modal-btn modal-btn-secondary" id="cancelRecovery">Cancelar</button>
                <button className="modal-btn modal-btn-primary" id="sendRecovery">Enviar</button>
            </div>
        </div>
    </div>

    <script src="js/login.js"></script>
        </>
    )
}