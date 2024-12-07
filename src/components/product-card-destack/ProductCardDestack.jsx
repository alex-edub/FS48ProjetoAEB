import ProductBadge from "../product-card/product-badge/ProductBadge";


function ProductCardDestack({ title, img, discount }) {
  return (
    <>
      <div className={Style.ProductCardDestack}>
        <span classname={style.badge}>
         {discount}
        </span>
        <h3> {title} </h3>
        <button>Comprar</button>
        <img src={img} alt="" />
      </div>
    </>
  );
}

export default ProductCardDestack;
