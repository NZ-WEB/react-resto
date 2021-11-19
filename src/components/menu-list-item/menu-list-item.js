import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
  const {title, price, url, category} = menuItem;

  const addIcon = (category) => {
    switch (category) {
      case 'salads':
        return  'https://cdn-icons.flaticon.com/png/512/1895/premium/1895707.png?token=exp=1637305487~hmac=f7b414ce74facd40ede336f97612f0c4';
      case 'pizza':
        return 'https://cdn-icons-png.flaticon.com/512/1404/1404996.png';
      case 'meat':
        return 'https://cdn-icons-png.flaticon.com/512/933/933310.png';
      default:
        return ''
    }
  };

  const icon = addIcon(category);

  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img
        className="menu__img"
        src={url}
        alt={title}
      ></img>
      <div className="menu__category">Category: <span>{category} <img align="center" width="20px" src={icon} alt=""/> </span></div>
      <div className="menu__price">Price: <span>${price}</span></div>
      <button className="menu__btn">Add to cart</button>
    </li>
  )
}

export default MenuListItem;
