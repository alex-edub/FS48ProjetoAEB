import style from "./Menu.module.css";
import {NavLink} from "react-router" ;


function Menu() {
  const [itemIndex, setItemIndex] = useState(0);
  const menuItens = [
    {label: "Home", path: "/"},
    {label: "Produtos", path:"products"},
    {label: "Categorias", path:"Categories"},
    {label: "Meus pedidos", path:"orders"},
  ];

  function handleClick(index) {
    setItemIndex(index);
  }

  return (
    <>
      <div className="content">
        <ul className={style.menu}>
          {menuItens.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={index === itemIndex ? `${style.active}` : style.item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;
