import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__image">
        <img
          src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="PS5"
        />
      </div>
      <div className="product__description">
        <h2>Playstation 5 Console</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis
          atque molestias nostrum dolorum? Tempora, tempore cumque fuga, iure
          magni ex consequatur officiis placeat neque praesentium, id debitis
          nobis non.
        </p>
        <h4>$399.00</h4>
      </div>
    </div>
  );
};

export default Product;
