import Logo2 from "../../assets/img/logo/logo2.png";
import Face from "../../assets/img/logo/facebook.png";
import Insta from "../../assets/img/logo/instagram.png";
import Twitter from "../../assets/img/logo/twitter.png";
import style from "./Footer.module.css/";


function Footer() {
  return (
    <>
      <footer>
        <div className={style.logo2}>
          <img className={style.logo2Img} src={Logo2} alt="logo2" />
        </div>

        <p class="compact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis eros non nisl vehicula, nec feugiat justo viverra. 
          Duis tincidunt, sapien at luctus pulvinar, nulla lectus tristique sapien, vel bibendum lorem metus ac libero. 
          Ut lacinia nisl vel velit dictum vehicula. Integer vitae malesuada purus, quis sagittis neque.
        </p>

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
          <p>&copy; 2022 Digital College</p>
        </footer>
    </>
  );
}

export default Footer;
