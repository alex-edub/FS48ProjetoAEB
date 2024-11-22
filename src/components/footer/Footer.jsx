import logo2 from "../../assets/img/logo/logo2.png";
import face from "../../assets/img/logo/facebook.png";
import insta from "../../assets/img/logo/instagram.png";
import twiter from "../../assets/img/logo/twiter.png";
function Footer() {
  return (
    <>
      <footer>
        <div className="logo2">
          <img src="../../src/assets/img/logo2"
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati laborum laboriosam. Repellat, 
          ut dicta perferendis maxime nisi quasi adipisci quam iste blanditiis eveniet perspiciatis excepturi officia modi deleniti beatae.</p>
        <div className="redesSociais">
          <img src="../src/assets/img/logo/facebook.png" alt="" />
          <img src="../src/assets/img/logo/instagram.png" alt="" />
          <img src="../src/assets/img/logo/twiter.png" alt="" />
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

      </footer>
    </>
  );
}

export default Footer;
