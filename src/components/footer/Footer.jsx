import Logo2 from "../../assets/img/logo/logo2.png";
import Face from "../../assets/img/logo/facebook.png";
import Insta from "../../assets/img/logo/instagram.png";
import Twitter from "../../assets/img/logo/twitter.png";
import style from "./Footer.module.css"



function Footer() {
  return (
    <>
      <footer>
        <div className={style.footerContent}>
        </div>
          <div className={style.logo2}>
            <img className={style.logo2Img} src={Logo2} alt="logo2" />
          </div>

          <div className={style.Lorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </div>

          <div className={style.container}>
            <div className={style.face}> 
              <img className={style.faceImg} src={Face} alt="facebook" />
            </div>

            <div className={style.insta}>       
              <img className={style.instaImg} src={Insta} alt="instagram" />
            </div>
  
            <div className={style.twitter}>          
              <img className={style.twitterImg} src={Twitter} alt="Twitter" />
            </div>
                
            <div className={style.coluna-1}>
              <h1>Informação</h1>
              <p>Sobre Drip Store </p>
              <p>Segurança</p>
              <p>Wishlist</p>
              <p>Blog</p>
              <p>Trabalhe conosco</p>
              <p>Meus Pedidos </p>
            </div>

            <div className={style.coluna-2}>
              <h1>Categorias</h1>
              <p>Camisetas</p>
              <p>Calças</p>
              <p>Bonés</p>
              <p>Headphones</p>
              <p>Tênis</p>
            </div>

            <div className={style.coluna-3}>
              <h1>Contato</h1>
              <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p>85 3051-3411</p>
            </div>
          </div>  
            <div className = {style.copyright}>
              &copy; 2022 Digital College.
            </div>          
      </footer>
    </>
  );
}

export default Footer;
