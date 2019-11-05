<template>
  <div class="card">
    <div class="cardTitle">
      <div>
        <div class="avatar"><strong>K</strong></div>
        <div>
          <h3>The long title on the top</h3>
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
</template>

<script>
import card from './components/card.vue'

export default {
  name: 'app',
  components: {
    card
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>