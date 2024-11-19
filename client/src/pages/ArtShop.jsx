import React, { useState } from "react";
import "../styles/ArtShop.css";

const ArtShop = () => {
  const [cart, setCart] = useState([]);

  const artworks = [
    {
      id: 1,
      title: "Starry Night",
      price: 2300,
      image: "/vangogh/paintings/starry_night_vincent_vangogh.png",
    },
    {
      id: 2,
      title: "The Swing",
      price: 1500,
      image: "/The_Swing_by_Jean-Honore_Fragonard.png",
    },
    {
      id: 3,
      title: "The Scream",
      price: 2000,
      image: "/The_Scream_by_Edvard_Munch.png",
    },
    {
      id: 4,
      title: "View of Toledo",
      price: 1400,
      image: "/View_of_Toledo_by_El_Greco.png",
    },
    {
      id: 5,
      title: "A Cotton Office in New Orleans",
      price: 1000,
      image: "/A_Cotton_Office_In_New_Orleans_Edgar_Degas.png",
    },
    {
      id: 6,
      title: "Among the Ruins",
      price: 1100,
      image: "/Among_the_Ruins_by_Sir_Lawrence_Alma-Tadema.png",
    },
  ];

  const addToCart = (artwork) => {
    setCart([...cart, artwork]);
  };

  const removeFromCart = (artworkId) => {
    setCart(cart.filter((item) => item.id !== artworkId));
  };

  return (
    <div className="art-shop">
      <h1>Art Gallery Shop</h1>
      <div className="artworks">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="art-card">
            <img src={artwork.image} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>${artwork.price}</p>
            <button onClick={() => addToCart(artwork)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>
                  {item.title} - ${item.price}
                </span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      </div>
    </div>
  );
};

export default ArtShop;
