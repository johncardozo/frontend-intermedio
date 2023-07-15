<template>
  <header>
    <h2>Atenea Ecommerce</h2>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Deals</a></li>
      <li><a href="#">Cart</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

header {
  padding: 10px 40px;
  background-image: linear-gradient(
    to right,
    #103061,
    #174d84,
    #196ba8,
    #158ccc,
    #07aef0
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h2 {
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
header ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}
header a {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  text-decoration: none;
}
</style>
