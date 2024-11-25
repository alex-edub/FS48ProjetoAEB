import Logo2 from "../../assets/img/logo/logo.png";
import Face from "../../assets/img/logo/facebook.png";
import Insta from "../../assets/img/logo/instagram.png";
import Twitter from "../../assets/img/logo/twitter.png";


function Footer() {
  return (
    <>
      <div className="content">
        <footer>
           Footer 

            <div className={style.logo2}>
              <img className={style.logo2Img} src={Logo2} alt="logo2" />
            </div>

            <div className="lorem">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad aspernatur culpa id laborum tempora non. Accusantium magnam quos tenetur voluptas! Beatae hic dolorem possimus tempora necessitatibus adipisci sint? Ullam.</p>
            </div>

            <div className={style.face}>
              <img className={style.faceImg} src={Face} alt="facebook" />
            </div>

            <div className={style.insta}>
              <img className={style.instaImg} src={Insta} alt="instagram" />
            </div>

            <div className={style.twitter}>
              <img className={style.twitterImg} src={Twitter} alt="Twitter" />
            </div>

            <div className="Coluna 1">
              <h1>Informação</h1>
              <p>Sobre Drip Store </p>
              <p>Segurança</p>
              <p>Wishlist</p>
              <p>Blog</p>
              <p>Trabalhe conosco</p>
              <p>Meus Pedidos </p>
            </div>

            <div className="Coluna 2">
              <h1>Categorias</h1>
              <p>Camisetas</p>
              <p>Calças</p>
              <p>Bonés</p>
              <p>Headphones</p>
              <p>Tênis</p>
            </div>

            <div className="Coluna 3">
              <h1>Contato</h1>
              <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p>85 3051-3411</p>
            </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
