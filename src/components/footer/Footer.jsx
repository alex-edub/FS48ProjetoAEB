import logo2 from "../../assets/img/logo/logo2.png";
import face from "../../assets/img/logo/facebook.png";
import insta from "../../assets/img/logo/instagram.png";
import twiter from "../../assets/img/logo/twiter.png";
function Footer() {
  return (
    <>
      <footer>
        function logo2() {
          return(
            <div>
              <img src={logo2} alt="Logo no rodapé"/>
            </div>
          );
        }

        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati laborum laboriosam. Repellat, 
          ut dicta perferendis maxime nisi quasi adipisci quam iste blanditiis eveniet perspiciatis excepturi officia modi deleniti beatae.</p>
          
        function face() {
          return(
            <div>
              <img src={face} alt="Logo facebook"/>
            </div>
          );
        }
        function insta() {
          return(
            <div>
              <img src={insta} alt="Logo facebook"/>
            </div>
          );
        }
        function twiter() {
          return(
            <div>
              <img src={twiter} alt="Logo twiter"/>
            </div>
          );
        }
        git 

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
