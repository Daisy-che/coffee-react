import React from 'react';
import './index.css';

const menuItems = [
  { id: 1, name: 'Sandwich', description: 'bread with meat and vegetables', price: '12 K', rating: 4.8, image: '/images/sandwich.jpeg' },
  { id: 2, name: 'Hot Milk', description: 'Hot Milk with less sugar', price: '12 K', rating: 4.8, image: 'hot-milk.jpg' },
  { id: 3, name: 'Coffe Ice Cream', description: 'Coffe with ice cream vanilla', price: '12 K', rating: 4.8, image: 'coffee-ice-cream.jpg' },
  { id: 4, name: 'Cappucino', description: 'Hot Cappucino', price: '12 K', rating: 4.8, image: 'cappucino.jpg' },
  { id: 5, name: 'Moccacinno', description: 'Hot Moccacino', price: '12 K', rating: 4.8, image: 'moccacinno.jpg' },
  { id: 6, name: 'Waffle Ice Cream', description: 'Waffle with ice cream', price: '12 K', rating: 4.8, image: 'waffle-ice-cream.jpg' },
];

const MenuItem = ({ name, description, price, rating, image }) => (
  <div className="menu-item">
    <img src={image} alt={name} className="menu-item-image" />
    <div className="menu-item-content">
      <div className="menu-item-rating">
        <span className="rating-number">{rating}</span>
        <span className="rating-star">⭐</span>
      </div>
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-description">{description}</p>
      <div className="menu-item-footer">
        <span className="menu-item-price">{price}</span>
        <button className="add-to-cart-btn">🛒</button>
      </div>
    </div>
  </div>
);

const Menu = () => (
  <div className="menu-container">
    {menuItems.map((item) => (
      <MenuItem key={item.id} {...item} />
    ))}
  </div>
);

export default Menu;