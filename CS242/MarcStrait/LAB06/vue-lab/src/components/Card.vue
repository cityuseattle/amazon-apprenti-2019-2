<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .card {
      width: 85%;
      max-width: 600px;
      min-width: 400px;
      margin: 50px auto;
      border: 1px solid gray;
    }
    .cardTitle, .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
    }
    .cardTitle > div {
      display: flex;
      align-items: center;
    }
    .avatar {
      display: flex;
      background-color:salmon;
      color: white;
      font-size: 1.9rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
      justify-content: center;
      align-items: center;
    }
    .menuIcon {
      width: 20px;
      height: 20px;
    }
    .cardTitle h3, .cardTitle p {
      margin: 0;
    }
    .menuImage {
      width: 100%;
    }
    .card > p {
      padding: 0 10px;
      color:slategrey;
    }
    .footer img {
      margin-right: 5px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="cardTitle">
      <div>
        <div class="avatar"><strong>K</strong></div>
        <div>
          <h3>The long title on the top</h4>
          <p>Secondary title</p>
        </div>
      </div> 
      <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565216096/others/menu.png" class="menuIcon" alt="menu" />
    </div>

    <div><img src="https://res.cloudinary.com/orderstaker/image/upload/v1565216265/others/food.jpg" class="menuImage" alt="noodle" /></div>
    
    <p>
        Crispy chow mein has either onions and celery in the finished dish or is served "strained", 
        without any vegetables. Steamed chow mein can have many different kinds of vegetables in 
        the finished dish, most commonly including onions and celery but sometimes carrots, cabbage 
        and mung bean sprouts as well. Crispy chow mein is usually topped with a thick brown sauce, 
        while steamed chow mein is mixed with soy sauce before being served.
    </p>

    <div class="footer">
      <div>
        <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565223868/others/heart.png" alt="save button" class="footerIcon" />
        <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565223868/others/share.png" alt="share button" class="footerIcon" />
      </div>
      <img src="https://res.cloudinary.com/orderstaker/image/upload/v1565223868/others/expand.png" alt="expand button" class="footerIcon" />
    </div>
  </div>
</body>
<!-- Icons made by Cole Bemis, Google, Freepik, and Smashicons -->
</html>