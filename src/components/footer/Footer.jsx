import Logo2 from "../../assets/img/logo/logo2.png";
import Face from "../../assets/img/logo/facebook.png";
import Insta from "../../assets/img/logo/instagram.png";
import Twitter from "../../assets/img/logo/twitter.png";

function Footer() {
  return (
    <>
      <div className="content">
        <footer> 
          <div className={style.footerContent}>
            <div className={style.logo2}>
              <img className={style.logo2Img} src={Logo2} alt="Logo Footer" />
            </div>

            <div className="lorem">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi ad, repellat sequi quam in ut libero dolore pariatur iusto, iste optio alias explicabo, amet sapiente earum aliquam quidem eum.</p>
            </div>

            <div className={style.face}>
              <img className={style.faceImg} src={Face} alt="Logo Face" />
            </div>

            <div className={style.insta}>
              <img className={style.instaImg} src={Insta} alt="Logo Insta" />

            <div className={style.twitter}>
              <img className={style.twitterImg} src={Twitter} alt="Logo Face" />
            </div>

            <div className="divisao1">
              <p>Informação</p>
              <p>Sobre Drip Store</p>
              <p>Segurança</p>
              <p>Wishilist</p>
              <p>Blog</p>
              <p>Trabalhe conosco</p>
              <p>Meus Pedidos</p>
            </div>

            <div className="divisao2">
              <p>Camisetas</p>
              <p>Calças</p>
              <p>Bonés</p>
              <p>Headphones</p>
              <p>tênis</p>
            </div>

            <div className="divisao3">
              <p>Contato</p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
              85 3051-3411
            </div>

            </div>
          </div>
        </footer>
      </div>
    </>
   
  );
}

export default Footer;
