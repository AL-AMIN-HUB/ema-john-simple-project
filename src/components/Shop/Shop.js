import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //products to be rendered on this UI
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    // console.log(savedCart);
    if (products.length) {
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const HandleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    //  save to local storage (for now)
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayProducts(matchedProducts);
    // console.log(matchedProducts.length);
  };
  return (
    <div>
      <div className="search-container">
        <div className="input-group mb-3 w-75 mx-auto py-3">
          <input
            type="text"
            onChange={handleSearch}
            className="form-control"
            placeholder="Search product"
            aria-label="Search Product"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
      <div className="shop">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product key={product.key} product={product} HandleAddToCart={HandleAddToCart}></Product>
          ))}
        </div>
        <div className="cart-container ms-2">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
