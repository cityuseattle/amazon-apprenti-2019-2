import React from 'react';
import logo from './logo.svg';
import './Card.css';

const Card: React.FC = () => {
  return (
    <div className="card">
    <div className="cardTitle">
      <div>
        <div className="avatar"><strong>K</strong></div>
        <div>
          <h3>The long title on the top</h3>
          <p>Secondary title</p>
        </div>
      </div> 
      <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565216096/others/menu.png" className="menuIcon" alt="menu" />
    </div>

    <div><img src="https://res.cloudinary.com/orderstaker/image/upload/v1565216265/others/food.jpg" className="menuImage" alt="noodle" /></div>
    
    <p>
        Crispy chow mein has either onions and celery in the finished dish or is served "strained", 
        without any vegetables. Steamed chow mein can have many different kinds of vegetables in 
        the finished dish, most commonly including onions and celery but sometimes carrots, cabbage 
        and mung bean sprouts as well. Crispy chow mein is usually topped with a thick brown sauce, 
        while steamed chow mein is mixed with soy sauce before being served.
    </p>

    <div className="footer">
      <div>
        <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565223868/others/heart.png" alt="save button" className="footerIcon" />
        <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565223868/others/share.png" alt="share button" className="footerIcon" />
      </div>
      <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565223868/others/expand.png" alt="expand button" className="footerIcon" />
    </div>
  </div>
  );
}

export default Card;
